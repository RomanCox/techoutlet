let lockCount = 0
let savedScrollY = 0
let prevBodyStyle: Partial<CSSStyleDeclaration> = {}
let prevHtmlStyle: Partial<CSSStyleDeclaration> = {}
let resizeHandler: (() => void) | null = null

const isIOS = () =>
  typeof window !== 'undefined' &&
  (/(iP(ad|hone|od))/).test(navigator.platform) ||
  (typeof navigator !== 'undefined' &&
    navigator.userAgent.includes('Mac') &&
    'ontouchend' in document)

const getScrollbarWidth = () =>
  typeof window === 'undefined' ? 0 : window.innerWidth - document.documentElement.clientWidth

export const lockScroll = (): void => {
  if (typeof window === 'undefined') return

  lockCount += 1
  if (lockCount > 1) return // уже заблокировано

  const body = document.body
  const html = document.documentElement

  // сохраняем inline-стили
  prevBodyStyle = {
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
  }
  prevHtmlStyle = {
    overflow: html.style.overflow,
    paddingRight: html.style.paddingRight,
  }

  if (isIOS()) {
    // iOS: фиксируем body и сохраняем позицию
    savedScrollY = window.scrollY || window.pageYOffset || 0
    body.style.position = 'fixed'
    body.style.top = `-${savedScrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    // на iOS скроллбар ширина не важна
    html.style.setProperty('--scrollbar-comp', '0px')
    return
  }

  // Desktop / Chrome и т.п.
  const scrollBarWidth = getScrollbarWidth()

  // применяем overflow:hidden к html (documentElement) — это гарантирует блокировку прокрутки в Chrome
  html.style.overflow = 'hidden'
  // на всякий случай ставим и на body — это не повредит, но padding мы будем применять только к html
  body.style.overflow = 'hidden'

  // компенсируем ширину скроллбара — ТОЛЬКО на html, чтобы не удваивать
  if (scrollBarWidth > 0) {
    const currentHtmlPad = parseFloat(getComputedStyle(html).paddingRight || '0')
    html.style.paddingRight = `${currentHtmlPad + scrollBarWidth}px`
    // выставляем CSS var для fixed/header элементов
    html.style.setProperty('--scrollbar-comp', `${scrollBarWidth}px`)
  } else {
    html.style.setProperty('--scrollbar-comp', '0px')
  }

  // если окно изменится — пересчитаем компенсацию
  resizeHandler = () => {
    const newScrollBarWidth = getScrollbarWidth()
    // откатим paddingRight html к исходному inline-значению, затем добавим новую компенсацию
    html.style.paddingRight = prevHtmlStyle.paddingRight ?? ''
    if (newScrollBarWidth > 0) {
      const basePad = parseFloat(getComputedStyle(html).paddingRight || '0')
      html.style.paddingRight = `${basePad + newScrollBarWidth}px`
      html.style.setProperty('--scrollbar-comp', `${newScrollBarWidth}px`)
    } else {
      html.style.setProperty('--scrollbar-comp', '0px')
    }
  }

  window.addEventListener('resize', resizeHandler)
}

export const unlockScroll = (): void => {
  if (typeof window === 'undefined') return
  if (lockCount === 0) return

  lockCount -= 1
  if (lockCount > 0) return // ещё есть активные блокировки

  const body = document.body
  const html = document.documentElement

  // восстановим inline-стили
  body.style.overflow = prevBodyStyle.overflow ?? ''
  body.style.paddingRight = prevBodyStyle.paddingRight ?? ''
  body.style.position = prevBodyStyle.position ?? ''
  body.style.top = prevBodyStyle.top ?? ''
  body.style.left = prevBodyStyle.left ?? ''
  body.style.right = prevBodyStyle.right ?? ''
  body.style.width = prevBodyStyle.width ?? ''

  html.style.overflow = prevHtmlStyle.overflow ?? ''
  html.style.paddingRight = prevHtmlStyle.paddingRight ?? ''
  html.style.removeProperty('--scrollbar-comp')

  // для iOS вернём scroll pos
  if (isIOS() && savedScrollY) {
    window.scrollTo(0, savedScrollY)
    savedScrollY = 0
  }

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
}
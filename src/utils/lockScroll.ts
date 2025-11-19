let lockCount = 0
let savedScrollY = 0
let prevBodyStyle: Partial<CSSStyleDeclaration> = {}
let prevHtmlStyle: Partial<CSSStyleDeclaration> = {}

const isIOS = () =>
  typeof window !== 'undefined' &&
  /iP(ad|hone|od)/.test(navigator.platform) ||
  // iPadOS 13+ reports MacIntel, but supports touch
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document)

const getScrollContainer = (): Element => {
  // обычно document.scrollingElement — это html или body
  return (document.scrollingElement as Element) || document.documentElement
}

export const lockScroll = () => {
  if (typeof window === 'undefined') return

  lockCount += 1
  if (lockCount > 1) return // уже заблокирован

  const scrollContainer = getScrollContainer()
  const body = document.body
  const html = document.documentElement

  // вычисляем ширину скроллбара: разница между innerWidth и clientWidth
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

  // сохраняем предыдущие inline-стили (чтобы восстановить)
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

  // Если iOS — используем position: fixed метод (лучше для touch)
  if (isIOS()) {
    savedScrollY = window.scrollY || window.pageYOffset || 0
    body.style.position = 'fixed'
    body.style.top = `-${savedScrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    // не трогаем paddingRight (на iOS нет ширины scrollBar)
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
  } else {
    // Desktop / обычные браузеры
    // прячем прокрутку и компенсируем ширину скроллбара
    // Применяем overflow на html и body для гарантии
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    if (scrollBarWidth > 0) {
      // добавляем компенсацию к существующему inline paddingRight
      const bodyPad = parseFloat(getComputedStyle(body).paddingRight || '0')
      body.style.paddingRight = `${bodyPad + scrollBarWidth}px`

      const htmlPad = parseFloat(getComputedStyle(html).paddingRight || '0')
    }
  }
}

export const unlockScroll = () => {
  if (typeof window === 'undefined') return
  if (lockCount === 0) return

  lockCount -= 1
  if (lockCount > 0) return

  const body = document.body
  const html = document.documentElement

  // восстановим сохранённые inline-стили
  body.style.overflow = prevBodyStyle.overflow ?? ''
  body.style.paddingRight = prevBodyStyle.paddingRight ?? ''
  body.style.position = prevBodyStyle.position ?? ''
  body.style.top = prevBodyStyle.top ?? ''
  body.style.left = prevBodyStyle.left ?? ''
  body.style.right = prevBodyStyle.right ?? ''
  body.style.width = prevBodyStyle.width ?? ''

  html.style.overflow = prevHtmlStyle.overflow ?? ''
  html.style.paddingRight = prevHtmlStyle.paddingRight ?? ''

  // для iOS вернём положение страницы
  if (isIOS() && savedScrollY) {
    window.scrollTo(0, savedScrollY)
    savedScrollY = 0
  }
}

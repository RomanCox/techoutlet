import { ModalProvider } from '@/components/ModalProvider/ModalProvider'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

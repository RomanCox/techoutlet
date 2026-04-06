import type { AppProps } from 'next/app'
import LenisProvider from '@/providers/LenisProvider'
import { ModalProvider } from '@/components/ModalProvider/ModalProvider'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LenisProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </LenisProvider>
  )
}

import { RecoilRoot } from "recoil"
import type { AppProps } from "next/app"
import "../styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App

import { RecoilRoot } from "recoil"
import { AuthProvider } from "../hooks/useAuth"
import type { AppProps } from "next/app"
import "../styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default App

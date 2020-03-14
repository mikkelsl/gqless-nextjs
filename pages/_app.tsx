import NoSSR from 'react-no-ssr'
import { ErrorBoundary } from '../components'
import '../index.css'

async function start() {
  if (process.browser && process.env.NODE_ENV === 'development') {
    const { Logger } = await import('@gqless/logger')
    const { client } = await import('../gqless')
    new Logger(client)
  }
}
start()

function App({ Component, pageProps }) {
  return (
    <NoSSR>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </NoSSR>
  )
}

export default App

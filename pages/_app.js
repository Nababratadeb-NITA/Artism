import { Toaster } from 'react-hot-toast'
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <Layout>
        <Toaster />
      <Component {...pageProps} />
     </Layout>
     </StateContext>
  )
}

export default MyApp

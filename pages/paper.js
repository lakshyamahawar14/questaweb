import Head from 'next/head'
import Header from './Header'
import Add from './Add'
import Generate from './Generate'
import { useRouter } from 'next/router'
import HeadInfo from './HeadInfo'

const paper = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // console.log(router.query.params)
  return (
    <>
      <Head>
        <title>Questa Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header>

      </Header>

      <HeadInfo
      params={router.query.params}
      >

      </HeadInfo>
      
      <Add>

      </Add>

      <Generate>
        
      </Generate>

    </>
  )
}

export default paper
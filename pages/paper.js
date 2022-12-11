import Head from 'next/head'
import Header from '../components/Header'
import Add from '../components/Add'
import Generate from '../components/Generate'
import { useRouter } from 'next/router'
import HeadInfo from '../components/HeadInfo'

const paper = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // console.log(router.query.params)
  return (
    <>
      <Head>
        <title>Paper Maker | Questa</title>
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
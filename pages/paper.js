import Head from 'next/head'
import Header from '../components/Header'
import Add from '../components/Add'
import Generate from '../components/Generate'
import { useRouter } from 'next/router'
import HeadInfo from '../components/HeadInfo'

export default function Paper(){
  const router = useRouter()
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

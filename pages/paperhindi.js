import Head from 'next/head'
import Header from '../components/Header'
import AddHindi from '../components/AddHindi'
import Generate from '../components/Generate'
import { useRouter } from 'next/router'
import HeadInfo from '../components/HeadInfo'
import Script from 'next/script'

export default function Paper(){
  const router = useRouter();
  return (
    
    <>
      <Head>
        <title>पेपर मेकर | Questa</title>
      </Head>

      <Header>

      </Header>

      <HeadInfo
      params={router.query.params}
      >
        
      </HeadInfo>
      
      <AddHindi>

      </AddHindi>

      <Generate>
        
      </Generate>

    </>
  )
}

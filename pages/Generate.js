import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Generate() {
  const router = useRouter()
  return (
    <>
        <div className='flex justify-center mt-4 mb-12'>
            <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onClick={() => router.push("/download")}>
                Download PDF
            </button>
        </div>
    </>
  )
}
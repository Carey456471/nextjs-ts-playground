import Image from 'next/image'
import Header from '@/components/Header'
import test from "../../public/a.svg"

export default function Home() {
  const name = "apple"
  return (
    <main >
      <Header name={name}/>
      Hello world123
      <div className='w-[300px] bg-white'>
      <Image src={test}  alt='img'/>

      </div>
    </main>
  )
}

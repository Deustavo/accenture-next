import Image from 'next/image';

import Seo from '../components/Seo';
import { Container } from '../styles/pages/Home/style';

export default function Home() {
  return (
    <>
      <Seo title="Hello" description="Seja bem vindo"/>
      <div>
        <Image src='/img/saveiro.jpg' width={200} height={200}/>
        <h1>Hello Next js</h1>
      </div>
      <Container />
    </>
  )
}

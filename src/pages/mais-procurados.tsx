import { GetStaticProps } from 'next';
import { useEffect, useState } from "react";

import api from '../service/api';
import { Container } from '../styles/pages/Home/style';

interface IRecommended{
  id: number;
  title: Number;
  price: number;
  category_id: string;
  slug: string
}

interface AllRecommended{
  result: IRecommended[];
}

export default function Home({ result }: AllRecommended ) {
  // const [ result, setResult ] = useState<IRecommended[]>([]);

  // useEffect(() => {
  //     api.get('recommended').then(response => {
  //       setResult(response.data);  
  //     }
  //   ).catch( e => alert("Erro na requisição"))
  // }, [])

  return (
    <Container>
      <h1>Cursos recomendados para você:</h1>
      <div>
        { result.map( result => (
          <div key={result.id}>
            <h5>{result.title} | {result.price}</h5>
          </div>
        ))}
      </div>
    </Container>
    )
}
 
export const getStaticProps: GetStaticProps<AllRecommended> = async ( context ) => {
  const response = await api.get('recommended');
  const result = response.data;

  return {
    props: { result },
    revalidate: 30
  }
}
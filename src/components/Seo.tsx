import Head from 'next/head';

interface SeoPops{
    title: string;
    description?: string;
    image?: string;
    containSufix?: boolean;
}

export default function Seo({ title, description, image, containSufix }: SeoPops){
    const pageTitle = `${title} ${!containSufix ? ' | Saveiro Pega no Breu' : ''}`
    return(
        <Head>
            <title>{pageTitle}</title>
            { description && <meta name="description" content={description} /> }
            { image && <meta name="image" content={image} /> }

            <link rel='shortcut icon' href="favicon.ico"/>

            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://www.meusite.com.br/ola-mundo" />
            <meta property="og:title" content="Utilizando as meta tags do Facebook." />
            <meta property="og:site_name" content="Tableless" />
            <meta property="og:description" content="O tutorial para compartilhar o conteúdo do seu site de forma eficaz." />
            <meta property="og:image" content="/img/saveiro.jpg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="800" /> /** PIXELS **/
            <meta property="og:image:height" content="600" /> /** PIXELS **/
        </Head>
    );
}
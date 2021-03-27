import { useRouter } from 'next/router';

interface IProps{
    id: string
}

export default function Students({ id }: IProps ) {
    const route = useRouter();
    return(
        <div>
            <h1>{route.query.slug}</h1>
            <p>{route.query.id}</p>
        </div>
    )
}
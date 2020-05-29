import Link from 'next/link';

const Home = props => (
    <div>
        <p>hola!</p>
        <Link href="/Sell">
        <a>Sell!</a>
        </Link>
    </div>
);

export default Home
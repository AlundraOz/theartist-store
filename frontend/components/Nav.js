import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home!</a>
        </Link>
        <Link href="/Sell">
            <a>Sell!</a>
        </Link>
    </div>
)

export default Nav;
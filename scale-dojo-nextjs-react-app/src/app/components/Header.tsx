import React from 'react';
import style from './Header.module.scss'
import Link from 'next/link'

const Header: React.FC = () => {
    return <header className={style.header}>
        <ul>
            <Link href="/home">Home</Link>
            <div>|</div>
            <Link href="/settings">Settings</Link>
            <div>|</div>
        </ul>
    </header>;
}

export default Header;
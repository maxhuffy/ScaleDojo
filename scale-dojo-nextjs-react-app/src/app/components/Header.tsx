import React from 'react';
import style from './Header.module.scss'
import Link from 'next/link'

const Header: React.FC = () => {
    return <header className={style.header}>
        <ul>
            <Link href="/dashboard/main">Main</Link>
            <div>|</div>
            <Link href="/dashboard/settings">Settings</Link>
            <div>|</div>
        </ul>
    </header>;
}

export default Header;
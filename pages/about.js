import Image from 'next/image';
import Link from 'next/link';

import style from '../components/header/header.module.css'


export default function Header() {

    return <div className={style.body}>
        <Link href="/" passHref={true}>
            <Image className={style.link}
                alt="logo"
                src="/../public/images/logo2.0.png"
                width={120}
                height={100}
                cursor='pointer'
            />
        </Link>
        <h1>Ho.re.ca.staff</h1>
    </div>
}

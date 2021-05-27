import styles from './Footer.module.css';
import Image from 'next/image'
import logo from '../../public/images/logo.png'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          alt='horecastaff logo'
          src={logo}
          height={30}
          width={30}
          quality={100}
          priority
        />
        Ho.re.ca.staff for you
      </footer>
    </>
  )
}

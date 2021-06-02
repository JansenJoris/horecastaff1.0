import React from 'react';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import logo from '../../public/images/logo.png';



const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    height: '10%',
    marginTop: '87vh',
  }
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <Link href="/"
        passHref={true}
        underline='none'>
        <Image
          alt='horecastaff logo'
          src={logo}
          height={30}
          width={30}
          quality={100}
          priority
        />
        Ho.re.ca.staff 2021
        </Link>
    </footer>
  )
}

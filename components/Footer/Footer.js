import React from 'react';

import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '38.2vh',
    backgroundColor: '#90caf9',
  }
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>

      <Link href='https://www.facebook.com' passHref={true} color='inherit'>
        <FacebookIcon />
      </Link>
      <Link href='https://www.twitter.com' passHref={true} color='inherit'>
        <TwitterIcon />
      </Link>
      <Link href='https://www.instagram.com' passHref={true} color='inherit'>
        <InstagramIcon />
      </Link>

      <Link href="/"
        passHref={true}
        underline='none'>
        Ho.re.ca.staff 2021
      </Link>
    </div>
  )
}

export default Footer
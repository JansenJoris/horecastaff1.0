import React from 'react';

import Link from '@material-ui/core/Link';

import { createTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const useStyles = createTheme(() => ({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1098f7',
  }
}));

const Footer = () => {
  const classes = useStyles;
  return (
    <div className={classes.footer}>

      <Link href='https://www.facebook.com/horecastaff' passHref={true} color='inherit'>
        <FacebookIcon />
      </Link>
      <Link href='https://www.twitter.com/horecastaff' passHref={true} color='inherit'>
        <TwitterIcon />
      </Link>
      <Link href='https://www.instagram.com/horecastaff.eu' passHref={true} color='inherit'>
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

export default Footer;
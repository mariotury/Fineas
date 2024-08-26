// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="17.5" r="15.5" stroke="black" strokeWidth="4"/>
      <path d="M17.5 7L20.5 13.5L27 14L22 19L23.5 25.5L17.5 22.5L11.5 25.5L13 19L8 14L14.5 13.5L17.5 7Z" fill="black"/>
      <text x="40" y="24" fontFamily="Arial" fontSize="24" fill="black">fineas</text>
    </svg>
  );
};

export default Logo;

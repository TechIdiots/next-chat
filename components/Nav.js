import NavStyles from '../styles/Nav.module.css';
import Image from 'next/image'
import Logo from '../public/Logo.png';

const Nav = (props) => {
  return (
    <div className={NavStyles.NavContainer}>
      <div className={NavStyles.NavLeft}>
        <div>
          <Image src={Logo} alt="logo"></Image>
        </div>
      </div>
      <div className={NavStyles.NavRight}>
        <div className={NavStyles.NavLinks}>
          <li className={NavStyles.NavLink}>HOME</li>
          <li className={NavStyles.NavLink}>ABOUT</li>
          <li className={NavStyles.NavLink}>SERVICES</li>
          <li className={NavStyles.NavLink}>PORTFOLIO</li>
          <li className={NavStyles.NavLink}>BLOG</li>
          <li className={NavStyles.NavLink}>CONTACT</li>
        </div>
        <div className={NavStyles.SignBtnContainer}>
          <div className={NavStyles.SignBtn}>Sign up/in</div>
        </div>

      </div>
    </div>
  )
};

export default Nav;

import SideStyles from '../styles/Sidebar.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5';
const Sidebar = (props) => {
    return (
        <div className={SideStyles.SideContainer}>
            <div className={SideStyles.Icon}>
                <FaFacebookSquare size="58px" color='#373737'/>
            </div>
            <div className={SideStyles.Icon}>
                <FaInstagramSquare size="58px" color='#373737'/>
            </div>
            <div className={SideStyles.Icon}>
                <FaLinkedin size="58px" color='#373737'/>
            </div>
            <div className={SideStyles.Icon}>
                <FaTwitter size="58px" color='#373737'/>
            </div>
            <div className={SideStyles.Icon}>
                <IoMail size="58px" color='#373737'/>
            </div>
        </div>
    )
};

export default Sidebar;

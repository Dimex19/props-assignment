import Logo from '../assets/images/Wlogo.svg';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon
import { FaInstagram } from 'react-icons/fa'; // Instagram icon
import { FaXTwitter } from 'react-icons/fa6'; // X (formerly Twitter)
import { FaEnvelope } from 'react-icons/fa'; // Email icon
import CaretCircleDoubleRight from '../assets/images/CaretCircleDoubleRight.png';
import shieldplus from '../assets/images/shieldplus.svg';
import Star from '../assets/images/star.svg';
const DashboardInfo = () => {
    return (
        <div >
            <div className='flex-container bg-icon'>
            <img src={shieldplus} alt="shieldplus" />
            <img src={Star} alt="image" />

        </div>

        <div className='moreInfoContainer'>
            <div className='flex-container moreInfoBox'>
                <div className='moreInfoBoxSect1'>
                    <div className='moreInfoBoxLogoSect'>
                <img className='moreInfoBoxLogo' src={Logo} alt="logo" />
                <h1 className='moreInfoBoxLogoText'>ASTE WAVE</h1>
                </div>
                
                <p className='moreInfoBoxPText'>Waste Wave is an Intellectual property and technological waste management agency for the waste management economy and digital age. </p>
              
                <div className='flex-container newsletterButton'><p>Subscribe to our Newsletter</p> <img src={CaretCircleDoubleRight} alt='caret' /> </div>
                    
                </div>

                {/* section 2 of more info box */}
                <div className='moreInfoBoxSect2'>
                <text className=''>COMPANY</text>
                <div className='moreInfolist'>
                <p>Home</p>
                <p>Schedule Water</p>
                <p>Pay Bills</p>
                <p>Contact Us</p>
                

                </div>
                <div className='flex-container moreInfoListSocialsLogo'>
                <FaLinkedin style={{ color: '#81B622', fontSize: '34px' }} />
                <FaInstagram style={{ color: '#81B622', fontSize: '34px' }} />
                <FaXTwitter style={{ color: '#81B622', fontSize: '34px' }} />
                <FaEnvelope style={{ color: '#81B622', fontSize: '34px' }} />
                </div>
               
                </div>

            </div>
            <div className='flex-container moreInfobuttonContainer'>
            <button className='moreInfobutton'>BACK TO TOP</button></div>
        </div>
        </div>
    )
}

export default DashboardInfo;
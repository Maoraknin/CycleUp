

import { NavLink, Link } from 'react-router-dom'
// import logo from '../assets/img/logo.svg'
// import twitter from '../assets/img/icon-twitter.svg'
// import facebook from '../assets/img/icon-facebook.svg'
// import pinterest from '../assets/img/icon-pinterest.svg'

export function AppFooter() {


    return (
        <div className='footer full main-layout'>
            <div className='footer-container'>
                <div className='info-container'>
                    <nav>
                        <NavLink to="/">Felix</NavLink>
                    </nav>

                    <div className='location-container'>
                        <p>987  Hillcrest Lane</p>
                    </div>
                </div>

                <div className='web-container'>
                    <div className='web-img-container'>
                        {/* <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={pinterest} alt="" /> */}
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>

                </div>
            </div>
        </div>

    )
}
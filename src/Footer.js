import React from 'react';
import styles from "./Footer.module.css";
import {IoIosArrowUp} from "react-icons/io";

function Footer() {

    const gototop = () => {
        window.scrollTo(0,0)
    }

    return (<>
    <div className={styles.footer__top} onClick={gototop}>
        <IoIosArrowUp className={styles.footer__arrow}/>
    </div>
    <div className={styles.footer__middle__row}>

        <div className={styles.footer__middle__col}>
            <div className={styles.footer__middle__title}>Get to Know Us</div>
            <ul>
                <li>About</li>
                <li>Career</li>
                <li>Press</li>
                <li>Amazon Cares</li>
                <li>Gift a smile</li>
            </ul>
        </div>

        <div className={styles.footer__middle__col}>
            <div className={styles.footer__middle__title}>Connect with us</div>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>

        <div className={styles.footer__middle__col}>
            <div className={styles.footer__middle__title}>Make Money with us</div>
            <ul>
                <li>Sell on fake Amazon</li>
                <li>Sell under fake Amazon</li>
                <li>Become an Affiliate</li>
                <li>Fulfilment by Amazon</li>
                <li>Amazon Pay</li>
            </ul>
        </div>

        <div className={styles.footer__middle__col}>
            <div className={styles.footer__middle__title}>Connect with us</div>
            <ul>
                <li>COVID-19 and Amazon</li>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>Amazon Assistant Download</li>
                <li>Help</li>
            </ul>
        </div>
    </div> 

    <div className={styles.footer__bottom}>
        <img className={styles.footer__image} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        <p className={styles.footer_right}>fake amazon clone developed by © HCC LAB</p>
    </div>
    </>)
}

export default Footer;
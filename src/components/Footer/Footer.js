
import Link from 'next/link'
import { useState } from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa'
import {AiOutlineMail } from 'react-icons/ai'
import {AiOutlineCopyrightCircle } from 'react-icons/ai';
import Image from 'next/image';
import Modal from '../contact_popup/index';
import Instagram from '../../images/Instagram.png'
import facebook from '../../images/facebook.png'
import twitters from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import loader from '../../components/Loader'

const Footer = () => {
    const [showModal, setShowModal] = useState(false)


  return (
        <footer className="footer-section">
            <div className="footer-inner">
                <div className="footer-outer-wrapper">
                    <div className="container">
                        <div className="row footer-link">
                            <div className="col-md-3">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li 
                                  onClick={() => { setShowModal(!showModal) }}
                                    >
                                        <Link href="/"> Home</Link>
                                    </li>
                                    <li 
                                    onClick={() => {setShowModal(!showModal)}}
                                    >
                                        <Link href="/"> About Us</Link>
                                    </li>
                                    <li 
                                    // onClick={() => {setShowModal(!showModal)}}
                                    >
                                        <Link href="/blogs"> Blog</Link>
                                    </li>
                                    <li 
                                    onClick={() => {setShowModal(!showModal)}}
                                    
                                    >
                                        <Link href="/"> Flights</Link>
                                    </li>
                                    <li 
                                    // onClick={() => {setShowModal(showModal)}}
                                    >
                                        {/* <Link href="/terms-condtion"> Terms & conditions </Link> */}
                                        <Link href="/terms-condtion">Terms & conditions</Link>

                                    </li>
                                    <li 
                                    // onClick={() => {setShowModal(showModal)}}
                                    >
                                        {/* <Link href="/privacy-policy"> privacy policy</Link> */}
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li 
                                    // onClick={() => {setShowModal(showModal)}}
                                    >
                                        {/* <Link href="/privacy-policy"> privacy policy</Link> */}
                                        <Link href="/cancellation-policy">Cancellation Policy</Link>
                                    </li>
                               </ul>
                            </div>
                            <div className="col-md-3 footer-link">
                                <h3>Latest Posts</h3>
                                <ul>
                                    <li>
                                        <Link href="/"> Top 9 Tips for Booking Cheap Flights.</Link>
                                    </li>
                                    <li>
                                        <Link href="/"> 10 cities where you can fly this march for under $350</Link>
                                    </li>
                                    <li>
                                        <Link href="/"> 8 tips for stress-free vacations.</Link>
                                    </li>
                                    <li>
                                        <Link href="/">7 tips to prepare yourself for a future trip</Link>
                                    </li>
                                    <li>
                                        <Link href="/">The Best Time to Buy Flights: Annual Domestic Airfare Study</Link>
                                    </li>
                               </ul>
                            </div>
                            <div className="col-md-3 footer-contact">
                                <div>
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li className='text-sm'>
                                            <div className='mb-1 d-flex'> <FaMapMarkerAlt/>
                                            <div>1032 E BRANDON BLVD #2288 BRANDON, <br/> FL 33511 UNITED STATES</div>
                                            </div>
                                          
                                        </li>
                                        <li>
                                            <div className='mb-1 d-flex email-section'>
                                                <AiOutlineMail/>
                                                <div className="contact-text-lg">Care@fliotravels.com</div>
                                            </div>
                                          
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-section">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="text-sm">
                            <AiOutlineCopyrightCircle/> <span>2022 Fliotravels <span>I</span> All Right Reserved</span>
                        </div>
                        <div className="copyright-icon">
                            <Link href="/"> <Image src={Instagram} alt="insta"/></Link>
                            <Link href="/"> <Image src={facebook} alt="linkedin"/></Link>
                            <Link href="/"> <Image src={twitters} alt="facebook"/></Link>
                            <Link href="/"> <Image src={linkedin} alt="twitter"/></Link>
                        </div>
                    </div>
                </div>

            
            </div>
            
            <Modal open={showModal} close={() => setShowModal(false)} />
        </footer>
    );
};
export default Footer;

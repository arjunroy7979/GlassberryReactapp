import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                            <h5 className='text-uppercase --fontsize1'>Glassberry IT Solutions Pvt Ltd</h5>
                            <p className='--fontparasize'>
                                We strive to deliver some fruitful results for our client as we have the leading team of expertise who works round the clock to deliver to your business success.
                            </p>
                            <ul className='no-icon-list'>
                                <li className='--fontparasize'>Phone : <a href="tel:09021181290" className="text-light">+91 9021181290</a></li>
                                <li className='--fontparasize'>Email : <a href="mailto:info@theglassberry.com" className="text-light">info@theglassberry.com</a></li>
                            </ul>
                            <div className="social social-three">
                                <a href="https://www.facebook.com/theglassberry" target="_blank"><i className="fab fa-facebook-f text-primary"></i></a>
                                <a href="https://www.instagram.com/theglassberry" target="_blank"><i className="fab fa-instagram text-danger"></i></a>
                                <a href="https://twitter.com/theglassberry" target="_blank"><i className="fab fa-twitter text-primary"></i></a>
                                <a href="https://www.linkedin.com/in/theglassberry" target="_blank"><i className="fab fa-linkedin text-primary"></i></a><br /><br />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h5 className='text-uppercase --fontsize1'>Best Digital Marketing Agency</h5>
                            <ul className="no-icon-list">
                                <li><a href="#search-engine" className="text-light --fontparasize">Search Engine Optimization</a></li>
                                <li><a href="#pay-per" className="text-light --fontparasize">Pay Per Click</a></li>
                                <li><a href="#social" className="text-light --fontparasize">Social Media Marketing</a></li>
                                <li><a href="#website" className="text-light --fontparasize">Website Development</a></li>
                                <li><a href="#orm" className="text-light --fontparasize">Online Reputation Management</a></li>
                                <li><a href="#content" className="text-light --fontparasize">Content Management</a></li>
                                <li><a href="#business" className="text-light --fontparasize">Business Consultation</a></li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h5 className='text-uppercase --fontsize1'>Latest Blogs</h5>
                            <ul className="no-icon-list">
                                <li><a href="#google-ads" className="text-light --fontparasize">Google Ads In Past 5 Years</a></li>
                                <li><a href="#importance" className="text-light --fontparasize">Importance of Lead Generation</a></li>
                                <li><a href="#sustainable" className="text-light --fontparasize">Sustainable Backlink Building</a></li>
                                <li><a href="#effective" className="text-light --fontparasize">Effective Digital Marketing Tips</a></li>
                                <li><a href="#synergized" className="text-light --fontparasize">Synergized Search</a></li>
                                <li><a href="#Facebook" className="text-light --fontparasize">Facebook Ad Frequency</a></li>
                                <li><a href="#websites" className="text-light --fontparasize">Website &amp; Privacy Laws</a></li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h5 className="text-uppercase text-light text-center">Location</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.994117613074!2d73.8424211!3d18.5176679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eb62240a885d1f7!2sThe%20Glassberry%20IT%20Solutions%20Pvt%20Ltd%20-%20Best%20SEO%20%26%20Digital%20Marketing%20Agency%20In%20Pune%20%7C%20Website%20Design%20%7C%20Social%20Media%20Marketing%20%7C%20PPC%20Services!5e0!3m2!1sen!2sin!4v1604575815177!5m2!1sen!2sin" width="100%" height="200" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid --row'>
                <div className='container'>
                    <div className='row  text-light'>
                        <div className='col-6 col-md-10 --fontparasize'>
                            Copyright ©2023 Glassberry IT Solutions Pvt Ltd. All rights reserved.
                        </div>
                        <div className='col-6 col-md-2 --fontparasize'>
                          <a href='#privacy-policy' className='privacy-policy'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
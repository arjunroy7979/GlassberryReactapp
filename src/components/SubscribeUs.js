import React from 'react'

const SubscribeUs = () => {
    return (
        <div className='subscribe-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-2 mt-3'>
                        <h4 className='text-light'>Newsletter</h4>
                    </div>
                    <div className='col-12 col-md-10'>
                        <form name="newsletter">
                            <div className="input-newsletter-container">
                                <input type="text" name="email" className="input-newsletter" placeholder="enter your email address"/>
                            </div>
                            <a href="#" className="btn btn-sm --btn px-3 mt-2">Subscribe<i className="fa fa-envelope mx-2"></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeUs
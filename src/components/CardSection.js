import React from 'react'
import data from '../data.json'
const CardSection = () => {
    return (
        <div className='container-fluid'>
            <div className='container-fluid mb-4 mt-4 cardsection'>
                {
                    data && data.map((item,index) => {
                        return (
                            <div className="card" style={{ width: ' 22rem' }} key={index}>
                                <img className="card-img-top" src={item.img} alt="img-blog1.jpg" />
                                <div className='card-blog-one-attrib'>
                                    <img src={item.img1} alt=""/>
                                    <span className='text-warning'>{item.name}</span>
                                    <span>{item.date}</span>
                                    <span>
                                        <a href='#' className='badge px-2 py-1' style={{backgroundColor:item.color ,color:'#fff'}}>{item.badgeName}</a>
                                    </span>
                                </div>
                                <div className='card-body'>
                                    <h5 className="card-title --fontsize">{item.heading}</h5>
                                    <p className="card-text --fontparasize">{item.details}</p>
                                    <div className="card-footer text-center">
                                        <a href='#' className='btn btn-outline-primary btn-sm px-4'>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardSection
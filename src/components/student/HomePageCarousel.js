import React from 'react'
import "./carousel.css"

export default function HomePageCarousel() {
    return (
        <div id="demo" className="carousel slide mb-5" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='ui card card_1'></div>
                    <div className="carousel-caption">
                        <h3>TCS Digital - 7.7 LPA Drive</h3>
                        <p>24 Students have been selected!!!</p>
                    </div>   
                </div>
                <div className="carousel-item">
                    <div className='ui card card_2'></div>
                    <div className="carousel-caption">
                        <h3>Accenture - 4.5 LPA Drive Update</h3>
                        <p>Students are here by informed to be prepared for the drive</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='ui card card_3'></div>
                    <div className="carousel-caption">
                        <h3>Capgemini - 4 LPA Hiring</h3>
                        <p>55 Students have been Selected!!!</p>
                    </div> 
                </div>
                <div className="carousel-item">
                    <div className='ui card card_4'></div>
                    <div className="carousel-caption">
                        <h3>Phone pe - 14 LPA Intership hiring</h3>
                        <p>We are happy to announce that Mohammed Ali have been Selected</p>
                    </div> 
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}

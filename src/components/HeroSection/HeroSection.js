import React from 'react';
import './HeroSection.css';
import '../../App.css';
import herosectionbanner from '../../assets/img/herosection-banner-img.jpg';
import { Link } from 'react-router-dom';
import {Link as LinkS, animateScroll as scroll} from 'react-scroll';

import griditemimg1 from '../../assets/img/griditem1.jpg';
import griditemimg2 from '../../assets/img/griditem2.jpg';
import griditemimg3 from '../../assets/img/griditem3.jpg';
import herobottombanner from '../../assets/img/hero-bottom-banner.jpg'


const HeroSection = () => {
    return (
        <div className="herosection" id="herosection">
            <div className="herobanner">
                <img src={herosectionbanner} alt =" " className="hero-banner-img"></img>
            </div>

            <div className="herosection-grid">
                <div className="grid-item">
                    <div className="grid-item-img">
                        <img src={griditemimg1} className="grid-img" alt=""></img>
                    </div>
                    <div className="grid-item-information">
                        <div >
                            <Link className="grid-info-title" to="/">ÇİKOLATA</Link>
                        </div>
                        <div >
                            <span className="grid-info-subtitle">Çikolata Hikayeleri</span>
                        </div>
                        <div >
                            <p className="grid-info">Magnum Çikolata Hikayeleriyle haz yolculuğuna çıkın!</p>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="grid-item-img">
                        <img src={griditemimg2} className="grid-img" alt=""></img>
                    </div>
                    <div className="grid-item-information">
                        <div >
                            <Link className="grid-info-title" to="/">HAZ DOLU TARİFLER</Link>
                        </div>
                        <div >
                            <span className="grid-info-subtitle">Haz Dolu Tarifler</span>
                        </div>
                        <div >
                            <p className="grid-info">Magnum'dan zamansız haz dolu tarifler</p>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="grid-item-img">
                        <img src={griditemimg3}  className="grid-img" alt=""></img>
                    </div>
                    <div className="grid-item-information">
                        <div >
                            <Link  className="grid-info-title" to="/">YAŞAM</Link>
                        </div>
                        <div >
                            <span className="grid-info-subtitle">Yaşam Hikayeleri</span>
                        </div>
                        <div >
                            <p className="grid-info">Magnum Yaşam Hikayeleriyle keyfin yollarını keşfedin</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hero-bottom-banner">
                <div className="bottom-banner-img-section">
                    <img src={herobottombanner} className="bottom-banner-img" alt=""></img>
                    <div className="bottom-banner-img-info">
                        <div className="bottom-banner-text-flex">
                            <span className="banner-info-title"> HAZZI CİDDİYE AL</span>
                            <button className="banner-info-btn"> KAMPANYANIN TÜMÜNÜ GÖR</button>
                        </div>
                        
                    </div>
                    
                  
                </div>
                <LinkS to="herosection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                    className="bottom-banner-second">
                    <LinkS to="herosection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                    className="return-btn">
                        <span className="bottom-banner-subtitle">BAŞA DÖN</span> 
                        <i class="fas fa-angle-up bottom-banner-icon"></i>
                    </LinkS>
                    
                </LinkS>
                
            </div>
            
            <div className="hero-third-banner">
                <span className="third-banner-title"> SENİN İÇİN SEÇTİĞİMİZ HİKAYELER </span>
            </div>            
        </div>
    )
}

export default HeroSection

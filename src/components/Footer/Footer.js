import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

import magnumFooterLogo from '../../assets/img/magnum-footer-logo.png';
import unileverFooterLogo from '../../assets/img/footer-unilever-logo.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <Link>
                <img src={magnumFooterLogo} alt="" class="magnum-footer-logo"></img>
                </Link>
            </div>
            <div className="footer-main-flex">
                <div className="footer-flex-item">
                    <Link className="footer-title">Bize Ulaşın</Link>
                </div>
                <div className="footer-flex-item">
                    <Link className="footer-title">SIKÇA SORULAN SORULAR</Link>
                    <Link className="footer-title">ÜLKE DEĞİŞTİR</Link>
                    <Link className="footer-title">YASAL UYARI</Link>
                    <Link className="footer-title">KİŞİSEL VERİLERİN KORUNMASI</Link>
                    <Link className="footer-title">KAMPANYALAR</Link>
                </div>
                <div className="footer-flex-item">
                    <Link className="footer-title">SİTE HARİTASI</Link>
                    <Link className="footer-title">GİZLİLİK POLİTİKASI</Link>
                    <Link className="footer-title">ÇEREZLER HAKKINDA BİLDİRİM</Link>
                    <Link className="footer-title">ÜRÜNLER</Link>
                    <Link className="footer-title">PORSCHE KAMPANYASI</Link>
                </div>

            </div>
            <div className="footer-social-flex">
                <Link><i class="fab fa-facebook-f social-icon"></i></Link>
                <Link><i class="fab fa-twitter social-icon"></i></Link>
                <Link><i class="fab fa-instagram social-icon"></i></Link>
                <Link><i class="fab fa-youtube social-icon"></i></Link>
            </div>
            <div className="footer-unilever">
                <Link>
                <img src={unileverFooterLogo} alt="" className="unilever-logo"></img>
                </Link>
                
                <Link className="unilever-info"> © 2021 COPYRİGHT UNİLEVER</Link>
            </div>
        </div>
    )
}

export default Footer

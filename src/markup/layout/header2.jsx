import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/others/logo.png';
import logoWhite from '../../images/logo-white.png';

const Header = () => {

	useEffect(() => {
		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click',function(){
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click',function(){
			menuLinks.classList.remove("show")
		})
		
		// Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }
	}, [])
	
	
	
		return(
			<>
				<header className="header rs-nav">
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container-fluid clearfix">
								<div className="menu-logo logo-dark">
									<Link to="/"><img src={logo} alt=""/></Link>
								</div>
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								<div className="secondary-menu">
									<ul>
										<li className="search-btn"><button id="quikSearchBtn" type="button" className="btn-link"><i className="las la-search"></i></button></li>
										<li className="num-bx"><a href="tel:(+234)8100731625"><i className="fas fa-phone-alt"></i> (+234)8100731625</a></li>
										<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
									</ul>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to="/">Home</Link></li>
										<li>
											<Link to="/about-us">About Us <i className="fas fa-plus"></i></Link>
										</li>
										<li>
											<Link to="/services">Services <i className="fas fa-plus"></i></Link>
										</li>
									</ul>
									<ul className="social-media">
										<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
										<li><a rel="noreferrer" target="_blank" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
										<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a rel="noreferrer" target="_blank" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>
				</header>
				
			</>
		);
	}

export default Header;

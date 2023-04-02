import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/others/logo.png';
import logoWhite from '../../images/logo-white.png';

class Header extends Component{
	
	componentDidMount() {
		
		// Search Form Popup
		let searchBtn = document.getElementById("quikSearchBtn")
        let searchForm = document.querySelector(".nav-search-bar")
        let closeBtn = document.getElementById("searchRemove")
		
        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("show")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("show")
        })
		
		// Mobile Menu Open
		let menuIcon = document.querySelector(".menuicon")
		let menuLinks = document.querySelector(".menu-links")
		let menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click',function(){
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click',function(){
			menuLinks.classList.remove("show")
		})
		
		// Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (let y = 0; y < navMenu.length; y++) {
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
    }
	
	render(){
		return(
			<>
				<header className="header header-transparent rs-nav">
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
										<li className="num-bx"><a href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+234) 8086666361</a></li>
										<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
									</ul>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to="/">Home<i className="fas fa-plus"></i></Link></li>
										<li><Link to="/about-us">About Us<i className="fas fa-plus"></i></Link></li>									
										<li><Link to="/services">Services <i className="fas fa-plus"></i></Link></li>
										<li><Link to="/contact-us">Contact Us  <i className="fas fa-plus"></i></Link></li>
									</ul>
									<ul className="social-media">
										<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>
					<div className="nav-search-bar">
						<form>
							<input type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="searchRemove"><i className="ti-close"></i></span>
					</div>
				</header>
				
			</>
		);
	}
}

export default Header;

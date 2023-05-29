import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Elements
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import physio from '../../images/services/physio.jpg';
import surgery from '../../images/services/surgery.jpg';
import obstetrics from '../../images/services/obstetrics.jpg';
import radiology from '../../images/services/radiology.jpg';
import industrial from '../../images/services/industrial.jpg';
import paediatrics from '../../images/services/paediatrics.jpg';


const Services = () => {

	return (
		<>

			<Header />

			<div className="page-content bg-white">

				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1>Services</h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Services</li>
									</ul>
								</nav>
							</div>
						</div>
						<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
						<img className="pt-img2 animate2" src={circleDots} alt="" />
						<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
					</div>
				</div>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
									<img src={physio} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">General Medicine</h3>
										<p>We have qualified experts to offer exciting occupational safety training sessions to reduce the risk of work hazards and boost work efficiency.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
								<img src={surgery} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">General Surgery</h3>
										<p>We have team of consultants and experienced doctors to carry out a wide range of surgical operations</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature3">
								<img src={paediatrics} alt="" className='mb-10'/>

									<div className="icon-content">
										<h3 className="ttr-title">Paediatrics</h3>
										<p>We provide an excellent clinical experience in management of paediatric patients of all ages with a broad spectrum of illnesses and injuries.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
								<img src={radiology} alt="" className='mb-10'/>

									<div className="icon-content">
										<h3 className="ttr-title">Radiology</h3>
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature3">
								<img src={obstetrics} alt="" className='mb-10'/>

									<div className="icon-content">
										<h3 className="ttr-title">Obstetrics</h3>
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={industrial} alt="" className='mb-10'/>

									<div className="icon-content">
										<h3 className="ttr-title">Industrial Medicine</h3>
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<TeamSection />
			</div>

			<Footer />

		</>
	);
}
export default Services;
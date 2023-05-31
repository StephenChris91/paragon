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
							</div>
						</div>
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
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
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
										<p>We have team of consultants and experienced doctors to carry out a wide range of surgical operations</p>
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
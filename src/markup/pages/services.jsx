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
import physio from '../../images/bannerSlider/physio.jpeg';
import surgery from '../../images/bannerSlider/surgery.jpeg';
import obstetrics from '../../images/bannerSlider/obstetrics.jpeg';
import radiology from '../../images/bannerSlider/radiology.jpeg';
import industrial from '../../images/bannerSlider/industrial.jpeg';
import paediatrics from '../../images/bannerSlider/paediatrics.jpeg';
import general from '../../images/bannerSlider/general.jpeg';
import orthopedics from '../../images/bannerSlider/orthopedics.jpeg';
import aesthetics from '../../images/bannerSlider/aesthetics.jpeg';
import dietetics from '../../images/bannerSlider/dietetics.jpg';
import psycho from '../../images/bannerSlider/psycho.jpg';



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
								<img src={general} alt='' className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">General Medicine</h3>
										<p>Our qualified experts treat and manage a wide range of long-term and short-term illnesses.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature2">
								<img src={surgery} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">General Surgery</h3>
										<p>We have team of Surgeons and experienced Anesthesiologists who carry out a wide range of surgical operations.</p>
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
										<h3 className="ttr-title">Obstetrics & Gynaecology</h3>
										<p>Our care team renders topnotch services to pregnant women and gives priority to women’s sexual and reproductive health.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={industrial} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Industrial Health</h3>
										<p>We determine if members of your workforce are mentally and physically fit for their role by carrying out Fitness for Work medical assessment.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={physio} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Physiotherapy</h3>
										<p>We restore, maintain and make the most of a patient’s mobility function and well being through physical rehabilitation, injury prevention and fitness.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={orthopedics} alt="" />
									<div className="icon-content">
										<h3 className="ttr-title">Orthopedic</h3>
										<p>We help you get relief from pain and mobility problems caused by musculoskeletal issues.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={aesthetics} alt="" />
									<div className="icon-content">
										<h3 className="ttr-title">Aesthetic Medicine</h3>
										<p>With our team of licensed aestheticians, age is just a number. We are committed in improving the cosmetic appearance of our patients.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={dietetics} alt="" />
									<div className="icon-content">
										<h3 className="ttr-title">Dietetics</h3>
										<p>Our team of dieticians provide suitable and exciting meal and nutrition plans that will prevent, treat diseases, promote and maintain the wellbeing of the body</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 feature1">
								<img src={psycho} alt="" />
									<div className="icon-content">
										<h3 className="ttr-title">Psychotheraphy</h3>
										<p>We have licensed mental health professionals who apply variety of treatment plans to help the patient identify and change troubled emotions, thought and behaviors</p>
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
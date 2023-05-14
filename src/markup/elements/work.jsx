import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';


const ourProcess = () => {
	return (
		<>

			<section className="section-area section-sp5 work-area" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: " no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
				<div className="container-sm" id='work-container'>
					<div className="heading-bx text-center">
						<h6 className="title-ext text-secondary">Our Process</h6>
						<h2 className="title">How we work?</h2>
					</div>
					<div className="work-container">
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="work-bx">
								<div className="work-num-bx">01</div>

								<div className="work-content">
									<h5 className="title text-secondary mb-10">Book An Appointment</h5>
									<p>Schedule and appointment with with on of our doctors by using the booking form on our website.</p>
								</div>
								<Link to="/booking" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="work-bx active">
								<div className="work-num-bx">02</div>
								<div className="work-content">
									<h5 className="title text-secondary mb-10">Talk To A Doctor</h5>
									<p>Attend your scheduled appointment with our doctors where we would diagnose your ailment by carrying out necessary tests and sessions</p>
								</div>
								<Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="work-bx">
								<div className="work-num-bx">03</div>
								<div className="work-content">
									<h5 className="title text-secondary mb-10">E - Care</h5>
									<p>Schedule and appointment with with on of our doctors by using the booking form on our website.</p>
								</div>
								<Link to="/booking" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="work-bx active">
								<div className="work-num-bx">04</div>
								<div className="work-content">
									<h5 className="title text-secondary mb-10">Online Payments</h5>
									<p>Attend your scheduled appointment with our doctors where we would diagnose your ailment by carrying out necessary tests and sessions</p>
								</div>
								<Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<img className="pt-img1 animate1" src={ptImg1} alt="" />
				<img className="pt-img2 animate2" src={ptImg2} alt="" />
				<img className="pt-img3 animate3" src={ptImg3} alt="" />
			</section >

		</>
	);
}

export default ourProcess;
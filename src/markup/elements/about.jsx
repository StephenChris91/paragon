import { Link } from 'react-router-dom';

// Import Images
import aboutThumb1 from '../../images/others/stetoscope1.jpg';
import aboutThumb2 from '../../images/others/doc1.jpg';
import aboutThumb3 from '../../images/others/surgery1.jpg';
import ptImg1 from '../../images/shap/wave-orange.png';
import ptImg2 from '../../images/shap/circle-small-blue.png';
import ptImg4 from '../../images/shap/square-dots-orange.png';
import ptImg5 from '../../images/shap/square-blue.png';
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'

const aboutSection = () => {
	return (
		<>
			<section className="section-sp1 about-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-30">
							<div className="about-thumb-area">
								<ul>
									<li><img className="about-thumb1" src={aboutThumb1} alt="" /></li>
									<li><img className="about-thumb2" src={aboutThumb2} alt="" /></li>
									<li><img className="about-thumb3" src={aboutThumb3} alt="" /></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 mb-30">
							<div className="heading-bx">
								<h6 className="title-ext text-secondary">What We Offer</h6>
								<h2 className="title">Why choose Paragon Clinics and Imaging?</h2>
								<p>	You are Our priority not only your health condition.
									This goes a long way to let you know that our well trained care providers take the time to listen to what's crucial to you before making recommendations.
									<br />
									<br />

										You'll get care from trained and licensed experts who work together to create customized treatment plans.
									<br />
									<br />
										We are a reputable force to reckon amongst HMO'S and Corporate Organizations seeking the best health care for their staff.
									<br />
									<br />
										With our Centrally Linked Electro-medical Software, trust us to provide you an efficient, fast and highly confidential health care service.
									</p>
								





								
							</div>
							<div className="row">
								<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
									<div className="feature-container feature-bx1 feature1">
										<div className="icon-md">
											<span className="icon-cell">
												<img src={icon1} alt='icon 1' />
											</span>
										</div>
										<div className="icon-content">
											<h4 className="ttr-title">Emergency Help</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
									<div className="feature-container feature-bx1 feature2">
										<div className="icon-md">
											<span className="icon-cell">
												<img src={icon3} alt='icon 3' />
											</span>
										</div>
										<div className="icon-content">
											<h4 className="ttr-title">Qualified Doctors</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
									<div className="feature-container feature-bx1 feature3">
										<div className="icon-md">
											<span className="icon-cell">
												<img src={icon4} alt='icon 4' />
											</span>
										</div>
										<div className="icon-content">
											<h4 className="ttr-title">Best Professionals</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
									<div className="feature-container feature-bx1 feature4">
										<div className="icon-md">
											<span className="icon-cell">
												<img src={icon2} alt='icon 2' />
											</span>
										</div>
										<div className="icon-content">
											<h4 className="ttr-title">Medical Treatment</h4>
										</div>
									</div>
								</div>
							</div>
							<Link to="/booking" className="btn btn-primary shadow">Book An Appointment</Link>
						</div>
					</div>
				</div>
				<img className="pt-img1 animate-wave" src={ptImg1} alt="" />
				<img className="pt-img2 animate2" src={ptImg2} alt="" />
				<img className="pt-img3 animate-rotate" src={ptImg5} alt="" />
				<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
				<img className="pt-img5 animate2" src={ptImg5} alt="" />
			</section>

		</>
	);
}

export default aboutSection;
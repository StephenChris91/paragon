import { Link } from 'react-router-dom';

//icons
import { FaCheck } from 'react-icons/fa';

// Import Images
import aboutThumb1 from '../../images/others/stetoscope1.jpg';
import aboutThumb2 from '../../images/others/doc1.jpg';
import aboutThumb3 from '../../images/others/surgery1.jpg';
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
								<h2 className="title">Why choose Paragon Clinics and Imaging?</h2>
								<p><FaCheck className='mr-10'/> We are centrally located in the Port Harcourt metropolis with an excellent road network, within easy access from most neighborhoods.
									<br />
									<br />

									<FaCheck className='mr-10'/> We are a reputable force to reckon with amongst HMO&#39;s and Corporate
									Organizations seeking the best health care for their staff.
									<br />
									<br />
									<FaCheck className='mr-10'/> Our care providers are trained and licensed experts who take the time to listen to what is crucial to you before making recommendations.
									<br />
									<br />
									<FaCheck className='mr-10'/> Our centrally linked Electronic Medical Records Software, enables us provide you an efficient, fast and highly confidential health care service.
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
			</section>

		</>
	);
}

export default aboutSection;
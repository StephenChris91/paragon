import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/others/logo.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import instagram from '../../images/social/instagram.png';
import linkedin from '../../images/social/linkedin.png';
import PartnersLogos from '../elements/PartnersLogos';

const FooterSection = () => {
	return (
		<>

			<footer className="footer" style={{ backgroundImage: "url(" + footerBg + ")" }}>
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="widget widget_info">
									
									<div className="ft-contact">
										
										<div className="contact-bx">
											<div className="icon"><i className="fas fa-phone-alt"></i></div>
											<div className="contact-number">
												<span>Contact Us</span>
												<a href='tel:+2348086666361'><h4 className="number">(+234)8100731625</h4></a>
												<a href='tel:+2349012592205'><h4 className="number">(+234)9012592205</h4></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-6">
								<div className="widget footer_widget ml-50">
									<h3 className="footer-title">Quick Links</h3>
									<ul>
										<li><Link to="/booking"><span>Book An Appointment</span></Link></li>
										<li><Link to="/"><span>Online Payment</span></Link></li>
										<li><Link to="/"><span>E- Care</span></Link></li>
										<li><Link to="/"><span>Talk To A Doctor</span></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-6">
								<div className="widget footer_widget">
									<h3 className="footer-title">Our Service</h3>
									<ul>
										<li><Link to="/services"><span>General Medicine</span></Link></li>
										<li><Link to="/services"><span>General Surgery</span></Link></li>
										<li><Link to="/services"><span>Paediatrics</span></Link></li>
										<li><Link to="/services"><span>Obstetrics</span></Link></li>
										<li><Link to="/services"><span>Industrial Medicine</span></Link></li>
										<li><Link to="/services"><span>Radiology</span></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="widget widget_form">
									<div className="footer-social-link">
										<ul>
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook} alt="" /></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={twitter} alt="" /></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instagram} alt="" /></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="footer-bottom">
						<div className="row">
							<div className="col-12 text-center">
								<PartnersLogos />
								<p className="copyright-text">Copyright © Paragon Clinics & Imaging 2023</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	);
}


export default FooterSection;
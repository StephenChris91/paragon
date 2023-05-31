import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";


const ContactUs = () => {

	const center = {
		lat: 4.770784,
		lng: 7.014776,
	  };
	
	  const handleDirectionsRequest = () => {
		const currentLocation = navigator.geolocation;
		
		if (currentLocation) {
		  currentLocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			const mapsUrl = `https://www.google.com/maps/dir/?api=${process.env.REACT_APP_GOOGLE_API_KEY}&origin=${latitude},${longitude}&destination=${center.lat},${center.lng}`;
			window.location.href = mapsUrl;
		  });
		}
	  };

	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="banner-wraper">
					<div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1>Contact Us</h1>
							</div>
						</div>
					</div>
				</div>

				<section className="">
					<div className="container">
						<div className="contact-wraper">
							<div className="row">
								<div className="col-lg-6 mb-30">
									<form className="form-wraper contact-form ajax-form">
										<div className="ajax-message"></div>
										<div className="row">
											<div className="form-group col-md-12">
												<input name="name" type="text" required className="form-control" placeholder="Your Name" />
											</div>
											<div className="form-group col-md-12">
												<input name="email" type="email" required className="form-control" placeholder="Email" />
											</div>
											<div className="form-group col-md-12">
												<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers" />
											</div>
											<div className="form-group col-md-12">
												<select className="form-select form-control">
													<option selected>Select Department</option>
													<option value="1">Consultation</option>
													<option value="2">Enquiry</option>
													<option value="3">Payments</option>
												</select>
											</div>
											<div className="form-group col-md-12">
												<textarea name="message" required className="form-control" placeholder="Type Message"></textarea>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-6 mb-30">
									<div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + pic1 + ")" }}>
										<div className="info-inner">
											<h4 className="title mb-30">Contact Us For Any Informations</h4>
											<div className="icon-box">
												<h6 className="title"><i className="ti-map-alt"></i>Location</h6>
												<p>96 Stadium Road Port Harcourt. Nigeria.</p>
											</div>
											<div className="icon-box">
												<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>
												<Link to="#" className="text-white">paragonclinics@gmail.com</Link>
												<p>(+234)8086666361</p>
											</div>
											<div className="icon-box">
												<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
												<ul className="social-media">
													<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
													<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
													<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature4">
									<div className="icon-md feature-icon">
										<img src={icon1} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Contact Number</h5>
										<p className='mb-20'>(+234)8086666361</p>
										<li className="btn-area mt-20"><Link to="tel:+2348086666361" className="btn btn-primary shadow">Call Us Now</Link></li>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature3">
									<div className="icon-md feature-icon">
										<img src={icon3} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Email Address</h5>
										<p className='mb-30'>info@paragonclinicsandimaging.com</p>
										<li className="btn-area mt-20"><Link to="mailto:paragonclinics@gmail.com" className="btn btn-primary shadow">Email Us Now</Link></li>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature2">
									<div className="icon-md feature-icon">
										<img src={icon2} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Address</h5>
										<p className='mt-30'>96 Stadium Road Port Harcourt. Nigeria.</p>
										<button className='btn btn-primary' onClick={handleDirectionsRequest}>Get Directions</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}


export default ContactUs;
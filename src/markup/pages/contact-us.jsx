import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
	// Phone number popover state
	const [showPhonePopover, setShowPhonePopover] = useState(false);
	
	// Phone numbers array
	const phoneNumbers = [
		{ id: 1, number: '(+234)8100731625', label: 'Main Office' },
		{ id: 2, number: '(+234)9012592205', label: 'Customer Support' }
	];
	
	// Handle phone selection and call
	const handlePhoneCall = (number) => {
		// Clean number for tel: protocol
		const cleanNumber = number.replace(/\D/g, '');
		window.location.href = `tel:+${cleanNumber}`;
		setShowPhonePopover(false);
	};

	// Close popover when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (showPhonePopover && !event.target.closest('.phone-popover-container')) {
				setShowPhonePopover(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showPhonePopover]);

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
												<p>(+234)8100731625</p>
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
										{phoneNumbers.map((phone) => (
											<p key={phone.id} className="mb-20">
												{phone.number} <span style={{color: '#666', fontSize: '0.9em'}}></span>
											</p>
										))}
										<div className="btn-area mt-20 phone-popover-container" style={{ position: 'relative', display: 'inline-block' }}>
											<button 
												type="button"
												className="btn btn-primary shadow"
												onClick={() => setShowPhonePopover(!showPhonePopover)}
											>
												Call Us Now
											</button>
											
											{showPhonePopover && (
												<div 
													role="dialog" 
													className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg"
													style={{ 
														left: 'calc(100% + 15px)', 
														top: '50%', 
														transform: 'translateY(-50%)',
														width: '250px'
													}}
												>

													<div className="px-3 py-2">
														{phoneNumbers.map((phone) => (
															<div 
																key={phone.id}
																onClick={() => handlePhoneCall(phone.number)}
																className="py-3 cursor-pointer hover:bg-gray-50 rounded px-2 transition-colors border-b border-gray-100 last:border-0"
															>
																<div className="font-medium">{phone.number}</div>
															</div>
														))}
													</div>
													{/* Arrow pointer */}
													<div 
														style={{
															position: 'absolute',
															width: '10px',
															height: '10px',
															left: '-5px',
															top: '50%',
															marginTop: '-5px',
															transform: 'rotate(45deg)',
															backgroundColor: 'white',
															borderLeft: '1px solid #e5e7eb',
															borderBottom: '1px solid #e5e7eb'
														}}
													></div>
												</div>
											)}
										</div>
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
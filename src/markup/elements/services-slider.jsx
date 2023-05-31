import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import physio from '../../images/services/physio.jpg';
import surgery from '../../images/services/surgery.jpg';
import obstetrics from '../../images/services/obstetrics.jpg';
import radiology from '../../images/services/radiology.jpg';
import industrial from '../../images/services/industrial.jpg';
import paediatrics from '../../images/services/paediatrics.jpg';

const ServicesSliderSection = () => {


	const settings = {
		dots: true,
		arrow: true,
		autoplay: true, 
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};

	return (
		<>

			<section className="section-area section-sp1 service-wraper">
				<div className="row align-items-center">
					<div className="col-xl-4 col-lg-7 mb-30">
						<div className="heading-bx">
							<h2 className="title">We cover a wide range of medical Services</h2>
						</div>
						<Link to="/booking" className="btn btn-secondary btn-lg shadow">Take A Tour</Link>
					</div>
					<div className="col-xl-8 mb-15">
						<Slider {...settings} className="service-slide slick-arrow-none">
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature1">
									<img src={physio} alt='' className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">General Medicine</h3>
										<p>We have qualified experts to offer exciting occupational safety training sessions to reduce the risk of work hazards and boost work efficiency.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature2">
										<img src={surgery} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">General Surgery</h3>
										<p>We have team of consultants and experienced doctors to carry out a wide range of surgical operations</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature3">
										<img src={paediatrics} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Paediatrics</h3>
										<p>We provide an excellent clinical experience in management of paediatric patients of all ages with a broad spectrum of illnesses and injuries.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature1">
										<img src={radiology} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Radiology</h3>
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature1">
										<img src={obstetrics} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Obstetrics</h3>
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature1">
										<img src={industrial} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Industrial</h3>
										<p>We have the imaging technologies and expertise to diagnose and treat a wide range of diseases.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature2">
										<img src={physio} alt="" className='mb-10'/>
									<div className="icon-content">
										<h3 className="ttr-title">Physiotherapy</h3>
										<p>We restore, maintain and make the most of a patient’s mobility function and well being through physical rehabilitation, injury prevention and fitness.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature1">
										<img src={paediatrics} alt="" />
									<div className="icon-content">
										<h3 className="ttr-title">Orthopaedic Medicine</h3>
										<p>We can help you get relief from pain and mobility problems caused by Musculoskeletal issues.</p>
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="feature-container feature-bx2 feature2">
									<div className="feature-box-xl mb-20">
										<img src="../../images/services/surgery.jpg" alt="" />
									</div>
									<div className="icon-content">
										<h3 className="ttr-title">Aesthetic Medicine</h3>
										<p>With our team of licensed aestheticians, age is just but a number. We are committed in improving the cosmetic appearance of our patients.</p>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
				
			</section>

		</>
	);
}

export default ServicesSliderSection;
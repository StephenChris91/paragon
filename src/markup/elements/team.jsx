import React, { Component } from 'react';

// Import Images
import teamMember1 from '../../images/team/doctor1.jpg';
import teamMember2 from '../../images/team/doctor3.jpg';
import teamMember3 from '../../images/team/doctor7.jpg';
import teamMember4 from '../../images/team/doctor8.jpg';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-dots-orange.png';
import ptImg3 from '../../images/shap/line-circle-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';
import ptImg5 from '../../images/shap/circle-dots.png';

const TeamSection = () => {
	const doctors = [
		{
			firstName: 'Mrs. Chisom',
			lastName: 'Onyedika',
			title: 'HR/Administrator',
			image: teamMember3,
		},
		{
			firstName: 'Dr. Mrs. Chinwe',
			lastName: 'Onuegbu',
			title: 'Head of Clinical Services',
			image: teamMember4
		},
		{
			firstName: 'Mrs. Sandra',
			lastName: 'Ala',
			title: 'Head of Operations',
			image: teamMember2
		},
		{
			firstName: 'Mrs. Benedicta',
			lastName: 'Ahiakwo',
			title: 'Head of Finance',
			image: teamMember1
		},
	]
	return (
		<>

			<section className="section-area section-sp3 team-wraper">
				<div className="container">
					<div className="heading-bx text-center">
						<h6 className="title-ext text-secondary">Our Doctors</h6>
						<h2 className="title">Meet The Team</h2>
					</div>
					<div className="row justify-content-center">
						{doctors.map(doctor => (
							<div className="col-lg-3 col-sm-6 mb-30" key={doctor.firstName}>
								<div className="team-member">
									<div className="team-media">
										<img src={doctor.image} alt="" />
									</div>
									<div className="team-info">
										<div className="team-info-comntent">
											<h4 className="title">{doctor.firstName} <br /> {doctor.lastName}</h4>
											<span className="text-secondary">{doctor.title}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<img className="pt-img1 animate1" src={ptImg1} alt="" />
				<img className="pt-img2 animate2" src={ptImg2} alt="" />
				<img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
				<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
				<img className="pt-img5 animate-wave" src={ptImg5} alt="" />
			</section>

		</>
	);
}


export default TeamSection;
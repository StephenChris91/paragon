
// Import Images
import teamMember1 from '../../images/team/doctor1.jpg';
import teamMember2 from '../../images/team/doctor3.jpg';
import teamMember3 from '../../images/team/doctor7.jpg';
import teamMember4 from '../../images/team/doctor8.jpg';


const TeamSection = () => {
	const doctors = [
		{
			firstName: 'Mrs. Chisom',
			lastName: 'Onyedika',
			title: 'HR/Administrator',
			image: teamMember3,
		},
		{
			firstName: 'Mrs. Chinwe',
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
						<h2 className="title">Meet The Team</h2>
							<p>The Medical staff consists of licensed experts; an Obstetrician/Gynecologist, a Paediatrician, an Orthopaedic/Traumatology Surgeon, a General Surgeon, a Radiologist, three Physicians (a Nephrologist, a Cardiologist and an Endocrinologist) a Urologist, a Physiotherapist, and a Dermatologist/Plastic Surgeon, and a Dietician.
							</p>
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
			</section>

		</>
	);
}


export default TeamSection;
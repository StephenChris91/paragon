import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Elements
import AboutSection from "../elements/about";
import TeamSection from "../elements/team";
import WidgetGallery from '../elements/widget-gallery'

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
const AboutUs = () => {

	return (
		<>

			<Header />

			<div className="page-content bg-white">
				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1>About Us</h1>
							</div>
						</div>
					</div>
				</div>

				<AboutSection />

				<WidgetGallery />

				<TeamSection />

			</div>

			<Footer />

		</>
	);
}

export default AboutUs;
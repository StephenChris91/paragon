import React, { Component } from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

//images
import slide1 from '../../images/bannerSlider/slide1.jpg'
import slide2 from '../../images/bannerSlider/slide2.jpg'
import slide3 from '../../images/bannerSlider/slide3.png'
import slide4 from '../../images/bannerSlider/slide4.png'
import slide5 from '../../images/bannerSlider/slide5.png'
import slide6 from '../../images/bannerSlider/slide6.jpg'
import slide7 from '../../images/bannerSlider/slide7.png'
import slide8 from '../../images/bannerSlider/slide8.png'

// Elements
import AboutSection from "../elements/about";
import ServicesSliderSection from "../elements/services-slider";
import Banner from '../elements/Banner';
import WhatsappWidget from '../elements/WhatsappWidget';

const Index = () => {

	const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

	return (
		<>

			<Header />

			<Banner images={images} />

			<AboutSection />

			<ServicesSliderSection />

			<WhatsappWidget />

			<Footer />
		</>
	);
}

export default Index;
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';


function Markup() {
	
		return(
			<>
				<Routes>
						<Route path='/' element={<Index />} />
						<Route path='/about-us' exact element={<AboutUs />} />
						<Route path='/team' element={<Team />} />
						<Route path='/services' element={<Services />} />
						<Route path='/service-detail' exact element={<ServiceDetail />} />
						<Route path='/form-login' element={<FormLogin />} />
						<Route path='/form-register' element={<FormRegister />} />
						<Route path='/form-forget-password' element={<FormForgetPassword />} />
						<Route path='/faq' element={<Faq />} />
						<Route path='/contact-us' element={<ContactUs />} />
						<Route path='/booking' element={<Booking />} />
						<Route path='/blog-grid' element={<BlogGrid />} />
						<Route path='/blog-details' element={<BlogDetails />} />
						<Route element={<Error />} />
				</Routes>
				<PageScrollTop />
				<BackToTop />
				
			</>
		);
}

export default Markup;
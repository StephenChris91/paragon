import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

// Import Images
import galleryPic1 from "../../images/gallery/pic1.1.png";
import galleryPic2 from "../../images/gallery/pic1.2.png";
import galleryPic3 from "../../images/gallery/pic1.3.png";
import galleryPic4 from "../../images/gallery/pic1.4.png";
import galleryPic5 from "../../images/gallery/pic1.5.png";
import galleryPic6 from "../../images/gallery/pic1.6.png";
import galleryPic7 from "../../images/gallery/pic1.7.png";
import galleryPic8 from "../../images/gallery/pic1.8.png";
import galleryPic9 from "../../images/gallery/pic1.9.png";

const content = [
	{
		thumb: galleryPic1,
	},
	{
		thumb: galleryPic2,
	},
	{
		thumb: galleryPic3,
	},
	{
		thumb: galleryPic4,
	},
	{
		thumb: galleryPic5,
	},
	{
		thumb: galleryPic6,
	},
	{
		thumb: galleryPic7,
	},
	{
		thumb: galleryPic8,
	},
	{
		thumb: galleryPic9,
	},
]

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#565acf",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#565acf",
		iconColor: "rgba(255, 255, 255, 1)",
		showDownloadButton: false,
		showAutoplayButton: false,
		showThumbnailsButton: false,
	},
	caption: {
		captionColor: "#565acf",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

function GalleryImg() {
	return (
		<>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<ul className="magnific-image">
						{content.map((item) => (
							<li><img src={item.thumb} alt="" /></li>
						))}
					</ul>
				</SRLWrapper>
			</SimpleReactLightbox>
		</>
	);
}

function WidgetGallery() {
	return (
		<>

			<div className="widget widget_gallery gallery-grid-3">

				<GalleryImg />

			</div>

		</>
	);
}

export default WidgetGallery;
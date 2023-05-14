import React from "react";
import partnerLogo1 from "../../images/partners/logo1.png";
import partnerLogo2 from "../../images/partners/logo2.png";
import partnerLogo3 from "../../images/partners/logo3.png";
import partnerLogo4 from "../../images/partners/logo4.png";
import partnerLogo5 from "../../images/partners/logo5.png";
import partnerLogo6 from "../../images/partners/logo6.png";
import partnerLogo7 from "../../images/partners/logo7.png";


const PartnerLogos = () => {
    const partnerLogos = [
        { src: partnerLogo1, alt: "Partner logo 1" },
        { src: partnerLogo2, alt: "Partner logo 2" },
        { src: partnerLogo3, alt: "Partner logo 3" },
        { src: partnerLogo4, alt: "Partner logo 4" },
        { src: partnerLogo5, alt: "Partner logo 5" },
        { src: partnerLogo6, alt: "Partner logo 6" },
        { src: partnerLogo7, alt: "Partner logo 7" },

    ];

    return (
        <div className="partner-logos">
            <h1 className='partners-header'>Our Partners</h1>
            <div className="partner-logos-grid container-sm">
                {partnerLogos.map((partnerLogo, index) => (
                    <img
                        key={index}
                        src={partnerLogo.src}
                        alt={partnerLogo.alt}
                        className="partner-logo"
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnerLogos;

import React, { useState, useEffect } from "react";

const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (autoplay) {
                setCurrentSlide((prevSlide) =>
                    prevSlide === images.length - 1 ? 0 : prevSlide + 1
                );
            }
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [autoplay, images.length]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };


    return (
        <div className="slider">
            <div className="slides">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={
                            index === currentSlide ? "slide active" : "slide inactive"
                        }
                    >
                        {index === 0 && (
                            <div className="slide-text">
                                <h1>Paragon Imaging &amp; Clinics</h1>
                                <p>Quality Care... Quality Caring</p>
                            </div>
                        )}
                        <img src={image} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>
            <div className="dots">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? "dot active" : "dot"}
                        onClick={() => handleDotClick(index)}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Slider;

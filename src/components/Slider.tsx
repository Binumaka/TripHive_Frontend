import React from "react";
import "../css/Slider.css";

interface Slide {
    backgroundImage: string;
    content?: React.ReactNode;
    heading?: string;
    paragraph?: string;
}

const Slider: React.FC = () => {
    const slides: Slide[] = [
        {
            backgroundImage: "url('src/assets/images/img_1.png')",
            heading: "Lets view the world together with more joy ",
            paragraph: "-TripHive",
        },
    ];

    return (
        <div
            className="slider-container"
            style={{
                backgroundImage: slides[0].backgroundImage,
            }}
        >
            <div className="content-container">
                {/* left side */}
                <div className="left-side">
                    <div className="image-container">{slides[0].content}</div>
                </div>
                {/* right side */}
                <div className="right-side">
                    <h2 className="heading">{slides[0].heading}</h2>
                    <p className="paragraph">{slides[0].paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;
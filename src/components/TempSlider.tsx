import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Niche {
  title: string;
  usage: string;
  image: string;
}

interface TempSliderProps {
  niches: Niche[];
}

const TempSlider: React.FC<TempSliderProps> = ({ niches }) => {
  const sliderSettings = {
    dots: true, // Add dots for basic navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Start with 1 slide to ensure visibility
    slidesToScroll: 1,
    arrows: true, // Add arrows for basic navigation
  };

  return (
    <div className="w-full"> {/* Ensure the slider has a defined width */}
      <Slider {...sliderSettings}>
        {niches.map((niche, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-2xl overflow-hidden cursor-pointer h-64 md:h-80">
              <img src={niche.image} alt={niche.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 rounded-t-2xl" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6))' }}>
                <h3 className="text-xl font-bold mb-1 text-white">{niche.title}</h3>
                <p className="text-base text-gray-200 mb-2 font-medium">{niche.usage} people have used this</p>
                <div className="flex justify-end">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TempSlider;

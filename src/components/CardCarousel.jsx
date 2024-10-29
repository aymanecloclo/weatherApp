import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Bouton Suivant personnalisé
const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow absolute right-2 -top-8 bg-sky-600 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3" onClick={onClick}>
      <div className="flex flex-row align-middle">
        <span className="mr-2">Next</span>
        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );
};

// Bouton Précédent personnalisé
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow absolute left-2 -top-8 bg-sky-600 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 z-20" onClick={onClick}>
           <div className="flex flex-row align-middle">
        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
        </svg>
        <p className="ml-2">Prev</p>
      </div>
    </div>
  );
};

const CardCarousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Utilisation des boutons personnalisés
    prevArrow: <PrevArrow />, // Utilisation des boutons personnalisés
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative px-5 my-12">
      <h2 className="text-center text-3xl font-bold mb-8">Detailed Weather Conditions</h2>
      <Slider {...settings}>
        {cards.map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-500/45 overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 h-30 md:h-40 "
          >
            <div className="flex items-end justify-center p-4">
              <p className="px-2 py-1 text-sm tracking-widest dark:text-gray-800 uppercase dark:bg-gray-100 bg-opacity-75 rounded shadow-lg">
                {item.title}h
              </p>
            </div>
            <div className="flex justify-between p-4">
              <div className="flex flex-col flex-1 gap-4">
                <div className="flex justify-around px-0">
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold">
                      {item.value} {item.unit}
                    </span>
                  </div>
                  <img src={item.icon} className="w-10 h-10 object-cover" alt={`${item.title} icon`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Bouton Suivant personnalisé
// const NextArrow = ({ onClick }) => {
//   return (
//     <div className="custom-arrow next-arrow absolute right-2 -top-8 bg-sky-600 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3" onClick={onClick}>
//       <div className="flex flex-row align-middle">
//         <span className="mr-2">Next</span>
//         <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// // Bouton Précédent personnalisé
// const PrevArrow = ({ onClick }) => {
//   return (
//     <div className="custom-arrow next-arrow absolute left-2 -top-8 bg-sky-600 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 z-20" onClick={onClick}>
//            <div className="flex flex-row align-middle">
//         <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
//         </svg>
//         <p className="ml-2">Prev</p>
//       </div>
//     </div>
//   );
// };

const CardCarousel = ({ cards }) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,  // For tablets or medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,  // For mobile screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div className="w-full relative md:px-5  my-24 ">
      <h2 className="text-center text-3xl font-bold mb-8 text-sky-500">Detailed Weather Conditions</h2>
      <Slider {...settings}>
        {cards.map((item, index) => (
          <div 
  key={index} 
  className="bg-gradient-to-r from-blue-400 to-indigo-00 overflow-hidden rounded-xl shadow-md dark:bg-gray-900 dark:text-white p-4 m-2 transform transition duration-300 hover:scale-105"
>
  <div className="flex items-center justify-between mb-2">
    <p className="text-xs tracking-widest uppercase bg-white bg-opacity-20 text-white py-1 px-2 rounded-md">
      {item.title}h
    </p>
    <img src={item.icon} className="w-10 h-10 object-cover" alt={`${item.title} icon`} />
  </div>
  <div className="text-center">
    <span className="text-3xl font-bold text-white">
      {item.value} {item.unit}
    </span>
  </div>
</div>

        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;

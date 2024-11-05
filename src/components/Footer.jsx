import Logo from '../assets/images/logoApp.png';

const Footer = () => {
  return (
    <div className="px-4 pt-5 md sm:max-w-xl md:min-w-full lg:max-w-screen-xl lg:px-20  ">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 ">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex "
          >
            <img src={Logo} className=' block mx-auto md:min-w-40 rounded-full object-cover max-h-28' alt="WeatherApp Logo" />
          
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Stay updated with real-time weather forecasts and alerts. Our app provides the most accurate weather information to keep you prepared for any conditions.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              From sunny days to stormy nights, we've got you covered with the latest weather updates tailored to your location.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 pt-16">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Quick Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/current"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Current Weather
                </a>
              </li>
              <li>
                <a
                  href="/forecast"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400" 
                >
                  7-Day Forecast
                </a>
              </li>
              <li>
                <a
                  href="/alerts"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Weather Alerts
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Interactive Map
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Resources
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/articles"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Weather Articles
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Follow Us</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/facebook"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="/twitter"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/instagram"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/youtube"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">App Features</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Personalized Forecasts
                </a>
              </li>
              <li>
                <a
                  href="/notifications"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Weather Notifications
                </a>
              </li>
              <li>
                <a
                  href="/widget"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Home Screen Widget
                </a>
              </li>
              <li>
                <a
                  href="/dark-mode"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Dark Mode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 Aymane Rachid. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          {/* linkdin path externe */}
          <a
           href='https://www.linkedin.com/in/aymane-rachid-106700317/'
           
            className="transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
</svg>
          </a>
           {/* link to facebook */}
          <a
            href="/"
            className="text-yellow-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>
          </a>
          {/* link to instagram */}
          <a 
            href="www.linkedin.com/in/aymane-rachid-106700317"
            target="_blank" rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
</svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

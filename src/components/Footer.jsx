import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-2xl w-full md:pl-32 p-6">
      <div className="container mx-auto md:grid md:grid-cols-3 md:gap-20 items-center justify-between">
       
        <div className="text-center md:text-left">
          <p className="text-lg">
            Phone: +8801303289180
            <br />
            Email: zahidhasan19932023@gmail.com
            <br />
            Location: Dhaka, Bangladesh
          </p>
        </div>
        <div className="mt-4 ml-7 md:mt-0 ">
          <a href="https://www.facebook.com/profile.php?id=100066076810758" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/zahid-hasan-2434a0279/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>
          <a href="https://github.com/zahidhasan1993" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            GitHub
          </a>
        </div>
        <div className="text-center md:text-left my-4 md:mb-0">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Zahid Hasan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

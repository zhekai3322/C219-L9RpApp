import React from 'react';
const heroBanner = '/soi-hero-banner-2024.png';

function Home() {
  return (
    <div className="container">
      <img className="img-feat" src={heroBanner} alt="SOI Hero Banner 2024" />
      <h1>Home</h1>
      <p>
        If you are excited by the latest technological advances and have a passion for
        problem-solving, join us at RP School of Infocomm (SOI). We will help you discover
        your hidden technical skills and nurture your creative digital dreams. We offer six
        diploma programmes across a wide range of infocomm disciplines.
      </p>
    </div>
  );
}

export default Home;

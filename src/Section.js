import React from "react";
import tour1 from "./img/tour1.webp";
import tour2 from "./img/tour2.webp";
import winner from "./img/winner1.jpg";
import "jquery/dist/jquery.slim";
import CountUp from "react-countup";

export const Section = () => {
  return (
    <div>
      <div className="container-fuild bg-orange">
        <div className="row">
          <div className="section">
            <div className="title">
              <h1>Title Here</h1>
              <p>
                Music is generally defined as the art of arranging sound to
                create some combination of form, harmony, melody, rhythm, or
                otherwise expressive content.
              </p>
              <button>Click me</button>
            </div>
          </div>
        </div>
        <div className="row tour">
          <h1 className="t-center pt-5">MUSIC TOUR</h1>
          <p className="t-center pt-4">
            Whether you're a commercial or theatre dancer, you're likely to find
            yourself on tour at some point in your career. A tour is a
            production that travels nationally or internationally, playing at a
            different location in each city.
          </p>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row dance">
            <div className="col-md-4">
              <img src={tour1} alt="tour1" />
              <h1>Mahesh</h1>
              <p>
                Whether you're a commercial or theatre dancer, you're likely to
                find yourself on tour at some point in your career.
              </p>
            </div>
            <div className="col-md-4">
              <img src={tour2} alt="tour2" />
              <h1>LUX</h1>
              <p>
                Whether you're a commercial or theatre dancer, you're likely to
                find yourself on tour at some point in your career.
              </p>
            </div>
            <div className="col-md-4">
              <img src={tour1} alt="tour1" />
              <h1>Mahesh</h1>
              <p>
                Whether you're a commercial or theatre dancer, you're likely to
                find yourself on tour at some point in your career.
              </p>
            </div>
          </div>
        </div>
        <div className="row tour bg-black pt-5">
          <h1 className="t-center">PRICTING</h1>
          <p className="t-center pt-4">
            Whether you're a commercial or theatre dancer, you're likely to find
            yourself on tour at some point in your career. A tour is a
            production that travels nationally or internationally, playing at a
            different location in each city.
          </p>
        </div>
        <div className="row bg-black">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <img src={winner} alt="winning" />
          </div>
          <div className="col-md-3">
            <img src={winner} alt="winning" />
          </div>
          <div className="col-md-3">
            <img src={winner} alt="winning" />
          </div>
        </div>
        <div className="row tour bg-black pt-5">
          <h1 className="t-center">OUR MUSIC</h1>
          <p className="t-center pt-4">
            Whether you're a commercial or theatre dancer, you're likely to find
            yourself on tour at some point in your career. A tour is a
            production that travels nationally or internationally, playing at a
            different location in each city.
          </p>
        </div>
        <div class="row bg-black p-5 count">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <CountUp end={3500} duration={4} className="countend"/><span>+</span>
            <h3>Music Students</h3>
          </div>
          <div className="col-md-3">
            <CountUp end={1000} duration={4} className="countend" /><span>+</span>
            <h3>Music Classess</h3>
          </div>
          <div className="col-md-4">
            <CountUp end={5200} duration={4}className="countend" /><span>+</span>
            <h3>Music Completed</h3>
          </div>
        </div>
        <div className="md row">
          <div className="col-md-4"></div>
          <div className="col-md-5">
            <p>
              Whether you're a commercial or theatre dancer, you're likely to
              find yourself on tour at some point in your career. A tour is a
              production that travels nationally or internationally, playing at
              a different location in each city.
            </p>
            <strong>
              <h2>APPLE MUSIC</h2>
            </strong>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row sub mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-5">
            <h1 className="t-center">SUBSURIBE</h1>
            <p>
              Whether you're a commercial or theatre dancer, you're likely to
              find yourself on tour at some point in your career. A tour is a
              production that travels nationally or internationally, playing at
              a different location in each city.
            </p>
            <input />
            <button>SUBSURIBE</button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <section className="abouthead  d-flex align-items-center">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-12">
              <h1 className="maintext">About Us</h1>
              <p className="paratxt">
                At Fliotravels, you will get superb services and user experience
                at reasonable prices.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="image-about-us">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contant">
              <h3>Why Fly The Rest When You Can Fly The Best? </h3>
              <p>
                Flio Holidays is committed to providing its clients with top
                deals at the most affordable price. We strive to make your
                flight booking experience a memorable one. Whether you are
                looking for a domestic flight or an international flight to your
                dream destination, we have got you covered. Our executives and
                support agents are available round the clock to make your
                journey as comfortable as possible.
              </p>

              <p>
                {" "}
                In the last 12 years, we have served hundreds of thousands of
                patrons from across the globe. Our services are not just limited
                to personal travel but are also available for business trips and
                group journeys. We offer a personalized booking experience and
                are always committed to meeting the needs of our travellers. For
                frequent travelers and loyal patrons who have shown a lot of
                trust in us, we have a specific price range. In nutshell, you
                are always entitled for the best with Flio Holidays
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;

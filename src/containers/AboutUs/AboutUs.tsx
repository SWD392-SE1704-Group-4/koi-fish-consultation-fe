import React from "react";
import "./AboutUs.css";
import Header from "../../components/organism/Header";
import Footer from "../../components/organism/Footer";

const AboutUsSection = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
            alt="About Us"
            className="about-us-img"
          />
        </div>
        <div className="about-us-text">
          <h1>About Us</h1>
        </div>
        <div className="additional-content"></div>
      </div>

      <div className="about-us-information-detail">
        <h1>About Us – Feng Shui Koi</h1>
        <p>
          Welcome to <strong>Feng Shui Koi</strong>, where the wisdom of Feng
          Shui meets the timeless beauty of koi fish. Our platform is designed
          to provide personalized recommendations for koi fish based on your
          gender and birth year, aligning with your specific Feng Shui elements
          and life energy. We believe that through the right choice of koi fish,
          you can create a harmonious balance that enhances your well-being and
          prosperity.
        </p>

        <h2>How It Works</h2>
        <p>
          At <strong>Feng Shui Koi</strong>, we’ve simplified the process of
          aligning your life energy with the positive influences of koi fish. By
          collecting basic details—such as your gender and birth year—we
          calculate your Feng Shui <em>bản mệnh</em> (life element). Based on
          your unique <em>bản mệnh</em>, we suggest koi fish that will help
          balance your energy and bring good fortune into your life.<br></br>{" "}
          Each koi fish carries its own symbolism and energy, and our
          recommendations are designed to help you choose fish that harmonize
          with your personal Feng Shui elements. Whether you are seeking koi for
          your personal pond, business, or just exploring the fascinating world
          of Feng Shui, we have the insights you need.
        </p>

        <h2>Advertiser-Friendly Platform</h2>
        <p>
          <strong>Feng Shui Koi</strong> is not just a space for koi
          enthusiasts; it’s also an ideal platform for advertisers in the koi
          industry. Our platform offers advertisers the opportunity to promote
          their koi fish based on categories curated by our staff. These
          categories are thoughtfully designed to ensure that the right ads
          reach the right audience. Whether you’re advertising rare breeds or
          koi maintenance services, we make sure your products or services are
          targeted to the correct <em>bản mệnh</em> profiles of our users.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to make the process of choosing koi fish through Feng
          Shui both accessible and meaningful. By leveraging ancient principles
          and modern technology, we empower our users to make better decisions,
          enhance their living spaces, and bring luck and prosperity through the
          selection of koi fish. <br></br>
          Whether you’re a Feng Shui novice or a seasoned koi collector, Feng
          Shui Koi is your trusted companion on this unique journey. Discover
          the perfect koi for your bản mệnh, and bring the calming, prosperous
          energy of these majestic fish into your life.
        </p>

        <p>
          Welcome to <strong>Feng Shui Koi</strong>—where nature, energy, and
          tradition come together.
        </p>
      </div>
      <Footer></Footer>

      {/* <Header></Header>
      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
            alt="About Us"
            className="about-us-img"
          />
        </div>
        <div className="about-us-text">
          <h1>About Us</h1>
        </div>
        <div className="additional-content"></div>
      </div>

      <div className="about-us-information-detail">
        <h1>About Us – Feng Shui Koi</h1>
        <p>
          Welcome to <strong>Feng Shui Koi</strong>, where the wisdom of Feng
          Shui meets the timeless beauty of koi fish. Our platform is designed
          to provide personalized recommendations for koi fish based on your
          gender and birth year, aligning with your specific Feng Shui elements
          and life energy. We believe that through the right choice of koi fish,
          you can create a harmonious balance that enhances your well-being and
          prosperity.
        </p>

        <h2>How It Works</h2>
        <p>
          At <strong>Feng Shui Koi</strong>, we’ve simplified the process of
          aligning your life energy with the positive influences of koi fish. By
          collecting basic details—such as your gender and birth year—we
          calculate your Feng Shui <em>bản mệnh</em> (life element). Based on
          your unique <em>bản mệnh</em>, we suggest koi fish that will help
          balance your energy and bring good fortune into your life.<br></br>{" "}
          Each koi fish carries its own symbolism and energy, and our
          recommendations are designed to help you choose fish that harmonize
          with your personal Feng Shui elements. Whether you are seeking koi for
          your personal pond, business, or just exploring the fascinating world
          of Feng Shui, we have the insights you need.
        </p>

        <h2>Advertiser-Friendly Platform</h2>
        <p>
          <strong>Feng Shui Koi</strong> is not just a space for koi
          enthusiasts; it’s also an ideal platform for advertisers in the koi
          industry. Our platform offers advertisers the opportunity to promote
          their koi fish based on categories curated by our staff. These
          categories are thoughtfully designed to ensure that the right ads
          reach the right audience. Whether you’re advertising rare breeds or
          koi maintenance services, we make sure your products or services are
          targeted to the correct <em>bản mệnh</em> profiles of our users.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to make the process of choosing koi fish through Feng
          Shui both accessible and meaningful. By leveraging ancient principles
          and modern technology, we empower our users to make better decisions,
          enhance their living spaces, and bring luck and prosperity through the
          selection of koi fish. <br></br>
          Whether you’re a Feng Shui novice or a seasoned koi collector, Feng
          Shui Koi is your trusted companion on this unique journey. Discover
          the perfect koi for your bản mệnh, and bring the calming, prosperous
          energy of these majestic fish into your life.
        </p>

        <p>
          Welcome to <strong>Feng Shui Koi</strong>—where nature, energy, and
          tradition come together.
        </p>
      </div> */}

    </React.Fragment>
  );
};

export default AboutUsSection;

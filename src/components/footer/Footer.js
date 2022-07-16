import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_left">
          <p className="footer_heading">Contact us</p>
          <p className="mr_tb">Akshya Nagar 1st Block 1st Cross</p>
          <p className="mr_tb">Rammurthy nagar, Bangalore-560016 </p>
          <p className="mr_tb"> simrangangwani3107@gmail.com </p>
          <p className="mr_tb">(+91)9876 54321</p>
          <p className="mr_tb">
            <a
              href="https://simran-gangwani.netlify.app/"
              className="color_primary txt_link"
            >
              www.simrangangwani.com
            </a>
          </p>
          <div>
            <a target="_blank" href="https://github.com/simran61">
              <img
                src="/assets/images/github.png"
                alt=""
                className="social_icon"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/simran-gangwani-b93a441b2/"
            >
              <img
                src="/assets/images/linkedin.png"
                alt=""
                className="social_icon"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/simran_wb65/">
              <img
                src="/assets/images/instagram.png"
                alt=""
                className="social_icon"
              />
            </a>
            <a target="_blank" href="https://twitter.com/SimranGangwani3">
              <img
                src="/assets/images/twitter.png"
                alt=""
                className="social_icon"
              />
            </a>
          </div>
        </div>

        <div className="footer_center">
          <p className="footer_heading">Explore More</p>
          <p className="mr_tb">Features</p>
          <p className="mr_tb">Before you go</p>
          <p className="mr_tb">Developer</p>
          <p className="mr_tb">FAQ</p>
        </div>

        <div className="footer_center">
          <p className="footer_heading">About Us</p>
          <p className="mr_tb">How it works</p>
          <p className="mr_tb">About us</p>
          <p className="mr_tb">Affiliate</p>
          <p className="mr_tb">Popular posts</p>
        </div>

        <div className="footer_right">
          <p className="footer_heading">Instagram</p>
          <div className="footer_images">
            <img
              src="/assets/images/notes1.jpeg"
              alt=""
              className="footer_img"
            />
            <img
              src="/assets/images/notes2.jpg"
              alt=""
              className="footer_img"
            />
            <img
              src="/assets/images/notes3.jpeg"
              alt=""
              className="footer_img"
            />
            <img
              src="/assets/images/notes4.jpeg"
              alt=""
              className="footer_img"
            />
            <img
              src="/assets/images/notes5.jpg"
              alt=""
              className="footer_img"
            />
            <img
              src="/assets/images/notes6.jpg"
              alt=""
              className="footer_img"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };

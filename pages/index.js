import Link from "next/dist/client/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layouts/Layout";
import { projectSliderOne, projectSliderTwo } from "../src/sliderProps";

const Index = () => {
	return (
		<Layout
			transparentHeader
			transparentTop
			footerSolidBg>
			<section className="hero-area-one">
				<div className="hero-text">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-10">
								<h1
									className="title wow fadeInUp"
									data-wow-delay="0.4s">
									Decentralized Crowdfunding
								</h1>
								<Link href="/projects">
									<a
										className="main-btn wow fadeInUp"
										data-wow-delay="0.5s">
										Explore Campaigns <i className="far fa-arrow-right" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="hero-shapes">
						<div className="hero-line-one">
							<img
								src="assets/img/hero/hero-line.png"
								alt="Line"
							/>
						</div>
						<div className="hero-line-two">
							<img
								src="assets/img/hero/hero-line-2.png"
								alt="Line"
							/>
						</div>
						<div className="dot-one" />
						<div className="dot-two" />
					</div>
				</div>
				<div className="hero-images">
					<div
						className="hero-img image-small fancy-bottom wow fadeInLeft"
						data-wow-delay="0.6s">
						<img
							src="assets/img/hero/hero-one-small.jpg"
							alt="Image"
						/>
					</div>
					<div
						className="hero-img main-img wow fadeInUp"
						data-wow-delay="0.5s">
						<img
							src="assets/img/hero/hero-one-big.jpg"
							alt="Image"
						/>
					</div>
					<div
						className="hero-img image-small fancy-top wow fadeInRight"
						data-wow-delay="0.7s">
						<img
							src="assets/img/hero/hero-one-small-2.jpg"
							alt="Image"
						/>
					</div>
				</div>
			</section>
			{/*====== Hero Area End ======*/}
			{/*====== Categories Section Start ======*/}
			<section className="popular-categories section-gap">
				<div className="container">
					<div className="categories-header">
						<div className="row align-items-center justify-content-between">
							<div className="col-auto">
								<div className="common-heading mb-30">
									<span className="tagline">
										<i className="fas fa-plus" /> what we do
										<span className="heading-shadow-text">Category</span>
									</span>
									<h2 className="title">Popular Categories</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center fancy-icon-boxes">
						<div
							className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
							data-wow-delay="0s">
							<div className="fancy-box-item mt-30">
								<div className="icon">
									<i className="flaticon-reading-book" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="/projects">
											<a>Education</a>
										</Link>
									</h4>
									<p>School, Collage &amp; University</p>
								</div>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="fancy-box-item mt-30">
								<div className="icon">
									<i className="flaticon-stethoscope" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="/projects">
											<a>Medical &amp; Health</a>
										</Link>
									</h4>
									<p>School, Collage &amp; University</p>
								</div>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
							data-wow-delay="0.2s">
							<div className="fancy-box-item mt-30">
								<div className="icon">
									<i className="flaticon-tshirt-1" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="/projects">
											<a>Clothes</a>
										</Link>
									</h4>
									<p>School, Collage &amp; University</p>
								</div>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="fancy-box-item mt-30">
								<div className="icon">
									<i className="flaticon-video-camera" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="/projects">
											<a>Video &amp; Films</a>
										</Link>
									</h4>
									<p>School, Collage &amp; University</p>
								</div>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
							data-wow-delay="0.4s">
							<div className="fancy-box-item mt-30">
								<div className="icon">
									<i className="flaticon-project-management" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="/projects">
											<a>Technology</a>
										</Link>
									</h4>
									<p>School, Collage &amp; University</p>
								</div>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="fancy-box-item mt-30">
								<div className="icon">
									<i className="flaticon-salad" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="/projects">
											<a>Organic Foods</a>
										</Link>
									</h4>
									<p>School, Collage &amp; University</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*====== Categories Section End ======*/}
			{/*====== About Section Start ======*/}
			<section className="about-section-one">
				<div className="container">
					<div className="row align-items-center justify-content-lg-start justify-content-center">
						<div className="col-xl-6 col-lg-7 col-md-9">
							<div className="about-img">
								<img
									src="assets/img/about/about-one.jpg"
									alt="Image"
								/>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
							<div className="about-text mt-md-70 mb-md-50">
								<div className="common-heading mb-30">
									<span className="tagline">
										<i className="fas fa-plus" /> who we are
										<span className="heading-shadow-text">About Us</span>
									</span>
									<h2 className="title">Why Choose Us</h2>
								</div>
								<p>
									Built this project with huge passion for my Computer Science
									final thesis.
								</p>
								<div className="author-note wow fadeInUp">
									<ul>
										<li>
											<i className="far fa-check" /> Help achieve
											decentralization
										</li>
										<li>
											<i className="far fa-check" /> {`Foster entrepreneurship`}{" "}
										</li>
									</ul>
									<div className="author-info">
										<div className="author-img">
											<img
												src="assets/img/author-thumbs/01.jpg"
												alt="Image"
											/>
										</div>
										<h5 className="name">Julian J. Neuss</h5>
										<span className="title">Founder</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*====== About Section End ======*/}
			{/*====== Project Section Start ======*/}
			{/* <section className="project-section project-section-extra-gap secondary-bg">
        <div className="container-fluid fluid-extra-padding">
          <div className="common-heading text-center color-version-white mb-60">
            <span className="tagline">
              <i className="fas fa-plus" /> Popular Projects
              <span className="heading-shadow-text">Our Projects</span>
            </span>
            <h2 className="title">Explore Our Projects</h2>
          </div>
          <Slider
            {...projectSliderOne}
            className="row project-slider-one project-items project-style-one no-shadow"
          >
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-01.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Video &amp; Movies</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Best Romantic &amp; Action English Movie Release in
                        2022.
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">79%</span>
                    </div>
                    <div className="stats-bar" data-value={79}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-02.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Educations</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>Needs Close Up Students Class Room In University</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-03.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Technology</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Original Shinecon VR Pro Virtual Reality 3D Glasses
                        VRBOX
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">85%</span>
                    </div>
                    <div className="stats-bar" data-value={85}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-04.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Clothes</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Fundraising For The People And Causes You Care About
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">83%</span>
                    </div>
                    <div className="stats-bar" data-value={83}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-05.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Covid -19</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        COVID-19 Vaccine Have Already Begun Introduced Countries
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">93%</span>
                    </div>
                    <div className="stats-bar" data-value={93}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-06.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Business</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Mobile First Is Just Not Goodies Enough Meet Journey
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">70%</span>
                    </div>
                    <div className="stats-bar" data-value={70}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-07.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Technology</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Fundraising For The People And Causes You Care About
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">81%</span>
                    </div>
                    <div className="stats-bar" data-value={81}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-08.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Mobile Kits</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        COVID-19 Vaccine Have Already Begun Introduced Countries
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">73%</span>
                    </div>
                    <div className="stats-bar" data-value={73}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-09.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Business</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Mobile First Is Just Not Goodies Enough Meet Journey
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">75%</span>
                    </div>
                    <div className="stats-bar" data-value={75}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
			{/*====== Project Section End ======*/}
			{/*====== Counter Area Start ======*/}
			{/* <section className="counter-section-one mt-negative">
        <div className="container primary-bg">
          <div className="row counter-boxes justify-content-xl-between justify-content-center">
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={3598} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">We’ve Project Complate</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={9634} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Global Partners</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={8565} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Awards Winning</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={4756} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Active Volunteer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
			{/*====== Counter Area End ======*/}
			{/*====== Testimonials Start ======*/}
			{/* <section className="testimonials-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
              <div className="testimonials-content mb-lg-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> clients Feedback
                    <span className="heading-shadow-text">Testimonials</span>
                  </span>
                  <h2 className="title">Why Choose Us</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan totam rem aperiam eaque ipsa
                  quae abillo inventore verit quasi architecto beatae vitae
                  dicta sunt
                </p>
                <Link href="/testimonial">
                  <a className="main-btn mt-35">
                    View All Reviews <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div
                  className="testimonial-author-boxes wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h6>Most Popular Clients</h6>
                  <ul className="author-images">
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Donald L. Juarez"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/01.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Evan A. Ethridge"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/02.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Donald L. Lewis"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/03.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Marcus L. Duncan"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/04.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Evan A. Ethridge"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/05.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="M. Jon Doe"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/06.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="More"
                    >
                      <a href="#" className="more-icon">
                        <i className="far fa-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-10">
              <div className="testimonial-boxes square-shape">
                <div className="row  justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div
                      className="testimonial-box-one wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/01.jpg"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">Howard A. Guest</h5>
                          <p className="position">Web Developer</p>
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div className="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/03.jpg"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">Howard A. Guest</h5>
                          <p className="position">Web Developer</p>
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div className="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/02.jpg"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">Howard A. Guest</h5>
                          <p className="position">Web Developer</p>
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div className="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/04.jpg"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">Howard A. Guest</h5>
                          <p className="position">Web Developer</p>
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div className="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
			{/*====== Testimonials End ======*/}
			{/*====== Emergency Project & CTA Start ======*/}
			{/* <section className="emergency-project-with-cta">
        <div className="container">
          <div
            className="cta-box cta-double-content"
            style={{ backgroundImage: "url(assets/img/cta/01.jpg)" }}
          >
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content">
                  <h2 className="cta-title">Get Funding And Support</h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <Link href="/events">
                    <a className="main-btn">
                      Start a Funden <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-lg-1 cta-double-content-gap" />
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content">
                  <h2 className="cta-title">Access Data And Insights</h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <Link href="/events">
                    <a className="main-btn">
                      Start a Funden <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="emergency-project-slider">
          <div className="container">
            <div className="common-heading text-center mb-60">
              <span className="tagline">
                <i className="fas fa-plus" /> Donate Projects
                <span className="heading-shadow-text">Donate</span>
              </span>
              <h2 className="title">Emergency Needed</h2>
            </div>
            <Slider
              {...projectSliderTwo}
              className="row project-slider-two project-items project-style-four"
            >
              <div className="col">
                <div className="project-item">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        "url(assets/img/project/project-slider-01.jpg)",
                    }}
                  />
                  <div className="content">
                    <div className="cats">
                      <Link href="/project-1">Covid -19</Link>
                    </div>
                    <div className="author">
                      <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <h5 className="title">
                      <Link href="/project-details">
                        <a>
                          Fundraising For The People And Causes You Car About
                        </a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className="stats-value">
                        <span className="value-title">
                          Raised of <span className="value">$59,689</span>
                        </span>
                        <span className="stats-percentage">83%</span>
                      </div>
                      <div className="stats-bar" data-value={90}>
                        <div className="bar-line" />
                      </div>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="project-item">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        "url(assets/img/project/project-slider-02.jpg)",
                    }}
                  />
                  <div className="content">
                    <div className="cats">
                      <Link href="/project-1">Covid -19</Link>
                    </div>
                    <div className="author">
                      <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <h5 className="title">
                      <Link href="/project-details">
                        <a>
                          Fundraising For The People And Causes You Car About
                        </a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className="stats-value">
                        <span className="value-title">
                          Raised of <span className="value">$59,689</span>
                        </span>
                        <span className="stats-percentage">83%</span>
                      </div>
                      <div className="stats-bar" data-value={90}>
                        <div className="bar-line" />
                      </div>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="project-item">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        "url(assets/img/project/project-slider-01.jpg)",
                    }}
                  />
                  <div className="content">
                    <div className="cats">
                      <Link href="/project-1">Covid -19</Link>
                    </div>
                    <div className="author">
                      <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <h5 className="title">
                      <Link href="/project-details">
                        <a>
                          Fundraising For The People And Causes You Car About
                        </a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className="stats-value">
                        <span className="value-title">
                          Raised of <span className="value">$59,689</span>
                        </span>
                        <span className="stats-percentage">83%</span>
                      </div>
                      <div className="stats-bar" data-value={90}>
                        <div className="bar-line" />
                      </div>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="project-item">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        "url(assets/img/project/project-slider-02.jpg)",
                    }}
                  />
                  <div className="content">
                    <div className="cats">
                      <Link href="/project-1">Covid -19</Link>
                    </div>
                    <div className="author">
                      <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <h5 className="title">
                      <Link href="/project-details">
                        <a>
                          Fundraising For The People And Causes You Car About
                        </a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className="stats-value">
                        <span className="value-title">
                          Raised of <span className="value">$59,689</span>
                        </span>
                        <span className="stats-percentage">83%</span>
                      </div>
                      <div className="stats-bar" data-value={90}>
                        <div className="bar-line" />
                      </div>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section> */}
			{/*====== Emergency Project & CTA End ======*/}
			{/*====== Partners Section Start ======*/}
			{/* <section className="partners-section section-gap section-border-bottom">
        <div className="container">
          <div className="common-heading mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Our Partners
              <span className="heading-shadow-text">Partners</span>
            </span>
            <h2 className="title">Trusted Partners</h2>
          </div>
          <div className="row partners-logos-one">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/01.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/02.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/03.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/04.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/05.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/06.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/07.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="/testimonial">
                  <a>
                    <img src="assets/img/partners/08.png" alt="Image" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
			{/*====== Partners Section End ======*/}
			{/*====== Latest News Start ======*/}
			{/* <section className="latest-blog-section section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Latest News &amp; Blog
              <span className="heading-shadow-text">News Blog</span>
            </span>
            <h2 className="title">Get Every Single Update</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-one">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/01.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>Standing Out From Crowds mproving Mobile Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/02.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>
                        Five Rules Of App Localization China Money Dating And
                        App Store
                      </a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/03.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>How To Use Underlined Text Improve User Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
		</Layout>
	);
};

export default Index;

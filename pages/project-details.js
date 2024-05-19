import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import axios from "axios";

const ProjectDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const [campaign, setCampaign] = useState(null);

	useEffect(() => {
		if (id) {
			const fetchCampaign = async () => {
				try {
					const response = await axios.get(
						`https://yatocx4w17.execute-api.sa-east-1.amazonaws.com/Prod/GetCampaignByID/${id}`
					);
					setCampaign(response.data.campaign);
				} catch (error) {
					console.error("Error fetching campaign details:", error);
				}
			};

			fetchCampaign();
		}
	}, [id]);

	if (!campaign) {
		return <div>Loading...</div>;
	}

	return (
		<Layout>
			<PageBanner pageName="Project Details" />
			<section className="project-details-area section-gap-extra-bottom">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-6 col-md-10">
							<div className="project-thumb mb-md-50">
								<img
									src={campaign.banner_image}
									alt="Campaign Image"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="project-summery">
								<Link href={`/project-1`}>
									<a className="category">{campaign.category || "General"}</a>
								</Link>
								<h3 className="project-title">{campaign.title}</h3>
								<div className="meta">
									<div className="author">
										<img
											src="assets/img/author-thumbs/03.jpg"
											alt="Thumb"
										/>
										<a href="#">{campaign.organizer_name}</a>
									</div>
									<a
										href="#"
										className="date">
										<i className="far fa-calendar-alt" />
										{new Date(campaign.created_at).toLocaleDateString()}
									</a>
								</div>
								<div className="project-funding-info">
									<div className="info-box">
										<span>${campaign.raised}</span>
										<span className="info-title">Pledged</span>
									</div>
									<div className="info-box">
										<span>9</span>
										<span className="info-title">Backers</span>
									</div>
									<div className="info-box">
										<span>29</span>
										<span className="info-title">Days Left</span>
									</div>
								</div>
								<div className="project-raised clearfix">
									<div className="d-flex align-items-center justify-content-between">
										<div className="raised-label">
											Raised of ${campaign.max_amount}
										</div>
										<div className="percent-raised">
											{Math.min(
												Math.floor(
													(campaign.raised / campaign.max_amount) * 100
												),
												100
											)}
											%
										</div>
									</div>
									<div
										className="stats-bar"
										data-value={79}>
										<div className="bar-line" />
									</div>
								</div>
								<div className="project-form">
									<form
										onSubmit={(e) => e.preventDefault()}
										action="#">
										<ul className="donation-amount">
											<li>$5</li>
											<li>$50</li>
											<li>$180</li>
											<li>$500</li>
											<li>$1000</li>
										</ul>
										<button
											type="submit"
											className="main-btn">
											Donate Now <i className="far fa-arrow-right" />
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="project-details-tab">
								<div
									className="tab-content"
									id="projectTabContent">
									<div
										className="tab-pane fade show active"
										id="description"
										role="tabpanel">
										<div className="row justify-content-center">
											<div className="col-lg-8">
												<div className="description-content">
													<h4 className="description-title">
														{campaign.title}
													</h4>
													<p>{campaign.description}</p>
													<img
														className="mt-50 mb-50"
														src={campaign.banner_image}
														alt="Image"
													/>
													<h4 className="description-title">
														Why Donate Our Products
													</h4>
													<p>
														Nemo enim ipsam voluptatem quia voluptas sit
														aspernatur aut odit aut fugit, sed quia consequuntur
														magni dolores eos qui ratione voluptatem sequi
														nesciunt. Neque porro quisquam est, qui dolorem
														ipsum quia dolor sit amet, consectetur, adipisci
														velit, sed quia non numquam eius modi temporadunt ut
														labore et dolore magnam aliquam quaerat voluptate
														enim ad minima veniam suscipit
													</p>
													<ul className="description-list">
														<li>Standard Lorem Sum Passage Used</li>
														<li>Build A Music Manager With Nuxt</li>
														<li>A Foldable Web Actually Mean</li>
														<li>Upcoming Web Design Conferences</li>
													</ul>
													<p>
														But I must explain to you how all this mistaken idea
														of denouncing pleasure and praising pain was born
														and I will give you a complete account of the
														system, and expound the actual teachings of the
														great explorer of the truth, the master-builder of
														human happiness. No one rejects, dislikes,
													</p>
												</div>
											</div>
											<div className="col-lg-4 col-md-6 col-sm-10">
												<div className="rewards-box">
													<h4 className="title">Rewards</h4>
													<img
														src="assets/img/project/project-rewards.jpg"
														alt="Image"
														className="w-100"
													/>
													<span className="rewards-count">
														<span>$530</span> or More
													</span>
													<p>
														But must explain to you how all this mistaken idea
														of denouncing plasue and praising pain was born
													</p>
													<div className="delivery-date">
														<span>25 Mar 20210</span>
														Estimated Delivery
													</div>
													<ul className="rewards-info">
														<li>
															<i className="far fa-user-circle" />5 Backers
														</li>
														<li>
															<i className="far fa-trophy-alt" />
															29 Rewards Left
														</li>
													</ul>
													<Link href="/events">
														<a className="main-btn">
															Select Rewards{" "}
															<i className="far fa-arrow-right" />
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="update"
										role="tabpanel">
										Update
									</div>
									<div
										className="tab-pane fade"
										id="bascker-list"
										role="tabpanel">
										Bascker List
									</div>
									<div
										className="tab-pane fade"
										id="reviews"
										role="tabpanel">
										Reviews
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ProjectDetails;

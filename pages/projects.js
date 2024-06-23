import React, { useState, useEffect } from "react";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import axios from "axios";
import { getPolygonBalance } from "../utils/polygon"; // Import the utility function

const Project3 = () => {
	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		const fetchCampaigns = async () => {
			try {
				const response = await axios.get(
					"https://cfvf867puh.execute-api.us-east-1.amazonaws.com/default/getCampaign"
				);
				console.log("Response Data:", response.data); // Log the entire response

				const campaignsWithBalances = await Promise.all(
					response.data.campaigns.map(async (campaign) => {
						const balance = await getPolygonBalance(campaign.wallet_address); // Fetch the balance
						return {
							...campaign,
							raised: balance, // Update the raised field with the fetched balance
							bannerImage: campaign.banner_image, // Directly use the URL
						};
					})
				);
				setCampaigns(campaignsWithBalances);
			} catch (error) {
				console.error("Error fetching campaigns:", error);
			}
		};

		fetchCampaigns();
	}, []);

	return (
		<Layout>
			<PageBanner pageName="Open Campaigns" />
			<section className="project-section section-gap-extra-bottom primary-soft-bg">
				<div className="container">
					<div className="row project-items project-style-three justify-content-center">
						{campaigns.map((campaign) => (
							<div
								className="col-lg-6 col-sm-10"
								key={campaign.id}>
								<div className="project-item mb-30">
									<div
										className="thumb"
										style={{
											backgroundImage: `url(${campaign.bannerImage})`,
										}}
									/>
									<div className="content">
										<div className="cats">
											<Link href={`/project-details/${campaign.id}`}>
												{campaign.category || "General"}
											</Link>
										</div>

										<h5 className="title">
											<Link href={`/project-details/${campaign.id}`}>
												<a>{campaign.title}</a>
											</Link>
										</h5>
										{/* <p style={{ color: "white", marginBottom: "15px" }}>
											{campaign.description}
										</p> */}
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">
													Raised of{" "}
													<span className="value">${campaign.raised}</span>
												</span>
												<span className="stats-percentage">
													{Math.min(
														Math.floor(
															(campaign.raised / campaign.max_amount) * 100
														),
														100
													)}
													%
												</span>
											</div>
											<div
												className="stats-bar"
												data-value={Math.min(
													Math.floor(
														(campaign.raised / campaign.max_amount) * 100
													),
													100
												)}>
												<div className="bar-line" />
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						<div className="col-12">
							<div className="view-more-btn text-center mt-40">
								<Link href="/project-details">
									<a className="main-btn bordered-btn">
										View More Projects <i className="far fa-arrow-right" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Project3;

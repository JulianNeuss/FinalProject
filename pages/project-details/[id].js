import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/layouts/Layout";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { getPolygonBalance, getPolygonTransactions } from "../../utils/polygon";

const ProjectDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const [campaign, setCampaign] = useState(null);
	const [transactions, setTransactions] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (id) {
			const fetchCampaign = async () => {
				try {
					const response = await axios.get(
						`https://yatocx4w17.execute-api.sa-east-1.amazonaws.com/Prod/GetCampaignByID?id=${id}`
					);
					const campaignData = response.data.campaign;
					const balance = await getPolygonBalance(campaignData.wallet_address);
					const transactionHistory = await getPolygonTransactions(
						campaignData.wallet_address
					);

					setCampaign({ ...campaignData, raised: balance });
					setTransactions(transactionHistory);
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

	const handleDonateClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

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
										{/* <img
											src="/assets/img/author-thumbs/03.jpg"
											alt="Thumb"
										/> */}
										{/* <a href="#">{campaign.organizer_name}</a> */}
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
										<span>{campaign.raised} MATIC</span>
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
											Raised {campaign.raised} of {campaign.max_amount} MATIC
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
										<button
											type="button"
											className="main-btn"
											onClick={handleDonateClick}>
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
											<div className="col-lg-12">
												<div className="description-content">
													<h4 className="description-title">
														{campaign.title}
													</h4>
													<ReactMarkdown>{campaign.description}</ReactMarkdown>
													<h4 className="description-title">
														Transaction History
													</h4>
													<div className="table-responsive">
														<table className="table table-striped table-bordered w-100">
															<thead className="thead-dark">
																<tr>
																	<th>Hash</th>
																	<th>From</th>
																	<th>To</th>
																	<th>Value (MATIC)</th>
																	<th>Date</th>
																</tr>
															</thead>
															<tbody>
																{transactions.map((tx) => (
																	<tr key={tx.hash}>
																		<td>{tx.hash}</td>
																		<td>{tx.from}</td>
																		<td>{tx.to}</td>
																		<td>{tx.value / Math.pow(10, 18)}</td>
																		<td>
																			{new Date(
																				tx.timeStamp * 1000
																			).toLocaleDateString()}
																		</td>
																	</tr>
																))}
															</tbody>
														</table>
													</div>
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

			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<span
							className="close"
							onClick={handleCloseModal}>
							&times;
						</span>
						<h2>Donate to {campaign.title}</h2>
						<p>To donate, please send MATIC to the following wallet address:</p>
						<p className="wallet-address">{campaign.wallet_address}</p>
					</div>
				</div>
			)}

			<style jsx>{`
				.modal {
					display: flex;
					justify-content: center;
					align-items: center;
					position: fixed;
					z-index: 1;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					overflow: auto;
					background-color: rgb(0, 0, 0);
					background-color: rgba(0, 0, 0, 0.4);
				}

				.modal-content {
					background-color: #fefefe;
					margin: 15% auto;
					padding: 20px;
					border: 1px solid #888;
					width: 80%;
					max-width: 600px;
					border-radius: 10px;
					text-align: center;
				}

				.close {
					color: #aaa;
					float: right;
					font-size: 28px;
					font-weight: bold;
				}

				.close:hover,
				.close:focus {
					color: black;
					text-decoration: none;
					cursor: pointer;
				}

				.wallet-address {
					font-family: monospace;
					font-size: 1.2em;
					background: #f4f4f4;
					padding: 10px;
					border-radius: 5px;
				}
			`}</style>
		</Layout>
	);
};

export default ProjectDetails;

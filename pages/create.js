import React, { useState } from "react";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/components/PageBanner";
import axios from "axios";

const Create = () => {
	const [bannerImage, setBannerImage] = useState("");
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [walletAddress, setWalletAddress] = useState("");
	const [token, setToken] = useState("");
	const [minThreshold, setMinThreshold] = useState("");
	const [maxAmount, setMaxAmount] = useState("");
	const [instagramLink, setInstagramLink] = useState("");
	const [websiteLink, setWebsiteLink] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [organizerName, setOrganizerName] = useState("");
	const [country, setCountry] = useState("");
	const [address, setAddress] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleImageChange = (e) => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			setBannerImage(file);
			setImagePreviewUrl(reader.result);
		};

		reader.readAsDataURL(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(
			bannerImage,
			title,
			description,
			walletAddress,
			token,
			minThreshold,
			maxAmount,
			instagramLink,
			websiteLink,
			email,
			phoneNumber,
			organizerName,
			country,
			address
		);
		// Get the S3 URL for the uploaded image
		const imageUrl = await getPresignedUrlAndUpload(bannerImage);

		console.log(imageUrl);

		const campaignData = {
			bannerImage: imageUrl,
			title,
			description,
			walletAddress,
			token,
			minThreshold,
			maxAmount,
			instagramLink,
			websiteLink,
			email,
			phoneNumber,
			organizerName,
			country,
			address,
		};

		try {
			const response = await axios.post(
				"https://cfvf867puh.execute-api.us-east-1.amazonaws.com/default/createCampaign",
				campaignData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(response.data);
			setSuccessMessage("Campaign created successfully!");
			setErrorMessage("");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error creating campaign. Please try again.");
			setSuccessMessage("");
		}
	};

	const getPresignedUrlAndUpload = async (file) => {
		try {
			const fileName = `${Date.now()}-${file.name}`;

			// Call your Lambda function to get the pre-signed URL
			const presignedResponse = await axios.get(
				"https://cfvf867puh.execute-api.us-east-1.amazonaws.com/default/getPresignedUrlForS3Upload",
				{
					params: {
						fileName: fileName,
						fileType: file.type,
					},
				}
			);

			const presignedUrl = presignedResponse.data.uploadUrl
			console.log("Presigned URL:", presignedUrl);

			// Use the pre-signed URL to upload the file
			const uploadResponse = await axios.put(presignedUrl, file, {
				headers: {
					"Content-Type": file.type,
				},
			});
			console.log("Upload Response:", uploadResponse);

			// If successful, the image is now in S3, and you have the URL
			if (uploadResponse.status === 200) {
				const imageUrl = presignedUrl.split("?")[0]; // Remove the query string from the URL
				return imageUrl; // Use this URL to submit with the rest of your form data
			}
		} catch (error) {
			console.error("Error uploading file: ", error);
		}
	};

	return (
		<Layout>
			<PageBanner pageName="Create Campaign" />
			<section className="create-campaign-section section-gap">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<form onSubmit={handleSubmit}>
								<input
									type="file"
									onChange={(e) => handleImageChange(e)}
								/>
								{imagePreviewUrl && (
									<img
										src={imagePreviewUrl}
										alt="Campaign banner preview"
									/>
								)}
								<input
									type="text"
									placeholder="Title"
									onChange={(e) => setTitle(e.target.value)}
								/>
								<textarea
									placeholder="Description"
									onChange={(e) => setDescription(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Polygon Wallet Address"
									onChange={(e) => setWalletAddress(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Token to be Accepted"
									onChange={(e) => setToken(e.target.value)}
								/>
								<input
									type="number"
									placeholder="Minimum Threshold"
									onChange={(e) => setMinThreshold(e.target.value)}
								/>
								<input
									type="number"
									placeholder="Maximum Amount"
									onChange={(e) => setMaxAmount(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Instagram Link"
									onChange={(e) => setInstagramLink(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Website Link"
									onChange={(e) => setWebsiteLink(e.target.value)}
								/>
								<input
									type="email"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="tel"
									placeholder="Phone Number"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Organizer Name"
									onChange={(e) => setOrganizerName(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Country"
									onChange={(e) => setCountry(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Address"
									onChange={(e) => setAddress(e.target.value)}
								/>
								<button
									type="submit"
									style={{
										backgroundColor: "green",
										borderRadius: "20px",
										padding: "10px",
										color: "white",
										marginTop: "10px",
										marginBottom: "10px",
									}}>
									Create Campaign
								</button>
							</form>
							{successMessage && (
								<div className="alert alert-success">{successMessage}</div>
							)}
							{errorMessage && (
								<div className="alert alert-danger">{errorMessage}</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Create;

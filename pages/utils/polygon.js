import axios from "axios";

const API_KEY = "X6XCN7HVG4QPHVPCDVYUKGBGAIXFISNTWI"; // Replace with your Polygonscan API key

export const getPolygonBalance = async (address) => {
	try {
		const response = await axios.get(
			`https://api.polygonscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`
		);
		const balanceInWei = response.data.result;
		const balanceInEth = balanceInWei / Math.pow(10, 18); // Convert from Wei to Matic (Polygon)

		return balanceInEth;
	} catch (error) {
		console.error("Error fetching Polygon balance:", error);
		return 0;
	}
};

export const getPolygonTransactions = async (address) => {
	try {
		const response = await axios.get(
			`https://api.polygonscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
		);
		return response.data.result;
	} catch (error) {
		console.error("Error fetching Polygon transactions:", error);
		return [];
	}
};

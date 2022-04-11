import { generatorAddress, requestAccount } from '../App.js';
import { ethers } from 'ethers';
import Generator from '../artifacts/contracts/Generator.sol/Generator.json';

export async function async_getHash(_id) {
	if (typeof window.ethereum !== 'undefined') {
		await requestAccount()
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
		try {
			const signer = provider.getSigner();
			const result = await contract.connect(signer).getHash(_id);
			if(result[0] !== ''){
				console.log("Solution information for instance " + _id + ":");
				console.log("	- Solution hash: " + result[0]);
				console.log("	- Algorithm hash: " + result[1]);
				console.log("	- Hash method used: " + result[2]);
			}
		} catch (err) {
			console.log("Error: ", err)
		}
	}
}
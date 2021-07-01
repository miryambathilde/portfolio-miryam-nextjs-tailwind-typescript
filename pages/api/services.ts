import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
	// by default get request
	//status 200 is successfull

	console.log(services);
	res.status(200).json({ services });
};

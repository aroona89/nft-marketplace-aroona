import axios from "axios";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method, headers, query } = req;
  const { url } = query;

  try {
    if (!url) {
      throw new Error("Missing URL parameter");
    }

    const response = await axios({
      method: method as any,
      url: url as string,
      headers: {
        ...headers,
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res
      .status(error.response?.status || 500)
      .json({ error: "Something went wrong" });
  }
}

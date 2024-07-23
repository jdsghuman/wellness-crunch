import axios from "axios";
import { NextResponse } from "next/server";

function getRequestParams(email: string) {
  const API_KEY = process.env.MAILER_LITE_API_KEY;
  const LIST_ID = process.env.MAILER_LITE_GROUP_ID;

  const url = `https://api.mailerlite.com/api/v2/groups/${LIST_ID}/subscribers`;

  const data = {
    email: email,
    // Add other fields like name, country, etc., if needed
  };

  const headers = {
    "Content-Type": "application/json",
    "X-MailerLite-ApiKey": API_KEY,
  };

  return {
    url,
    data,
    headers,
  };
}

export async function POST(req: Request, res: Response) {
  const { email } = await req.json();
  if (!email || !email.length) {
    return new Response("Please add your email!", {
      status: 400,
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);
    await axios.post(url, data, { headers });
    return new NextResponse("Email is added!", {
      status: 201,
    });
  } catch (error) {
    console.log("Error:", error);
    return new NextResponse("Oops, something went wrong!", {
      status: 400,
    });
  }
}

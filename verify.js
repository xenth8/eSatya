// netlify/functions/verify.js
import { MongoClient } from "mongodb";

export async function handler(event, context) {
  const { certificateId } = event.queryStringParameters;

  if (!certificateId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Certificate ID is required" })
    };
  }

  try {
    // Connect to MongoDB (you’ll set MONGO_URI in Netlify dashboard)
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("esatya");
    const cert = await db.collection("certificates").findOne({ certificateId });

    if (!cert) {
      return {
        statusCode: 404,
        body: JSON.stringify({ valid: false, message: "Certificate not found" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ valid: true, data: cert })
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

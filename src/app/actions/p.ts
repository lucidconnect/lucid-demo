"use server";

import axios from "axios";

export const createSubscriptionAction = async (
  product_id: string,
  public_key: string,
  callback_url: string
) => {
  const response = await axios.post(
    "https://silver-arrow.onrender.com/checkout/sessions",
    {
      customer: "demo123",
      product_id,
      callback_url,
    },
    {
      headers: {
        Authorization: `Bearer ${public_key}`,
      },
    }
  );

  console.log(response.data);

  return response.data?.data?.session_id || undefined;
};

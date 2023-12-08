import { springUrl } from "../utils/Constants";

export async function getAllOrders() {
  try {
    const response = await fetch(`${springUrl}/allOrders`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong while fetching the orders");
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong while processing the response");
  }
}

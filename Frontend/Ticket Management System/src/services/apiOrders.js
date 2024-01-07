import { springUrl } from "../utils/Constants";

export async function getAllOrders({ email }) {
  try {
    const response = await fetch(
      `${springUrl}/all/orders/by/user?userEmail=${email}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong while fetching the orders");
    }

    return data.orders;
  } catch (error) {
    throw new Error("Something went wrong while processing the response");
  }
}

export async function postOrders({ email, orders }) {
  console.log(orders);
  try {
    const response = await fetch(
      `${springUrl}/place/order?userEmail=${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong while posting the orders");
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong while processing the response");
  }
}

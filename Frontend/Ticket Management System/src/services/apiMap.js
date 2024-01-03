import { springUrl } from "../utils/Constants";

export default async function getLocations({ token }) {
  try {
    const response = await fetch(`${springUrl}/all/events/for/map`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong while trying to get locations");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Something went wrong while fetching the locations");
  }
}

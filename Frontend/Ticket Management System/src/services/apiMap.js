import { springUrl } from "../utils/Constants";

export default async function getLocations() {
  try {
    const response = await fetch(`${springUrl}/all/events/for/map`, {});

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

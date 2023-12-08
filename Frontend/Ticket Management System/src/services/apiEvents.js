import { springUrl } from "../utils/Constants";

export async function getAllEvents() {
  try {
    const response = await fetch(`${springUrl}/allEvents`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong while fetching the events");
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong while processing the response");
  }
}

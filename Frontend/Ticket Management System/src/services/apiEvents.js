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

export async function getAllFilteredEvents(filterData) {
  try {
    const response = await fetch(
      `${springUrl}/filter/Sort/And/Paginate/Events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong while fetching the events");
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong while processing the response");
  }
}

export async function getAllEventsForSlider() {
  try {
    const response = await fetch(`${springUrl}/all/events/for/home`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        "Something went wrong while fetching the events for the slider"
      );
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong while processing the response");
  }
}

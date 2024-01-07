import { springUrl } from "../utils/Constants";

export async function login({ email, password }) {
  try {
    const response = await fetch(`${springUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong while trying to authenticate");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong while processing the response");
  }
}

export async function logout({ email }) {
  try {
    const response = await fetch(
      `${springUrl}/user/logout?userEmail=${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong while trying to log out");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong while processing the response");
  }
}

export async function register({ user }) {
  try {
    const response = await fetch(`${springUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Something went wrong while trying to authenticate");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong while processing the response");
  }
}

export async function getUser({ id }) {
  try {
    const response = await fetch(
      `${springUrl}/user/find/by/id?userId=${Number(id)}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong while trying to fetch the user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong while processing the response");
  }
}

export async function updateUser({ id, newBody }) {
  try {
    const response = await fetch(`${springUrl}/user/update?userId=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBody),
    });

    if (!response.ok) {
      throw new Error("Something went wrong while trying to update the user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong while processing the response");
  }
}

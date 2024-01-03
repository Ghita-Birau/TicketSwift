import { springUrl } from "../utils/Constants";

export async function login({ email, password }) {
  try {
    const response = await fetch(`${springUrl}/v1/auth/authenticate`, {
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

export async function register({ user }) {
  try {
    const response = await fetch(`${springUrl}/v1/auth/register`, {
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

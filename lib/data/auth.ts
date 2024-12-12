"use server";
import { cookies } from "next/headers";
import { CheckCredentialsResponse } from "../types/auth";

export async function login(websiteUrl: string, eventId: string) {
  try {
    const response = await fetch(`${websiteUrl}/tc-api/${eventId}/check_credentials`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      return {
        status: false,
        message: `HTTP error! status: ${response.status}`,
      };
    }

    const data = (await response.json()) as CheckCredentialsResponse;

    if (data.pass) {
      const cookieStore = cookies();
      cookieStore.set("websiteUrl", websiteUrl, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" || process.env.SIMULATE_PRODUCTION === "true",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      cookieStore.set("eventId", eventId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" || process.env.SIMULATE_PRODUCTION === "true",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      return {
        status: true,
        message: `Login successful! License key: ${data.license_key}`,
      };
    } else {
      return {
        status: false,
        message: `Login failed! Invalid credentials`,
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return {
      status: false,
      message: `Invalid credentials. Please check your website URL and event ID.`,
    };
  }
}

export async function getAuthData() {
  try {
    const websiteUrl = cookies().get("websiteUrl")?.value;
    const eventId = cookies().get("eventId")?.value;

    if (!websiteUrl || !eventId) {
      return null;
    } else {
      return { websiteUrl, eventId };
    }
  } catch (error) {
    console.error("Error retrieving auth data:", error);
    return null;
  }
}

export async function logout() {
  try {
    const cookieStore = cookies();
    cookieStore.delete("websiteUrl");
    cookieStore.delete("eventId");

    return {
      status: true,
      message: "Logout successful",
    };
  } catch (error) {
    console.error("Logout error:", error);
    return {
      status: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

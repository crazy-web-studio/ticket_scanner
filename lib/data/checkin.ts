"use server";
import { CheckInResponse } from "@/lib/types/ticket";

export async function checkInTicket(websiteUrl: string, eventId: string, ticketId: string): Promise<CheckInResponse | null> {
  try {
    const response = await fetch(`${websiteUrl}/tc-api/${eventId}/check_in/${ticketId}/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const data = (await response.json()) as CheckInResponse;

    return data;
  } catch (error: unknown) {
    // Type guard to check if error is an Error object
    if (error instanceof Error) {
      console.error("Error checking in ticket:", error.message);
    } else {
      console.error("An unknown error occurred during ticket check-in");
    }
    return null;
  }
}

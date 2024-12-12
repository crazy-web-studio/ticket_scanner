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
  } catch (error: any) {
    console.error("Error checking in ticket:", error.message);
    return null;
  }
}

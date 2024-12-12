"use server";
import { Ticket } from "@/lib/types/ticket";

export async function getTickets(websiteUrl: string, eventId: string): Promise<Ticket[]> {
  try {
    const response = await fetch(`${websiteUrl}/tc-api/${eventId}/tickets_info/9999/1/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = (await response.json()) as Ticket[];
    return data;
  } catch (error) {
    console.error("Error retrieving tickets:", error);
    return [];
  }
}

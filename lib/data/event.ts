"use server";
import { EventData } from "@/lib/types/event";

export async function getEventData(websiteUrl: string, eventId: string) {
  try {
    const response = await fetch(`${websiteUrl}/tc-api/${eventId}/event_essentials`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = (await response.json()) as EventData;
    if (data.pass) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving event data:", error);
    return null;
  }
}

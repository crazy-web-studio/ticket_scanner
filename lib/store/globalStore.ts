import { create } from "zustand";

interface GlobalStore {
  websiteUrl: string;
  eventId: string;
  setWebsiteUrl: (websiteUrl: string) => void;
  setEventId: (eventId: string) => void;

  selectedTicketCategory: "sold" | "checked" | "to_check";
  setSelectedTicketCategory: (selectedTicketCategory: "sold" | "checked" | "to_check") => void;
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
  websiteUrl: "",
  eventId: "",

  setWebsiteUrl: (websiteUrl) => set({ websiteUrl }),
  setEventId: (eventId) => set({ eventId }),

  selectedTicketCategory: "sold",
  setSelectedTicketCategory: (selectedTicketCategory) => set({ selectedTicketCategory }),
}));

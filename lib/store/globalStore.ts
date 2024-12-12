import { create } from "zustand";

interface GlobalStore {
  websiteUrl: string;
  eventId: string;
  setWebsiteUrl: (websiteUrl: string) => void;
  setEventId: (eventId: string) => void;
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
  websiteUrl: "",
  eventId: "",

  setWebsiteUrl: (websiteUrl) => set({ websiteUrl }),
  setEventId: (eventId) => set({ eventId }),
}));

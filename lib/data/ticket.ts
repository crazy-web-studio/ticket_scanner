"use server";

interface Ticket {
  id: string;
  attendeeName: string;
  attendeeSurname: string;
  ticketType: string;
  price: number;
  uniqueCode: string;
  purchaseDate: string;
}

export async function getTickets(): Promise<Ticket[]> {
  // TODO: Implement actual API call to WordPress backend
  // For now, we'll return mock data
  return [
    {
      id: "1",
      attendeeName: "John",
      attendeeSurname: "Doe",
      ticketType: "VIP",
      price: 100,
      uniqueCode: "ABC123",
      purchaseDate: "2023-05-15",
    },
    {
      id: "2",
      attendeeName: "Jane",
      attendeeSurname: "Smith",
      ticketType: "Regular",
      price: 50,
      uniqueCode: "DEF456",
      purchaseDate: "2023-05-16",
    },
    {
      id: "3",
      attendeeName: "Alice",
      attendeeSurname: "Johnson",
      ticketType: "VIP",
      price: 100,
      uniqueCode: "GHI789",
      purchaseDate: "2023-05-17",
    },
  ];
}

// ... rest of the file remains unchanged

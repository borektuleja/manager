export interface Event {
  id: number;
  title: string;
  scheduled_on: string;
  capacity: number | null;
  reservation: Reservation[];
}

export type EventDto = Omit<Event, "id" | "reservation">;

export interface Reservation {
  id: number;
  author: string;
  email: string;
  phone: string | null;
  note: string | null;
}

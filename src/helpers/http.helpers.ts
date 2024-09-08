import axios from "axios";

import { ENDPOINTS } from "@/constants";

import type { Event, EventDto } from "@/domain/types";

export async function getEvents(): Promise<Event[]> {
  return (await axios.get(`${import.meta.env.VITE_DOMAIN}/${ENDPOINTS.EVENTS}`)).data;
}

export async function postEvents(data: EventDto): Promise<void> {
  await axios.post(`${import.meta.env.VITE_DOMAIN}/${ENDPOINTS.EVENTS}`, JSON.stringify(data));
}

export async function patchEvents(id: number, data: EventDto): Promise<void> {
  await axios.patch(`${import.meta.env.VITE_DOMAIN}/${ENDPOINTS.EVENTS}/${id}`, JSON.stringify(data));
}

export async function deleteEvents(id: number): Promise<void> {
  await axios.delete(`${import.meta.env.VITE_DOMAIN}/${ENDPOINTS.EVENTS}/${id}`);
}

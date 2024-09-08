import { styled } from "@/utils";

export const wrapper = styled(`
  fixed
  inset-0
  z-20
  p-4
  flex
  items-center
  justify-center
  bg-neutral-950/80
`);

export const content = styled(`
  w-full
  max-w-md
  p-4
  border
  border-neutral-300/80
  rounded-lg
  bg-stone-50
`);

export const title = styled(`
  text-black
  text-xl
  font-titillium
  font-bold
  tracking-wide
`);

export const container = styled(`
  flex
  flex-col
  gap-16
`);

export const group = styled(`
  flex
  flex-col
  gap-4`
);

export const form = styled(`
  flex
  flex-col
  gap-4
`);

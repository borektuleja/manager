import { styled } from "@/utils";

export const wrapper = styled(`
  min-h-screen
  flex
  flex-col
  bg-stone-950
`);

export const content = styled(`
  overflow-hidden
  px-4
  pt-8
  pb-32
  flex
  flex-col
  items-center
  gap-12
`);

export const tags = styled(`
  w-full
  max-w-lg
  sm:max-w-full
  flex
  flex-col
  sm:flex-row
  flex-wrap
  justify-center
  gap-4
`);

export const paragraph = styled(`
  max-w-lg
  md:max-w-prose
  text-white
  text-base sm:text-lg
  text-justify
  font-titillium
  font-normal
  tracking-wider
`);

export const form = styled(`
  w-full
  max-w-lg
  flex
  flex-col
  gap-4
`);

import { styled } from "@/utils";

export const wrapper = styled(`
  max-w-md
  md:max-w-xl
  lg:max-w-2xl
  flex
  flex-col
  items-center
  gap-4
`);

export const h2 = styled(`
  text-transparent
  bg-clip-text
  bg-gradient-to-r
  from-sky-500
  to-rose-500
  text-lg
  md:text-2xl
  uppercase
  font-titillium
  font-bold
  tracking-wide
`);

export const h1 = styled(`
  text-white
  text-2xl
  md:text-3xl
  lg:text-4xl
  text-center
  font-titillium
  font-semibold
  tracking-wide
`);

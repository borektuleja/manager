import { styled } from "@/utils";

export const wrapper = styled(`
  sticky
  inset-0
  z-10
  px-4
  py-2
  border-b
  border-neutral-700/80
  flex
  justify-center
  backdrop-blur-lg
`);

export const content = styled(`
  container
`);

export const header = styled(`
  flex
  items-center
`);

export const icon = styled(`
  p-2
`);

export const title = styled(`
  text-transparent
  bg-clip-text
  bg-gradient-to-r
  from-sky-500
  to-rose-500
  text-2xl
  font-titillium
  font-bold
  tracking-wide
`);

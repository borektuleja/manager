import { styled } from "@/utils";

export const wrapper = styled(`
  w-full
  grid
  auto-cols-max
`);

export const head = styled(`
  contents
`);

export const body = styled(`
  contents
`);

export const tr = styled(`
  contents
`);

export const th = styled(`
  p-2
  border-l
  border-y
  last:border-r
  border-neutral-300/80
  text-black
  bg-neutral-300/20
  text-base
  font-titillium
  font-semibold
  tracking-wider
`);

export const td = styled(`
  p-2
  border-l
  border-b
  last:border-r
  flex
  items-center
  border-neutral-300/80
  text-black
  text-sm
  font-raleway
  font-semibold
  tracking-wider
`);

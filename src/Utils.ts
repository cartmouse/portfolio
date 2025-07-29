import { useRef } from "react";

export const cdnBase =
  "https://5721091d-c740-4a16-b036-07dae0b321a5.s3.eu-west-2.amazonaws.com";

export const asset = (path: string) => `${cdnBase}/${path}`;

export type BandRefs = { [key: string]: HTMLDivElement | null };

export const alterColor = (color: string, amount: number) => {
  const replaced = color.replace("#", "");
  const split = replaced.split(/(..)/g).filter((s) => s);
  split.forEach((item, index) => {
    const string = Math.min(
      255,
      Math.round(parseInt(item, 16) * amount)
    ).toString(16);
    if (string.length === 1) {
      split[index] = "0" + string;
    } else {
      split[index] = string;
    }
  });
  return `#${split.join("")}`;
};

type AddRef = (r: HTMLElement | null) => void;

export const useScrollTrigger = (): AddRef => {
  const refs = useRef<Element[]>([]);

  const onScroll = () => {
    const elems = refs.current;
    if (elems.length == 0) return;

    elems.forEach((elem) => {
      if (
        elem.classList.contains("enter") &&
        elem.getBoundingClientRect().top > window.innerHeight
      ) {
        elem.classList.remove("enter");
      } else {
        addEnterClass(elem);
      }
    });
  };
  window.addEventListener("scroll", onScroll);

  const addRef = (r: HTMLElement | null) => {
    if (r) {
      addEnterClass(r);
      refs.current.push(r);
    }
  };

  return addRef;
};

const addEnterClass = (elem: Element) => {
  const top = elem.getBoundingClientRect().top;
  if (
    !elem.classList.contains("enter") &&
    top >= 0 &&
    top <= window.innerHeight
  ) {
    elem.classList.add("enter");
  }
};

import { mergeDeepRight } from "ramda";
import * as T from "@theme-ui/presets";


const styles = {
  styles: {
    root: {
      backgroundColor: "background",
      color: "text"
    },
    h1: {
      color: "primary"
    },
    h3: {
      color: "secondary"
    }
  }
};


export const funk = mergeDeepRight(T.funk, styles);
export const dark = mergeDeepRight(T.dark, styles);
export const roboto = mergeDeepRight(T.roboto, styles);
export const base = mergeDeepRight(T.base, styles);
export const system = mergeDeepRight(T.system, styles);
export const future = mergeDeepRight(T.future, styles);
export const deep = mergeDeepRight(T.deep, styles);
export const swiss = mergeDeepRight(T.swiss, styles);
export const tosh = mergeDeepRight(T.tosh, styles);
export const bootstrap = mergeDeepRight(T.bootstrap, styles);
export const bulma = mergeDeepRight(T.bulma, styles);
export const tailwind = mergeDeepRight(T.tailwind, styles);

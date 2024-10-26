import { atom } from "recoil";


export const counterAtom = atom({
  key: 'counterAtom', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value
}); 
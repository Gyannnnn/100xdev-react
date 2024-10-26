import { atom, selector } from "recoil";

export const counterAtom = atom({
  default:0,
  key:"ocwqefh"
})


export const evenSelector = selector({
  key:"oqujcwefh",
  get:function({get}){
    const currentCount = get(counterAtom);
    const isEven = (currentCount%2 == 0);
    return ;
  }
})
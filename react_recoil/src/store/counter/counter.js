import { atom, selector } from "recoil";

export const counterAtom = atom({
  default:0,
  key:"ocwqefh"
})


// process of creating selector

export const evenSelector = selector({
  key:"oqujcwefh",
  get:function({get}){
    const currentCount = get(counterAtom);
    const isEven = (currentCount%2 == 0);
    return ;
  }
})

// selector just prvents unnecessary re-renders in recoil 
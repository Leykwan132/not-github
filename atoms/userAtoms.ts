import { atom } from "recoil";
export const userDataState = atom({
  key: "userDataState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

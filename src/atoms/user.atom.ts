import { atom } from "recoil";

export type User = {
  email: string;
  name: string;
  easyProblemCount: number;
  mediumProblemCount: number;
  hardProblemCount: number;
  solvedProblemsList: Array<string>;
};

export const userState = atom({
  key: "userState",
  default: {} as User,
});

export const userLoadingState = atom({
  key: "userLoadingState",
  default: false,
});

export const userErrorState = atom({
  key: "userErrorState",
  default: null,
});

export const isUserLoggedIn = atom({
  key: "isUserLoggedIn",
  default: false,
});

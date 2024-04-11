import { atom } from "recoil";

export const codeSubmissionState = atom({
  key: "codeSubmissionState",
  default: "",
});

export const codeSubmissionErrorState = atom({
  key: "codeSubmissionErrorState",
  default: null,
});

export const codeSubmissionLoadingState = atom({
  key: "codeSubmissionLoadingState",
  default: false,
});

export const codeResponseState = atom({
  key: "codeResponseState",
  default: "",
});

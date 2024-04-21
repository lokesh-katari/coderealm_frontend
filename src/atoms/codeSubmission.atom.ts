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

export const userCode = atom({
  key: "userCode",
  default: "",
});

export const cCodeatom = atom({
  key: "cCode",
  default: "",
});

export const cppCodeatom = atom({
  key: "cppCode",
  default: "",
});

export const javaCodeatom = atom({
  key: "javaCode",
  default: "",
});

export const jsCodeatom = atom({
  key: "jsCode",
  default: "",
});

export const pythonCodeatom = atom({
  key: "pythonCode",
  default: "",
});

export const golangCodeatom = atom({
  key: "golangCode",
  default: "",
});

export const submissionMode = atom({
  key: "submissionMode",
  default: "IDLE",
});

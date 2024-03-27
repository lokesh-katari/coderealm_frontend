import { selector } from "recoil";

import { languageAtom } from "../atoms/language.atom";

export const languageSelector = selector({
  key: "languageSelector",
  get: ({ get }) => {
    return get(languageAtom);
  },
});

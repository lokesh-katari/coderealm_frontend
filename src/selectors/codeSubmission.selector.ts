import { useRecoilState, selector } from "recoil";

import {
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
  codeSubmissionState,
} from "../atoms/codeSubmission.atom";
import axios from "axios";
import { languageAtom } from "@/atoms/language.atom";
import { generatePID } from "@/lib/generatePID";
import { PollAPI } from "@/lib/pollAPI";

export const submitCodeSelector = selector({
  key: "submitCodeSelector",
  get: async ({ get }) => {
    const code = get(codeSubmissionState);
    const language = get(languageAtom);
    const pid = generatePID();

    try {
      const { data } = await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: "asdf",
          reqType: "submit",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await PollAPI(
        `/api/pollgraphqlresult/?pid=${pid}`,
        500,
        10
      );
      return result;
    } catch (error) {
      console.error("Error submitting code:", error);
    }
  },
});

export const runCodeSelector = selector({
  key: "runCodeSelector",
  get: async ({ get }) => {
    const code = get(codeSubmissionState);
    const language = get(languageAtom);
    const pid = generatePID();

    try {
      await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: "asdf",
          reqType: "run",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await PollAPI(`/api/pollresult/${pid}`, 500, 10);

      return result;
    } catch (error) {
      console.error("Error running code:", error);
    }
  },
});

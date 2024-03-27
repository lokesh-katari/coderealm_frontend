"use client";
import { Editor2 } from "@/main-components/Editor";
// import { Navbar } from "@/main-components/Navbar";
// import { Edit } from "lucide-react";
import React from "react";
// import MonacoEditor from "react-monaco-editor";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageAtom } from "@/atoms/language.atom";
import { languageSelector } from "@/selectors/language.selector";
const page = () => {
  let [language, setLanguage] = useRecoilState(languageAtom);
  let lan2 = useRecoilValue(languageSelector);
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <Editor2 />
      <input type="text" onChange={handlechange} value={language} />
      {language}
      {lan2}
    </div>
  );
};

export default page;

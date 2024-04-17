import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRecoilValue } from "recoil";
import { languageAtom } from "@/atoms/language.atom";

export function LanguageSelect({
  data,
  onSelect,
}: {
  data: string[];
  onSelect: (value: string) => void;
}) {
  const handleSelect = (value: any) => {
    onSelect(value);
  };
  const lang = useRecoilValue(languageAtom);
  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px] dark text-white ">
        <SelectValue placeholder={`${lang}`} className="" />
      </SelectTrigger>
      <SelectContent className="dark">
        <SelectGroup className="dark">
          <SelectLabel className="dark">Languages</SelectLabel>
          {data.map((item) => (
            <SelectItem className="dark" key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;

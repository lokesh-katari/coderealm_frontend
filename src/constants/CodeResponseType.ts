export interface CodeResponseType {
  output: string;
  pid: string;
  language: string;
  code: string;
  id: string;
  accepted: boolean;
  testcases: number[];
  runtime: string;
  submittedat: string; // Assuming this is a string representation of Date
}

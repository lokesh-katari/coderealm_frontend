import { db } from "@/lib/prisma";

export const POST = async (request: Request) => {
  const CodeQue = await db.codeQue.create({
    data: {
      difficulty: "medium",
      description: "complete the auth funtions uisng jwt",
      submissions: {
        correct: 10,
        wrong: 5,
      },
      title: "Problem title",
      category: "Array",
      templates: {
        create: {
          python: {
            userCode: 'print("Hello, World!")',
            hiddenTestCode: "# Hidden test code",
            runTestCode: "",
          },
          golang: {
            userCode: 'fmt.Println("Hello, World!")',
            hiddenTestCode: "// Hidden test code",
            runTestCode: "",
          },
          c: {
            userCode: 'printf("Hello, World!");',
            hiddenTestCode: "// Hidden test code",
            runTestCode: "",
          },
          java: {
            userCode: 'System.out.println("Hello, World!");',
            hiddenTestCode: "// Hidden test code",
            runTestCode: "",
          },
          javascript: {
            userCode: 'console.log("Hello, World!");',
            hiddenTestCode: "// Hidden test code",
            runTestCode: "",
          },
          cpp: {
            userCode: 'cout << "Hello, World!" << endl;',
            hiddenTestCode: "// Hidden test code",
            runTestCode: "",
          },
        },
      },
      testCases: [
        {
          input: "asdffd",
          output: "sdfsdf",
        },
        {
          input: "asdffd",
          output: "sdfsdf",
        },
        {
          input: "asdffd",
          output: "sdfsdf",
        },
        {
          input: "asdffd",
          output: "sdfsdf",
        },
        {
          input: "asdffd",
          output: "sdfsdf",
        },
      ],
    },
  });
  return Response.json(CodeQue);
};

export default function NotFound() {
  return (
    <>
      <div className="h-screen  ">
        <div
          className="container text-center relative  text-8xl mt-32"
          style={{ top: "134px", opacity: ".2", fontSize: "214px" }}
        >
          404
        </div>
        <div className="text-center relative">
          <h1 className="text-5xl text-red-600">unauthorised access</h1>
          <h1 className="text-3xl text-red-600">
            You must Login to access this resourse
          </h1>
        </div>
      </div>
    </>
  );
}

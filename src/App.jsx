import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [formError, setFormError] = useState({
    isError: false,
    msg: "",
  });

  const [formSuccess, setFormSuccess] = useState({
    isSuccess: false,
    msg: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // empty feild
    if (
      fullName.trim().length === 0 ||
      email.trim().length === 0 ||
      number.trim().length === 0 ||
      address.trim().length === 0
    ) {
      setFormError({
        isError: true,
        msg: "Please fill the form, do not leave it empty",
      });
      return;
    }

    // name length validation
    if (fullName.trim().length < 6) {
      setFormError({
        isError: true,
        msg: "Name should be at least 6 characters long",
      });
      return;
    }

    setFormSuccess({
      isSuccess: true,
      msg: `Thank You ${fullName}`,
    });

    console.log(fullName + " " + email + " " + number + " " + address);

    // clean previous data
    setFullName("");
    setEmail("");
    setNumber("");
    setAddress("");
  };

  return (
    <>
      {formError.isError && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col space-y-2 justify-center items-center">
          <h2 className="text-red-400 font-bold text-xl ">{formError.msg}</h2>

          <button
            className="px-2 py-2 bg-black text-white"
            onClick={() =>
              setFormError({
                isError: false,
                msg: "",
              })
            }
          >
            Go back
          </button>
        </div>
      )}
      {!formError.isError && formSuccess.isSuccess && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col space-y-2 justify-center items-center">
          <h2 className="text-green-400 font-bold text-xl ">
            {formSuccess.msg}
          </h2>

          <button
            className="px-2 py-2 bg-black text-white text-center"
            onClick={() =>
              setFormSuccess({
                isSuccess: false,
                msg: "",
              })
            }
          >
            Go back
          </button>
        </div>
      )}
      {!formError.isError && !formSuccess.isSuccess && (
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-4 h-[20rem] w-[20rem]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="font-semibold text-green-800">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              id="name"
              value={fullName}
              className={`border-[1px] ${
                fullName.trim().length === 0
                  ? "border-red-500"
                  : "border-green-500"
              } border-red-500 p-2 rounded-md font-thin text-green-950 outline-none`}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-semibold text-green-800">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              value={email}
              className={`border-[1px] ${
                email.trim().length === 0
                  ? "border-red-500"
                  : "border-green-500"
              } border-red-500 p-2 rounded-md font-thin text-green-950 outline-none`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="number" className="font-semibold text-green-800">
              Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter Your Number"
              name="number"
              id="number"
              value={number}
              className={`border-[1px] ${
                number.trim().length === 0
                  ? "border-red-500"
                  : "border-green-500"
              } border-red-500 p-2 rounded-md font-thin text-green-950 outline-none`}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="address" className="font-semibold text-green-800">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Address"
              name="address"
              id="address"
              value={address}
              className={`border-[1px] ${
                address.trim().length === 0
                  ? "border-red-500"
                  : "border-green-500"
              } border-red-500 p-2 rounded-md font-thin text-green-950 outline-none`}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-400 text-white font-semibold"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default App;

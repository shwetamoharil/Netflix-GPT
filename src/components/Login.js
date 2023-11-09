import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-logo"
          className="h-[100vh]"
        />
        <div className="absolute bg-black py-10  top-[25%] mx-auto right-0 left-0 w-3/12 bg-opacity-80 rounded-lg">
          <form className="text-white p-12">
            <h1 className="font-bold text-3xl py-2  my-2 w-full">Sign In</h1>
            <input type="text" placeholder="Enter Email" className="py-2 px-2 my-2 w-full bg-gray-700 rounded-md" />
            <input type="password" placeholder="Enter Password" className="py-2 px-2 my-2 w-full bg-gray-700 rounded-md" />
            <button className="bg-red-700 py-2 px-2 my-2 w-full rounded-md">Sign In</button>
            <p className="py-2 px-2 my-2">New User? Sign Up</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

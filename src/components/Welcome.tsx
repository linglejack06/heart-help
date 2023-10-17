import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="mx-auto bg-red-100 text-red-700 font-bold p-4 rounded-md hover:text-white hover:bg-red-700 hover:shadow-lg hover:cursor-pointer hover:p-6 transition-all hover:rounded-xl">
      <Link to="/pain-calculation">Am I having a heart attack</Link>
    </div>
  );
}

export default Welcome;

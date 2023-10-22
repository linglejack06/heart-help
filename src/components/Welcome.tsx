import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const onClick = () => navigate("/pain-calculation");
  return (
    <button
      onClick={onClick}
      className="mx-auto bg-red-100 text-red-700 font-bold p-4 rounded-md hover:text-white hover:bg-red-700 hover:shadow-lg hover:cursor-pointer hover:p-6 transition-all hover:rounded-xl border-2 border-red-700"
    >
      Am I Having A Heart Attack?
    </button>
  );
}

export default Welcome;

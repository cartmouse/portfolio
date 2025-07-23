import "./BackButton.scss";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const nav = useNavigate();

  return (
    <button
      className="back-button"
      onClick={() => (history.length > 1 ? nav(-1) : nav("/"))}
    >
      Back
    </button>
  );
};

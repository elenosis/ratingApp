import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../contex/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="Magenta" />
      </button>
      <button className="edit">
        <FaEdit onClick={() => editFeedback(item)} color="Magenta" />
      </button>
      <div className="tetx-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

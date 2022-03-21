import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString("en", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <h2>{goal.name}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;

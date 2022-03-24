import { useDispatch } from "react-redux";


function GoalItem({ goal,...rest}) {
  const dispatch = useDispatch();
const handleDelete=(id)=>{
  dispatch(rest.delete(id))
  dispatch(rest.getGoals())

}

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
      <button onClick={() =>handleDelete(goal._id) } className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;

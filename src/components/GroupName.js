import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setGroup } from "../store/actions/color";

function GroupName() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const inpRef = useRef(null);


  const handleSubmit = () => {
    let value = inpRef.current.value;
    let arr = state.colorReducer.color;
    let obj = {
      [value]: arr,
    };
    dispatch(setGroup(obj));
    dispatch(setColor());
    value = ""
  };
  return (
    <div className="form-group">
      <input className="form-control" ref={inpRef} type="text" />
      <button className="btn btn-danger w-100 mt-2" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default GroupName;

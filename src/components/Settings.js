import { useFormik } from "formik";
import Color from "./Color";
import {setColor} from "../store/actions/color"
import { useDispatch, useSelector } from "react-redux";
import GroupName from "./GroupName";

function Settings() {
 
  const state = useSelector(state=>state)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      colorName: "",
      colorCode: "",
    },
    onSubmit: (values) => {
      dispatch(setColor(values));
      formik.resetForm()
    },
  });
  return (
    <div className="settings row">
      <h3>Setting Page</h3>
      <div className="left-setting col-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="colorName">Color Name</label>
            <input
              className="form-control"
              id="colorName"
              name="colorName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.colorName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="colorCode">Color Code</label>
            <input
              className="form-control"
              id="colorCode"
              name="colorCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.colorCode}
            />
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="right-setting col-8">
        <div className="row">
          <Color />
          {state.colorReducer.color.length === 6 && <GroupName/> }
        </div>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   setColorDispatch: (color) => dispatch(setColor(color)),
// });




export default Settings;

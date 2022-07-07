
import { useDispatch, useSelector } from "react-redux";
// import Box from "./Box";

function Home() {
  const state = useSelector((state) => state.colorReducer.groups);
  const dispatch = useDispatch();
    console.log(state);
 
  return (
    // <>{}</>
    <div className="row">
       {/* {state.map((item,index)=><Box item={item}/>)} */}
       
      {/* <div className="col-6 row">
        {showFunc().map((item, index) => (
          <div className="col-4">{item.colorName}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;

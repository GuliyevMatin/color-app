import { useRef } from "react";
import { useSelector } from "react-redux";

function GroupName() {
    const state = useSelector(state=>state.colorReducer.color)
    const inpRef = useRef(null)
    

    const handleSubmit = ()=>{
        console.log(inpRef.current.value);
    }
    return (  
       
        <div className="form-group">
            <input className="form-control" ref={inpRef}  type="text"/>
            <button className="btn btn-danger w-100 mt-2" onClick={handleSubmit}>Add</button>
        </div>
        
    );
}

export default GroupName

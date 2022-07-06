import {connect} from 'react-redux';
function Color(props) {
  console.log(props);
    return ( 
        <>
     
        </>
        // <div style={{backgroundColor:props.color.colorCode,color:"gray"}} className="color col-4">{props.color.colorName}</div>
     );
}


const mapStateToProps = (state)=>({
    color : state.colorReducer.color
})
export default connect(mapStateToProps)(Color);
import {connect} from 'react-redux';
function Color(props) {

    return ( 
        <>
        {props.color.map((item,index)=>(
          <div key={index} style={{backgroundColor:item.colorCode,color:"gray"}} className="color col-4">{item.colorName}</div>
        ))}

     
        </>
     );
}


const mapStateToProps = (state)=>({
    color : state.colorReducer.color
})
export default connect(mapStateToProps)(Color);
import React from "react";
import {connect} from 'react-redux'

const Count = (props) => {
  return (
    <div>
      <container><h1>🥦:{props.count}</h1></container>
    </div>
  );
};

function mapStateToProps(state){
return{
    count: state.count
}
}

export default connect(mapStateToProps) (Count)
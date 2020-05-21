

const initialState = {
  count: 10,
};

function rootReducer(state = initialState, action) {
  switch(action.type){

    case 'ADD':{
       return{
           count: state.count+1
       }
    }
    case 'REDUCE':{
        return{
            count: state.count-1
        }
    }
    case 'RESET':{
      return{
        count: 10
      }
    }
      default: return state
  }
}

export default rootReducer;

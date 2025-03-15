const loginReducer =(state =false,action) =>{
  switch (action.type) {
    case "CHECK_LOGIN":
    console.log(action.status);
     return action.status;
  
    default:
      return state;
  }
}
export default loginReducer;
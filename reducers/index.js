import { combineReducers } from "redux";
import cartReducer from "./cart";

const allReducers = combineReducers({
    cartReducer,
    
    //them nhieu reduce o day
});
export default allReducers;

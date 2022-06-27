import { combineReducers } from "redux";

const initialState = {
    todoItems: []
}

function todoList(state = initialState, action){

    switch(action.type){
        case "ADD_TODO":{
            const todo = action.payload;
            
            if (todo === "")
                return state;
            
            return{
                
                    todoItems : [...state.todoItems, todo]
            }
        }
        default:{
            return state;
        }

    }
}

const rootReducer = combineReducers({todoList})
export default rootReducer;
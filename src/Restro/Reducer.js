const initialState={
    burger:0,
    pizza:0
}
const Reducer=(state=initialState,action)=>{
    // console.log(state)
    switch(action.type)
    {
        case "ADD_BURGER":
            return {...state, burger:state.burger+1  }
        case "ADD_PIZZA":
            return {...state, pizza:state.pizza+1}
        case "REMOVE_BURGER":
            return state.burger!=0?{...state, burger:state.burger-1}:{...state}
        case "REMOVE_PIZZA":
            return state.pizza!=0?{...state, pizza:state.pizza-1}:{...state}
        default:
                return state
    }
}
export default Reducer;
// switch(action.type)
// {
//     case "ADD_BURGER":
//         return Object.assign({},state,{
//             burger:state.burger+1})
//     case "ADD_PIZZA":
//         return Object.assign({},state,{
//             pizza:state.pizza+1})
//     default:
//             return state
// }
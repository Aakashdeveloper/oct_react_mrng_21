export default function(state={},action){
    switch(action.type){
        case 'LATEST_NEWS':
            return {...state,latestnews:action.payload}
        default:
            return state
    }
}
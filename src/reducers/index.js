const initialState = {
    angular : 0,
    react : 0,
    vue : 0,
    todos : []
}

export default (state = initialState , action) => {

    if (typeof state === 'undefined') {
        return initialState
    }

    switch(action.type) {
        case 'VOTE_ANGULAR' : 
        console.log("Your choice is anulgar");
        return Object.assign({},state,{
            angular : state.angular + 1
        })
        case 'VOTE_REACT' : 
        console.log("Your choice is react");
        return Object.assign({},state,{
            react : state.react + 1
        })
        case 'VOTE_VUEJS' : 
        console.log("Your choice is vue js");
        return Object.assign({},state,{
            vue : state.vue + 1
        })
        case 'ADD_TODO' :
        console.log("Add to to do");
        return Object.assign({},state,{
            todos : state.todos.concat([action.payload])
        }) 

        default : 
        return state
    }
}
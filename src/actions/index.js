export const voteAngular = () => {
    return {
        type : 'VOTE_ANGULAR'
    }
}

export const voteReact = () => {
    return {
        type : 'VOTE_REACT'
    }
}

export const voteVuejs = () => {
    return {
        type : 'VOTE_VUEJS'
    }
}

export const addTodo = () => {
    return {
        type : 'ADD_TODO',
        payload : {
            text : 'Complete React'
        }
    }
}
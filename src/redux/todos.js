const todos = (state = [], action) => {
    console.log('now i am in reducer', action, state)
    switch (action.type) {
        case 'ADD_TODO':
            console.log('reducer case for add')
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos

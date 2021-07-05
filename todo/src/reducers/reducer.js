export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'addToList': 
            return [...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case 'toggleCompleted':         
            return state.map(item => 
                item.id === action.payload ? {...item, completed: !item.completed} : item
            );
        case 'clearCompleted':
            return state.filter(item => 
                !item.completed
            );
        default: return state;
    }    
}
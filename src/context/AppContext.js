import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expsense) => expsense.id != action.payload
                )
            }
        case 'UPDATE_EXPENSE':
            return {
               ...state,
                expenses: state.expenses.map(expense => {
                    if (action.payload.id == expense.id) {
                        expense.name = action.payload.name
                        expense.cost = action.payload.cost
                    }

                    return expense
                })
            }
        case 'SEARCH_EXPENSE':
                return {
                    ...state,
                    expenses: state.expenses.filter( 
                        expense => expense.name.toLowerCase().includes(action.payload.toLowerCase()) 
                    )
                }
        default:
            return state
    }
}

const initialState = {
    budget: 5000,
    expenses: [
        {
            id: 1,
            name: 'Shopping',
            cost: 400
        },
        {
            id: 2,
            name: 'Holiday',
            cost: 500
        },
        {
            id: 3,
            name: 'Car Service',
            cost: 300
        },
        {
            id: 4,
            name: 'Mobile',
            cost: 540
        }
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] =   useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
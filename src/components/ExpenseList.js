import React, { useContext, useState } from "react"
import ExpenseItem from "./ExpenseItem"
import { AppContext } from "../context/AppContext"

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext)

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch({
            type: 'SEARCH_EXPENSE',
            payload: search
        })
    }
    
    return (
        <>
            <input 
                type="text" 
                className="form-control mb-3" 
                placeholder="Search"
                value={search}
                onChange={handleSearch}
            />
            <ul className="list-group">
                {
                    expenses.map((expense) => (
                        <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
                    ))
                }
            </ul>
        </>
    )
}

export default ExpenseList
import React, { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const expense = {
            id: Math.random(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })

        setName('')
        setCost('')
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="card">
                <div className="card-header">
                    <h2>Add Expense</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="" className="">Name</label>
                        <input
                            required="required" 
                            type="text" 
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={ e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Cost</label>
                        <input
                            required="required" 
                            type="text" 
                            className="form-control"
                            id="cost"
                            value={cost}
                            onChange={ e => setCost(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary mt-3">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
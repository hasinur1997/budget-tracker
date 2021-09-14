import React, { useContext, useState } from "react"
import { AppContext } from "../context/AppContext" 

const EditExpenseForm = (props) => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState(props.expense.name)
    const [cost, setCost] = useState(props.expense.cost)

    const HandleUpdateExpense = (e) => {
        e.preventDefault()

        const expense = {
            id: props.expense.id,
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'UPDATE_EXPENSE',
            payload: expense
        })

        props.discard()
    }

    return (
        <form action="" onSubmit={HandleUpdateExpense}>
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Cost</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="cost"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <button 
                            className="btn btn-info btn-sm mx-3"
                        >
                            Update
                        </button>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={props.discard}
                        >Cansel
                        
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditExpenseForm
import React, { useContext, useState } from "react"
import { TiDelete } from 'react-icons/ti'
import { AppContext } from "../context/AppContext"
import EditExpenseForm from "./EditExpenseForm"

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext)
    let [isEdit, setEdit] = useState(false)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <>
            <div>
                {
                    isEdit ?

                        (
                            <EditExpenseForm
                                expense={{
                                    id: props.id,
                                    name: props.name,
                                    cost: props.cost
                                }}
                                discard={data => setEdit(false)}
                            />
                        )

                        :

                        (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {props.name}
                                <span className="">${props.cost}</span>
                                <div>
                                    <span
                                        className="btn btn-info btn-sm mx-2"
                                        onClick={e => setEdit(true)}
                                    >Edit
                                    </span>
                                    <span
                                        className="btn btn-danger btn-sm"
                                        onClick={handleDeleteExpense}
                                    >Delete</span>
                                </div>
                            </li>
                        )
                }
            </div>


        </>

    )
}

export default ExpenseItem
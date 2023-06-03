import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value, }
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value,
        })
    }

    const dateChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        })
        console.log(userInput);
    }


    // const titleChangeHandler = (e) => {
    //     setEnteredTitle(e.target.value);
    //     console.log(enteredTitle);
    // }

    // const amountChangeHandler = (e) => {
    //     setEnteredAmount(e.target.value);
    //     console.log(enteredAmount);
    // }

    // const dateChangeHandler = (e) => {
    //     setEnteredDate(e.target.value);
    //     console.log(enteredDate);
    // }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
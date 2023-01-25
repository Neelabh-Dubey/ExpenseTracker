import "./ExpenseItem.css";

function ExpenseItem(props){
    return (
        <div className="parent">
            <div className="date">{props.expenseItem.date}</div>
            <div className="title">{props.expenseItem.title}</div>
            <div className="amt">{props.expenseItem.amt}</div>
        </div>
    );
}

export default ExpenseItem;


import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";


function Expenses(props) {

    let yearExpense = props.data.filter(item => item.date.slice(-4)===props.year);

    return (
        <div>
            {
                yearExpense.length === 0 ?<></>:<Chart expense={yearExpense} />
            }
            {
                yearExpense.map(item => <ExpenseItem key={Math.round(Math.random()*1000)} expenseItem={item}></ExpenseItem>)
            }
        </div>
    );
}

export default Expenses;
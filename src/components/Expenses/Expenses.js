import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((el) => {
        return (
          <ExpenseItem
            title={el.title}
            date={el.date}
            amount={el.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;

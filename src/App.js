import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExoense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      date: new Date(2022, 7, 22),
      amount: 190,
    },
    {
      id: "e2",
      title: "Life Insurance",
      date: new Date(2021, 7, 22),
      amount: 2290,
    },
  ];

  const [ex, setex] = useState(expenses);

  const addExpense = (expense) => {
    //setex([expense,...ex]);
    setex((prevState) => {
      return [expense, ...ex];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={ex} />
    </div>
  );
}

export default App;

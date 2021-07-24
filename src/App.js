import Expenses from "./components/Expenses";
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

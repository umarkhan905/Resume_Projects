import { useReducer, useState } from "react";
import Body from "./Body";
import Transaction from "./Transaction";
import History from "./History";
import { useEffect } from "react";

const Expense = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState({
    amount: "",
    description: "",
    option: "income",
  });
  const [history, setHistory] = useState([]);
  const [historyData, setHistoryData] = useState(history);
  const [filter, setFilter] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "income":
        setHistory([...history, data]);
        setIsEmpty(false);
        setData({ amount: "", description: "", option: "income" });
        return {
          ...state,
          balance: state.balance + Number(action.payload),
          income: state.income + Number(action.payload),
        };
      case "expense":
        console.log(data.amount > state.balance);
        if (data.amount > state.balance) {
          setIsEmpty(true);
          return { ...state };
        } else {
          setHistory([...history, data]);
          setIsEmpty(false);
          setData({ amount: "", description: "", option: "expense" });
          return {
            ...state,
            balance: state.balance - Number(action.payload),
            expense: state.expense + Number(action.payload),
          };
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    balance: 0,
    expense: 0,
    income: 0,
  });

  const setLogFunc = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const filterDataFunc = (filter) => {
      const filterData = history.filter((elem) => {
        return elem.description.toLowerCase().includes(filter.toLowerCase());
      });
      setHistoryData(filterData);
    };
    filterDataFunc(filter);
  }, [history, filter]);
  return (
    <div className="container">
      <div className="main">
        <h1>Expense Tracker</h1>
        <h2>your balance</h2>
        <p className="balance">${state.balance}</p>
        {isEmpty ? (
          <p style={{ color: "red", padding: "5px 0", fontSize: "12px" }}>
            **Insufficient balance for expenses
          </p>
        ) : null}
        <Body expense={state.expense} income={state.income} />
        <History history={historyData} filter={filter} setFilter={setFilter} />
        <Transaction
          handleClick={dispatch}
          setData={setLogFunc}
          data={data}
          option={data.option}
          payload={data.amount}
        />
      </div>
    </div>
  );
};
export default Expense;

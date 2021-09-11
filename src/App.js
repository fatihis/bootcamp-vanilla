import { TableRow } from "./Components/TableRow/TableRow";
import data from "./data";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="home-table-container">
        {data.currencies.map((element) => {
          return (
            <TableRow
              exchangeType={element.exchangeType}
              buy={element.buy}
              sell={element.sell}
              diff={element.diff}
              exchangeFrom={element.exchangeFrom}
              exchangeTo={element.exchangeTo}
            ></TableRow>
          );
        })}
      </div>
    </div>
  );
};

export default App;

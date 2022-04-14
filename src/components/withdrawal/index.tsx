import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.scss";

const Withdrawal: React.FC = () => {
  const [amount, setAmount] = React.useState("");

  const handleSubmit = () => {
    console.log("amount at submit", amount);
    setTimeout(() => {
      alert(JSON.stringify(amount, null, 1));
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="amount-form">
        <h2>Amount to Withdrawal</h2>
        <input
          type="text"
          name="amount"
          className="amount"
          placeholder="set amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          autoComplete="off"
        />
        <button
          type="button"
          className="clear-one"
          onClick={() => setAmount("")}
        >
          <FaArrowLeft size={28} />
        </button>
        <div className="numpad">
          {numbers.map((n, i) => {
            let newValue = amount;
            return (
              <NumPadBtn
                onClick={() => setAmount((newValue += n.num))}
                key={i}
                dataNumber={n.num}
              />
            );
          })}
        </div>

        <div className="actions">
          <button
            className="submit-btn"
            type="submit"
            disabled={amount === ""}
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

interface INumPadBtn {
  dataNumber?: number;
  onClick: () => void;
}

const NumPadBtn: React.FC<INumPadBtn> = ({ dataNumber, onClick, children }) => (
  <button
    type="button"
    className={dataNumber ? `number-${dataNumber}` : "zero"}
    data-number={dataNumber}
    onClick={onClick}
  >
    {children ? children : dataNumber}
  </button>
);

const numbers = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 },
  { num: 0 },
];

export default Withdrawal;

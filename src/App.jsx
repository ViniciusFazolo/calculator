import { useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [op, setOp] = useState("");

  const handleNum = (e) => {
    let num = e.target.value;
    if (numero.length > 20) return;

    if (numero === 0) {
      setNumero(num);
    } else {
      setNumero(numero + num);
    }
  };

  const clear = () => {
    setNumero(0);
    setOldNum(0);
    op("");
  };

  const operator = (e) => {
    setOp(e.target.value);
    setOldNum(numero);
    setNumero(0);
  };

  const handleCalculate = () => {
    if (numero === 0 || oldNum === 0) {
      setNumero(0);
      setOldNum(0);
      return;
    }

    if (op === "/") {
      setNumero(oldNum / numero);
    }
    if (op === "x") {
      setNumero(oldNum * numero);
    }
    if (op === "-") {
      setNumero(oldNum - numero);
    }
    if (op === "+") {
      setNumero(parseFloat(oldNum) + parseFloat(numero));
    }
  };

  const porcentage = () => {
    if (oldNum === 0) setNumero(numero / 100);
    else {
      let result = oldNum * (numero / 100);

      if (op === "/") {
        setNumero(result);
      }
      if (op === "x") {
        setNumero(result);
      }
      if (op === "-") {
        setNumero(result);
      }
      if (op === "+") {
        setNumero(parseFloat(result));
      }
    }
  };

  const negative = () => {
    setNumero(-numero);
  };

  return (
    <div className="container">
      <div className="visor">
        <h1>{numero}</h1>
      </div>
      <div className="button_container">
        <button className="white text text_black" onClick={clear}>
          AC
        </button>
        <button className="white text text_black" onClick={negative}>
          +/-
        </button>
        <button className="white text text_black" onClick={porcentage}>
          %
        </button>
        <button className="orange" onClick={operator} value={"/"}>
          /
        </button>
        <button className="grey" onClick={handleNum} value={7}>
          7
        </button>
        <button className="grey" onClick={handleNum} value={8}>
          8
        </button>
        <button className="grey" onClick={handleNum} value={9}>
          9
        </button>
        <button className="orange" onClick={operator} value={"x"}>
          x
        </button>
        <button className="grey" onClick={handleNum} value={4}>
          4
        </button>
        <button className="grey" onClick={handleNum} value={5}>
          5
        </button>
        <button className="grey" onClick={handleNum} value={6}>
          6
        </button>
        <button className="orange" onClick={operator} value={"-"}>
          -
        </button>
        <button className="grey" onClick={handleNum} value={1}>
          1{" "}
        </button>
        <button className="grey" onClick={handleNum} value={2}>
          2
        </button>
        <button className="grey" onClick={handleNum} value={3}>
          3
        </button>
        <button className="orange" onClick={operator} value={"+"}>
          +
        </button>
        <button className="grey" onClick={handleNum} value={0}>
          0
        </button>
        <button className="grey" onClick={handleNum} value={"."}>
          .
        </button>
        <span></span>
        <button className="orange" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;

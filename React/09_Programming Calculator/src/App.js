import { useState } from "react";
import "./App.css";

const App = () => {
  const [from, setFrom] = useState("Dec");
  const [to, setTo] = useState("Binary");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [oneComp, setOneComp] = useState("");
  const [twoComp, setTwoComp] = useState("");

  const OptionSelector = ({ className, id, value, setValue, text }) => {
    return (
      <div className={className}>
        <label htmlFor={id}>{text}</label>
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="Dec">Dec</option>
          <option value="Hex">Hex</option>
          <option value="Oct">Octal</option>
          <option value="Binary">Binary</option>
        </select>
      </div>
    );
  };
  const oneCompliment = (input) => {
    let comp = "";
    while (input) {
      let binaryBit = input % 2;
      if (binaryBit === 1) {
        binaryBit = 0;
      } else {
        binaryBit = 1;
      }
      comp += binaryBit;
      input = Math.floor(input / 2);
    }
    while (comp.length !== 32) {
      comp += "1";
    }
    setOneComp(comp.split("").reverse().join(""));
  };
  const twoCompliment = (input) => {
    let str = "";
    input = 2 ** 32 - input;
    while (input) {
      let bit = input % 2;
      str += bit;
      input = Math.floor(input / 2);
    }
    setTwoComp(str.split("").reverse().join(""));
  };
  const conversion = (input, div) => {
    let str = "";
    oneCompliment(input);
    twoCompliment(input);
    while (input) {
      let bit = input % div;

      str += bit;
      input = Math.floor(input / div);
    }
    return str.split("").reverse().join("");
  };
  const decimalConversion = (input, mul) => {
    let str = 0;
    let i = 0;
    while (input) {
      let bit = input % 10;
      str += bit * mul ** i;
      i++;
      input = Math.floor(input / 10);
    }
    return str;
  };
  const checker = (input) => {
    let value;
    if (input === "Oct") {
      value = 8;
    } else if (input === "Binary") {
      value = 2;
    } else if (input === "Hex") {
      value = 16;
    } else {
      value = 10;
    }
    return value;
  };
  const finder = (value) => {
    let hex;
    if (value === 10) {
      hex = "A";
    } else if (value === 11) {
      hex = "B";
    } else if (value === 12) {
      hex = "C";
    } else if (value === 13) {
      hex = "D";
    } else if (value === 14) {
      hex = "E";
    } else if (value === 15) {
      hex = "F";
    }
    return hex;
  };
  const hexaConversion = (input, div) => {
    let str = "";
    oneCompliment(input);
    twoCompliment(input);
    while (input) {
      let digit = input % div;
      if (digit > 9) {
        const findValue = finder(digit);
        str += findValue;
      } else {
        str += digit;
      }
      input = Math.floor(input / div);
    }
    return str.split("").reverse().join("");
  };
  const converter = (input, from, to) => {
    const mul = checker(from);
    const div = checker(to);
    if (from === "Dec") {
      if (to === "Hex") {
        setOutput(hexaConversion(input, div));
      } else {
        setOutput(conversion(input, div));
      }
    } else {
      const decimal = decimalConversion(input, mul);
      if (to === "Hex") {
        setOutput(hexaConversion(decimal, div));
      } else {
        setOutput(conversion(decimal, div));
      }
    }
  };
  return (
    <div className="main">
      <h1 className="heading">Programming Calculator</h1>
      <div className="calc">
        <div className="options">
          <OptionSelector
            text={"from"}
            className={"from"}
            id={"from"}
            value={from}
            setValue={setFrom}
          />
          <OptionSelector
            text={"to"}
            className={"to"}
            id={"to"}
            value={to}
            setValue={setTo}
          />
        </div>
        <div className="input_container">
          <input
            type="text"
            name=""
            id=""
            placeholder={`Enter a ${from} number`}
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            readOnly
            className="output"
            placeholder={`Number in ${to}`}
            value={output}
          />
          <input
            type="text"
            readOnly
            className="output"
            placeholder="1's Compliment Of Number"
            value={oneComp}
          />
          <input
            type="text"
            readOnly
            className="output"
            placeholder="2's Compliment Of Number"
            value={twoComp}
          />
          <button className="btn" onClick={() => converter(input, from, to)}>
            Covert
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

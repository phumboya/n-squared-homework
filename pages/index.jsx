import Head from "next/head";
import React, { useState } from "react";
import Number from "../component/Number";

export default function Home() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [nextValue, setNextValue] = useState(0);
  const [colorStyle, setColorStyle] = useState("default");
  const [operators, setOperators] = useState(null);

  const addValues = (value) => {
    const statusfirstValue = firstValue + value;
    const statusSecondValue = secondValue + value;
    const checkfirstValue = new RegExp(/^-?[0-9,]*\.?[0-9,]*$/g).test(
      statusfirstValue
    );
    const checkSecondValue = new RegExp(/^-?[0-9,]*\.?[0-9,]*$/g).test(
      statusSecondValue
    );

    if (!operators) {
      if (checkfirstValue) {
        setFirstValue(firstValue + value);
      }
    } else {
      if (checkSecondValue) {
        setSecondValue(secondValue + value);
      }
    }
  };

  const performOperation = (value1, value2) => {
    const calValue = 0;
    if (operators === "+") {
      calValue = value1 + value2;
    }
    if (operators === "-") {
      calValue = value1 - value2;
    }
    if (operators === "/") {
      calValue = value1 / value2;
    }
    if (operators === "*") {
      calValue = value1 * value2;
    }

    setNextValue(calValue);
    setSecondValue("");
    setFirstValue("");
    setOperators(null);
  };

  const calRawData = () => {
    const firstCalvalue = parseFloat(firstValue);
    const secondCalValue = parseFloat(secondValue);
    const prevValue = parseFloat(nextValue);

    if (operators) {
      if (prevValue && secondCalValue && operators) {
        performOperation(prevValue, secondCalValue);
      } else if (firstCalvalue && secondCalValue && operators) {
        performOperation(firstCalvalue, secondCalValue);
      }
    }
  };

  const clearAll = () => {
    setFirstValue("");
    setSecondValue("");
    setOperators(null);
    setNextValue(null);
  };

  const checkOperators = (data) => {
    if (firstValue || nextValue) {
      switch (data) {
        case "/":
          return setOperators("/");
        case "*":
          return setOperators("*");
        case "+":
          return setOperators("+");
        case "-":
          return setOperators("-");
        case "=":
          return calRawData();
        case "C":
          return clearAll();
        default:
          break;
      }
    }
  };

  const statusColor = () => {
    if (colorStyle === "style-one") {
      return "#f17b62";
    } else if (colorStyle === "style-two") {
      return "#0b7c5c";
    }

    return "black";
  };

  return (
    <div>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        />
      </Head>
      <div className="custom-container">
        <div className="custom-boxs">
          <div className="box-style-calculator">
            <p
              className="mb-0 pointer"
              onClick={() => setColorStyle("style-one")}
            >
              Style 1
            </p>
            <p
              className="mb-0 pointer"
              onClick={() => setColorStyle("default")}
            >
              Default
            </p>
            <p
              className="mb-0 pointer"
              onClick={() => setColorStyle("style-two")}
            >
              Style 3
            </p>
          </div>
          <div>
            <div className="show-input-cal">
              <p className="mb-0">
                {nextValue ? nextValue : firstValue}{" "}
                {operators ? operators : ""} {secondValue}
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <Number
                style={colorStyle}
                value="C"
                onChange={(value) => checkOperators(value)}
              />
              <Number
                style={colorStyle}
                value="/"
                onChange={(value) => checkOperators(value)}
              />
              <Number
                style={colorStyle}
                value="*"
                onChange={(value) => checkOperators(value)}
              />
              <Number
                style={colorStyle}
                value="-"
                onChange={(value) => checkOperators(value)}
              />
            </div>
            <div className="d-flex">
              <div className="w-75">
                <div className="d-flex">
                  <Number
                    style={colorStyle}
                    value="7"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="8"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="9"
                    onChange={(value) => addValues(value)}
                  />
                </div>
                <div className="d-flex">
                  <Number
                    style={colorStyle}
                    value="4"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="5"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="6"
                    onChange={(value) => addValues(value)}
                  />
                </div>
              </div>
              <Number
                style={colorStyle}
                value="+"
                onChange={(value) => checkOperators(value)}
              />
            </div>
            <div className="d-flex">
              <div className="w-75">
                <div className="d-flex">
                  <Number
                    style={colorStyle}
                    value="1"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="2"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="3"
                    onChange={(value) => addValues(value)}
                  />
                </div>
                <div className="d-flex">
                  <Number
                    style={colorStyle}
                    value="0"
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value="."
                    onChange={(value) => addValues(value)}
                  />
                  <Number
                    style={colorStyle}
                    value=""
                    onChange={(value) => value}
                  />
                </div>
              </div>
              <Number
                style={colorStyle}
                value="="
                onChange={(value) => checkOperators(value)}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .custom-container {
            height: 100vh;
            padding-left: 25px;
            padding-right: 25px;
            margin-bottom: 64px;
          }

          .box-style-calculator {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
          }

          .custom-boxs {
            height: 400px;
            padding-top: 64px;
          }

          .show-input-cal {
            box-shadow: 0 0 0 1px ${statusColor()}, 0 0 0 1px white inset;
            padding: 10px 30px 10px 30px;
            display: flex;
            justify-content: end;
            align-items: center;
            width: 100%;
            height: 100px;
          }

          @media screen and (min-width: 768px) {
            .show-input-cal p {
              font-size: ${firstValue.length > 9 ? "14px" : "30px"};
            }

            .custom-boxs {
              width: 700px;
              height: 100%;
              margin: auto;
            }
          }
        `}
      </style>
    </div>
  );
}

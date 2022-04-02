import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [prevValue, setPrevValue] = useState("");
  const [nextValue, setNextValue] = useState("");
  const [colorStyle, setColorStyle] = useState("");
  const [rawValue, setRawValue] = useState(0);
  const [op, setOp] = useState(null);

  const addValues = (value) => {
    const statusPrevValue = prevValue + value;
    const statusNextValue = nextValue + value;
    const checkPrevValue = new RegExp(/^-?[0-9,]*\.?[0-9,]*$/g).test(
      statusPrevValue
    );
    const checkNextValue = new RegExp(/^-?[0-9,]*\.?[0-9,]*$/g).test(
      statusNextValue
    );

    if (!op) {
      if (checkPrevValue) {
        setPrevValue(prevValue + value);
      }
    } else {
      if (checkNextValue) {
        setNextValue(nextValue + value);
      }
    }
  };

  const calRawData = () => {
    const a = parseFloat(prevValue);
    const b = parseFloat(nextValue);
    const c = 0;
    if (op === "+") {
      c = a + b;
    }
    if (op === "-") {
      c = a - b;
    }
    if (op === "/") {
      c = a / b;
    }
    if (op === "X") {
      c = a * b;
    }

    setRawValue(c);
    setNextValue("");
    setPrevValue("");
    setOp(null);
  };

  const calData = (data) => {
    switch (data) {
      case "/":
        return setOp("/");
      case "x":
        return setOp("X");
      case "+":
        return setOp("+");
      case "-":
        return setOp("-");
      case "=":
        return calRawData();
      default:
        break;
    }
  };

  return (
    <div>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="custom-container">
        <div className="custom-boxs">
          <div className="box-style-calculator">
            <p
              className="mb-0 pointer"
              onClick={() => setColorStyle("#020A15")}
            >
              Style 1
            </p>
            <p
              className="mb-0 pointer"
              onClick={() => setColorStyle("#711fa0")}
            >
              Default
            </p>
            <p
              className="mb-0 pointer"
              onClick={() => setColorStyle("#C81610")}
            >
              Style 3
            </p>
          </div>
          <div>
            <div className="show-input-cal">
              {rawValue && !prevValue ? (
                <p className="mb-0">{rawValue}</p>
              ) : (
                <p className="mb-0">
                  {prevValue} {op ? op : ""} {nextValue}
                </p>
              )}
            </div>
          </div>
          <div className="border-default">
            <table>
              <tbody>
                <tr>
                  <td
                    className="pointer"
                    onClick={() => {
                      setNextValue("");
                      setPrevValue("");
                      setOp(null);
                      setRawValue(null);
                    }}
                  >
                    C
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      if (prevValue) {
                        calData("/");
                      }
                    }}
                  >
                    /
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      if (prevValue) {
                        calData("x");
                      }
                    }}
                  >
                    x
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      if (prevValue) {
                        calData("-");
                      }
                    }}
                  >
                    -
                  </td>
                </tr>
                <tr>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("7");
                    }}
                  >
                    7
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("8");
                    }}
                  >
                    8
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("9");
                    }}
                  >
                    9
                  </td>
                  <td
                    rowSpan="2"
                    className="pointer"
                    onClick={() => {
                      if (prevValue) {
                        calData("+");
                      }
                    }}
                  >
                    +
                  </td>
                </tr>
                <tr>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("4");
                    }}
                  >
                    4
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("5");
                    }}
                  >
                    5
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("6");
                    }}
                  >
                    6
                  </td>
                </tr>
                <tr>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("1");
                    }}
                  >
                    1
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("2");
                    }}
                  >
                    2
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("3");
                    }}
                  >
                    3
                  </td>
                  <td
                    rowSpan="2"
                    className="pointer"
                    onClick={() => {
                      if (prevValue && nextValue) {
                        calData("=");
                      }
                    }}
                  >
                    =
                  </td>
                </tr>
                <tr>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues("0");
                    }}
                  >
                    0
                  </td>
                  <td
                    className="pointer"
                    onClick={() => {
                      addValues(".");
                    }}
                  >
                    .
                  </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
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

          .border-default {
            width: 100%;
            height: 100%;
            border: 1px solid ${colorStyle};
          }

          table tr td {
            text-align: center;
            border: 1px solid ${colorStyle ? colorStyle : "#711fa0"};
            background-color: #b1b6bb;
          }

          table tr td:hover {
            background-color: #dee1e5;
          }

          .custom-boxs {
            height: 400px;
            padding-top: 64px;
          }

          .show-input-cal {
            background-color: ${colorStyle ? colorStyle : "#711fa0"};
            padding: 10px 30px 10px 30px;
            display: flex;
            justify-content: end;
            align-items: center;
            width: 100%;
            height: 100px;
            color: #ffffff;
          }

          .custom-boxs table {
            width: 100%;
            height: 100%;
          }

          @media screen and (min-width: 768px) {
            .show-input-cal p {
              font-size: ${prevValue.length > 9 ? "14px" : "30px"};
            }

            .custom-boxs {
              width: 500px;
              height: 600px;
              margin: auto;
            }
          }
        `}
      </style>
    </div>
  );
}

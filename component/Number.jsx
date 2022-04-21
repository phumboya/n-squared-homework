import React from "react";

export default function index({ value, onChange, style }) {
  return (
    <>
      <button
        className={`${style} ${
          value === "=" || value === "+" ? "custom-style-button" : ""
        } box`}
        onClick={() => {
          value && onChange(value);
        }}
      >
        {value}
      </button>
      <style jsx>
        {`
          .box {
            width: 250px;
            height: 250px;
            min-height: 100px;
            height: 100%;
            outline: none;
            border: none;
            margin: 10px;
            box-shadow: 0px 0px 1px 1px #888888;
          }

          @media screen and (min-width: 768px) {
            .box {
              font-size: 22px;
            }
          }

          .style-one {
            color: #ffffff;
            border-radius: 50%;
            background-color: #f17b62;
          }

          .style-two {
            color: #ffffff;
            border-radius: 10%;
            background-color: #0b7c5c;
          }

          .custom-style-button {
            height: 220px;
          }
        `}
      </style>
    </>
  );
}

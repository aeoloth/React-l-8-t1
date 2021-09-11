import React from "react";

export default function Square({ a, h }) {
  console.log("square", a, h);
  return <h1>Результат: {(a * h) / 2} </h1>;
}

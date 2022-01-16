import { useEffect } from "react";
import "./MouseMove.css";

/* document.addEventListener("mousemove", mouseWork);

let bgColor = [
  "#f2250a",
  "#78423b",
  "#e0b60b",
  "#8be00b",
  "#0be047",
  "#14ffef",
  "#246dff",
  "#9524ff",
  "#ff24e9",
  "#ff2478",
  "#ff2436",
];
function mouseWork(event) {
  let randomColor = bgColor[Math.floor(Math.random() * 12)];
  let bodyBox = document.querySelector("body");
  const spanBox = document.createElement("span");
  // spanBox.classList.add("circles");
  let random = Math.random() * 50;

  spanBox.style.width = random + "px";
  spanBox.style.height = random + "px";
  spanBox.style.border = "2px solid" + randomColor;

  let x = event.offsetX;
  let y = event.offsetY;
  console.log(spanBox);

  spanBox.style.left = x + "px";
  spanBox.style.top = y + "px";
  // bodyBox.appendChild(spanBox);
  setTimeout(() => {
    spanBox.remove();
  }, 4000);
}
  */
let bgColor = [
  "#f2250a",
  "#78423b",
  "#e0b60b",
  "#8be00b",
  "#0be047",
  "#14ffef",
  "#246dff",
  "#9524ff",
  "#ff24e9",
  "#ff2478",
  "#ff2436",
];

const MouseMove = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      let randomColor = bgColor[Math.floor(Math.random() * 12)];
      let bodyBox = document.querySelector("body");
      const spanBox = document.createElement("span");
      let random = Math.random() * 50;

      spanBox.style.width = random + "px";
      spanBox.style.height = random + "px";
      spanBox.style.border = "2px solid" + randomColor;

      let x = event.offsetX;
      let y = event.offsetY;

      spanBox.style.left = x + "px";
      spanBox.style.top = y + "px";
      bodyBox.appendChild(spanBox);

      setTimeout(() => {
        spanBox.remove();
      }, 4000);
    });
    return () => {};
  }, []);
};

export default MouseMove;

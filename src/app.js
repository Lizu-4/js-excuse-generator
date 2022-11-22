/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  // document.getElementById("excuse").innerHTML = excuseGenerator();
  excuseGenerator();

  function excuseGenerator() {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["ate", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    document.getElementById("excuse").innerHTML = `${
      who[Math.floor(Math.random() * who.length)]
    } ${what[Math.floor(Math.random() * what.length)]} ${
      when[Math.floor(Math.random() * when.length)]
    }`;
  }
};

// ${who[Math.floor(Math.random() * who.length)]} ${
//   what[Math.floor(Math.random() * what.length)]
// } ${when[Math.floor(Math.random() * when.length)]}

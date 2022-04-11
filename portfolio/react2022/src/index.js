// 렌더링

import React from "react";
import ReactDOM from "react-dom";

function Hello(props){
  return <h1>hello, {props.name}<h1>
}

const element = <Hello name="webs" />;

ReactDOM.render(element, document.getElementById("root"));
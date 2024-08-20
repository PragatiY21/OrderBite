import React from "react";
import ReactDom from "react-dom";

const App =()=>{
return (
<div>
<h1> MY Project</h1>
</div>
)
}

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<App/>);

const heading = React.createElement("h1", { id: "heading" }, "Hello world form React");
const children = React.createElement("div", { id: "child" }, heading)
const parent = React.createElement("div", { id: "parent" }, children);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
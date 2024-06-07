/**
 * <div id="parent">
 *      <div id="child">
 *           <h1> I am an h1 </h1>
 *           <h2> I am an h2 </h2>
 *     </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1"),
    React.createElement("h2", {}, "i am an h2"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

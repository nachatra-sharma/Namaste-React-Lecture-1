// ================= JavaScript Code =======================
/*
const heading = document.createElement("h1");
const root = document.getElementById("root");
root.appendChild("h1");
heading.innerHTML = "Namaste React";
*/

// ================= React Code =============================

const heading = React.createElement("h1", { id: "title" }, "Heading 1");

const heading2 = React.createElement("h2", { id: "title2" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

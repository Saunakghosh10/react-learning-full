const reactElement = {
  type: "a",
  props: { href: "http://www.google.com", target: "_blank" },
  children: ["Click me!"],
};

const maincontainer = document.querySelector("#root");

customRender(reactElement, maincontainer);


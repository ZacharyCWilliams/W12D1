const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  if (arg instanceof HTMLElement){
    console.log("if condition hit");
    return new DOMNodeCollection([arg]);
  } else {
    console.log("else condition hit")
    const nodeList = document.querySelectorAll(arg);
    const nodeArray = Array.from(nodeList);
    return new DOMNodeCollection(nodeArray);
  }
};
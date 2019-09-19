window.$l = (arg) => {
  const nodeList = document.querySelectorAll(arg);
  const nodeArray = Array.from(nodeList);
  return nodeArray
}
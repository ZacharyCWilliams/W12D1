class DOMNodeCollection {
  constructor(nodeList) {
    this.nodeList = nodeList;
    this.render();
  }

  render() {
    return this.nodeList;
  }

  html(str) {
    if (str === undefined) {
      if (this.nodeList.length > 0) {
        return this.nodeList[0].innerHTML;
      }
    } else {
      this.nodeList.forEach(node => {
        node.innerHTML = str;
      });
    };
  }

};

module.exports = DOMNodeCollection;
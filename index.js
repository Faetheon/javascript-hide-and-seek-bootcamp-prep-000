const reducer = (accumulator, currentValue) => {currentValue + accumulator}

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested");
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');

  while (node.children.length !== 0) {
    node = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  const rank = [...document.querySelectorAll('ul.ranked-list li')];
  rank.forEach((li) => { li.textContent = parseInt(li.textContent) + n });
}
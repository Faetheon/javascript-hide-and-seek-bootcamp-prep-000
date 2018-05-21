const reducer = (accumulator, currentValue) => {currentValue + accumulator}

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested");
}

function deepestChild() {
<<<<<<< HEAD
  let node = document.querySelector('div#grand-node');

  while (node.children.length !== 0) {
    node = node.children[0];
  }
  return node;
=======
  const child = [...document.querySelectorAll('div#grand-node div')];
  return child.length;
  // for(let i = child.length; i > 0; i--) {
  //   if(i === (((child.length - 1)/2) + 1)) {
  //     return child[i].textContent;
  //   }
  // }
  // return document.querySelector('#grand-node div div div div');
>>>>>>> cc25b8fc03e2f995c2ac789cafe9bb029e492a3d
}

function increaseRankBy(n) {
  const rank = [...document.querySelectorAll('ul.ranked-list li')];
  rank.forEach((li) => { li.textContent = parseInt(li.textContent) + n });
}
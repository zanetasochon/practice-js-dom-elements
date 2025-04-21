const aList = document.querySelectorAll('a');
console.log(aList);

let hasAttribute;

const hasLink = aList.forEach((link) => {
  if (link.hasAttribute('data-url')) {
    hasAttribute = link.getAttribute('data-url');
    link.setAttribute('href', hasAttribute);
  }
});

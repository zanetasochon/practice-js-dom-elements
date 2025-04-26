const commentsItemNewest = document.querySelector('.comments__item.comments__item--newest');
const childrenOfLi = commentsItemNewest.querySelectorAll('p');

let listOfSpan;
const spanArr = [];

const listOfP = childrenOfLi.forEach((el) => {
  listOfSpan = el.querySelectorAll('span');

  for (let i = 0; i < listOfSpan.length; i++) {
    spanArr.push(listOfSpan[i]);
  }
});

console.log(
  'Zostało znalezionych elementów posiadających atrybut data-info w liczbie:',
  spanArr.length
);

export function clearPage() {
  const content = document.querySelector(".inner-page");
  content.remove();
  const newInnerPage = document.createElement('div');
  newInnerPage.classList.add('inner-page');
  document.querySelector('#content').appendChild(newInnerPage);
}
import { pageLoad } from './pageload';
import { clearPage } from './clearpage';
import './main.css';

pageLoad();

const links = [...document.querySelectorAll('.link-container a')];

links.forEach(item => item.addEventListener('click', switchPage));

function switchPage(e) {
  links.forEach(function (item) {
    const temp = item.nextElementSibling;
    temp.style.color = 'rgb(10, 11, 19)';
  })
  const dot = e.target.nextElementSibling;
  dot.style.color = 'rgb(207, 104, 104)';

  clearPage();
}


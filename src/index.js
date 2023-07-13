import { pageLoad } from './pageload';
import { clearPage } from './clearpage';
import { loadMainPage } from './mainpage';
import { loadMenu } from './loadmenu';
import './main.css';

pageLoad();
loadMainPage();

const links = [...document.querySelectorAll('.link-container a')];

links[0].nextElementSibling.style.color = 'rgb(207, 104, 104)';

links.forEach(item => item.addEventListener('click', switchPage));

function switchPage(e) {
  links.forEach(function (item) {
    const temp = item.nextElementSibling;
    temp.style.color = 'rgb(10, 11, 19)';
  })
  const dot = e.target.nextElementSibling;
  dot.style.color = 'rgb(207, 104, 104)';

  clearPage();

  if (e.target.innerText === 'HOME') {
    loadMainPage();
  } else if (e.target.innerText === 'MENU') {
    loadMenu();
  }
}


import {loadMainPage} from './mainpage';

export function pageLoad() {
  const page = document.querySelector('#content');
  const navigationContainer = document.createElement('nav');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const aboutLink = document.createElement('a');
  const innerPage = document.createElement('div');

  homeLink.innerText = 'HOME';
  menuLink.innerText = 'MENU';
  aboutLink.innerText = 'ABOUT';

  navigationContainer.appendChild(homeLink);
  navigationContainer.appendChild(menuLink);
  navigationContainer.appendChild(aboutLink);
  page.appendChild(navigationContainer);
  page.appendChild(innerPage);

  loadMainPage(innerPage);
}
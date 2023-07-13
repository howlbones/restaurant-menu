import { loadMainPage } from './mainpage';

export function pageLoad() {
  const page = document.querySelector('#content');
  const navigationContainer = document.createElement('nav');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const aboutLink = document.createElement('a');
  const innerPage = document.createElement('div');
  const homeDiv = document.createElement('div');
  const menuDiv = document.createElement('div');
  const aboutDiv = document.createElement('div');
  const dot1 = document.createElement('p');
  const dot2 = document.createElement('p');
  const dot3 = document.createElement('p');

  dot1.textContent = '•';
  dot2.textContent = '•';
  dot3.textContent = '•';

  homeDiv.classList.add('link-container');
  menuDiv.classList.add('link-container');
  aboutDiv.classList.add('link-container');

  homeLink.classList.add('current');
  innerPage.classList.add('inner-page');

  homeLink.innerText = 'HOME';
  menuLink.innerText = 'MENU';
  aboutLink.innerText = 'ABOUT';

  homeDiv.appendChild(homeLink);
  homeDiv.appendChild(dot1);
  menuDiv.appendChild(menuLink);
  menuDiv.appendChild(dot2);
  aboutDiv.appendChild(aboutLink);
  aboutDiv.appendChild(dot3);

  navigationContainer.appendChild(homeDiv);
  navigationContainer.appendChild(menuDiv);
  navigationContainer.appendChild(aboutDiv);
  page.appendChild(navigationContainer);
  page.appendChild(innerPage);

  loadMainPage(innerPage);
}
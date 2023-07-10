
import Logo from './img/logo.svg';

export function loadMainPage(innerPage) {
  const container = document.createElement('div');
  const redText = document.createElement('div');
  const logoFirstLineText = document.createElement('h1');
  const logoSecondLineText = document.createElement('h3');
  const symbols = document.createElement('h2');


  symbols.classList.add = 'symbols';
  redText.id = 'logo-red-text';

  logoFirstLineText.innerText = 'NEW ERA';
  symbols.innerText = '時代';
  logoSecondLineText.innerText = 'RESTAURANT';

  const logo = document.createElement('img');
  logo.src = Logo;

  redText.appendChild(logoFirstLineText);
  redText.appendChild(symbols);
  container.appendChild(redText);
  container.appendChild(logoSecondLineText);
  container.appendChild(logo);
  innerPage.appendChild(container);
}
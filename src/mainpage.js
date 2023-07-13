
import Logo from './img/logo.svg';

export function loadMainPage(innerPage) {
  const leftContainer = document.createElement('div');
  const redText = document.createElement('div');
  const logoFirstLineText = document.createElement('h1');
  const logoSecondLineText = document.createElement('h3');
  const symbols = document.createElement('h2');
  
  leftContainer.classList.add('left-side-container');

  symbols.classList.add('symbols');
  redText.id = 'logo-red-text';

  logoFirstLineText.innerText = 'NEW ERA';
  symbols.innerText = '時代';
  logoSecondLineText.innerText = 'RESTAURANT';

  const logo = document.createElement('img');
  logo.src = Logo;

  redText.appendChild(logoFirstLineText);
  redText.appendChild(symbols);
  leftContainer.appendChild(redText);
  leftContainer.appendChild(logoSecondLineText);
  leftContainer.appendChild(logo);
  innerPage.appendChild(leftContainer);


  const rightContainer = document.createElement('div');
  const slogan = document.createElement('p');
  const text1 = document.createElement('p');
  const text2 = document.createElement('p');
  const text3 = document.createElement('p');

  rightContainer.classList.add('right-side-container');
  slogan.classList.add('slogan');
  
  slogan.textContent = 'Where every flavor tells a story';
  text1.textContent = 'Welcome to New Era Restaurant - where tradition meets modernity in the heart of Chinese cuisine!';
  text2.textContent = 'Reviving classic flavors with a contemporary twist, we are a fast food restaurant that takes you on a delicious journey through China\'s rich culinary heritage.';
  text3.textContent = 'Our vibrant menu showcases an array of mouthwatering dishes crafted with the freshest ingredients, cooked to perfection, and served with a dash of style.';

  rightContainer.appendChild(text1);
  rightContainer.appendChild(text2);
  rightContainer.appendChild(text3);
  rightContainer.appendChild(slogan); 
  innerPage.appendChild(rightContainer);



}
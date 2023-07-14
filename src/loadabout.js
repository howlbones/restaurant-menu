export function loadAbout() {

  const innerPage = document.querySelector('.inner-page');
  innerPage.classList.add('about');


  const h2 = document.createElement('h2');
  h2.textContent = 'Welcome to New Era!';

  const aboutus = document.createElement('h3');
  aboutus.textContent = 'About Us';

  const p1 = document.createElement('p');
  p1.textContent = 'At New Era, we are dedicated to providing you with an exceptional culinary experience that combines traditional Chinese flavors with a modern twist. Our talented chefs carefully craft each dish to ensure the highest quality and authenticity.';
  
  const ingredients = document.createElement('h3');
  ingredients.textContent = 'Fresh Ingredients'; 
  
  const p2 = document.createElement('p');
  p2.textContent = 'We believe that the key to superb Chinese cuisine lies in using the freshest and finest ingredients. At New Era, we source our ingredients from local markets to guarantee their freshness and quality. From crispy vegetables to succulent meats, all our ingredients undergo stringent quality checks to ensure they meet our high standards.';

  const events = document.createElement('h3');
  events.textContent = 'Private Dining and Events';

  const p3 = document.createElement('p');
  p3.textContent = 'Whether you are hosting a business meeting, celebrating a special occasion, or simply want an intimate dining experience, our private dining rooms provide the perfect setting. With customizable menus, impeccable service, and a luxurious environment, we strive to make your event a memorable one.';

  const creditContainer = document.createElement('div');
  creditContainer.classList.add('credit-container');

  const credit = document.createElement('a');
  credit.textContent = 'Website by Lainhaven';
  credit.href = 'https://github.com/lainhaven';
  credit.target = '_blank';
  creditContainer.appendChild(credit);


  innerPage.appendChild(h2);
  innerPage.appendChild(aboutus);
  innerPage.appendChild(p1);
  innerPage.appendChild(ingredients);
  innerPage.appendChild(p2);
  innerPage.appendChild(events);
  innerPage.appendChild(p3);
  innerPage.appendChild(creditContainer);

}
import chowMeinPhoto from './img/chow.jpg';
import potStickersPhoto from './img/potstickers.jpg';
import pepperChickenPhoto from './img/pepperchicken.jpg';
import friedRicePhoto from './img/friedrice.jpg';
import stirFryPhoto from './img/stirfry.jpg';
import pancakesPhoto from './img/pancakes.jpg';
import tsoChickenPhoto from './img/tsochicken.jpg';
import danNoodlesPhoto from './img/dannoodles.jpg';
import lettuceWrapsPhoto from './img/lettucewraps.png';
import szechuanChickenPhoto from './img/szechuan-chicken.jpg';

export function loadMenu() {
  console.log('loading Menu');
  const innerPage = document.querySelector('.inner-page');
  const menuGrid = document.createElement('div');

  innerPage.classList.add('menu');
  menuGrid.classList.add('menu-grid');

  let menu = {
    'chow-mein': {
      'name': 'Express Chow Mein',
      'description': 'A traditional Chinese dish made with egg noodles and stir-fried veggies. This dish is pan-fried so the noodles get a nice crisp to them and then tossed in a yummy sauce.',
      'photo': chowMeinPhoto,
      'price': '12.88',
    },
    'pot-stickers': {
      'name': 'Ginger Pork Pot Stickers',
      'description': 'Dumpling that is stuffed with a variety of ingredients such as meats, fish, vegetables and seasonings. Wrapped and pan cooked before serving',
      'photo': potStickersPhoto,
      'price': '15.99',
    },
    'pepper-chicken': {
      'name': 'Black Pepper Chicken',
      'description': 'Black pepper chicken relies on fresh vegetables and dried herbs as well as a few sauces to come together with a rich, hearty, and indulgent flavor.',
      'photo': pepperChickenPhoto,
      'price': '14.65',
    },
    'fried-rice': {
      'name': 'Dragons Den Fried Rice',
      'description': 'A dish of cooked rice that has been stir-fried in a wokand is mixed with other ingredients such as eggs, vegetables, seafood, or meat.',
      'photo': friedRicePhoto,
      'price': '12.99',
    },
    'stir-fry': {
      'name': 'Taobao Beef and Broccoli',
      'description': 'A dish consisting of pieces of flank steak that are stir-fried with broccoli and seasoned with a Chinese-style sauce made with oyster sauce, soy sauce, and cornstarch.',
      'photo': stirFryPhoto,
      'price': '13.25',
    },
    'pancakes': {
      'name': 'Scallion Pancakes',
      'description': 'A Chinese savory, unleavened flatbread folded with oil and minced scallions (green onions).',
      'photo': pancakesPhoto,
      'price': '9.99',
    },
    'tso-chicken': {
      'name': 'General Tso\'s Chicken',
      'description': 'The thick sauce is the source of the sweet and tangy flavor, while the dried chilis make the dish extra spicy. The chicken is deep-fried and usually served skinless and boneless, making it soft and easy to eat.',
      'photo': tsoChickenPhoto,
      'price': '14.99',
    },
    'dan-noodles': {
      'name': 'Dan Dan Noodles',
      'description': 'The freshly boiled thin noodles are served in a savory, spicy sauce topped with crispy pork and peanut flakes.',
      'photo': danNoodlesPhoto,
      'price': '15.88',
    },
    'lettuce-wraps': {
      'name': 'Copycat Chicken Lettuce Wraps',
      'description': 'A lettuce sandwich is a wrap with lettuce substituted for the bread, or a sandwich with a filling consisting primarily of lettuce',
      'photo': lettuceWrapsPhoto,
      'price': '13.99',
    },
    'szechuan-chicken': {
      'name': 'Szechuan Chicken',
      'description': 'Szechuan chicken is a spicy stir-fried dish that is popular in the Sichuan province in China.',
      'photo': szechuanChickenPhoto,
      'price': '16,99',
    }

  }



  for (const dish in menu) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');

    const itemName = document.createElement('p');
    itemName.innerText = menu[dish].name;

    const photo = document.createElement('img');
    photo.src = menu[dish].photo;

    const itemDesc = document.createElement('p');
    itemDesc.innerText = menu[dish].description;

    const textContainer = document.createElement('div');

    const itemPrice = document.createElement('p');
    itemPrice.innerText = menu[dish].price;

    itemContainer.appendChild(photo);
    textContainer.appendChild(itemName);
    textContainer.appendChild(itemDesc);
    textContainer.appendChild(itemPrice);
    itemContainer.appendChild(textContainer);
    innerPage.appendChild(itemContainer);
  }


  // innerPage.appendChild(heading);
}
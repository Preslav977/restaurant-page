import homeImage from './background.jpg';
import banitsa from './banitsa.jpeg';
import kiseloMlyako from './kiselo-mlyako.jpg';
import meshanaSkara from './meshana-skara.jpg';
import moussaka from './moussaka.jpg';
import sarmi from './sarmi.jpg';
import shkembe from './shkembe.jpg';
import shopskaSalata from './shopaska-salata.jpg';
import tarator from './tarator.jpg';

const content = document.getElementById('content');

function createMenuTab() {
  // create mainContainer
  const mainContainer = document.createElement('div');
  // add class to mainContainer
  mainContainer.classList.add('restaurant-container');
  // create mainTag
  const mainTag = document.createElement('main');
  mainTag.classList.add('main-container');
  // create menuTabContentContainer
  const menuTabContentContainer = document.createElement('div');
  menuTabContentContainer.classList.add('menu-page');
  // add image menuImageTab
  const menuImageTab = new Image();
  menuImageTab.src = homeImage;
  menuImageTab.classList.add('menu-img-tab');
  menuTabContentContainer.appendChild(menuImageTab);
  // create menuTabContainer
  const menuTabContainer = document.createElement('div');
  menuTabContainer.classList.add('menu-tab-container');
  menuTabContentContainer.appendChild(menuTabContainer);
  mainContainer.appendChild(mainTag);
  mainTag.appendChild(menuTabContentContainer);
  content.appendChild(mainContainer);

  const mealOne = document.createElement('div');
  // meal one
  mealOne.classList.add('meal-menu');
  const myBanitsa = new Image();
  myBanitsa.classList.add('meal-menu');
  mealOne.textContent = 'Banitsa, 1.50$';
  myBanitsa.src = banitsa;
  mealOne.appendChild(myBanitsa);
  menuTabContainer.appendChild(mealOne);
  // meal two
  const mealTwo = document.createElement('div');
  mealTwo.classList.add('meal-menu');
  mealTwo.textContent = 'Kiselo Mlyako, 2$';
  const myKiseloMlyako = new Image();
  myKiseloMlyako.classList.add('meal-menu');
  myKiseloMlyako.src = kiseloMlyako;
  mealTwo.appendChild(myKiseloMlyako);
  menuTabContainer.appendChild(mealTwo);
  // meal three
  const mealThree = document.createElement('div');
  mealThree.classList.add('meal-menu');
  mealThree.textContent = 'Meshana Skara, 4$';
  menuTabContainer.appendChild(mealThree);
  const myMeshanaSkara = new Image();
  myMeshanaSkara.classList.add('meal-menu');
  myMeshanaSkara.src = meshanaSkara;
  mealThree.appendChild(myMeshanaSkara);
  // meal four
  const mealFourth = document.createElement('div');
  mealFourth.classList.add('meal-menu');
  mealFourth.textContent = 'Moussaka, 5$';
  const myMoussaka = new Image();
  myMoussaka.classList.add('meal-menu');
  myMoussaka.src = moussaka;
  mealFourth.appendChild(myMoussaka);
  menuTabContainer.appendChild(mealFourth);
  // meal five
  const mealFive = document.createElement('div');
  mealFive.classList.add('meal-menu');
  mealFive.textContent = 'Sarmi, 3.50$';
  const mySarmi = new Image();
  mySarmi.classList.add('meal-menu');
  mySarmi.src = sarmi;
  mealFive.appendChild(mySarmi);
  menuTabContainer.appendChild(mealFive);
  // meal six
  const mealSix = document.createElement('div');
  mealSix.classList.add('meal-menu');
  mealSix.textContent = 'Shkembe, 6$';
  const myShkembe = new Image();
  myShkembe.classList.add('meal-menu');
  myShkembe.src = shkembe;
  mealSix.appendChild(myShkembe);
  menuTabContainer.appendChild(mealSix);
  const mealSeven = document.createElement('div');
  // meal seven
  mealSeven.classList.add('meal-menu');
  mealSeven.textContent = 'Shopska Salata, 5.50$';
  const myShopskaSalata = new Image();
  myShopskaSalata.classList.add('meal-menu');
  myShopskaSalata.src = shopskaSalata;
  mealSeven.appendChild(myShopskaSalata);
  menuTabContainer.appendChild(mealSeven);
  // meal eight
  const mealEight = document.createElement('div');
  mealEight.classList.add('meal-menu');
  mealEight.textContent = 'Tarator, 2$';
  const myTarator = new Image();
  myTarator.classList.add('meal-menu');
  myTarator.src = tarator;
  mealEight.appendChild(myTarator);
  menuTabContainer.appendChild(mealEight);
}

// eslint-disable-next-line import/prefer-default-export
export { createMenuTab };

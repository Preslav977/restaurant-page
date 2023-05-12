import './style.css';
import homeImage from './background.jpg';
import flag from './bulgarian_flag.png';
import chef from './chef.jpg';

const content = document.getElementById('content');

function createHeader(elementType, elementClass, elementText) {
  // main container to append the content
  const container = document.createElement('div');
  container.classList.add('header-content');
  // container to append the content
  const containerContent = document.createElement(elementType);
  containerContent.classList.add(elementClass);
  containerContent.textContent = elementText;
  container.appendChild(containerContent);
  content.appendChild(container);
}

function createTabMenu(elementClass) {
  // div container
  const container = document.createElement('div');
  container.classList.add('restaurant-tab-container');
  // creating li
  const homeTab = document.createElement('li');
  homeTab.classList.add(elementClass);
  homeTab.textContent = 'Home';
  // appending to the container
  container.appendChild(homeTab);
  // creating another li
  const menuTab = document.createElement('li');
  menuTab.classList.add(elementClass);
  menuTab.textContent = 'Menu';
  container.appendChild(menuTab);
  // creating last li
  const contactTab = document.createElement('li');
  contactTab.classList.add(elementClass);
  contactTab.textContent = 'Contact';
  container.appendChild(contactTab);
  content.appendChild(container);
}

function createHomeTab() {
  // creating a main tag
  const mainTag = document.createElement('main');
  // creating a nested div
  const container = document.createElement('div');
  container.classList.add('home-page');
  // home-tab image
  const homeImageTab = new Image();
  homeImageTab.src = homeImage;
  homeImageTab.classList.add('home-img-tab');
  container.appendChild(homeImageTab);
  // flag container
  const flagContainer = document.createElement('div');
  flagContainer.classList.add('flag-container');
  const myFlag = new Image();
  myFlag.src = flag;
  myFlag.classList.add('flag-img');
  flagContainer.appendChild(myFlag);
  // home-tab container
  const homeTabContainer = document.createElement('div');
  homeTabContainer.classList.add('home-tab-container');
  container.appendChild(homeTabContainer);
  // paragraph
  const firstParagraph = document.createElement('p');
  firstParagraph.classList.add('first-paragraph');
  firstParagraph.textContent =
    'Welcome to our restaurant!, come and taste our delicious meals and decent price';
  const button = document.createElement('button');
  button.classList.add('join-btn');
  button.textContent = 'JOIN';
  firstParagraph.appendChild(button);
  homeTabContainer.appendChild(firstParagraph);
  container.appendChild(flagContainer);
  mainTag.appendChild(container);
  content.appendChild(mainTag);
}

function createFooter() {
  const footerTag = document.createElement('footer');
  content.appendChild(footerTag);
  footerTag.classList.add('restaurant-footer');
  footerTag.textContent = 'Made by Preslaw';
}

export { createHeader, createTabMenu, createHomeTab, createFooter };

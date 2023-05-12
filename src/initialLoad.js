import './style.css';
import homeImage from './background.jpg';
import flag from './bulgarian_flag.png';

const content = document.getElementById('content');

function createHeader(elementType, elementClass, elementText) {
  // create container to append, content
  const container = document.createElement('div');
  // add class to the container
  container.classList.add('header-content');
  // create containerContent with parameter
  const containerContent = document.createElement(elementType);
  // add class to that containerContent
  containerContent.classList.add(elementClass);
  // add textContent to the containerContent
  containerContent.textContent = elementText;
  // apppend the div to the header
  container.appendChild(containerContent);
  // append to the content div, the container
  content.appendChild(container);
}

function createTabMenu(elementClass) {
  // create div container
  const container = document.createElement('div');
  // add class to the container
  container.classList.add('restaurant-tab-container');
  // creating li
  const homeTab = document.createElement('li');
  // add class to the li
  homeTab.classList.add(elementClass);
  // add textContent to the li
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
    'Welcome to our restaurant, come and taste our delicious meals and decent price!';
  const button = document.createElement('button');
  button.classList.add('join-btn');
  button.textContent = 'JOIN';
  // apppend the button to the paragraph
  firstParagraph.appendChild(button);
  // append the paragraph to the homeTabContainer
  homeTabContainer.appendChild(firstParagraph);
  // apppend the flagContainer to the container
  container.appendChild(flagContainer);
  // append the mainTag to the container
  mainTag.appendChild(container);
  // append the mainTag to the content div
  content.appendChild(mainTag);
}

function createFooter() {
  const footerTag = document.createElement('footer');
  content.appendChild(footerTag);
  footerTag.classList.add('restaurant-footer');
  footerTag.textContent = 'Made by Preslaw';
}

export { createHeader, createTabMenu, createHomeTab, createFooter };

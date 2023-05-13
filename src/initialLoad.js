import './style.css';
import homeImage from './background.jpg';
import flag from './bulgarian_flag.png';

const content = document.getElementById('content');

function createHeader(elementType, elementClass, elementText) {
  // create headerContainer to append, headerContent
  const headerContainer = document.createElement('div');
  // add class to the container
  headerContainer.classList.add('header-content');
  // create containerContent with parameter
  const headerContent = document.createElement(elementType);
  // add class to that containerContent
  headerContent.classList.add(elementClass);
  // add textContent to the containerContent
  headerContent.textContent = elementText;
  // append the div to the header
  headerContainer.appendChild(headerContent);
  // append to the content div, the container
  content.appendChild(headerContainer);
}

function createTabMenu(elementClass) {
  // create tabMenuContainer
  const tabMenuContainer = document.createElement('div');
  // add class to the tabMenuContainer
  tabMenuContainer.classList.add('restaurant-tab-container');
  // creating homeTab
  const homeTab = document.createElement('li');
  // add class to the homeTab
  homeTab.classList.add(elementClass);
  // set attribute to homeTab
  homeTab.setAttribute('restaurant-tab', '0');
  // add textContent to the homeTab
  homeTab.textContent = 'Home';
  // appending to the tabMenuContainer
  tabMenuContainer.appendChild(homeTab);
  // creating another menuTab
  const menuTab = document.createElement('li');
  // add class to the menuTab
  menuTab.classList.add(elementClass);
  // set attribute to menuTab
  menuTab.setAttribute('restaurant-tab', '1');
  // add textContent to menuTab
  menuTab.textContent = 'Menu';
  // append the menuTab to the tabMenuContainer
  tabMenuContainer.appendChild(menuTab);
  // creating last contactTab
  const contactTab = document.createElement('li');
  // add class to contactTab
  contactTab.classList.add(elementClass);
  // set attribute to contactTab
  contactTab.setAttribute('restaurant-tab', '2');
  // set textContent of the contactTab
  contactTab.textContent = 'Contact';
  // append contactTab to the tabMenuContainer
  tabMenuContainer.appendChild(contactTab);
  // append the tabMenuContainer to the content
  content.appendChild(tabMenuContainer);
}

function createHomeTab() {
  // create mainContainer
  const mainContainer = document.createElement('div');
  // add class to mainContainer
  mainContainer.classList.add('restaurant-container');
  // creating a main tag
  const mainTag = document.createElement('main');
  // create a class to the mainTag
  mainTag.classList.add('main-container');
  // creating a homeTabContentContainer
  const homeTAbContentContainer = document.createElement('div');
  // ad class to it
  homeTAbContentContainer.classList.add('home-page');
  // home-tab image
  const homeImageTab = new Image();
  homeImageTab.src = homeImage;
  homeImageTab.classList.add('home-img-tab');
  homeTAbContentContainer.appendChild(homeImageTab);
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
  homeTAbContentContainer.appendChild(homeTabContainer);
  // paragraph
  const firstParagraph = document.createElement('p');
  firstParagraph.classList.add('first-paragraph');
  firstParagraph.textContent =
    'Welcome to our restaurant, come and taste our delicious meals and decent price!';
  const button = document.createElement('button');
  button.classList.add('join-btn');
  button.textContent = 'JOIN';
  // append the button to the paragraph
  firstParagraph.appendChild(button);
  // append the paragraph to the homeTabContainer
  homeTabContainer.appendChild(firstParagraph);
  // append the flagContainer to the container
  homeTAbContentContainer.appendChild(flagContainer);
  // append the mainTag to the container
  mainContainer.appendChild(mainTag);
  mainTag.appendChild(homeTAbContentContainer);
  // append the mainTag to the content div
  content.appendChild(mainContainer);
}

function createFooter() {
  const footerTag = document.createElement('footer');
  content.appendChild(footerTag);
  footerTag.classList.add('restaurant-footer');
  footerTag.textContent = 'Made by Preslaw';
}

export { createHeader, createTabMenu, createHomeTab, createFooter };

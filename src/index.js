import {
  createHeader,
  createTabMenu,
  createHomeTab,
  createFooter,
} from './initialLoad';

import { createMenuTab } from './menuLoad';

import { createContactTab } from './contactLoad';

createHeader('header', 'restaurant-header', 'Bulgarian Restaurant');
createTabMenu('restaurant-tab');
createHomeTab();
createFooter();

function switchTabs(e) {
  const getLiId = e.target;
  console.log(getLiId);
  const saveLiId = getLiId.getAttribute('restaurant-tab');
  const restaurantContainer = document.querySelector('.restaurant-container');
  console.log(restaurantContainer);

  if (saveLiId === '1') {
    restaurantContainer.remove();
    createMenuTab();
  } else if (saveLiId === '2') {
    restaurantContainer.remove();
    createContactTab();
  } else if (saveLiId === '0') {
    restaurantContainer.remove();
    createHomeTab();
  }
}

const selectAllLiElements = document.querySelectorAll('.restaurant-tab');
selectAllLiElements.forEach((liElement) => {
  liElement.addEventListener('click', switchTabs);
});

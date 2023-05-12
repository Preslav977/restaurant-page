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
// createHomeTab();
// createMenuTab();
createContactTab();
createFooter();

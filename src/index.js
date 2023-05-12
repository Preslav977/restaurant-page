import {
  createHeader,
  createTabMenu,
  // createHomeTab,
  createFooter,
} from './initialLoad';
import { createMenuTab } from './menuLoad';

createHeader('header', 'restaurant-header', 'Bulgarian Restaurant');
createTabMenu('restaurant-tab');
// createHomeTab();
createMenuTab();
createFooter();

import homeImage from './background.jpg';
import contact from './contact.png';

const content = document.getElementById('content');

function createContactTab() {
  const mainTag = document.createElement('main');
  const container = document.createElement('div');
  container.classList.add('menu-page');
  const contactTabContainer = document.createElement('div');
  contactTabContainer.classList.add('contact-tab-container');
  const homeImageTab = new Image();
  homeImageTab.src = homeImage;
  homeImageTab.classList.add('home-img-tab');
  const myContact = new Image();
  myContact.src = contact;
  myContact.classList.add('contact-img-tab');
  contactTabContainer.appendChild(myContact);
  container.appendChild(homeImageTab);
  container.appendChild(contactTabContainer);
  mainTag.appendChild(container);
  content.appendChild(mainTag);

  const contactUs = document.createElement('p');
  contactUs.classList.add('contact-us');
  contactUs.textContent = 'Contact US';
  contactTabContainer.appendChild(contactUs);
}

// eslint-disable-next-line import/prefer-default-export
export { createContactTab };

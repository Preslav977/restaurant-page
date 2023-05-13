import homeImage from './background.jpg';
import contact from './contact.png';

const content = document.getElementById('content');

function createContactTab() {
  // create mainContainer
  const mainContainer = document.createElement('div');
  // add class to mainContainer
  mainContainer.classList.add('restaurant-container');
  // create mainTag
  const mainTag = document.createElement('main');
  mainTag.classList.add('main-container');
  // create ContactTabContentContainer
  const contactTabContentContainer = document.createElement('div');
  contactTabContentContainer.classList.add('menu-page');
  // create img contactImageTab
  const contactImageTab = new Image();
  contactImageTab.src = homeImage;
  contactImageTab.classList.add('contact-img-tab');
  contactTabContentContainer.appendChild(contactImageTab);
  // create contactabContainer
  const contactTabContainer = document.createElement('div');
  contactTabContainer.classList.add('contact-tab-container');
  const myContact = new Image();
  myContact.src = contact;
  myContact.classList.add('contact-img');
  contactTabContainer.appendChild(myContact);
  // create paragraph
  const contactUs = document.createElement('p');
  contactUs.classList.add('contact-us');
  contactUs.textContent = 'Contact US';
  // append the paragraph to the contactTabContainer
  contactTabContainer.appendChild(contactUs);
  contactTabContentContainer.appendChild(contactTabContainer);
  mainContainer.appendChild(mainTag);
  mainTag.appendChild(contactTabContentContainer);
  content.appendChild(mainContainer);
}

// eslint-disable-next-line import/prefer-default-export
export { createContactTab };

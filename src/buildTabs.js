import { menuGen } from './menuGen';
import { reservationGen } from './reservationGen';
import { aboutGen } from './aboutGen';

const buildTabs = () => {
  // Main container for tabs
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabs';

  //Now I need to build the three needed tabs (Menu, Reservations, and About)
  const menuTab = document.createElement('section');
  menuTab.className = 'visible';
  menuTab.appendChild(menuGen());
  tabsContainer.appendChild(menuTab);

  const reservationTab = document.createElement('section');
  reservationTab.className = 'hidden';
  reservationTab.appendChild(reservationGen());
  tabsContainer.appendChild(reservationTab);

  const aboutTab = document.createElement('section');
  aboutTab.className = 'hidden';
  aboutTab.appendChild(aboutGen());
  tabsContainer.appendChild(aboutTab);

  return tabsContainer;
};

export { buildTabs };

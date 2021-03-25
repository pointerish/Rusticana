import { menuGen } from './menuGen';
import { reservationGen } from './reservationGen';
import { aboutGen } from './aboutGen';

const buildTabs = () => {
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabs';

  const menuTab = document.createElement('section');
  menuTab.className = 'menu-section';
  menuTab.appendChild(menuGen());
  tabsContainer.appendChild(menuTab);

  const reservationTab = document.createElement('section');
  reservationTab.className = 'reservation-section';
  reservationTab.appendChild(reservationGen());
  tabsContainer.appendChild(reservationTab);

  const aboutTab = document.createElement('section');
  aboutTab.className = 'about-section';
  aboutTab.appendChild(aboutGen());
  tabsContainer.appendChild(aboutTab);

  return tabsContainer;
};

export { buildTabs };

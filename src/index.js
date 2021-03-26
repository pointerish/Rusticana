import buildHeader from './buildHeader';
import buildTabs from './buildTabs';
import buildFooter from './buildFooter';
/* eslint-disable */
import css from './styles/style.css';
/* eslint-enable */

const pageLoad = () => {
  const htmlElements = [buildHeader(), buildTabs(), buildFooter()];
  const container = document.querySelector('#content');
  for (let j = 0; j <= htmlElements.length; j+=1) {
    container.appendChild(htmlElements[j]);
  }

  const menuBtn = document.querySelector('.menuBtn');
  const reservationBtn = document.querySelector('.reservationsBtn');
  const aboutBtn = document.querySelector('.aboutBtn');

  const menuTab = document.querySelector('.menu-section');
  const reservationTab = document.querySelector('.reservation-section');
  const aboutTab = document.querySelector('.about-section');
  menuTab.style.display = 'flex';
  reservationTab.style.display = 'none';
  aboutTab.style.display = 'none';

  window.addEventListener('click', (event) => {
    if (event.target === menuBtn) {
      menuTab.style.display = 'flex';
      reservationTab.style.display = 'none';
      aboutTab.style.display = 'none';
    }
    if (event.target === reservationBtn) {
      menuTab.style.display = 'none';
      reservationTab.style.display = 'flex';
      aboutTab.style.display = 'none';
    }
    if (event.target === aboutBtn) {
      menuTab.style.display = 'none';
      reservationTab.style.display = 'none';
      aboutTab.style.display = 'flex';
    }
  });
};

pageLoad();
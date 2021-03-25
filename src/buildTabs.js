const buildTabs = () => {
    // Main container for tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs';

    //Now I need to build the three needed tabs (Menu, Reservations, and About)
    const menuTab = document.createElement('section');
    menuTab.className = 'visible';
    tabsContainer.appendChild(menuTab);

    const reservationTab = document.createElement('section');
    reservationTab.className = 'hidden';
    tabsContainer.appendChild(reservationTab);

    const aboutTab = document.createElement('section');
    aboutTab.className = 'hidden';
    tabsContainer.appendChild(aboutTab);
    
    return tabsContainer;
  };

export { buildTabs }
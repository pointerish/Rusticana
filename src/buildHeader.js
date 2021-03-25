const buildHeader = () => {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'header';
  const headerItemsContainer = document.createElement('div');
  headerItemsContainer.className = 'd-flex header-items';
  headerContainer.appendChild(headerItemsContainer);
  const logoItem = document.createElement('div');
  logoItem.className = 'logo';
  const logoP = document.createElement('p');
  logoP.textContent = 'Rusticana Ristorante';
  logoItem.appendChild(logoP);
  headerItemsContainer.appendChild(logoItem);
  const listItems = document.createElement('div');
  listItems.className = 'list-items';
  headerItemsContainer.appendChild(listItems);
  const headerItems = {
    menuBtn: 'Menu',
    reservationsBtn: 'Reservations',
    aboutBtn: 'About',
  };
  Object.keys(headerItems).forEach((key) => {
    const listItem = document.createElement('div');
    listItem.textContent = headerItems[key];
    listItem.className = key;
    listItems.appendChild(listItem);
  });
  return headerContainer;
};

export { buildHeader };

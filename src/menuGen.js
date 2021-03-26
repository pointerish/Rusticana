const menuGen = () => {
  const menu = [
    'Caprese Salad',
    'Panzenella',
    'Bruschetta',
    'Carbonara',
    'Pasta Con Pomodoro E Basilico',
  ];

  const items = document.createElement('div');
  items.className = 'manu-items';

  for (let j = 0; j <= menu.length; j += 1) {
    const dishElement = document.createElement('div');
    dishElement.className = 'manu-item';
    dishElement.textContent = menu[j];
    items.appendChild(dishElement);
  }

  return items;
};

export default menuGen;

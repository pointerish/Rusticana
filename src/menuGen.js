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

  for (const dish of menu) {
    const dishElement = document.createElement('div');
    dishElement.className = 'manu-item';
    dishElement.textContent = dish;
    items.appendChild(dishElement);
  }
  
  return items;
};

export default menuGen

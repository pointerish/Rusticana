const reservationGen = () => {
  const element = document.createElement('div');
  element.className = 'reservation-main';
  element.textContent = 'Rusticana Ristorante is a very demanded restaurant. In order to make a reservation send an email to reservations@rusticana.com';

  return element;
};

export default reservationGen;

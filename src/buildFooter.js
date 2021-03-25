const buildFooter = () => {
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer';

    const footerText = document.createElement('small');
    footerText.textContent = 'Rusticana Ristorante — 2021'
    footerText.className = 'footer-p';
    footerContainer.appendChild(footerText);
    
    return footerContainer;
  };

export { buildFooter }
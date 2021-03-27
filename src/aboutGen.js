const aboutGen = () => {
  const about = document.createElement('div');
  about.className = 'about-main';
  about.textContent = 'Rusticana Ristorante open its doors in 1891 when Piero Martinelli returned from Rome after attending Pietro Mascagni\'s Cavalleria Rusticana opera. Since then, we have been cooking to the highest standards.';
  return about;
};

export default aboutGen;

import { buildHeader } from './buildHeader';
import { buildTabs } from './buildTabs';
import { buildFooter } from './buildFooter';

const pageLoad = () => {
  const htmlElements = [buildHeader(), buildTabs(), buildFooter()];
  const container = document.querySelector('#content');
  for (const element of htmlElements) {
    container.appendChild(element);
  }
};

export { pageLoad }
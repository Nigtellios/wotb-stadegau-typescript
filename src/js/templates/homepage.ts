import insertCurrentDate from '../helpers/utilities';

const infoBoxDate = document.querySelector('.comparer__info-box-date') as HTMLElement;
infoBoxDate.textContent = `${insertCurrentDate()}, `;

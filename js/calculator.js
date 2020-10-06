const refs = {
  technologiesSelect: document.querySelector('#calculator-form-technologies'),
  calculatorForm: document.querySelector('.calculator-form'),
  websiteTypeSelect: document.querySelector('#calculator-form-website-type'),
  costElement: document.querySelector('.calculator-form__total-cost'),
};

const technologiesMultiSelect = new Choices(refs.technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ',',
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: 'No available options',
  itemSelectText: 'Click to select',
  classNames: {
    containerInner: 'choices__inner tech-input-container',
    input: 'choices__input',
  },
});

calculateSum();

refs.calculatorForm.addEventListener('submit', event => {
  event.preventDefault();
  calculateSum();
});

function calculateSum() {
  const websiteCart = document.querySelector('#calculator-form__input-card input:checked');
  const websiteReception = document.querySelector('#calculator-form__input-reception input:checked');

  const websiteTypeValue = extractPriceFromValue(refs.websiteTypeSelect.value);
  const technologiesValue = getTechnologiesSum(technologiesMultiSelect.getValue());
  const websiteCartValue = convertCartOptionToPrice(websiteCart.value);
  const websiteReceptionValue = convertReceptionOptionToPrice(websiteReception.value);

  const totalSum = websiteTypeValue + technologiesValue + websiteCartValue + websiteReceptionValue;

  renderSum(totalSum);
}

function renderSum(sum) {
  refs.costElement.textContent = 'Calculating...';

  setTimeout(() => {
    refs.costElement.textContent = sum + '$';
  }, 2000);
}

function convertCartOptionToPrice(option) {
  return option === 'yes' ? 500 : 0;
}

function convertReceptionOptionToPrice(option) {
  return option === 'yes' ? 100 : 0;
}

function getTechnologiesSum(technologiesArr) {
  return technologiesArr.reduce((acc, arr) => acc + extractPriceFromValue(arr.value), 0);
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}

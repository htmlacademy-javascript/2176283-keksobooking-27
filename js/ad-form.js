const adForm = document.querySelector('.ad-form');
const roomsField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const capacityOptions = capacityField.querySelectorAll('option');
const timeInField = adForm.querySelector('#timein');
const timeOutField = adForm.querySelector('#timeout');
const typeInput = adForm.querySelector('#type');
const priceField = adForm.querySelector('#price');
const sliderElement = document.querySelector('.ad-form__slider');
const addressField = document.querySelector('#address');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
});

const typePriceMinimum = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOMS_OPTION = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};

/**
 * Синхронизация поля "Кол-во комнат" с полем "Кол-во мест"
 */
const validateRooms = () => {
  capacityOptions.forEach((items) => {
    items.disabled = true;
  });
  ROOMS_OPTION[roomsField.value].forEach((items) => {
    capacityOptions.forEach((option) => {
      if (Number(option.value) === items) {
        option.selected = true;
        option.disabled = false;
      }
    });
  });
};

const onRoomsOptionChange = () => {
  pristine.validate(roomsField);
  pristine.validate(capacityField);
};

pristine.addValidator(roomsField, validateRooms);

roomsField.addEventListener('change', onRoomsOptionChange, validateRooms);

/**
 * Синхронизация время выезда
 * @param {object} evt - объект события
 */
const onSynchronizationTimeIn = (evt) => {
  timeOutField.value = evt.target.value;
};

const onSynchronizationTimeOut = (evt) => {
  timeInField.value = evt.target.value;
};

timeInField.addEventListener('change', onSynchronizationTimeIn);
timeOutField.addEventListener('change', onSynchronizationTimeOut);

/**
 * Отрисовка слайдера для поля "Цена за ночь"
 */
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: typePriceMinimum[typeInput.value],
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

/**
 * Подключение поля ввода
 */
sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

priceField.addEventListener('change', function () {
  sliderElement.noUiSlider.set(this.value);
});

/**
 * Синхронизация типа жилья и минимальной цены
 * @param {object} evt - объект события
 */
const ontypeInputChange = (evt) => {
  if (evt.target.value === typeInput.value) {
    priceField.min = typePriceMinimum[typeInput.value];
    priceField.placeholder = typePriceMinimum[typeInput.value];
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100000,
      },
      start: typePriceMinimum[typeInput.value],
      step: 1,
    });
    pristine.validate();
  }
};

typeInput.addEventListener('change', ontypeInputChange);

const onAddressFocus = () => {
  addressField.blur();
};

addressField.addEventListener('focus', onAddressFocus);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

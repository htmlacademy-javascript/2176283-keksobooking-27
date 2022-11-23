import {showAlertError} from './util.js';
import { sendData } from './api.js';
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
const submitButton = document.querySelector('.ad-form__submit');

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
        option.disabled = false;
      }
    });
  }); return ROOMS_OPTION[roomsField.value].includes(Number(capacityField.value));
};

const onRoomsOptionChange = () => {
  pristine.validate(roomsField);
  pristine.validate(capacityField);
};

const getCapacityErrorMessage = () => `Указанное количество комнат вмещает ${ ROOMS_OPTION[roomsField.value].join (' или ') } гостя/гостей`;

pristine.addValidator(roomsField, validateRooms);
pristine.addValidator(capacityField, validateRooms, getCapacityErrorMessage);


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


/**
 * Отрисовка слайдера для поля "Цена за ночь"
 */
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: typePriceMinimum[typeInput.value],
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (value) {
        return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

/**
 * Подключение поля "Цена за ночь" и слайдера
 */
sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

const passFromFieldToSlider = (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
};


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
        min: typePriceMinimum[typeInput.value],
        max: 100000,
      },
      start: typePriceMinimum[typeInput.value],
      step: 1,
    });
    pristine.validate();
  }
};

const onAddressFocus = () => {
  addressField.blur();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const eventListenersOfForm = () => {
  roomsField.addEventListener('change', onRoomsOptionChange);
  capacityField.addEventListener('change', onRoomsOptionChange);
  timeInField.addEventListener('change', onSynchronizationTimeIn);
  timeOutField.addEventListener('change', onSynchronizationTimeOut);
  priceField.addEventListener('change', passFromFieldToSlider);
  typeInput.addEventListener('change', ontypeInputChange);
  addressField.addEventListener('focus', onAddressFocus);
};

const setUserForm = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {showAlertError('YESSSS');
          evt.target.reset();
          unblockSubmitButton();
        },
        () => {
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {eventListenersOfForm, setUserForm};

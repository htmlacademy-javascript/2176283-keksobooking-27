const adForm = document.querySelector('.ad-form');
const roomsField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const timeInField = adForm.querySelector('#timein');
const timeOutField = adForm.querySelector('#timeout');
const typeInput = adForm.querySelector('#type');
const priceField = adForm.querySelector('#price');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
});

const typePriceMinimum = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const roomsOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const capacityOption = {
  0: ['100'],
  1: ['1', '2', '3'],
  2: ['2', '3'],
  3: ['3']
};

function validateRooms () {
  return roomsOption[roomsField.value].includes(capacityField.value);
}

function getRoomsErrorMessage () {
  return `Для указанного кол-ва гостей требуется ${capacityOption[capacityField.value].join(' или ')} комнаты.`;
}

function getСapacityErrorMessage () {
  return `Вместимость указанного кол-ва комнат для ${roomsOption[roomsField.value].join(' или ')} гостей.`;
}

const onRoomsOptionChange = () => {
  pristine.validate(roomsField);
  pristine.validate(capacityField);
};

const onCapacityOptionChange = () => {
  pristine.validate(roomsField);
  pristine.validate(capacityField);
};

pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacityField, validateRooms, getСapacityErrorMessage);

roomsField.addEventListener('change', onRoomsOptionChange);
capacityField.addEventListener('change', onCapacityOptionChange);

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
 * Синхронизация типа жилья и минимальной цены
 * @param {object} evt - объект события
 */
const typeInputChange = (evt) => {
  if (evt.target.value === typeInput.value) {
    priceField.placeholder = typePriceMinimum[typeInput.value];
    priceField.min = typePriceMinimum[typeInput.value];
  }
};

typeInput.addEventListener('change', typeInputChange);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const CLOSING_TIME_OF_MESSAGE = 5000;
const successTemplate = document.querySelector('#success')
  .content.querySelector('.success');
const errorTemplate = document.querySelector('#error')
  .content.querySelector('.error');

const escapeKey = (evt) => evt.key === 'Escape';

/**
 * Отображение сообщения об успешной отправке
 * @param {*} element - всплывающее окно при успешной отправке
 */
const showSuccessMessage = (element) => {
  document.body.append(element);
  const onClickKeydownCloseModal = (evt) => {
    if (escapeKey) {
      evt.preventDefault();
      document.removeEventListener('click', onClickKeydownCloseModal);
      document.removeEventListener('keydown', onClickKeydownCloseModal);
      element.remove();
    }
  };
  document.addEventListener('click', onClickKeydownCloseModal);
  document.addEventListener('keydown', onClickKeydownCloseModal);
};

const formSuccessMessage = () => {
  const alertMessage = successTemplate.cloneNode(true);
  showSuccessMessage(alertMessage);
};

/**
 * Отображение сообщения при неудачной отправке
 * @param {*} element - всплывающее окно при неудачной отправке
 */
const showErrorMessage = (element) => {
  document.body.append(element);
  const onClickKeydownCloseModal = (evt) => {
    if (escapeKey) {
      evt.preventDefault();
      document.removeEventListener('click', onClickKeydownCloseModal);
      document.removeEventListener('keydown', onClickKeydownCloseModal);
      element.remove();
    }
  };
  document.addEventListener('click', onClickKeydownCloseModal);
  document.addEventListener('keydown', onClickKeydownCloseModal);
};

const formErrorMessage = () => {
  const alertMessage = errorTemplate.cloneNode(true);
  showErrorMessage(alertMessage);
};

/**
 * Сообщение об ошибке при загрузке данных
 * @param {text} message - текст сообщения
 */
const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '10%';
  alertContainer.style.top = '550px';
  alertContainer.style.right = '10%';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, CLOSING_TIME_OF_MESSAGE);
};

/**
 * Устранение дребезга
 * @param {function} callback - функция фильтрации объявлений
 * @param {*} timeoutDelay - время задержки между отображениями
 */
function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  showAlertError,
  formSuccessMessage,
  formErrorMessage,
  debounce,
};

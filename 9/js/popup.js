/**
 * Перевод типа жилья
 */
const TypeTranslate = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

/**
 * Формирование списка удобств
 * @param adContainer - шаблон объявления
 * @param {object} offerFeatures - сгенерированный список(массив) удобств
 */
const featuresAd = (adContainer, offerFeatures) => {
  const features = adContainer.querySelector('.popup__features');
  if (offerFeatures && offerFeatures.length) {
    features.innerHTML = '';
    for (let i = 0; i < offerFeatures.length; i++) {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(`popup__feature--${ offerFeatures[i]}`);
      features.appendChild(featureItem);
    }
  } else {features.remove();}
};

/**
 * Проверка на наличие данных в поле "Описание"
 * @param adContainer - шаблон объявления
 * @param {text} offerDescription - сгенерированное описание объявления
 */
const createDescriptionAd = (adContainer, offerDescription) => {
  const descriptionElement = adContainer.querySelector('.popup__description');
  if (offerDescription && offerDescription.length) {
    descriptionElement.textContent = offerDescription;
  } else {
    descriptionElement.remove();
  }
};

/**
 * Создание фото
 * @param {object} photo - offerPhotos
 */
const createPhoto = (photo) => {
  const photoElement = document.createElement('img');
  photoElement.classList.add('.popup__photo');
  photoElement.src = photo;
  photoElement.alt = 'Фотграфия жилья';
  photoElement.width = '45';
  photoElement.height = '40';
  return photoElement;
};

/**
 * Формирование списка фотографий
 * @param adContainer - шаблон объявления
 * @param {object} offerPhotos - сгенерированный список(массив) фотографий
 */
const createPhotosAd = (adContainer, offerPhotos) => {
  const photoList = adContainer.querySelector('.popup__photos');
  if (offerPhotos && offerPhotos.length) {
    photoList.innerHTML = '';
    offerPhotos.forEach((offerPhoto) => {
      const photoElement = createPhoto(offerPhoto);
      photoList.appendChild(photoElement);
    });
  } else {
    photoList.remove();
  }
};

/**
 * Создание объявления поблизости
 * @param {object} author - сгенерированный адрес изображения
 * @param {object} offer - сгенерированная информация объявления
 */
const renderAd = ({author, offer}) => {
  const adContainer = cardTemplate.cloneNode(true);
  adContainer.querySelector('.popup__avatar').src = author.avatar;
  adContainer.querySelector('.popup__title').textContent = offer.title;
  adContainer.querySelector('.popup__text--address').textContent = offer.address;
  adContainer.querySelector('.popup__text--price').textContent = `${offer.price }₽/ночь`;
  adContainer.querySelector('.popup__type').textContent = TypeTranslate[offer.type];
  adContainer.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комната(ы) для ${offer.guests} гостей`;
  adContainer.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  featuresAd(adContainer, offer.features);
  createDescriptionAd(adContainer, offer.description);
  createPhotosAd(adContainer, offer.photos);

  return adContainer;
};

export {renderAd};

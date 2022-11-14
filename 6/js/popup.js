
/**
 * Перевод типа жилья
 */
const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow:'Бунгало',
  house:'Дом',
  palace:'Дворец',
  hotel:'Отель',
};
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
/**
 * Формирование списка удобств
 */
const featuresAd = (adContainer, offerFeatures) => {
  const features = adContainer.querySelector('.popup__features');
  features.innerHTML = '';
  for (let i = 0; i < offerFeatures.length; i++) {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${ offerFeatures[i]}`);
    features.appendChild(featureItem);
  }
};
/**
 * Проверка на наличие данных в поле "Описание"
 */
const descriptionAd = (adContainer, offerDescription) => {
  const descriptionElement = adContainer.querySelector('.popup__description');
  if (offerDescription && offerDescription.length) {
    descriptionElement.textContent = offerDescription;
  } else {
    descriptionElement.remove();
  }
};
/**
 * Создание фото
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
 */
const photosAd = (adContainer, offerPhotos) => {
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
 * Создание объявлений поблизости
 */
const renderds = ({author, offer}) => {
  const adContainer = cardTemplate.cloneNode(true);
  adContainer.querySelector('.popup__avatar').src = author;
  adContainer.querySelector('.popup__title').textContent = offer.title;
  adContainer.querySelector('.popup__text--address').textContent = offer.address;
  adContainer.querySelector('.popup__text--price').textContent = `${offer.price }₽/ночь`;
  adContainer.querySelector('.popup__type').textContent = TYPE_TRANSLATE[offer.type];
  adContainer.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комната(ы) для ${offer.guests} гостей`;
  adContainer.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  featuresAd(adContainer, offer.features);
  descriptionAd(adContainer, offer.description);
  photosAd(adContainer, offer.photos);

  return mapCanvas.appendChild(adContainer);
};

export {renderds};

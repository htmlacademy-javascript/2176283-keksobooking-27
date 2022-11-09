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
const cardAd = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
/**
 * Формирование списка удобств
 */
const featuresAd = (adElement, offerFeatures) => {
  adElement.innerHTML = '';
  for (let i = 0; i < offerFeatures.length; i++) {
    const featureItem = document.querySelectorAll('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature${ offerFeatures[i]}`);
    adElement.appendChild(featureItem);
  }
};
/**
 * Проверка на наличие данных в поле "Описание"
 */
const descriptionAd = (adElement, offerDescription) => {
  const descriptionElement = adElement.querySelector('.popup__description');
  if (offerDescription && offerDescription.length) {
    descriptionElement.textContent = offerDescription;
  } else {
    descriptionElement.remove();
  }
};
/**
 * Копирование всех фотографий из случайного списка offer.photos
 */
const photosAd = (adElement, offerPhotos) => {
  adElement.innerHTML = '';
  for (let i = 0; i < offerPhotos.length; i++) {
    const photos = document.querySelector('.popup__photos').cloneNode(true);
    photos.src = offerPhotos[i];
    adElement.appendChild(photos);
  }
};
/**
 * Создание объявлений поблизости
 */
const semularAds = ({author, offer}) => {
  const adElement = cardAd.cloneNode(true);
  adElement.querySelector('.popup__avatar').src = author.avatar;
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price }₽/ночь`;
  adElement.querySelector('.popup__type').textContent = TYPE_TRANSLATE[offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  featuresAd(adElement, offer.features);
  descriptionAd(adElement, offer.description);
  photosAd(adElement, offer.photos);


  mapCanvas.appendChild(adElement);
};

export {semularAds};


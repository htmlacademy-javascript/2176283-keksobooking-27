const ZOOM = 12;
const RESERT_PHOTO = 'img/muffin-grey.svg';
const centerTokyo = {
  lat: 35.681729,
  lng: 139.753927,
};

const map = L.map('map-canvas');
const addressField = document.querySelector('#address');
const mapFiltersField = document.querySelector('.map__filters');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewPhoto = document.querySelector('.ad-form__photo');

const updateAddress = (location) => {
  const lat = location.lat.toFixed(5);
  const lng = location.lng.toFixed(5);
  addressField.value = `${lat}, ${lng}`;
};

const mapLoad = (enable) => {
  map.on('load', enable);
  map.setView(centerTokyo, ZOOM);
  updateAddress(centerTokyo);
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/**
 * Создание главной метки
 */
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

/**
 * Создание похожих меток
 */
const adPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

/**
 * Добавление главной метки на карту
 */
const mainPinMarker = L.marker(
  centerTokyo,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

/**
 * Создание группы меток
 */
const markerGroup = L.layerGroup().addTo(map);

const createMarkerGroup = (drawAds, renderAd) => {
  drawAds.forEach((drawAd) => {
    const marker = L.marker(
      drawAd.location,
      {icon:adPinIcon}
    );
    marker
      .addTo(markerGroup)
      .bindPopup(renderAd(drawAd));
  });
};

const setAdPins = (ads, renderAd) => {
  markerGroup.clearLayers();
  createMarkerGroup(ads, renderAd);
};

/**
 * Дублирование координат метки в поле "Адрес(координаты)"
 */
mainPinMarker.on('move', (evt) => {
  updateAddress(evt.target.getLatLng());
});

/**
 * При нажатии на кнопку "Опубликовать" или "Очистить" возврат карты, фильтров и формы в начальное состояние
 */
const submitClearButton = () => {
  map.closePopup();
  map.setView(centerTokyo, ZOOM);
  mainPinMarker.setLatLng(centerTokyo);
  updateAddress(centerTokyo);
  mapFiltersField.reset();
  previewPhoto.innerHTML = '';
  previewAvatar.src = RESERT_PHOTO;
};

export {mapLoad, setAdPins, submitClearButton};

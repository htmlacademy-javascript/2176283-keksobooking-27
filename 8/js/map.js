const buttonClear = document.querySelector('.ad-form__reset');
const map = L.map('map-canvas');
const addressField = document.querySelector('#address');

const CENTER_TOKYO = {
  lat: 35.681729,
  lng: 139.753927,
};

const ZOOM = 12;

const updateAddress = (location) => {
  const lat = location.lat.toFixed(5);
  const lng = location.lng.toFixed(5);
  addressField.value = `${lat}, ${lng}`;
};

const mapLoad = (enable) => {
  map.on('load', enable);
  map.setView(CENTER_TOKYO, ZOOM);
  updateAddress(CENTER_TOKYO);
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
  CENTER_TOKYO,
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
    marker.addTo(markerGroup).bindPopup(renderAd(drawAd));
  });
};

const setAdPins = (drawAds, renderAd) => {
  markerGroup.clearLayers();
  createMarkerGroup(drawAds, renderAd);
};
/**
 * Дублирование координат метки в поле "Адрес(координаты)"
 */
mainPinMarker.on('move', (evt) => {
  updateAddress(evt.target.getLatLng());
});

/**
 * Возврат карты и главной метки в начальное состояние
 */
buttonClear.addEventListener('click', () => {
  updateAddress(CENTER_TOKYO);
  mainPinMarker.setLatLng(CENTER_TOKYO);
  map.setView(CENTER_TOKYO, ZOOM);
});

export {mapLoad, setAdPins};

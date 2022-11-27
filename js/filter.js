const NUMBER_OF_ADS = 10;

const Price = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const housingType = document.querySelector('#housing-type');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const filterElement = document.querySelector('.map__filters-container');
const housingPrice = document.querySelector('#housing-price');
const mapFeatures = document.querySelector('#housing-features');
const mapFeaturesCheckbox = mapFeatures.querySelectorAll('.map__checkbox');

/**
 * Сравнение фильтров с параметрами объявлений
 */
const filterType = (ad, type) => type === 'any' || type === ad.offer.type;
const filterRooms = (ad, rooms) => rooms === 'any' || Number(rooms) === ad.offer.rooms;
const filterGuests = (ad, guests) => guests === 'any' || Number(guests) === ad.offer.guests;

const filterPrice = (ad, price) => {
  switch(price) {
    case 'middle':
      return ad.offer.price >= Price.MIDDLE && ad.offer.price <= Price.HIGH;
    case 'low' :
      return ad.offer.price < Price.MIDDLE;
    case 'high' :
      return ad.offer.price > Price.HIGH;
    case 'any':
      return true;
  }
};

const filterFeature = (ad, features) => {
  if (!features.length) {
    return true;
  }
  if (!ad.offer.features) {
    return false;
  }

  return features.every((feature) => ad.offer.features.includes(feature));
};

/**
 * Фильтрация объявлений
 */
const getFilterAds = (offers) => {
  const filterOffers = [];
  const selectedFeatures = [];
  const housingTypeSelect = housingType.value;
  const housingRoomsSelect = housingRooms.value;
  const housingGuestsSelect = housingGuests.value;
  const housingPriceSelect = housingPrice.value;

  mapFeaturesCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFeatures.push(checkbox.value);
    }
  });
  for (const offer of offers) {
    if (filterOffers.length >= NUMBER_OF_ADS) {
      break;
    }
    if (filterType(offer, housingTypeSelect) &&
    filterRooms(offer, housingRoomsSelect) &&
    filterGuests(offer, housingGuestsSelect) &&
    filterPrice(offer, housingPriceSelect) &&
    filterFeature(offer, selectedFeatures)
    ) {
      filterOffers.push(offer);
    }
  }
  return filterOffers;
};

const setOnFilterChange = (cb) => {
  filterElement.addEventListener('change', () => cb(getFilterAds));
};

export {setOnFilterChange, getFilterAds};

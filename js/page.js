const adFormElement = document.querySelector('.ad-form');
const fieldsets = adFormElement.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
let mapFilter = mapFilters.querySelectorAll('.map__filter');

const disablePage = () => {
  adFormElement.classList.add('.ad-form--disabled');
  mapFilters.classList.add('.map__filters--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  for (mapFilter of mapFilters) {
    mapFilter.disabled = true;
  }
};

const enablePage = () => {
  adFormElement.classList.remove('.ad-form--disabled');
  mapFilters.classList.remove('.map__filters--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  for (mapFilter of mapFilters) {
    mapFilter.disabled = false;
  }
};

export {enablePage, disablePage};

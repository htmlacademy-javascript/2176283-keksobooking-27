const adFormElement = document.querySelector('.ad-form');
const fieldsets = adFormElement.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
let mapFilter = mapFilters.querySelectorAll('.map__filter');

const disableForm = () => {
  adFormElement.classList.add('.ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const enableForm = () => {
  adFormElement.classList.remove('.ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const disableFilters = () => {
  mapFilters.classList.add('.map__filters--disabled');
  for (mapFilter of mapFilters) {
    mapFilter.disabled = true;
  }
};

const enableFiltes = () => {
  mapFilters.classList.remove('.map__filters--disabled');
  for (mapFilter of mapFilters) {
    mapFilter.disabled = false;
  }
};

const enablePage = () => {
  enableForm();
  enableFiltes();
};

const disablePage = () => {
  disableForm();
  disableFilters();
};

export {enablePage, disablePage};

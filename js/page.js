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

const disableFilters = () => {
  mapFilters.classList.add('.map__filters--disabled');
  for (mapFilter of mapFilters) {
    mapFilter.disabled = true;
  }
};

const enableForm = () => {
  adFormElement.classList.remove('.ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const enableFilters = () => {
  mapFilters.classList.remove('.map__filters--disabled');
  for (mapFilter of mapFilters) {
    mapFilter.disabled = false;
  }
};

export {disableForm, disableFilters, enableForm, enableFilters};

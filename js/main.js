import { renderAd } from './popup.js';
import { generateAds } from './data.js';
import {enablePage, disablePage} from './page.js';
import './ad-form.js';
import {mapLoad, setAdPins} from './map.js';

const drawAds = generateAds(10);

mapLoad(() => {
  disablePage();
  setAdPins(drawAds, renderAd);
});

enablePage();

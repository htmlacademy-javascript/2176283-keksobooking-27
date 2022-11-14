import { renderAds } from './popup.js';
import { generateAds } from './data.js';
import {enablePage, disablePage} from './page.js';

enablePage();
disablePage();

const drawAd = generateAds(10);
renderAds(drawAd[6]);

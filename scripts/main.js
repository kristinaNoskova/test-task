import { addHeadingPositionHandler } from './change-heading.js';
import { addSwapBlocksHandler } from './swap-places.js'
import { openModalLoadedHandler } from './modal.js'

addHeadingPositionHandler();

addSwapBlocksHandler();

document.addEventListener('DOMContentLoaded', openModalLoadedHandler)
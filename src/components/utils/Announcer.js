// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import CSSClassnames from './CSSClassnames';

const CLASS_ROOT = CSSClassnames.APP;

function clearAnnouncer() {
  const announcer = document.querySelector(`.${CLASS_ROOT}__announcer`);
  announcer.innerHTML = '';
};

export function announcePageLoaded (title) {
  announce(`${title} page was loaded`);
}

export function announce (message, mode = 'assertive') {

}

export default { announce, announcePageLoaded };

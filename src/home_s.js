"use strict";

/* page anims */
function loadAnim()  {
    const mainItems = document.querySelector('.hero-main-items'),
          heroAvat = document.querySelector('.hero-avatar');
    mainItems.style.animation = 'bodyColor 1s linear';
    heroAvat.style.animation = 'bodyColor 1s linear';
}
document.onload = loadAnim();
/**
 * Capitalize a given string
 * @param {string} str
 */
export const ucFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


/**
 * Fade out a DOM node
 * @param {string} fadeTarget 
 */
export const fadeOutEffect = (fadeTarget, time = 20) => {
         fadeTarget.style.opacity = 1;
         var fadeEffect = setInterval(function () {
           if (fadeTarget.style.opacity < 0.1) {
             fadeTarget.style.display = "none";
             clearInterval(fadeEffect);
           } else {
             fadeTarget.style.opacity -= 0.1;
           }
         }, time);
       };


/**
 * Fade in a DOM node
 * @param {string} fadeTarget 
 */
export function fadeInEffect(fadeTarget, time=25) {
  fadeTarget.style.opacity = 0;
  fadeTarget.style.display = "flex";
  let i = 0;
  fadeIn(fadeTarget, i);
  function fadeIn(fadeTarget, i) {
    i = i + 0.05;
    seTo(fadeTarget, i);
    if (i < 1) {
      setTimeout(function () {
        fadeIn(fadeTarget, i);
      }, time);
    }
  }
  function seTo(el, i) {
    el.style.opacity = i;
  }
}

/* View in fullscreen */
export function openFullscreen () {
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }

}

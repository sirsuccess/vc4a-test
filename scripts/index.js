function getElement(element) {
  return document.querySelector(element);
}

function toggleClass(element, className) {
  return element.classList.toggle(className);
}
function addClass(element, className) {
  return element.classList.add(className);
}
function removeClass(element, className) {
  return element.classList.remove(className);
}

function showMobileMenu() {
  const mobileMenu = getElement(".mobile-menu");
  addClass(mobileMenu, "mobile");
}

function hideMobileMenu() {
  const mobile = getElement(".mobile");
  removeClass(mobile, "mobile");
}

function showExplorerDropDown() {
  const element = getElement(".explore");
  const learn = getElement(".learn");
  removeClass(learn, "learn--show");
  toggleClass(element, "explore--show");
}
function showLearnDropDown() {
  const learn = getElement(".learn");
  const explore = getElement(".explore");
  removeClass(explore, "explore--show");
  toggleClass(learn, "learn--show");
}

function showLgLearnDropDown() {
  document.body.onclick = function (evt) {
    evt.target.classList.contains("heading");
  };
  const element = getElement(".dropdown-learn");
  const explore = getElement(".dropdown");
  removeClass(explore, "dropdown-show");
  toggleClass(element, "dropdown-show");
}

function showLgExploreDropDown() {
  // alert(e.keyCode)
  const element = getElement(".dropdown");
  const learn = getElement(".dropdown-learn");
  removeClass(learn, "dropdown-show");
  toggleClass(element, "dropdown-show");
}



function clicked() {
  document.body.onclick = function (evt) {
    const navItem = evt.target.classList.contains("heading");
    if (!navItem) {
      const learn = getElement(".dropdown-learn");
      const explore = getElement(".dropdown");
      removeClass(explore, "dropdown-show");
      removeClass(learn, "dropdown-show");
    }
  };
}

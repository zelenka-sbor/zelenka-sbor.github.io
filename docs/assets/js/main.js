document.addEventListener("DOMContentLoaded", () => {
  const toggleActiveClass = (...elements) => {
    if (elements.length > 0) {
      elements.forEach((el) => el.classList.toggle("is-active"));
    }
  };

  const $navbarBurgers = document.querySelectorAll(".navbar-burger");

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(($burger) => {
      const $burgerMenu = document.getElementById($burger.dataset.target);
      $burger.addEventListener("click", () => toggleActiveClass($burger, $burgerMenu));
      const $aNavbarItems = $burgerMenu.querySelectorAll("a[href]");
      if ($aNavbarItems.length > 0) {
        $aNavbarItems.forEach(($navItem) => {
          $navItem.addEventListener("click", () => {
            $burger.classList.toggle("is-active", false);
            $burgerMenu.classList.toggle("is-active", false);
          });
        });
      }
    });
  }
});

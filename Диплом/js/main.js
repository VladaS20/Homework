(function () {
  // Бургер

  document.addEventListener("click", burgerInit);

  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLink = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) return;

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  // Модалка

    const modal = document.querySelector('.nav-burger-menu')

    modal.addEventListener('click', closeModal)

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.classList.contains('nav-burger-menu')) {
            document.body.classList.remove('body--opened-menu')
        }

    }

  // Слайдер

  var swiper = new Swiper(".gallery", {
    slidesPerView: 1,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return current + " из " + total;
      },
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    breakpoints: {
      361: {
        slidesPerView: 2,
      },
      621: {
        slidesPerView: 3,
      },
    },
  });
  // Показать еще

  // document.addEventListener("click", ShowMore);

  // function ShowMore(e) {
  //   const tagsBody = document.querySelector(".tags__body");
  //   const toggle = e.target.closest(".tags__toggle");

  //   if (!toggle) return;

  //   if (!tagsBody.classList.contains("tags__body--more")) {
  //     tagsBody.classList.add("tags__body--more");
  //   } else {
  //     tagsBody.classList.remove("tags__body--more");
  //   }

  //   if (!toggle.classList.contains("tags__toggle--close")) {
  //     toggle.classList.add("tags__toggle--close");
  //   } else {
  //     toggle.classList.remove("tags__toggle--close");
  //   }
  // }

  document.addEventListener("click", ShowMore);

function ShowMore(e) {
  const tagsBody = document.querySelector(".tags__body");
  const toggle = e.target.closest(".tags__toggle");

  if (!toggle) return;

  if (!tagsBody.classList.contains("tags__body--more")) {
    tagsBody.classList.add("tags__body--more");
    toggle.textContent = "Скрыть"; 
  } else {
    tagsBody.classList.remove("tags__body--more");
    toggle.textContent = "Показать еще";
  }
}


  // Селектор

  const element = document.querySelector(".shop__selector");

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });

  // Счетчик

  const decrementButton = document.querySelectorAll(
    `[data-action="decrement"]`
  );

  const incrementButton = document.querySelectorAll(
    `[data-action="increment"]`
  );

  decrementButton.forEach((button) => {
    function decrement(e) {
      const btn = e.target.parentNode.parentElement.querySelector(
        '[data-action="decrement"]'
      );
      const target = btn.nextElementSibling;
      let value = Number(target.value);
      value--;
      target.value = value;
      if (target.value <= 1) {
        target.value = "1";
        btn.classList.remove("decrement-button-active");
      }
    }
    button.addEventListener("click", decrement);
  });

  incrementButton.forEach((button) => {
    function increment(e) {
      const btn = e.target.parentNode.parentElement.querySelector(
        '[data-action="decrement"]'
      );
      const target = btn.nextElementSibling;

      let value = target.value;
      value++;
      target.value = value;
      btn.classList.add("decrement-button-active");
    }
    button.addEventListener("click", increment);
  });

  // Аккордион

  const items = document.querySelectorAll(".accordion button");

  items.forEach((item) => item.addEventListener("click", toggleAccordion));

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (let item of items) {
      item.setAttribute("aria-expanded", false);
    }

    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", true);
    }
  }

  // Свайпер в комплектации

  var swiper = new Swiper(".completcation__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: ".completcation__next",
      prevEl: ".completcation__prev",
    },

    breakpoints: {
      
      521: {
        slidesPerView: 2,
      },
      671: {
        slidesPerView: 3,
      },
      1101: {
        slidesPerView: 3.5,
      },
      1559: {
        slidesPerView: 4,
      },
    },
  });
})();

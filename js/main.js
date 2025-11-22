(function ($) {
    "use strict";
    
    // Read More
    const btn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    btn.addEventListener("click", () => {
    if (moreText.style.display === "none" || moreText.style.display === "") {
      // Show extra text
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    } else {
      // Hide extra text
      moreText.style.display = "none";
      btn.textContent = "Read More";
      // Optional: smooth scroll back up slightly for better UX
      btn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("chatbotToggle");
  const chatWindow = document.getElementById("chatbotWindow");
  const closeBtn = document.getElementById("chatbotClose");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const messages = document.getElementById("chatbotMessages");

  // Toggle open/close
  toggleBtn.addEventListener("click", () => {
    chatWindow.classList.toggle("open");
  });

  // Close button
  closeBtn.addEventListener("click", () => {
    chatWindow.classList.remove("open");
  });

  // Simple fake chat
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let text = input.value.trim();
    if (!text) return;

    // User msg
    let user = document.createElement("div");
    user.className = "chatbot-message user";
    user.innerHTML = "<p>" + text + "</p>";
    messages.appendChild(user);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Bot reply
    setTimeout(() => {
      let bot = document.createElement("div");
      bot.className = "chatbot-message bot";
      bot.innerHTML = "<p>I received your message! How else can I help?</p>";
      messages.appendChild(bot);
      messages.scrollTop = messages.scrollHeight;
    }, 500);
  });
});

  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    const hero = document.querySelector(".nx-hero-center"); // pehla section

    if (!nav || !hero) return;

    // hero ki height ke baad color change hoga
    const heroHeight = hero.offsetHeight;
    const triggerPoint = heroHeight - nav.offsetHeight; 

    if (window.scrollY > triggerPoint) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });


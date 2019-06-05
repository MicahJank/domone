const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav links
navItemsArray = Object.values(siteContent.nav);

const navlinks = document.querySelectorAll('nav a');

for (let i = 0; i < navItemsArray.length - 1; i++) {
  navlinks[i].textContent = navItemsArray[i];
}

// CTA section
const ctaH1 = document.querySelector('.cta-text h1');

ctaH1.innerHTML = `${siteContent.cta.h1.slice(0, 3)}<br>${siteContent.cta.h1.slice(4, 6)}<br>${siteContent.cta.h1.slice(7, 14)}`;

const ctaBtn = document.querySelector('.cta-text button');

ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');

ctaImg.src = siteContent.cta['img-src'];


// Main Content Section

const mainContentH4 = document.querySelectorAll('.text-content h4');
const mainContentP = document.querySelectorAll('.text-content p');
const middleImg = document.querySelector('.main-content img');

mainContentH4[0].textContent = siteContent["main-content"]['features-h4'];
mainContentH4[1].textContent = siteContent["main-content"]['about-h4'];
mainContentH4[2].textContent = siteContent["main-content"]['services-h4'];
mainContentH4[3].textContent = siteContent["main-content"]['product-h4'];
mainContentH4[4].textContent = siteContent["main-content"]['vision-h4'];

mainContentP[0].textContent = siteContent['main-content']['features-content'];
mainContentP[1].textContent = siteContent['main-content']['about-content'];
mainContentP[2].textContent = siteContent['main-content']['services-content'];
mainContentP[3].textContent = siteContent['main-content']['product-content'];
mainContentP[4].textContent = siteContent['main-content']['vision-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];


// Contact Section

const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent.contact['contact-h4'];
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;


// Footer Section
const footerP = document.querySelector('footer p');

footerP.textContent = siteContent.footer.copyright;






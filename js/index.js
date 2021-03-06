const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

const headerOne = document.querySelector("h1");
headerOne.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const headerImage = document.querySelector("#cta-img");
headerImage.setAttribute("src", siteContent.cta["img-src"]);

const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const h4 = document.querySelectorAll("h4");

h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent.contact["contact-h4"];

const contentParagraphs = document.querySelectorAll("p");

contentParagraphs[0].textContent =
  siteContent["main-content"]["features-content"];
contentParagraphs[1].textContent = siteContent["main-content"]["about-content"];
contentParagraphs[2].textContent =
  siteContent["main-content"]["services-content"];
contentParagraphs[3].textContent =
  siteContent["main-content"]["product-content"];
contentParagraphs[4].textContent =
  siteContent["main-content"]["vision-content"];

contentParagraphs[5].textContent = siteContent.contact.address;
contentParagraphs[6].textContent = siteContent.contact.phone;
contentParagraphs[7].textContent = siteContent.contact.email;
contentParagraphs[8].textContent = siteContent.footer.copyright;

// navItems.style.color = "green";

navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";

contentParagraphs[0].style.cssText = "color: red; border: 0.2rem solid green";
contentParagraphs[1].style.cssText = "color: blue; border: 0.2rem solid red";
contentParagraphs[2].style.cssText = "color: green; bordeR: 0.4rem solid blue";
contentParagraphs[3].style.cssText = "color: purple; bordeR: 0.4rem solid pink";
contentParagraphs[4].style.cssText = "color: grey; border: 0.4rem solid orange";

const navLinks = document.querySelector("nav");

const newNavLink = document.createElement("a");
newNavLink.setAttribute("href", "#");
newNavLink.innerHTML = "new Link";
navLinks.appendChild(newNavLink);

const newNavLink2 = document.createElement("a");
newNavLink2.setAttribute("href", "#");
newNavLink2.innerHTML = "IMPORTANT LINK";
navLinks.prepend(newNavLink2);

newNavLink.style.cssText = "color: red; font-size: 1rem; font-weight: bold";
newNavLink2.style.cssText = "color: purple; font-size: 1rem; font-weight: bold";

// const secondImage = document.getElementById("cta-img");
// secondImage.setAttribute("src", "img/header-img.png");

// const firstHeader = document.querySelector("h1");
// const firstButton = document.querySelector("button");
// const fourthHeader = document.querySelector("h4");
// const fourthParagraph = document.querySelector("p")[0];

// firstButton.textContent = siteContent.cta.button;
// firstHeader.textContent = siteContent.cta.h1;
// fourthHeader.textContent = siteContent["main-content"]["features-h4"];
// fourthParagraph.textContent = siteContent["main-content"]["features-content"];

// const navItems = document.querySelector("a");
// const middleImage = document.querySelector(".middle-img");
// const aboutA = document.createElement("a");
// aboutA.textContent = "About";
// middleImage.setAttribute("src", "img/mid-page-accent.jpg");
// navItems.append("Services");

// const button = document.getElementsByTagName("button");
// button.className = "Button-Class";
// button.setAttribute("button", "yellow");

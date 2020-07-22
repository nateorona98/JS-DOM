//Create Elements
//navbar
const bodyElement = document.body;
const headerContainer = document.createElement('div');
const nav = document.createElement('nav');
const navBrand = document.createElement('a');
const navDiv = document.createElement('div');
const navUl = document.createElement('ul');
const navItem1 = document.createElement('li');
const navItem2 = document.createElement('li');
const navItem3 = document.createElement('li');
const navA1 = document.createElement('a');
const navA2 = document.createElement('a');
const navA3 = document.createElement('a');
const navToggleButton = document.createElement('button');
const navToggleSpan = document.createElement('span');
const navToggleDiv = document.createElement('div');

//header image
const headerImage = document.createElement('header');
const headerImageDiv = document.createElement('div');
const headerRowDiv = document.createElement('div');
const headerColDiv = document.createElement('div');
const headerH1 = document.createElement('h1');
const headerP = document.createElement('p');

//3 boxes below header
const boxesDiv = document.createElement('div');
const boxesRow = document.createElement('row');
const box1 = document.createElement('div');
const box2 = document.createElement('div');
const box3 = document.createElement('div');
const box1Text = document.createElement('div');
const box2Text = document.createElement('div');
const box3Text = document.createElement('div');
const box1H2 = document.createElement('h2');
const box1P = document.createElement('p');
const box2H2 = document.createElement('h2');
const box2P = document.createElement('p');
const box3H2 = document.createElement('h2');
const box3P = document.createElement('p');
//Text under boxes (About)
const aboutDiv = document.createElement('div');
const aboutRow = document.createElement('row');
const aboutCol = document.createElement('div');
const aboutH1 = document.createElement('h1');
const aboutH2 = document.createElement('h2');
const aboutP = document.createElement('p');
//About second paragraph(white text)
const aboutDiv2 = document.createElement('div');
const aboutRow2 = document.createElement('row');
const aboutCol2 = document.createElement('div');
const aboutH3 = document.createElement('h3');
const aboutP2 = document.createElement('p');
//Contact
const contactDiv = document.createElement('div');
const contactRow = document.createElement('row');
const contactCol = document.createElement('div');
const contactH2 = document.createElement('h2');
const contactP = document.createElement('p');
//Contact info
const contactInfoDiv = document.createElement('div');
const contactInfoRow = document.createElement('row');
const contactInfoCol = document.createElement('div');
const contactInfoCol2 = document.createElement('div');
const contactInfoName = document.createElement('h4');
const contactInfoEmail = document.createElement('h4');
const contactInfoPhone = document.createElement('h4');
const contactLinkedIn = document.createElement('a');
const contactGit = document.createElement('a');


//assign inner text to elements
//navbar
navBrand.innerText = 'JS Nav';
navA1.innerText = 'Home';
navA2.innerText = 'About';
navA3.innerText = 'Contact';

//header image
headerH1.innerText = 'DOM Manipulation';
headerP.innerText = 'This page was created with no HTML markup. All the content you are seeing was generated with Vanilla JS and styled minimally with Bootstrap 4 and CSS';

//boxes below header
box1H2.innerText = 'Bootstrap 4';
box1P.innerText = 'I used Bootstrap\'s built in positioning and styling classes to avoid writing a ton of css and still create a clean, responsive, and user friendly look.';
box2H2.innerText = 'JS DOM';
box2P.innerText = 'All the markup for this page was created and implemented with plain Javascript.';
box3H2.innerText = 'Vanilla JS';
box3P.innerText = 'The scroll on click events on this page were also created with plain JS.';

//About paragraph
aboutH1.innerText = 'About';
aboutH2.innerText = 'What is the goal of this project?';
aboutP.innerText = 'I decided to begin this small project using only vanilla Javascript to put together the markup after watching a video on DOM manipulation. Since the majority of the JS I had worked with until this point had been centered mainly around animations, I knew I needed to advance my skillset a bit.';

//About paragraph 2
aboutH3.innerText = 'This page took way too long to make';
aboutP2.innerText = 'I wanted to see what could feasibly be done with the language as far as building the outline of a webpage was concerned. This was a much longer process than I anticipated. Although it was fairly simple and repitive, this project really forced me to take a look at how much I take simple operations for granted, as I found planning ahead and keeping my code clean and meticulously organized to be much more important than it had been in previous projects. In short, this took forever and seemed needlessly complicated at times, but I love how it turned out and am grateful for my new understanding and appreciation of structure and the capabilities of JS. I hope this will make a good addition to my portfolio, because if not, I terribly regret spending so much time on this nonsense. Thank you if you took the time to check this out.';

//Contact paragraph
contactH2.innerText = 'Contact Me';
contactP.innerText = 'I am currently searching for my first position in the world of web development, and am open to considering all opportunities that come my way. If you like my work, or have any tips for me on how to make this better, please feel free to contact me with the information below. Thanks again for taking the time to check out my project, check out my GitHub to see more of my work!';

//Contact info
contactInfoName.innerText = 'Nate Orona | Front End Web Developer';
contactInfoEmail.innerText = 'nathaniel.orona98@gmail.com';
contactInfoPhone.innerText = '219-323-5444';
contactLinkedIn.innerText = 'LinkedIn';
contactGit.innerText = 'GitHub';

//assign classes to elements
//navbar
headerContainer.className = 'container-fluid';
nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top';
navBrand.className = 'navbar-brand';
navDiv.className = 'collapse navbar-collapse';
navUl.className = 'navbar-nav mr-auto';
navItem1.className = 'nav-item';
navItem2.className = 'nav-item';
navItem3.className = 'nav-item';
navA1.className = 'nav-link';
navA2.className = 'nav-link';
navA3.className = 'nav-link';
navToggleButton.className = 'navbar-toggler';
navToggleSpan.className = 'navbar-toggler-icon';
navToggleDiv.className = 'collapse navbar-collapse';

//header image
headerImage.className = 'masthead';
headerImageDiv.className = 'container-fluid h-50 image-div';
headerRowDiv.className = 'row h-100 w-100 align-items-center';
headerColDiv.className = 'col-12 text-center';
headerH1.className = 'font-weight-light';
headerP.className = 'lead';

//boxes beneath header image
boxesDiv.className = 'container box-container';
boxesRow.className = 'row boxes-row';
box1.className = 'col-lg-4 col-xs-7 box1 box border border-dark rounded';
box2.className = 'col-lg-4 col-xs-7 box2 box border border-dark rounded';
box3.className = 'col-lg-4 col-xs-7 box3 box border border-dark rounded';
box1Text.className = 'box-text';
box2Text.className = 'box-text';
box3Text.className = 'box-text';
box1H2.className = 'font-weight-strong text-center box-text';
box1P.className = 'lead text-center box-text';
box2H2.className = 'font-weight-strong text-center box-text';
box2P.className = 'lead text-center box-text';
box3H2.className = 'font-weight-strong text-center box-text';
box3P.className = 'text-center box-text lead';

//About paragraph
aboutDiv.className = 'about-container container-fluid';
aboutRow.className = 'about-row row';
aboutCol.className = 'col-9 about-sub';
aboutH1.className = 'about-h1 text-center';
aboutH2.className = 'about-h2 text-center';
aboutP.className = 'about-p lead text-center';

//About paragraph 2
aboutDiv2.className = 'about-container2 container-fluid';
aboutRow2.className = 'about-row row';
aboutCol2.className = 'col-9 about-sub2';
aboutH3.className = 'about-h3 text-center';
aboutP2.className = 'about-p2 lead text-center';

//Contact text
contactDiv.className = 'contact-container container-fluid';
contactRow.className = 'contact-row row';
contactCol.className = 'col-9 contact-sub';
contactH2.className = 'contact-h2 text-center';
contactP.className = 'contact-p text-center lead';
//Contact info
contactInfoDiv.className = 'contact-info-container container-fluid';
contactInfoRow.className = 'contact-info-row row';
contactInfoCol.className = 'contact-info-col col-5 text-center';
contactInfoCol2.className = 'contact-info-col-2 col-5';
contactInfoName.className = 'contact-name lead';
contactInfoEmail.className = 'contact-email lead';
contactInfoPhone.className = 'contact-phone lead';
contactLinkedIn.className = 'linkedIn-btn btn btn-dark text-white';
contactGit.className = 'git-btn btn btn-dark text-white';


//assign attributes to elements
//navbar
navToggleButton.setAttribute('type', 'button');
navToggleButton.setAttribute('data-toggle', 'collapse');
navToggleButton.setAttribute('data-target', '#navbarNavAltMarkup');
navToggleButton.setAttribute('aria-controls', 'navbarNavAltMarkup');
navToggleButton.setAttribute('aria-expanded', 'false');
navToggleButton.setAttribute('aria-label', 'Toggle navigation');

navToggleDiv.setAttribute('id', 'navbarSupportedContent41');

navDiv.setAttribute('id', 'navbarNavAltMarkup');


//contact buttons
contactGit.setAttribute('href', 'https://github.com/nateorona98?tab=repositories');
contactGit.setAttribute('target', '_blank');
contactLinkedIn.setAttribute('href', 'https://www.linkedin.com/in/nate-o-27806b102/');
contactLinkedIn.setAttribute('target', '_blank');


//append elements
//navbar
bodyElement.appendChild(headerContainer);
headerContainer.appendChild(nav);
nav.append(navBrand, navToggleButton, navDiv);
navToggleButton.append(navToggleSpan, navToggleDiv);
navDiv.appendChild(navUl);
navUl.append(navItem1, navItem2, navItem3);
navItem1.appendChild(navA1);
navItem2.appendChild(navA2);
navItem3.appendChild(navA3);

//header image
bodyElement.appendChild(headerImage);
headerImage.appendChild(headerImageDiv);
headerImageDiv.appendChild(headerRowDiv);
headerRowDiv.appendChild(headerColDiv);
headerColDiv.append(headerH1, headerP);

//boxes beneath header
bodyElement.appendChild(boxesDiv);
boxesDiv.appendChild(boxesRow);
boxesRow.append(box1, box2, box3);

box1.appendChild(box1Text);
box2.appendChild(box2Text);
box3.appendChild(box3Text);

box1Text.append(box1H2, box1P);
box2Text.append(box2H2, box2P);
box3Text.append(box3H2, box3P);

//About paragraph
bodyElement.appendChild(aboutDiv);
aboutDiv.appendChild(aboutRow);
aboutRow.appendChild(aboutCol);
aboutCol.append(aboutH1, aboutH2, aboutP, aboutH3, aboutP2);

//Contact
bodyElement.appendChild(contactDiv);
contactDiv.appendChild(contactRow);
contactRow.appendChild(contactCol);
contactCol.append(contactH2, contactP);

//Contact info
bodyElement.appendChild(contactInfoDiv);
contactInfoDiv.appendChild(contactInfoRow);
contactInfoRow.appendChild(contactInfoCol);
contactInfoCol.append(contactInfoName, contactInfoEmail, contactInfoPhone, contactLinkedIn, contactGit);


//Styling Elements
aboutH3.style.marginTop = '5rem';


//scroll to sections on click
//Home
navBrand.onclick = function homeScroll () {
    headerContainer.scrollIntoView({behavior: 'smooth', block: 'start'});
};

navItem1.onclick = function homeScroll () {
    headerContainer.scrollIntoView({behavior: 'smooth', block: 'start'});
};

//About
navItem2.onclick = function aboutScroll () {
    aboutDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
};

//Contact
navItem3.onclick = function contactScroll () {
    contactDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
};
$(document).ready(function(){

let navBtn = $('.nav-item');

let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let methodSection = $('#method-area');
let processSection = $('#process-area');
let toolSection = $('#tool-area');
let teamSection = $('#team-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function(){

let btnId = $(this).attr('id');

console.log(btnId);

if(btnId == 'about-menu'){
    scrollTo = aboutSection;
} else if (btnId == `services-menu`){
    scrollTo = servicesSection;
} else if(btnId == 'method-menu'){
    scrollTo = methodSection;
} else if(btnId == 'process-menu'){
    scrollTo = processSection;
} else if(btnId == 'tool-menu'){
    scrollTo = toolSection;
} else if(btnId == 'team-menu'){
    scrollTo = teamSection;
} else if (btnId == 'contact-menu'){
    scrollTo = contactSection;
} else{
    scrollTo = bannerSection
}

$([document.documentEelement, document.body]).animate({
    scrollTop: $(scrollTo).offset().top - 70
}, 1500);

});

});
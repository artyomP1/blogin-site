'use strict'

// var gImagesBlog;

function init() {
    renderBlogin();
}

function renderBlogin() {
    renderImg();
    renderStr();
}

function renderImg() {
    var count = 1;
    var imgHTML = '';
    imgHTML = gImages.map(function(img) {
        var className = `img${count}`;
        count++;
        return `<img class="${className} img" src="${img.imgUrl}" />`;
    });

    var elImages = document.querySelector('.img-container');
    elImages.innerHTML = imgHTML.join('');
}

function renderStr() {
    var txtTitle = '<h2>Duis aute irure dolor in henderit in voluptate.</h2>';
    var strHTML = '';
    for (var i = 0; i < 2; i++) {
        strHTML += `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>`;
    };
    var elTxt = document.querySelector('.text-wrapper');
    elTxt.innerHTML = txtTitle + strHTML;
}

function onAddImg() {
    var elImg = document.querySelector('.url');
    addImg(elImg);
    elImg.value = '';
    saveImgToStorage();
}

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    mainMenu.classList.toggle('open');
}
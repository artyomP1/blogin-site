'use strict'

var gImages;
const IMAGES_kEY = 'IMAGES';
gImages = createImages();

function createImages() {
    var imagesBlog = loadImages();
    console.log(imagesBlog);

    if (!imagesBlog || imagesBlog.length === 0) {
        imagesBlog = [
            createImage("https://i.imgur.com/PKSeVEX.png", 'blala'),
            createImage('https://i.imgur.com/tboZAQb.png', 'blalal'),
            createImage('https://i.imgur.com/8Ts3Bv6.png', 'balalala'),
        ];
    }
    return imagesBlog;
}


function createImage(url, txt) {
    return {
        imgUrl: url,
        txt: txt,
    }
}

function addImg() {
    var newImgUrl = createImage(elImg.value, 'fff');
    gImages.push(newImgUrl);
    renderBlogin();
}

function saveImgToStorage() {
    saveToStorage(IMAGES_kEY, gImages)
}

function loadImages() {
    return loadFromStorage(IMAGES_kEY);
}
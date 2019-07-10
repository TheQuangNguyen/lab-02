'use strict';

function Images(url, title, description, keyword, horns) { 
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  Images.list.push(this);
}

Images.list = [];


$.get('./data/page-1.json', (data) => {
  data.forEach(element => {
    new Images(element.image_url, element.title, element. description, element.keyword, element.horns);
  })
});
console.log(Images.list);

function displayImages() { 
  Images.list.forEach(image => { 
    const $newImage = $('.photo-template').clone();

    $newImage.find('h2').text(image.title);
    $newImage.find('p').text(image.description);
    $newImage.find('img').attr({ src: image.image_url, alt: image.keyword});

    $('main').append($newImage);
  });
}

displayImages();

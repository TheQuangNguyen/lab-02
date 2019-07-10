'use strict';

function Images(url, title, description, keyword, horns) { 
  this.image_url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  Images.list.push(this);
  this.displayImage();
  this.displayOptions();
}

Images.list = [];


$.get('./data/page-1.json', (data) => {
  data.forEach(element => {
    new Images(element.image_url, element.title, element. description, element.keyword, element.horns);
  })
});


Images.prototype.displayImage = function() { 
  const $newImage = $('#photo-template').clone();

  $newImage.find('h2').text(this.title);
  $newImage.find('p').text(this.description);
  $newImage.find('img').attr({ src: this.image_url, 
    alt: this.keyword});

  $('main').append($newImage);
};

Images.prototype.displayOptions = function() { 
  $('select').append(`<option>${this.keyword}</option>`);
}

function optionListener() { 
  $('select').on('click','option', event => { 
    const $selectedImage = $('select option:selected').text();
    console.log($selectedImage);
    if ($selectedImage) { 
      $('img').not(`[alt="${$selectedImage}"]`).hide();
    }
  })
}
optionListener();
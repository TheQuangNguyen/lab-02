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

const createImageObject = function(data) { 
  data.forEach(element => {
    new Images(element.image_url, element.title, element. description, element.keyword, element.horns);
  });
}

$.get('./data/page-1.json', (data) => {
  data.forEach(element => {
    new Images(element.image_url, element.title, element. description, element.keyword, element.horns);
  })
});

console.log(Images.list);
let images = [
  'img/product-img/profile-product1.jpg',
  'img/product-img/profile-product2.jpg',
  'img/product-img/profile-product3.jpg',
  'img/product-img/profile-product4.jpg',
  'img/product-img/profile-product5.jpg'
];

let currentIndex = 0;

function changeImage(imageUrl) {
  let mainImage = document.querySelector('#mainImage');
  mainImage.src = imageUrl;
}

function changeMainImage(direction) {
  if (direction === 'previous') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else if (direction === 'next') {
    currentIndex = (currentIndex + 1) % images.length;
  }

  let mainImage = document.querySelector('#mainImage');
  mainImage.src = images[currentIndex];
}
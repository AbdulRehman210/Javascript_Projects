var index = 0;

showImage(index);

function showImage(i) {
  index += i;

  var images = document.getElementsByClassName("image");

  //to display them non

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  //at last image

  if (index > images.length - 1) index = 0;

  // to previous
  if (index < 0) index = images.length - 1;

  images[index].style.display = "block";
}

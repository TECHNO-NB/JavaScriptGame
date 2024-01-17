var count = 0;
let animation = setInterval(animate, 30);

function stop() {
  count++;
  var slide = "slider" + count;
  var currentSlider = document.getElementById(slide);

  var slide = "slider" + (count + 1);
  var sliderAbove = document.getElementById(slide);


  var left = parseInt(
    window.getComputedStyle(currentSlider).getPropertyValue("left")
  );
  var width = parseInt(
    window.getComputedStyle(currentSlider).getPropertyValue("width")
  );
  
  currentSlider.style.left = left + "px";
  document.querySelector("#slider1").classList.remove("animate");

  currentSlider.classList.remove("animate");
  sliderAbove.style.visibility = "visible";
  sliderAbove.classList.add("animate");

  var slide = "slider" + (count - 1);
  var sliderBelow= document.getElementById(slide);

 
  var sliderBelowleft = parseInt(
    window.getComputedStyle(sliderBelow).getPropertyValue("left")
  );

}

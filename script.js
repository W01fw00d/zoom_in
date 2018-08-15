$(document).ready(init);

function init() 
{
  var slider = document.getElementById("slider");
  var protagonist = document.getElementById("protagonist");
  var meme = document.getElementById("meme");
  var scale_smooth_value = 5;

  slider.oninput = function() {
    protagonist.style.transform = "scale(" + getCurrentProtagonistScale(this.value) + ")";
    meme.style.transform = "scale(" + getCurrentMemeScale(this.value) + ")";
  }
  
  function getCurrentProtagonistScale(slider_value)
  {
    var current = slider_value / scale_smooth_value;
    var minimum = 1
    
    return current >= minimum ? 
      current :
      minimum;
  }
  
  function getCurrentMemeScale(slider_value)
  {
    var appearance_point = 400;

    return slider_value > appearance_point ?
      (slider_value - appearance_point) / scale_smooth_value :
      0;
  }
}

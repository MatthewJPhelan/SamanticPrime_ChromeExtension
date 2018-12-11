var rangeSlider = function(){
  var slider = $('.slider'),
      range = $('.range'),
      value = $('.value');

  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
// var slider = document.getElementById("slider");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;
//
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

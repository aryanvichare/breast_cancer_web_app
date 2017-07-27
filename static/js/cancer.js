var slider = new Slider("#Clump_Thickness");
slider.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal").textContent = sliderValue;
});
var slider1 = new Slider("#Uniformity_of_Cell_Size");
slider1.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal1").textContent = sliderValue;
});
var slider2 = new Slider("#Uniformity_of_Cell_Shape");
slider2.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal2").textContent = sliderValue;
});
var slider3 = new Slider("#Marginal_Adhesion");
slider3.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal3").textContent = sliderValue;
});
var slider4 = new Slider("#Single_Epithelial_Cell_Size");
slider4.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal4").textContent = sliderValue;
});
var slider5 = new Slider("#Bare_Nuclei");
slider5.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal5").textContent = sliderValue;
});
var slider6 = new Slider("#Bland_Chromatin");
slider6.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal6").textContent = sliderValue;
});
var slider7 = new Slider("#Normal_Nucleoli");
slider7.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal7").textContent = sliderValue;
});
var slider8 = new Slider("#Mitoses");
slider8.on("slide", function(sliderValue) {
  document.getElementById("ex6SliderVal8").textContent = sliderValue;
});


// $(document).ready(function(){
//       $('#ClickMe').click(function(){
// 	        $('#result').append(JSON.stringify(makeJsonFromTable('attributes')))
// 			$('#result').show()
// 			alert(JSON.stringify(makeJsonFromTable('attributes')))
// 	  })
//   });

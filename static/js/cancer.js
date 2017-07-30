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

// setup some JSON to use
// Convert table to JSON and pass it to predict.py for evaluation
window.onload = function() {
  // setup the button click
  document.getElementById("ClickMe").onclick = function() {
    JSON.stringify(makeJsonFromTable('attributes'))
    doWork(JSON.stringify(makeJsonFromTable('attributes')))
  };
}

// doWork evaluates attributes and catch the return value from predict.py
function doWork(tables) {
  // ajax the JSON to the server
  $.post("receiver", tables, function(response) {
    // $('#result').html(response);
    prediction = response;
    if (prediction == "malign") {
      swal("Likely to be",
        response.toUpperCase(),
        "warning"
      )
    } else {
      swal("Likely to be",
        response.toUpperCase(),
        "success"
      )
    }
  });
  // swal({
  //     title: "Evaluating attributes",
  //     // text: "Please, check ",
  //     type: "info",
  //     showCancelButton: true,
  //     closeOnConfirm: false,
  //     showLoaderOnConfirm: true,
  //   },
  //   function(response) {
  //     $.post("receiver", tables, function(response) {
  //       $('#result').html(response);
  //       if (response == "malign") {
  // swal("Likely to be",
  //       response,
  //       "error"
  // );
  //       }
  //     });
  //   });

  // stop link reloading the page
  event.preventDefault();
}

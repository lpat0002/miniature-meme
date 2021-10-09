var vg_1 = "W10HW_Bar.vega";
var vg_2 = "W10HW_Map.vega";

vegaEmbed("#barchart", vg_1).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#chmap", vg_2).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   
   }).catch(console.error);
   
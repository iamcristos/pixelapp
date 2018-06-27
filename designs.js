// Select color input
// Select size input
 //select color and sie inputs

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    console.log("makeGrid is working")
    var designCanvas, color, height, width, row, column;
    
    designCanvas= $("#pixelCanvas").html("");
    designCanvas.children().remove(); 
     color= $("#colorPicker").val();
    height= $("#inputHeight").val();
      width= $("#inputWeight").val() 
    
    // creating grid row
      for (i=0; i<height; i++) {
        designCanvas.append("<tr></tr>");
    }
     row= $("tr")
    //  creating gridColumn
for (j=0; j<width; j++) {
     row.append("<td></td>");  
}
 column= $("td")
// Your code goes here!
// creating color on the grid
column.on("click", function(){
    $(this).attr("bgcolor", color);
})

}
var submit= $('input[type="submit"]')

submit.click(function(event) {
    event.preventDefault()
    makeGrid()
})
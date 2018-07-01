// Select color input
// Select size input
$("#sizePicker").submit(function(event){
    event.preventDefault();
    var height, width;
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    makeGrid(height, width);
    putColor();
});

// When size is submitted by the user, call makeGrid()
// Your code goes here!
function makeGrid(x, y) {
    $("tr").remove();
    for(var i = 1; i <= x; i++){
        $("#pixelCanvas").append("<tr></tr>");
        for(var j = 1; j <= y; j++){
            $("tr:last").append("<td></td>");
        }
    }
}

//add some colors to the cells
function putColor(){
    var y = $("td");
    y.click(function(){
        var color = $("#colorPicker").val();
        if($(this).attr("style")){
            $(this).removeAttr("style");
        } else {
            $(this).attr("style", "background-color:" + color);
        }
    });
}
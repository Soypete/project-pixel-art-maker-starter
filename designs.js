
//intiialize variable
var submitButton = $("#submit");
var height;
var width;
var color = $("#colorPicker").val();
var table;

//reads in height input
$("#inputHeight").on('keyup',function(){
    height = $(this).val();
});
//reads in width input
$('#inputWidth').on('keyup',function(){
    width = $(this).val();
});

// Select color input
$("#colorPicker").on('change', function(){
    color = $(this).val();
    console.log(color);
}
); 


//funtion to create table
submitButton.on('click',function() {
    var body = document.getElementsByTagName('body')[0];
 	var tbl = document.createElement('table');
     tbl.setAttribute('border', '2px thin black');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.setAttribute('id',`cell${i}${j}`);
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    table=tbl;
    body.appendChild(tbl);
});

//changes the colors of the tables cells
$( 'body' ).click(function( event ) {
  if(event.target.nodeName === 'TD'){
    $(event.target).css("background-color",color.toString());
  }
});


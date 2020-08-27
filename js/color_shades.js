$(document).ready( function() {

	//Create Box Default Color
	let range_input = {red:255, green:0, blue:0}; //red
	loopBox(range_input,false);


	//Onchange Range
    $("#range_red, #range_green, #range_blue").on('change', function() {
    	let vred   = parseInt($('#range_red').val());
    	let vgreen = parseInt($('#range_green').val());
    	let vblue  = parseInt($('#range_blue').val());
    	let range_input = {red:vred, green:vgreen, blue:vblue};
    	loopBox(range_input,true);
    });

    $('.boxes').hover(
       /*HOVER IN*/
       function(){ $(this).children('.b-lbl').addClass('b-lbl-show')},
       /*HOVER OUT*/
       function(){ $(this).children('.b-lbl').removeClass('b-lbl-show')}
	)

});

/* LOOPING OF BOXES
*  range_input   = range input value;
*  boxes_boolean = to determine if the boxes need to be created or no.
*/
const loopBox = (range_input,boxes_boolean=false)  => {
	
	var orig_color  = range_input;

	for(loop_num = 1; loop_num <= 15; loop_num++){

		if(loop_num === 1){
			orig_color = createBox(true, orig_color, loop_num, boxes_boolean);
		}else{
			orig_color = createBox(false, orig_color, loop_num, boxes_boolean);
		}

	}	
}

/* CREATE BOXES FUNCTION
*  bool_default  = (true/false) determine if the box is the default color
*  orig_color    = get the next color to be edited
*  loop_num      = for the div box class numbering.
*  boxes_boolean = to determine if the boxes need to be created or no.
*/
const createBox  = (bool_default, orig_color, loop_num, boxes_boolean) => {

	var color_dtls  = orig_color;

	if(bool_default){
		color_dtls = orig_color;
	}else{
		color_dtls = createColor(orig_color);
	}

	//CREATE BOXES OR JUST CHANGE THE COLOR IF BOXES ALREADY CREATED
	if(boxes_boolean){
		$(`.container > .box-${loop_num}`).css("background-color", `rgb(${color_dtls.red}, ${color_dtls.green}, ${color_dtls.blue})`);
		$(`.container > .box-${loop_num} > .b-lbl`).text(`Red: ${color_dtls.red},  Green: ${color_dtls.green},  Blue: ${color_dtls.blue}`);
	}else{
		$('.container').append(`<div class="boxes box-${loop_num}" style="background-color:rgb(${color_dtls.red}, ${color_dtls.green}, ${color_dtls.blue})" ><h4 class="b-lbl">Red: ${color_dtls.red},  Green: ${color_dtls.green},  Blue: ${color_dtls.blue} </h4></div>`);
	}
	return color_dtls;
	
}

//CALCULATE COLORS
const createColor = (orig_color) => {

	let color_dtls = {red:orig_color.red, green:orig_color.green, blue:orig_color.blue};
	

	if(color_dtls.red < 255){
		color_dtls.red = color_dtls.red  + 10;
	}


	if(color_dtls.green < 255){
		color_dtls.green = color_dtls.green  + 10;
	}


	if(color_dtls.blue < 255){
		color_dtls.blue = color_dtls.blue  + 10;
	}

	return color_dtls;

}

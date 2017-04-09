$(document).ready(function(){

	function deleteItem(event) { //delete function
		event.preventDefault();
      	var item = $(this).parent('li'); //saving li element
      	$("#dialog2").dialog(); //modal pops up
      	$("#yes") //if yes button clicked
      	.button()
      	.click(function(event) { 
      		event.preventDefault();
      		$(item).remove(); // removes item
      		$("#dialog2").dialog("close"); // closes modal
      	});
      	$("#no") //if no button clicked
      	.button()
      	.click(function(event) {
      		event.preventDefault();
      		$("#dialog2").dialog("close"); //closes modal
      	})
	}

	function move(event) { //move function
		event.preventDefault();
      	var task = $(this).parent('li'); //saving li element
      	$("#done").append(task); //moving it
      	$(this).remove(); //removing from another list
      	
	}

	$(function() {
		//SORTABLE
	    $("#todo, #done").sortable({
	    	cursor: "move",
	    	opacity: 0.5,
	    	connectWith: ".list",
	    	axis: "y"
		});
		$("#open") //opens modal
      	.button()
      	.click(function(event) {
        	event.preventDefault();
        	$("#dialog").dialog(); //opens modal
        	$("#date").datepicker(); //opens datepicker
      	});
      	$("#add") //add button
      	.button()
      	.click(function(event) {
      		event.preventDefault();
      		var name = $("#name").val(); //saving name value
      		var date = $("#date").val(); //saving date value
      		//adding a new item
      		$("#todo").append('<li><a class="move">Move</a><span class="name">' + name + '</span> Until: <span class="date">' + date + '</span><a class="delete-task">Delete</a></li>');
      		$("#dialog").dialog("close"); //closing modal
      		$(".move") //if move button clicked
      		.button()
      		.click(move); //function call
      		$(".delete-task") //if delete button clicked
      		.button() 
      		.click(deleteItem); //function call
      	});
      	$(".move") //move button
      	.button()
      	.click(move); //function call
      	$(".delete-task") //delete button
      		.button()
      		.click(deleteItem); //function call
	});
});
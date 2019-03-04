// Add item
$("#addItem").on("click", function(event){
	event.preventDefault();
	let itemToAdd = $("#itemToAdd").val();
	if(itemToAdd != ""){
		$("#itemList").append(`
					<div class="itemBox">
						<li>
							<p>${itemToAdd}</p> 
							<button class="checkButton" type"button">Check</button>
							<button class="deleteButton" type"button">Delete</button>
						</li>
					</div>`);
		$("#itemToAdd").val('');
	}
});

// Cross out item
$("#itemList").on("click", ".checkButton", function (event) {
	event.preventDefault();
	let esto = $(this).prev().toggleClass("crossItem");
});

// Delete item
$("#itemList").on("click", ".deleteButton", function(event){
	event.preventDefault();
	let esto = $(this).parent().parent().remove();
});

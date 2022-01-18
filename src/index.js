let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
	// for each button, add an event listener to toggle its drop-down
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		let content = this.nextElementSibling; // next element should be a div

		// set its height
		if (content.style.maxHeight)
			content.style.maxHeight = null;
		else
			content.style.maxHeight = content.scrollHeight + "px";
	});
}
function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tabitem;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Get all elements with class="tabitems" and remove the class "active"
	tabitem = document.getElementsByClassName('tabitem');
	for (i = 0; i < tabitem.length; i++) {
		tabitem[i].className = tabitem[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

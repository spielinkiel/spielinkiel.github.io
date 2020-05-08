// is this really working?    YES!
function changeLanguage(lang) {
	if (lang == 'english') {
		var deutsche_teile = document.getElementsByClassName("deutsch")
		for (i = 0; i < deutsche_teile.length; i++) {
			deutsche_teile[i].style.display = "none";
		} 
		var english_parts = document.getElementsByClassName("english")
		for (i = 0; i < english_parts.length; i++) {
			english_parts[i].style.display = "inline";
		} 
	}
	if (lang == 'deutsch') {
		var deutsche_teile = document.getElementsByClassName("deutsch")
		for (i = 0; i < deutsche_teile.length; i++) {
			deutsche_teile[i].style.display = "inline";
		} 
		var english_parts = document.getElementsByClassName("english")
		for (i = 0; i < english_parts.length; i++) {
			english_parts[i].style.display = "none";
		} 
	}
}

function load_header() {
     document.getElementById("header").innerHTML='<object type="text/html" data="header.html" ></object>';
}
function load_footer() {
     document.getElementById("footer").innerHTML='<object type="text/html" data="footer.html" ></object>';
}

/*initial loading of the website
var hashtaglanguage = window.location.hash;
if (hashtaglanguage == "#en") {
	document.getElementById("languageEN").click();
}
else if (hashtaglanguage == "#de") {
	document.getElementById("languageDE").click();
}
else {
	document.getElementById("languageDE").click();
}
*/

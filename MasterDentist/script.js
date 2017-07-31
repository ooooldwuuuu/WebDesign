/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

//function greetMe(name) {
//  var today = new Date().toDateString();
//  console.log("Hello " + name + ", today is " + today);
//}
//
//greetMe("World");
function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("sidebarbutton").style.display = "none";
}
function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("sidebarbutton").style.display = "block";
}

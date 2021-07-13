/*

  ___        _                 _           _   _    _      _       _____                               
 / _ \      (_)               | |         | | | |  | |    | |     /  __ \                              
/ /_\ \_ __  _ _ __ ___   __ _| |_ ___  __| | | |  | | ___| |__   | /  \/_   _ _ __ ___  ___  _ __ ___ 
|  _  | '_ \| | '_ ` _ \ / _` | __/ _ \/ _` | | |/\| |/ _ \ '_ \  | |   | | | | '__/ __|/ _ \| '__/ __|
| | | | | | | | | | | | | (_| | ||  __/ (_| | \  /\  /  __/ |_) | | \__/\ |_| | |  \__ \ (_) | |  \__ \
\_| |_/_| |_|_|_| |_| |_|\__,_|\__\___|\__,_|  \/  \/ \___|_.__/   \____/\__,_|_|  |___/\___/|_|  |___/ (full version)
                                                                                                       
                                 by @alienmelon (tetrageddon.com)
*/

//---------------PATHS & VARIABLES---------------//

//default path to the folder where the cursors are
//if you change where they are located, be sure to change this...
var str_pathToImageFolder = "cursorImages/";
//
var int_cursorAnimationInterval;//animation interval id
var num_cursorAnimationFrame = 0;//the animation frame (counts through arrays)
var num_animationSpeed = 100;//interval speed

//---------------ANIMATION ARRAYS---------------//

//3D-Bronze
var arr_hourgla2ani = ["XPcursors/3D-Bronze/Busy_FRAME01.png", "XPcursors/3D-Bronze/Busy_FRAME02.png", "XPcursors/3D-Bronze/Busy_FRAME03.png", "XPcursors/3D-Bronze/Busy_FRAME04.png", "XPcursors/3D-Bronze/Busy_FRAME05.png", "XPcursors/3D-Bronze/Busy_FRAME06.png", "XPcursors/3D-Bronze/Busy_FRAME07.png", "XPcursors/3D-Bronze/Busy_FRAME08.png", "XPcursors/3D-Bronze/Busy_FRAME09.png", "XPcursors/3D-Bronze/Busy_FRAME010.png", "XPcursors/3D-Bronze/Busy_FRAME011.png", "XPcursors/3D-Bronze/Busy_FRAME012.png", "XPcursors/3D-Bronze/Busy_FRAME013.png", "XPcursors/3D-Bronze/Busy_FRAME014.png", "XPcursors/3D-Bronze/Busy_FRAME015.png", "XPcursors/3D-Bronze/Busy_FRAME016.png"];
var arr_appstar2ani = ["XPcursors/3D-Bronze/WorkingInBackground_FRAME01.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME02.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME03.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME04.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME05.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME06.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME07.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME08.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME09.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME010.png", "XPcursors/3D-Bronze/WorkingInBackground_FRAME011.png"];
//3D-White
var arr_hourgla3ani = ["XPcursors/3D-White/Busy_FRAME01.png", "XPcursors/3D-White/Busy_FRAME02.png", "XPcursors/3D-White/Busy_FRAME03.png", "XPcursors/3D-White/Busy_FRAME04.png", "XPcursors/3D-White/Busy_FRAME05.png", "XPcursors/3D-White/Busy_FRAME06.png", "XPcursors/3D-White/Busy_FRAME07.png", "XPcursors/3D-White/Busy_FRAME08.png", "XPcursors/3D-White/Busy_FRAME09.png", "XPcursors/3D-White/Busy_FRAME10.png", "XPcursors/3D-White/Busy_FRAME11.png", "XPcursors/3D-White/Busy_FRAME12.png", "XPcursors/3D-White/Busy_FRAME13.png", "XPcursors/3D-White/Busy_FRAME14.png", "XPcursors/3D-White/Busy_FRAME15.png", "XPcursors/3D-White/Busy_FRAME16.png"];
var arr_appstar3ani = ["XPcursors/3D-White/WorkingInBackground_FRAME01.png", "XPcursors/3D-White/WorkingInBackground_FRAME02.png", "XPcursors/3D-White/WorkingInBackground_FRAME03.png", "XPcursors/3D-White/WorkingInBackground_FRAME04.png", "XPcursors/3D-White/WorkingInBackground_FRAME05.png", "XPcursors/3D-White/WorkingInBackground_FRAME06.png", "XPcursors/3D-White/WorkingInBackground_FRAME07.png", "XPcursors/3D-White/WorkingInBackground_FRAME08.png", "XPcursors/3D-White/WorkingInBackground_FRAME09.png", "XPcursors/3D-White/WorkingInBackground_FRAME010.png", "XPcursors/3D-White/WorkingInBackground_FRAME011.png"];
//Conductor
var arr_metronomani = ["XPcursors/Conductor/Busy_FRAME01.png", "XPcursors/Conductor/Busy_FRAME02.png", "XPcursors/Conductor/Busy_FRAME03.png", "XPcursors/Conductor/Busy_FRAME04.png", "XPcursors/Conductor/Busy_FRAME05.png", "XPcursors/Conductor/Busy_FRAME06.png", "XPcursors/Conductor/Busy_FRAME07.png", "XPcursors/Conductor/Busy_FRAME08.png", "XPcursors/Conductor/Busy_FRAME09.png", "XPcursors/Conductor/Busy_FRAME10.png", "XPcursors/Conductor/Busy_FRAME11.png", "XPcursors/Conductor/Busy_FRAME12.png", "XPcursors/Conductor/Busy_FRAME13.png"];
var arr_pianoani = ["XPcursors/Conductor/Unavailable_FRAME01.png", "XPcursors/Conductor/Unavailable_FRAME02.png", "XPcursors/Conductor/Unavailable_FRAME03.png", "XPcursors/Conductor/Unavailable_FRAME04.png", "XPcursors/Conductor/Unavailable_FRAME05.png", "XPcursors/Conductor/Unavailable_FRAME06.png", "XPcursors/Conductor/Unavailable_FRAME07.png", "XPcursors/Conductor/Unavailable_FRAME08.png", "XPcursors/Conductor/Unavailable_FRAME09.png"];
var arr_drumani = ["XPcursors/Conductor/WorkingInBackground_FRAME01.png", "XPcursors/Conductor/WorkingInBackground_FRAME02.png", "XPcursors/Conductor/WorkingInBackground_FRAME03.png", "XPcursors/Conductor/WorkingInBackground_FRAME04.png", "XPcursors/Conductor/WorkingInBackground_FRAME05.png", "XPcursors/Conductor/WorkingInBackground_FRAME06.png"];
//Dinosaur
var arr_dinosau2ani = ["XPcursors/Dinosaur/Busy_FRAME01.png", "XPcursors/Dinosaur/Busy_FRAME02.png", "XPcursors/Dinosaur/Busy_FRAME03.png", "XPcursors/Dinosaur/Busy_FRAME04.png", "XPcursors/Dinosaur/Busy_FRAME05.png", "XPcursors/Dinosaur/Busy_FRAME06.png", "XPcursors/Dinosaur/Busy_FRAME07.png", "XPcursors/Dinosaur/Busy_FRAME08.png", "XPcursors/Dinosaur/Busy_FRAME09.png", "XPcursors/Dinosaur/Busy_FRAME010.png", "XPcursors/Dinosaur/Busy_FRAME011.png", "XPcursors/Dinosaur/Busy_FRAME012.png"];
var arr_bananaani = ["XPcursors/Dinosaur/Unavailable_FRAME01.png", "XPcursors/Dinosaur/Unavailable_FRAME02.png", "XPcursors/Dinosaur/Unavailable_FRAME03.png", "XPcursors/Dinosaur/Unavailable_FRAME04.png", "XPcursors/Dinosaur/Unavailable_FRAME05.png", "XPcursors/Dinosaur/Unavailable_FRAME06.png", "XPcursors/Dinosaur/Unavailable_FRAME07.png", "XPcursors/Dinosaur/Unavailable_FRAME08.png", "XPcursors/Dinosaur/Unavailable_FRAME09.png", "XPcursors/Dinosaur/Unavailable_FRAME010.png", "XPcursors/Dinosaur/Unavailable_FRAME011.png", "XPcursors/Dinosaur/Unavailable_FRAME012.png", "XPcursors/Dinosaur/Unavailable_FRAME013.png", "XPcursors/Dinosaur/Unavailable_FRAME014.png", "XPcursors/Dinosaur/Unavailable_FRAME015.png"];
var arr_dinosaurani = ["XPcursors/Dinosaur/WorkingInBackground_FRAME01.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME02.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME03.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME04.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME05.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME06.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME07.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME08.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME09.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME010.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME011.png", "XPcursors/Dinosaur/WorkingInBackground_FRAME012.png"];
//Hands1
var arr_handani = ["XPcursors/Hands1/Busy_FRAME01.png", "XPcursors/Hands1/Busy_FRAME02.png", "XPcursors/Hands1/Busy_FRAME03.png", "XPcursors/Hands1/Busy_FRAME04.png", "XPcursors/Hands1/Busy_FRAME05.png"];
var arr_handapstani = ["XPcursors/Hands1/WorkingInBackground_FRAME01.png", "XPcursors/Hands1/WorkingInBackground_FRAME02.png", "XPcursors/Hands1/WorkingInBackground_FRAME03.png", "XPcursors/Hands1/WorkingInBackground_FRAME04.png", "XPcursors/Hands1/WorkingInBackground_FRAME05.png", "XPcursors/Hands1/WorkingInBackground_FRAME06.png", "XPcursors/Hands1/WorkingInBackground_FRAME07.png", "XPcursors/Hands1/WorkingInBackground_FRAME08.png", "XPcursors/Hands1/WorkingInBackground_FRAME09.png"];
//Hands2
var arr_handwaitani = ["XPcursors/Hands2/BUSY_FRAME01.png", "XPcursors/Hands2/BUSY_FRAME02.png", "XPcursors/Hands2/BUSY_FRAME03.png", "XPcursors/Hands2/BUSY_FRAME04.png", "XPcursors/Hands2/BUSY_FRAME05.png", "XPcursors/Hands2/BUSY_FRAME06.png", "XPcursors/Hands2/BUSY_FRAME07.png", "XPcursors/Hands2/BUSY_FRAME08.png", "XPcursors/Hands2/BUSY_FRAME09.png", "XPcursors/Hands2/BUSY_FRAME10.png", "XPcursors/Hands2/BUSY_FRAME11.png"];
var arr_handnwseani = ["XPcursors/Hands2/DiagonalResize1_FRAME01.png", "XPcursors/Hands2/DiagonalResize1_FRAME02.png"];
var arr_handneswani = ["XPcursors/Hands2/DiagonalResize2_FRAME01.png", "XPcursors/Hands2/DiagonalResize2_FRAME02.png"];
var arr_handweani = ["XPcursors/Hands2/HorizontalResize_FRAME01.png", "XPcursors/Hands2/HorizontalResize_FRAME02.png"];
var arr_handnoani = ["XPcursors/Hands2/Unavailable_FRAME01.png", "XPcursors/Hands2/Unavailable_FRAME02.png", "XPcursors/Hands2/Unavailable_FRAME03.png", "XPcursors/Hands2/Unavailable_FRAME04.png", "XPcursors/Hands2/Unavailable_FRAME05.png", "XPcursors/Hands2/Unavailable_FRAME06.png", "XPcursors/Hands2/Unavailable_FRAME07.png", "XPcursors/Hands2/Unavailable_FRAME08.png", "XPcursors/Hands2/Unavailable_FRAME09.png"];
var arr_handnsani = ["XPcursors/Hands2/VerticalResize_FRAME01.png", "XPcursors/Hands2/VerticalResize_FRAME02.png"];
//OldFashioned
var arr_barberani = ["XPcursors/OldFashioned/Busy_FRAME01.png", "XPcursors/OldFashioned/Busy_FRAME02.png", "XPcursors/OldFashioned/Busy_FRAME03.png", "XPcursors/OldFashioned/Busy_FRAME04.png", "XPcursors/OldFashioned/Busy_FRAME05.png", "XPcursors/OldFashioned/Busy_FRAME06.png", "XPcursors/OldFashioned/Busy_FRAME07.png", "XPcursors/OldFashioned/Busy_FRAME08.png", "XPcursors/OldFashioned/Busy_FRAME09.png", "XPcursors/OldFashioned/Busy_FRAME10.png", "XPcursors/OldFashioned/Busy_FRAME11.png"];
var arr_coinani = ["XPcursors/OldFashioned/Unavailable_FRAME01.png", "XPcursors/OldFashioned/Unavailable_FRAME02.png", "XPcursors/OldFashioned/Unavailable_FRAME03.png", "XPcursors/OldFashioned/Unavailable_FRAME04.png", "XPcursors/OldFashioned/Unavailable_FRAME05.png", "XPcursors/OldFashioned/Unavailable_FRAME06.png", "XPcursors/OldFashioned/Unavailable_FRAME07.png", "XPcursors/OldFashioned/Unavailable_FRAME08.png", "XPcursors/OldFashioned/Unavailable_FRAME09.png"];
var arr_horseani = ["XPcursors/OldFashioned/WorkingInBackground_FRAME01.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME02.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME03.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME04.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME05.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME06.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME07.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME08.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME09.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME10.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME11.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME12.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME13.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME14.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME15.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME16.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME17.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME18.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME19.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME20.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME21.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME22.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME23.png", "XPcursors/OldFashioned/WorkingInBackground_FRAME24.png"];
//Variations
var arr_counterani = ["XPcursors/Variations/Busy_FRAME01.png", "XPcursors/Variations/Busy_FRAME02.png", "XPcursors/Variations/Busy_FRAME03.png", "XPcursors/Variations/Busy_FRAME04.png", "XPcursors/Variations/Busy_FRAME05.png", "XPcursors/Variations/Busy_FRAME06.png", "XPcursors/Variations/Busy_FRAME07.png", "XPcursors/Variations/Busy_FRAME08.png", "XPcursors/Variations/Busy_FRAME09.png", "XPcursors/Variations/Busy_FRAME10.png", "XPcursors/Variations/Busy_FRAME11.png", "XPcursors/Variations/Busy_FRAME12.png", "XPcursors/Variations/Busy_FRAME13.png", "XPcursors/Variations/Busy_FRAME14.png", "XPcursors/Variations/Busy_FRAME15.png", "XPcursors/Variations/Busy_FRAME16.png", "XPcursors/Variations/Busy_FRAME17.png", "XPcursors/Variations/Busy_FRAME18.png", "XPcursors/Variations/Busy_FRAME19.png", "XPcursors/Variations/Busy_FRAME20.png"];
var arr_sizeneswani = ["XPcursors/Variations/DiagonalResize_FRAME01.png", "XPcursors/Variations/DiagonalResize_FRAME02.png"];
var arr_sizenwseani = ["XPcursors/Variations/DiagonalResize1_FRAME01.png", "XPcursors/Variations/DiagonalResize1_FRAME02.png"];
var arr_sizeweani = ["XPcursors/Variations/HorizontalResize_FRAME01.png", "XPcursors/Variations/HorizontalResize_FRAME02.png"];
var arr_fillitupani = ["XPcursors/Variations/NormalSelect_FRAME01.png", "XPcursors/Variations/NormalSelect_FRAME02.png", "XPcursors/Variations/NormalSelect_FRAME03.png", "XPcursors/Variations/NormalSelect_FRAME04.png", "XPcursors/Variations/NormalSelect_FRAME05.png", "XPcursors/Variations/NormalSelect_FRAME06.png", "XPcursors/Variations/NormalSelect_FRAME07.png", "XPcursors/Variations/NormalSelect_FRAME08.png", "XPcursors/Variations/NormalSelect_FRAME09.png", "XPcursors/Variations/NormalSelect_FRAME10.png", "XPcursors/Variations/NormalSelect_FRAME11.png", "XPcursors/Variations/NormalSelect_FRAME12.png", "XPcursors/Variations/NormalSelect_FRAME13.png", "XPcursors/Variations/NormalSelect_FRAME14.png", "XPcursors/Variations/NormalSelect_FRAME15.png", "XPcursors/Variations/NormalSelect_FRAME16.png", "XPcursors/Variations/NormalSelect_FRAME17.png", "XPcursors/Variations/NormalSelect_FRAME18.png", "XPcursors/Variations/NormalSelect_FRAME19.png"];
var arr_wagtailani = ["XPcursors/Variations/Unavailable_FRAME01.png", "XPcursors/Variations/Unavailable_FRAME02.png", "XPcursors/Variations/Unavailable_FRAME03.png", "XPcursors/Variations/Unavailable_FRAME04.png", "XPcursors/Variations/Unavailable_FRAME05.png", "XPcursors/Variations/Unavailable_FRAME06.png", "XPcursors/Variations/Unavailable_FRAME07.png", "XPcursors/Variations/Unavailable_FRAME08.png", "XPcursors/Variations/Unavailable_FRAME09.png", "XPcursors/Variations/Unavailable_FRAME10.png", "XPcursors/Variations/Unavailable_FRAME11.png", "XPcursors/Variations/Unavailable_FRAME12.png"];
var arr_raindropani = ["XPcursors/Variations/WorkingInBackground_FRAME01.png", "XPcursors/Variations/WorkingInBackground_FRAME02.png", "XPcursors/Variations/WorkingInBackground_FRAME03.png", "XPcursors/Variations/WorkingInBackground_FRAME04.png", "XPcursors/Variations/WorkingInBackground_FRAME05.png", "XPcursors/Variations/WorkingInBackground_FRAME06.png"];
var arr_sizensani = ["XPcursors/Variations/VerticalResize_FRAME01.png", "XPcursors/Variations/VerticalResize_FRAME02.png"];
//WindowsAnimated
var arr_hourglasani = ["XPcursors/WindowsAnimated/Busy_FRAME01.png", "XPcursors/WindowsAnimated/Busy_FRAME02.png", "XPcursors/WindowsAnimated/Busy_FRAME03.png", "XPcursors/WindowsAnimated/Busy_FRAME04.png", "XPcursors/WindowsAnimated/Busy_FRAME05.png", "XPcursors/WindowsAnimated/Busy_FRAME06.png", "XPcursors/WindowsAnimated/Busy_FRAME07.png", "XPcursors/WindowsAnimated/Busy_FRAME08.png", "XPcursors/WindowsAnimated/Busy_FRAME09.png", "XPcursors/WindowsAnimated/Busy_FRAME10.png", "XPcursors/WindowsAnimated/Busy_FRAME11.png", "XPcursors/WindowsAnimated/Busy_FRAME12.png", "XPcursors/WindowsAnimated/Busy_FRAME13.png", "XPcursors/WindowsAnimated/Busy_FRAME14.png", "XPcursors/WindowsAnimated/Busy_FRAME15.png", "XPcursors/WindowsAnimated/Busy_FRAME16.png"];
var arr_appstartani = ["XPcursors/WindowsAnimated/WorkingInBackground_FRAME01.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME02.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME03.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME04.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME05.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME06.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME07.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME08.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME09.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME10.png", "XPcursors/WindowsAnimated/WorkingInBackground_FRAME11.png"];



//---------------CALL THESE---------------//

//animateCursor = an animated cursor for the page's body
//call these for a custom animation set
//animateCursor(["image1.png", "image2.png"...])
//make sure to pass an array of images nested in the images/ folder
function animateCursor(arr_animation){
	//restart first
	num_cursorAnimationFrame = 0;
	clearInterval(int_cursorAnimationInterval);
	//start animation...
	int_cursorAnimationInterval = setInterval(function(){animateCursorDefault(arr_animation, "body");}, num_animationSpeed);
}

//animateCursorForElement = an animated cursor for specific elements
//same as above but pass it a tag name as well as desired array of images
//see https://www.w3schools.com/tags/
function animateCursorForElement(arr_animation, str_tagName){
	//restart first
	//use dynamic variables because tag names aren't predictable
	num_cursorAnimationFrame = 0;
	clearInterval(window["int_cursorAnimationInterval_"+str_tagName]);
	var arr = arr_animation;
	//make variable for each tag element (so frame numbers aren't shared or overwritten)
	window["num_cursorAnimationFrame_"+str_tagName] = 0;
	//start animation...
	window["int_cursorAnimationInterval_"+str_tagName] = setInterval(function(){animatedCursorForElement(arr, str_tagName, "num_cursorAnimationFrame_"+str_tagName);}, num_animationSpeed);
}

//call this to set a static (non moving) cursor
function staticCursor(str_image){
	//clear incase the previous cursor was set to an animation...
	num_cursorAnimationFrame = 0;
	clearInterval(int_cursorAnimationInterval);
	//
	setCursor(str_image);
}

//call this to set a static cursor to a tag
function staticCursorForElement(str_image, str_tagName){
	//clear incase the previous cursor was set to an animation...
	num_cursorAnimationFrame = 0;
	clearInterval(window["int_cursorAnimationInterval_"+str_tagName]);
	//
	setCursorToTag(str_image, str_tagName);
}

//---------------------------------------------//
//CURSOR PLAYHEAD//
//Functions to manage movement (do not call these)

//special cursor for elements (buttons and links)
//pass it the tag name of element and the desired animation array
function animatedCursorForElement(arr_animation, str_tagName, str_frameVar){
	//next frame
	window[str_frameVar] += 1;
	//loop through current array
	if(window[str_frameVar] > arr_animation.length-1){
		window[str_frameVar] = 0;
	}
	//apply to all elements
	setCursorToTag(arr_animation[window[str_frameVar]], str_tagName)
}

function animateCursorDefault(arr_animation){
	//next frame
	num_cursorAnimationFrame += 1;
	//loop through current array
	if(num_cursorAnimationFrame > arr_animation.length-1){
		num_cursorAnimationFrame = 0;
	}
	//set animation...
	setCursor(arr_animation[num_cursorAnimationFrame]);
	//
}

//set the cursor graphic
function setCursor(str_image){
	document.documentElement.style.cursor = 'url(' + str_pathToImageFolder + str_image + '), auto';
	//document.documentElement.style.cursor = 'url(' + str_pathToImageFolder + arr_animation[num_cursorAnimationFrame] + '), auto';
	//document.getElementsByTagName("body")[0].style.cursor = 'url(' + str_pathToImageFolder + arr_animation[num_cursorAnimationFrame] + '), auto';
}
//set the cursor graphic to a specific element
function setCursorToTag(str_image, str_tagName){
	//apply to all elements
	var _element = document.getElementsByTagName(str_tagName);	
	for (var i=0; i<_element.length; ++i){
		_element[i].style.cursor = 'url(' + str_pathToImageFolder + str_image + '), auto';
	}
}

//---------------ANIMATED CURSORS (Call these for a specific classic cursor)---------------//

//call all of these for a classic cursor animation
//the first = an animated cursor for the page's body
//the second (_tag) = an animated cursor for individual elements like buttons or links

function hourgla2ani(){
	animateCursor(arr_hourgla2ani);
}
function hourgla2ani_tag(str_tag){
	animateCursorForElement(arr_hourgla2ani, str_tag);
}
//
function appstar2ani(){
	animateCursor(arr_appstar2ani);
}
function appstar2ani_tag(str_tag){
	animateCursorForElement(arr_appstar2ani, str_tag);
}
//
function hourgla3ani(){
	animateCursor(arr_hourgla3ani);
}
function hourgla3ani_tag(str_tag){
	animateCursorForElement(arr_hourgla3ani, str_tag);
}
//
function appstar3ani(){
	animateCursor(arr_appstar3ani);
}
function appstar3ani_tag(str_tag){
	animateCursorForElement(arr_appstar3ani, str_tag);
}
//
function metronomani(){
	animateCursor(arr_metronomani);
}
function metronomani_tag(str_tag){
	animateCursorForElement(arr_metronomani, str_tag);
}
//
function pianoani(){
	animateCursor(arr_pianoani);
}
function pianoani_tag(str_tag){
	animateCursorForElement(arr_pianoani, str_tag);
}
//
function drumani(){
	animateCursor(arr_drumani);
}
function drumani_tag(str_tag){
	animateCursorForElement(arr_drumani, str_tag);
}
//
function dinosau2ani(){
	animateCursor(arr_dinosau2ani);
}
function dinosau2ani_tag(str_tag){
	animateCursorForElement(arr_dinosau2ani, str_tag);
}
//
function bananaani(){
	animateCursor(arr_bananaani);
}
function bananaani_tag(str_tag){
	animateCursorForElement(arr_bananaani, str_tag);
}
//
function dinosaurani(){
	animateCursor(arr_dinosaurani);
}
function dinosaurani_tag(str_tag){
	animateCursorForElement(arr_dinosaurani, str_tag);
}
//
function handani(){
	animateCursor(arr_handani);
}
function handani_tag(str_tag){
	animateCursorForElement(arr_handani, str_tag);
}
//
function handapstani(){
	animateCursor(arr_handapstani);
}
function handapstani_tag(str_tag){
	animateCursorForElement(arr_handapstani, str_tag);
}
//
function handwaitani(){
	animateCursor(arr_handwaitani);
}
function handwaitani_tag(str_tag){
	animateCursorForElement(arr_handwaitani, str_tag);
}
//
function handnwseani(){
	animateCursor(arr_handnwseani);
}
function handnwseani_tag(str_tag){
	animateCursorForElement(arr_handnwseani, str_tag);
}
//
function handneswani(){
	animateCursor(arr_handneswani);
}
function handneswani_tag(str_tag){
	animateCursorForElement(arr_handneswani, str_tag);
}
//
function handweani(){
	animateCursor(arr_handweani);
}
function handweani_tag(str_tag){
	animateCursorForElement(arr_handweani, str_tag);
}
//
function handnoani(){
	animateCursor(arr_handnoani);
}
function handnoani_tag(str_tag){
	animateCursorForElement(arr_handnoani, str_tag);
}
//
function handnsani(){
	animateCursor(arr_handnsani);
}
function handnsani_tag(str_tag){
	animateCursorForElement(arr_handnsani, str_tag);
}
//
function barberani(){
	animateCursor(arr_barberani);
}
function barberani_tag(str_tag){
	animateCursorForElement(arr_barberani, str_tag);
}
//
function coinani(){
	animateCursor(arr_coinani);
}
function coinani_tag(str_tag){
	animateCursorForElement(arr_coinani, str_tag);
}
//
function horseani(){
	animateCursor(arr_horseani);
}
function horseani_tag(str_tag){
	animateCursorForElement(arr_horseani, str_tag);
}
//
function counterani(){
	animateCursor(arr_counterani);
}
function counterani_tag(str_tag){
	animateCursorForElement(arr_counterani, str_tag);
}
//
function sizeneswani(){
	animateCursor(arr_sizeneswani);
}
function sizeneswani_tag(str_tag){
	animateCursorForElement(arr_sizeneswani, str_tag);
}
//
function sizenwseani(){
	animateCursor(arr_sizenwseani);
}
function sizenwseani_tag(str_tag){
	animateCursorForElement(arr_sizenwseani, str_tag);
}
//
function sizeweani(){
	animateCursor(arr_sizeweani);
}
function sizeweani_tag(str_tag){
	animateCursorForElement(arr_sizeweani, str_tag);
}
//
function fillitupani(){
	animateCursor(arr_fillitupani);
}
function fillitupani_tag(str_tag){
	animateCursorForElement(arr_fillitupani, str_tag);
}
//
function wagtailani(){
	animateCursor(arr_wagtailani);
}
function wagtailani_tag(str_tag){
	animateCursorForElement(arr_wagtailani, str_tag);
}
//
function raindropani(){
	animateCursor(arr_raindropani);
}
function raindropani_tag(str_tag){
	animateCursorForElement(arr_raindropani, str_tag);
}
//
function hourglasani(){
	animateCursor(arr_hourglasani);
}
function hourglasani_tag(str_tag){
	animateCursorForElement(arr_hourglasani, str_tag);
}
//
function appstartani(){
	animateCursor(arr_appstartani);
}
function appstartani_tag(str_tag){
	animateCursorForElement(arr_appstartani, str_tag);
}
//
function sizensani(){
	animateCursor(arr_sizensani);
}
function sizensani_tag(str_tag){
	animateCursorForElement(arr_sizensani, str_tag);
}

//---------------NON-ANIMATED CURSORS---------------//

//3D-Bronze
function _3dgnwsecur(){
	staticCursor("XPcursors/3D-Bronze/DiagonalResize1.png");
}
function _3dgnwsecur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/DiagonalResize1.png", str_tag)
}
function _3dgwecur(){
	staticCursor("XPcursors/3D-Bronze/HorizontalResize.png");
}
function _3dgwecur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/HorizontalResize.png", str_tag);
}
function _3dgmovecur(){
	staticCursor("XPcursors/3D-Bronze/Move.png");
}
function _3dgmovecur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/Move.png", str_tag);
}
function _3dgarrocur(){
	staticCursor("XPcursors/3D-Bronze/NormalSelect.png");
}
function _3dgarrocur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/NormalSelect.png", str_tag);
}
function _3dgnocur(){
	staticCursor("XPcursors/3D-Bronze/Unavailable.png");
}
function _3dgnocur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/Unavailable.png", str_tag);
}
function _3dgnscur(){
	staticCursor("XPcursors/3D-Bronze/VerticalResize.png");
}
function _3dgnscur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/VerticalResize.png", str_tag);
}
//3D-White
function _3dwnwsecur(){
	staticCursor("XPcursors/3D-White/DiagonalResize1.png");
}
function _3dwnwsecur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/DiagonalResize1.png", str_tag);
}
function _3dwneswcur(){
	staticCursor("XPcursors/3D-White/DiagonalResize2.png");
}
function _3dwneswcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/DiagonalResize2.png", str_tag);
}
function _3dwwecur(){
	staticCursor("XPcursors/3D-White/HorizontalResize.png");
}
function _3dwwecur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/HorizontalResize.png", str_tag);
}
function _3dwmovecur(){
	staticCursor("XPcursors/3D-White/Move.png");
}
function _3dwmovecur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/Move.png", str_tag);
}
function _3dwarrocur(){
	staticCursor("XPcursors/3D-White/NormalSelect.png");
}
function _3dwarrocur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/NormalSelect.png", str_tag);
}
function _3dwnocur(){
	staticCursor("XPcursors/3D-White/Unavailable.png");
}
function _3dwnocur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/Unavailable.png", str_tag);
}
function _3dwnscur(){
	staticCursor("XPcursors/3D-White/VerticalResize.png");
}
function _3dwnscur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-White/VerticalResize.png", str_tag);
}
//Conductor, Hands1, Hands2...
function _hnwsecur(){
	staticCursor("XPcursors/Conductor/DiagonalResize1.png");
}
function _hnwsecur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/DiagonalResize1.png", str_tag);
}
function _hneswcur(){
	staticCursor("XPcursors/Conductor/DiagonalResize2.png");
}
function _hneswcur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/DiagonalResize2.png", str_tag);
}
function _hwecur(){
	staticCursor("XPcursors/Conductor/HorizontalResize.png");
}
function _hwecur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/HorizontalResize.png", str_tag);
}
function _hmovecur(){
	staticCursor("XPcursors/Conductor/Move.png");
}
function _hmovecur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/Move.png", str_tag);
}
function _harrowcur(){
	staticCursor("XPcursors/Conductor/NormalSelect.png");
}
function _harrowcur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/NormalSelect.png", str_tag);
}
function _hibeamcur(){
	staticCursor("XPcursors/Conductor/TextSelect.png");
}
function _hibeamcur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/TextSelect.png", str_tag);
}
function _hcrosscur(){
	staticCursor("XPcursors/Conductor/PrecisionSelect.png");
}
function _hcrosscur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/PrecisionSelect.png", str_tag);
}
function _hnscur(){
	staticCursor("XPcursors/Conductor/VerticalResize.png");
}
function _hnscur_tag(str_tag){
	staticCursorForElement("XPcursors/Conductor/VerticalResize.png", str_tag);
}
function _hnodropcur(){
	staticCursor("XPcursors/Hands1/Unavailable.png");
}
function _hnodropcur_tag(str_tag){
	staticCursorForElement("XPcursors/Hands1/Unavailable.png", str_tag);
}
//Dinosaur
function _3dgneswcur(){
	staticCursor("XPcursors/Dinosaur/DiagonalResize1.png");
}
function _3dgneswcur_tag(str_tag){
	staticCursorForElement("XPcursors/Dinosaur/DiagonalResize1.png", str_tag);
}
function _3dsnwsecur(){
	staticCursor("XPcursors/Dinosaur/DiagonalResize2.png");
}
function _3dsnwsecur_tag(str_tag){
	staticCursorForElement("XPcursors/Dinosaur/DiagonalResize2.png", str_tag);
}
function _3dgwecur(){
	staticCursor("XPcursors/Dinosaur/HorizontalResize.png");
}
function _3dgwecur_tag(str_tag){
	staticCursorForElement("XPcursors/Dinosaur/HorizontalResize.png", str_tag);
}
function _3dsmovecur(){
	staticCursor("XPcursors/Dinosaur/Moving.png");
}
function _3dsmovecur_tag(str_tag){
	staticCursorForElement("XPcursors/Dinosaur/Moving.png", str_tag);
}
function _3dgarrocur(){
	staticCursor("XPcursors/Dinosaur/NormalSelect.png");
}
function _3dgarrocur_tag(str_tag){
	staticCursorForElement("XPcursors/Dinosaur/NormalSelect.png", str_tag);
}
//Classic Miscellaneous
function _classicTextSelectcur(){
	staticCursor("XPcursors/3D-Bronze/TextSelect.png");
}
function _classicTextSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/TextSelect.png", str_tag);
}
function _classicPrecisionSelectcur(){
	staticCursor("XPcursors/3D-Bronze/PrecisionSelect.png");
}
function _classicPrecisionSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/PrecisionSelect.png", str_tag);
}
function _classicLinkSelectcur(){
	staticCursor("XPcursors/3D-Bronze/LinkSelect.png");
}
function _classicLinkSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/LinkSelect.png", str_tag);
}
function _classicHelpSelectcur(){
	staticCursor("XPcursors/3D-Bronze/HelpSelect.png");
}
function _classicHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/HelpSelect.png", str_tag);
}
function _classicHandwritingcur(){
	staticCursor("XPcursors/3D-Bronze/Handwriting.png");
}
function _classicHandwritingcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/Handwriting.png", str_tag);
}
function _classicAlternateSelectcur(){
	staticCursor("XPcursors/3D-Bronze/AlternateSelect.png");
}
function _classicAlternateSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/3D-Bronze/AlternateSelect.png", str_tag);
}
function _classicMovecur(){
	staticCursor("XPcursors/Variations/Move.png");
}
function _classicMovecur_tag(str_tag){
	staticCursorForElement("XPcursors/Variations/Move.png", str_tag);
}
function _classicUnavailablecur(){
	staticCursor("XPcursors/WindowsAnimated/Unavailable.png");
}
function _classicUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsAnimated/Unavailable.png", str_tag);
}
//Classic Magnified
function _magnifiedBusycur(){
	staticCursor("XPcursors/Magnified/Busy.png");
}
function _magnifiedBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/Busy.png", str_tag);
}
function _magnifiedDiagonalResize1cur(){
	staticCursor("XPcursors/Magnified/DiagonalResize1.png");
}
function _magnifiedDiagonalResize1cur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/DiagonalResize1.png", str_tag);
}
function _magnifiedDiagonalResize2cur(){
	staticCursor("XPcursors/Magnified/DiagonalResize2.png");
}
function _magnifiedDiagonalResize2cur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/DiagonalResize2.png", str_tag);
}
function _magnifiedHorizontalResizecur(){
	staticCursor("XPcursors/Magnified/HorizontalResize.png");
}
function _magnifiedHorizontalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/HorizontalResize.png", str_tag);
}
function _magnifiedMovecur(){
	staticCursor("XPcursors/Magnified/Move.png");
}
function _magnifiedMovecur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/Move.png", str_tag);
}
function _magnifiedNormalSelectcur(){
	staticCursor("XPcursors/Magnified/NormalSelect.png");
}
function _magnifiedNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/NormalSelect.png", str_tag);
}
function _magnifiedPrecisionSelectcur(){
	staticCursor("XPcursors/Magnified/PrecisionSelect.png");
}
function _magnifiedPrecisionSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/PrecisionSelect.png", str_tag);
}
function _magnifiedTextSelectcur(){
	staticCursor("XPcursors/Magnified/TextSelect.png");
}
function _magnifiedTextSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/TextSelect.png", str_tag);
}
function _magnifiedUnavailablecur(){
	staticCursor("XPcursors/Magnified/Unavailable.png");
}
function _magnifiedUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/Unavailable.png", str_tag);
}
function _magnifiedVerticalResizecur(){
	staticCursor("XPcursors/Magnified/VerticalResize.png");
}
function _magnifiedVerticalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/VerticalResize.png", str_tag);
}
function _magnifiedWorkingInBackgroundcur(){
	staticCursor("XPcursors/Magnified/WorkingInBackground.png");
}
function _magnifiedWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/Magnified/WorkingInBackground.png", str_tag);
}
//Classic Windows Black
function _windowsBlackBusycur(){
	staticCursor("XPcursors/WindowsBlack/Busy.png");
}
function _windowsBlackBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/Busy.png", str_tag);
}
function _windowsBlackDiagonalResize1cur(){
	staticCursor("XPcursors/WindowsBlack/DiagonalResize1.png");
}
function _windowsBlackDiagonalResize1cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/DiagonalResize1.png", str_tag);
}
function _windowsBlackDiagonalResize2cur(){
	staticCursor("XPcursors/WindowsBlack/DiagonalResize2.png");
}
function _windowsBlackDiagonalResize2cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/DiagonalResize2.png", str_tag);
}
function _windowsBlackHelpSelectcur(){
	staticCursor("XPcursors/WindowsBlack/HelpSelect.png");
}
function _windowsBlackHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/HelpSelect.png", str_tag);
}
function _windowsBlackHorizontalResizecur(){
	staticCursor("XPcursors/WindowsBlack/HorizontalResize.png");
}
function _windowsBlackHorizontalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/HorizontalResize.png", str_tag);
}
function _windowsBlackNormalSelectcur(){
	staticCursor("XPcursors/WindowsBlack/NormalSelect.png");
}
function _windowsBlackNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/NormalSelect.png", str_tag);
}
function _windowsBlackUnavailablecur(){
	staticCursor("XPcursors/WindowsBlack/Unavailable.png");
}
function _windowsBlackUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/Unavailable.png", str_tag);
}
function _windowsBlackVerticalResizecur(){
	staticCursor("XPcursors/WindowsBlack/VerticalResize.png");
}
function _windowsBlackVerticalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/VerticalResize.png", str_tag);
}
function _windowsBlackWorkingInBackgroundcur(){
	staticCursor("XPcursors/WindowsBlack/WorkingInBackground.png");
}
function _windowsBlackWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlack/WorkingInBackground.png", str_tag);
}
//Classic Windows Black Extra Large
function _windowsBlackXLAlternateSelectcur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/AlternateSelect.png");
}
function _windowsBlackXLAlternateSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/AlternateSelect.png", str_tag);
}
function _windowsBlackXLBusycur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/Busy.png");
}
function _windowsBlackXLBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/Busy.png", str_tag);
}
function _windowsBlackXLDiagonalResize1cur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/DiagonalResize1.png");
}
function _windowsBlackXLDiagonalResize1cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/DiagonalResize1.png", str_tag);
}
function _windowsBlackXLDiagonalResize2cur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/DiagonalResize2.png");
}
function _windowsBlackXLDiagonalResize2cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/DiagonalResize2.png", str_tag);
}
function _windowsBlackXLHelpSelectcur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/HelpSelect.png");
}
function _windowsBlackXLHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/HelpSelect.png", str_tag);
}
function _windowsBlackXLHorizontalResizecur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/HorizontalResize.png");
}
function _windowsBlackXLHorizontalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/HorizontalResize.png", str_tag);
}
function _windowsBlackXLMovecur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/Move.png");
}
function _windowsBlackXLMovecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/Move.png", str_tag);
}
function _windowsBlackXLNormalSelectcur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/NormalSelect.png");
}
function _windowsBlackXLNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/NormalSelect.png", str_tag);
}
function _windowsBlackXLPrecisionSelectcur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/PrecisionSelect.png");
}
function _windowsBlackXLPrecisionSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/PrecisionSelect.png", str_tag);
}
function _windowsBlackXLTextSelectcur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/TextSelect.png");
}
function _windowsBlackXLTextSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/TextSelect.png", str_tag);
}
function _windowsBlackXLUnavailablecur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/Unavailable.png");
}
function _windowsBlackXLUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/Unavailable.png", str_tag);
}
function _windowsBlackXLVerticalResizecur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/VerticalResize.png");
}
function _windowsBlackXLVerticalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/VerticalResize.png", str_tag);
}
function _windowsBlackXLWorkingInBackgroundcur(){
	staticCursor("XPcursors/WindowsBlackExtraLarge/WorkingInBackground.png");
}
function _windowsBlackXLWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackExtraLarge/WorkingInBackground.png", str_tag);
}
//Classic Windows Black Large
function _windowsBlackLAlternateSelectcur(){
	staticCursor("XPcursors/WindowsBlackLarge/AlternateSelect.png");
}
function _windowsBlackLAlternateSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/AlternateSelect.png", str_tag);
}
function _windowsBlackLBusycur(){
	staticCursor("XPcursors/WindowsBlackLarge/Busy.png");
}
function _windowsBlackLBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/Busy.png", str_tag);
}
function _windowsBlackLDiagonalResize1cur(){
	staticCursor("XPcursors/WindowsBlackLarge/DiagonalResize1.png");
}
function _windowsBlackLDiagonalResize1cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/DiagonalResize1.png", str_tag);
}
function _windowsBlackLDiagonalResize2cur(){
	staticCursor("XPcursors/WindowsBlackLarge/DiagonalResize2.png");
}
function _windowsBlackLDiagonalResize2cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/DiagonalResize2.png", str_tag);
}
function _windowsBlackLHelpSelectcur(){
	staticCursor("XPcursors/WindowsBlackLarge/HelpSelect.png");
}
function _windowsBlackLHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/HelpSelect.png", str_tag);
}
function _windowsBlackLMovecur(){
	staticCursor("XPcursors/WindowsBlackLarge/Move.png");
}
function _windowsBlackLMovecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/Move.png", str_tag);
}
function _windowsBlackLNormalSelectcur(){
	staticCursor("XPcursors/WindowsBlackLarge/NormalSelect.png");
}
function _windowsBlackLNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/NormalSelect.png", str_tag);
}
function _windowsBlackLPrecisionSelectcur(){
	staticCursor("XPcursors/WindowsBlackLarge/PrecisionSelect.png");
}
function _windowsBlackLPrecisionSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/PrecisionSelect.png", str_tag);
}
function _windowsBlackLTextSelectcur(){
	staticCursor("XPcursors/WindowsBlackLarge/TextSelect.png");
}
function _windowsBlackLTextSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/TextSelect.png", str_tag);
}
function _windowsBlackLUnavailablecur(){
	staticCursor("XPcursors/WindowsBlackLarge/Unavailable.png");
}
function _windowsBlackLUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/Unavailable.png", str_tag);
}
function _windowsBlackLVerticalResizecur(){
	staticCursor("XPcursors/WindowsBlackLarge/VerticalResize.png");
}
function _windowsBlackLVerticalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/VerticalResize.png", str_tag);
}
function _windowsBlackLWorkingInBackgroundcur(){
	staticCursor("XPcursors/WindowsBlackLarge/WorkingInBackground.png");
}
function _windowsBlackLWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsBlackLarge/WorkingInBackground.png", str_tag);
}
//Classic Windows Default
function _windowsDefaultBusycur(){
	staticCursor("XPcursors/WindowsDefault/Busy.png");
}
function _windowsDefaultBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsDefault/Busy.png", str_tag);
}
function _windowsDefaultHelpSelectcur(){
	staticCursor("XPcursors/WindowsDefault/HelpSelect.png");
}
function _windowsDefaultHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsDefault/HelpSelect.png", str_tag);
}
function _windowsDefaultNormalSelectcur(){
	staticCursor("XPcursors/WindowsDefault/NormalSelect.png");
}
function _windowsDefaultNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsDefault/NormalSelect.png", str_tag);
}
function _windowsDefaultWorkingInBackgroundcur(){
	staticCursor("XPcursors/WindowsDefault/WorkingInBackground.png");
}
function _windowsDefaultWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsDefault/WorkingInBackground.png", str_tag);
}
//Windows Standard Extra Large
function _windowsStandardXLAlternateSelectcur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/AlternateSelect.png");
}
function _windowsStandardXLAlternateSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/AlternateSelect.png", str_tag);
}
function _windowsStandardXLBusycur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/Busy.png");
}
function _windowsStandardXLBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/Busy.png", str_tag);
}
function _windowsStandardXLDiagonalResize1cur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/DiagonalResize1.png");
}
function _windowsStandardXLDiagonalResize1cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/DiagonalResize1.png", str_tag);
}
function _windowsStandardXLDiagonalResize2cur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/DiagonalResize2.png");
}
function _windowsStandardXLDiagonalResize2cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/DiagonalResize2.png", str_tag);
}
function _windowsStandardXLHelpSelectcur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/HelpSelect.png");
}
function _windowsStandardXLHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/HelpSelect.png", str_tag);
}
function _windowsStandardXLHorizontalResizecur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/HorizontalResize.png");
}
function _windowsStandardXLHorizontalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/HorizontalResize.png", str_tag);
}
function _windowsStandardXLMovecur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/Move.png");
}
function _windowsStandardXLMovecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/Move.png", str_tag);
}
function _windowsStandardXLNormalSelectcur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/NormalSelect.png");
}
function _windowsStandardXLNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/NormalSelect.png", str_tag);
}
function _windowsStandardXLPrecisionSelectcur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/PrecisionSelect.png");
}
function _windowsStandardXLPrecisionSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/PrecisionSelect.png", str_tag);
}
function _windowsStandardXLTextSelectcur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/TextSelect.png");
}
function _windowsStandardXLTextSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/TextSelect.png", str_tag);
}
function _windowsStandardXLUnavailablecur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/Unavailable.png");
}
function _windowsStandardXLUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/Unavailable.png", str_tag);
}
function _windowsStandardXLVerticalResizecur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/VerticalResize.png");
}
function _windowsStandardXLVerticalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/VerticalResize.png", str_tag);
}
function _windowsStandardXLWorkingInBackgroundcur(){
	staticCursor("XPcursors/WindowsStandardExtraLarge/WorkingInBackground.png");
}
function _windowsStandardXLWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardExtraLarge/WorkingInBackground.png", str_tag);
}
//Windows Standard Large
function _windowsStandardLAlternateSelectcur(){
	staticCursor("XPcursors/WindowsStandardLarge/AlternateSelect.png");
}
function _windowsStandardLAlternateSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/AlternateSelect.png", str_tag);
}
function _windowsStandardLBusycur(){
	staticCursor("XPcursors/WindowsStandardLarge/Busy.png");
}
function _windowsStandardLBusycur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/Busy.png", str_tag);
}
function _windowsStandardLDiagonalResize1cur(){
	staticCursor("XPcursors/WindowsStandardLarge/DiagonalResize1.png");
}
function _windowsStandardLDiagonalResize1cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/DiagonalResize1.png", str_tag);
}
function _windowsStandardLDiagonalResize2cur(){
	staticCursor("XPcursors/WindowsStandardLarge/DiagonalResize2.png");
}
function _windowsStandardLDiagonalResize2cur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/DiagonalResize2.png", str_tag);
}
function _windowsStandardLHelpSelectcur(){
	staticCursor("XPcursors/WindowsStandardLarge/HelpSelect.png");
}
function _windowsStandardLHelpSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/HelpSelect.png", str_tag);
}
function _windowsStandardLMovecur(){
	staticCursor("XPcursors/WindowsStandardLarge/Move.png");
}
function _windowsStandardLMovecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/Move.png", str_tag);
}
function _windowsStandardLNormalSelectcur(){
	staticCursor("XPcursors/WindowsStandardLarge/NormalSelect.png");
}
function _windowsStandardLNormalSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/NormalSelect.png", str_tag);
}
function _windowsStandardLPrecisionSelectcur(){
	staticCursor("XPcursors/WindowsStandardLarge/PrecisionSelect.png");
}
function _windowsStandardLPrecisionSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/PrecisionSelect.png", str_tag);
}
function _windowsStandardLTextSelectcur(){
	staticCursor("XPcursors/WindowsStandardLarge/TextSelect.png");
}
function _windowsStandardLTextSelectcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/TextSelect.png", str_tag);
}
function _windowsStandardLUnavailablecur(){
	staticCursor("XPcursors/WindowsStandardLarge/Unavailable.png");
}
function _windowsStandardLUnavailablecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/Unavailable.png", str_tag);
}
function _windowsStandardLVerticalResizecur(){
	staticCursor("XPcursors/WindowsStandardLarge/VerticalResize.png");
}
function _windowsStandardLVerticalResizecur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/VerticalResize.png", str_tag);
}
function _windowsStandardLWorkingInBackgroundcur(){
	staticCursor("XPcursors/WindowsStandardLarge/WorkingInBackground.png");
}
function _windowsStandardLWorkingInBackgroundcur_tag(str_tag){
	staticCursorForElement("XPcursors/WindowsStandardLarge/WorkingInBackground.png", str_tag);
}

//---------------ON PAGE LOAD, CUSTOMIZE THIS...---------------//

//customize this with your desired functions
//this starts the cursor when the page loads...
//if you want to have the cursor start another way, then comment this out
window.addEventListener("load",function(){
	
	//make a theme here!
	//see https://www.w3schools.com/tags/ for a list of all elements
	
	//default cursor
	dinosau2ani();
	
	//other elements
	dinosaurani_tag("p");
	bananaani_tag("button");
	handnoani_tag("input");
	dinosaurani_tag("a");
	
	handani_tag("h1");
	horseani_tag("h2");
	pianoani_tag("h3");
	hourglasani_tag("h4");
	handwaitani_tag("h5");
	wagtailani_tag("h6");
	
	//example of a custom animation set to a list tag...
	animateCursorForElement(['Custom/sparkle/CursorStarSparkle-frame1.png', 'Custom/sparkle/CursorStarSparkle-frame2.png', 'Custom/sparkle/CursorStarSparkle-frame3.png', 'Custom/sparkle/CursorStarSparkle-frame4.png', 'Custom/sparkle/CursorStarSparkle-frame5.png', 'Custom/sparkle/CursorStarSparkle-frame6.png', 'Custom/sparkle/CursorStarSparkle-frame7.png', 'Custom/sparkle/CursorStarSparkle-frame8.png', 'Custom/sparkle/CursorStarSparkle-frame9.png', 'Custom/sparkle/CursorStarSparkle-frame10.png', 'Custom/sparkle/CursorStarSparkle-frame11.png', 'Custom/sparkle/CursorStarSparkle-frame12.png', 'Custom/sparkle/CursorStarSparkle-frame13.png', 'Custom/sparkle/CursorStarSparkle-frame14.png', 'Custom/sparkle/CursorStarSparkle-frame15.png', 'Custom/sparkle/CursorStarSparkle-frame16.png', 'Custom/sparkle/CursorStarSparkle-frame17.png', 'Custom/sparkle/CursorStarSparkle-frame18.png', 'Custom/sparkle/CursorStarSparkle-frame19.png', 'Custom/sparkle/CursorStarSparkle-frame20.png'], "li");
	//example of a custom animation set to the bold tag...
	animateCursorForElement(['Custom/cupcakecursor/cupcakecursor_frame1.png', 'Custom/cupcakecursor/cupcakecursor_frame2.png', 'Custom/cupcakecursor/cupcakecursor_frame3.png'], "strong");
});
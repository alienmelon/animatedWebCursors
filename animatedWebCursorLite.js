/*

  ___        _                 _           _   _    _      _       _____                               
 / _ \      (_)               | |         | | | |  | |    | |     /  __ \                              
/ /_\ \_ __  _ _ __ ___   __ _| |_ ___  __| | | |  | | ___| |__   | /  \/_   _ _ __ ___  ___  _ __ ___ 
|  _  | '_ \| | '_ ` _ \ / _` | __/ _ \/ _` | | |/\| |/ _ \ '_ \  | |   | | | | '__/ __|/ _ \| '__/ __|
| | | | | | | | | | | | | (_| | ||  __/ (_| | \  /\  /  __/ |_) | | \__/\ |_| | |  \__ \ (_) | |  \__ \
\_| |_/_| |_|_|_| |_| |_|\__,_|\__\___|\__,_|  \/  \/ \___|_.__/   \____/\__,_|_|  |___/\___/|_|  |___/ (lite)
                                                                                                       
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
}
//set the cursor graphic to a specific element
function setCursorToTag(str_image, str_tagName){
	//apply to all elements
	var _element = document.getElementsByTagName(str_tagName);	
	for (var i=0; i<_element.length; ++i){
		_element[i].style.cursor = 'url(' + str_pathToImageFolder + str_image + '), auto';
	}
}

//---------------ON PAGE LOAD, CUSTOMIZE THIS...---------------//

//customize this with your desired functions
//this starts the cursor when the page loads...
//if you want to have the cursor start another way, then comment this out
window.addEventListener("load",function(){
	
	//make a theme here!
	//see https://www.w3schools.com/tags/ for a list of all elements
	
	//note that everything must be passed as an array, so the brakets ['...'] are important.
	
	animateCursor(['Custom/kitty/kitty1-frame1.png', 'Custom/kitty/kitty1-frame2.png']);
	
	//example of a custom animation set to a list tag...
	animateCursorForElement(['Custom/sparkle/CursorStarSparkle-frame1.png', 'Custom/sparkle/CursorStarSparkle-frame2.png', 'Custom/sparkle/CursorStarSparkle-frame3.png', 'Custom/sparkle/CursorStarSparkle-frame4.png', 'Custom/sparkle/CursorStarSparkle-frame5.png', 'Custom/sparkle/CursorStarSparkle-frame6.png', 'Custom/sparkle/CursorStarSparkle-frame7.png', 'Custom/sparkle/CursorStarSparkle-frame8.png', 'Custom/sparkle/CursorStarSparkle-frame9.png', 'Custom/sparkle/CursorStarSparkle-frame10.png', 'Custom/sparkle/CursorStarSparkle-frame11.png', 'Custom/sparkle/CursorStarSparkle-frame12.png', 'Custom/sparkle/CursorStarSparkle-frame13.png', 'Custom/sparkle/CursorStarSparkle-frame14.png', 'Custom/sparkle/CursorStarSparkle-frame15.png', 'Custom/sparkle/CursorStarSparkle-frame16.png', 'Custom/sparkle/CursorStarSparkle-frame17.png', 'Custom/sparkle/CursorStarSparkle-frame18.png', 'Custom/sparkle/CursorStarSparkle-frame19.png', 'Custom/sparkle/CursorStarSparkle-frame20.png'], "li");
	//example of a custom animation set to the bold tag...
	animateCursorForElement(['Custom/cupcakecursor/cupcakecursor_frame1.png', 'Custom/cupcakecursor/cupcakecursor_frame2.png', 'Custom/cupcakecursor/cupcakecursor_frame3.png'], "strong");
	//h1 tag...
	animateCursorForElement(['Custom/snoopy-frame1.png', 'Custom/snoopy-frame2.png'], "h1");
	//a tag...
	animateCursorForElement(['Custom/snoopy-frame1.png', 'Custom/snoopy-frame2.png'], "a");
});
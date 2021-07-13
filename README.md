# animatedWebCursors.js

This is a simple javascript file that gives you control over the browser cursor, alowing for fully animated cursors using [CSS's cursor functionality](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor). Instead of hiding the mouse, and moving a DOM element around, this manipulates the actual cursor itself.

### [Click here for a demo.](http://tetrageddon.com/cursors)

![Demo.gif](http://tetrageddon.com/cursors/demo.gif)

This javascript file includes support for both animated and non-animated cursors. You can easily mix things up and use both!
You can set an animated (or static) cursor for the page's body, and for individual elements ([tags, divs, paragraphs, buttons, links...](https://www.w3schools.com/tags/)). This way you can fully theme the cursor for your pages!

You can easily add your own animations too! Animations can be as long as you want.<br>
Simply make a call to...
```javascript
//for the body
animateCursor(['folder/path-to-image1.jpg', 'folder/path-to-image2.png...']);
//for individual elements, like the list tag
animateCursorForElement(['folder/path-to-image1.jpg', 'folder/path-to-image2.png...'], "li");
```
All cursors must be nested in the **"cursorImages/"** folder. You can nest them inside other folders within that, but make sure to pass it the nested folder name too.
All paths are relative within the **"cursorImages/"** folder.

Since this uses the CSS's cursor: property the same rules apply.
* Cursors should *NOT be larger than 32 x 32 pixels* in size, to stay supported across all browsers.
* You can use PNG, GIF, JPG, BMP, CUR.

To start, include the **animatedWebCursors.js** file in your page. Copy and paste the following between your page's head tag...
```html
<script src="animatedWebCursors.js"></script>
```
and simply cusomize the **"window.load"** event at the end of the **animatedWebCursors.js** file. 

# Bring back those classic Windows XP animated cursors!

This file includes ready made access to every classic cursor from the Windows XP themes! Yes, they're back and you can have them on your website!
This includes those cute dinosaurs, the horse, the mouse with the wagging tail...

You can call any of the default functions for setting an animated cursor such as... 

```javasscript
bananaani();//banana
dinosau2ani();//the cute dinosaur
dinosaurani();//the dinosaur...
```
Like mentioned, you can make a theme with cursors by applying a specific animated cursor (or static cursor) to individual elements (tags), such as button, a, input...
Each animated cursor has a tag function that you can call to apply it to an element for which you want to change the cursor.
Example code for the above...
```javascript
window.addEventListener("load",function(){

		//default cursor (for the page)
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
	
	});
 ```

# You can even have your own custom cursor animations!

Simply pass an **array** with paths to your desired image sequence, that's nested in the **"cursorImages"** folder.
* Cursors should not be larger than 32 x 32 pixels, to be supported across all browsers.
* To adjust the animation speed look for the num_animationSpeed variable in the animatedWebCursor.js javascript file.
Higher values = slower animation. Lower values = faster.

```javascript
animateCursor(['Custom/cupcakecursor/cupcakecursor_frame1.png', 'Custom/cupcakecursor/cupcakecursor_frame2.png', 'Custom/cupcakecursor/cupcakecursor_frame3.png']);

//example of this custom animation set to the bold tag...
animateCursorForElement(['Custom/cupcakecursor/cupcakecursor_frame1.png', 'Custom/cupcakecursor/cupcakecursor_frame2.png', 'Custom/cupcakecursor/cupcakecursor_frame3.png'], "strong");
```


SimpleTooltip
=============
Add simple tooltips to your website (Requires jQuery).
### How to use ###
First of all add the jQuery and SimpleTooltip scripts
```html
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="path/to/simpletooltip.min.js"></script>
```
and then add the SimpleTooltip css!
```html
<link rel="stylesheet" type="text/css" href="path/to/simpletooltip.min.css">
```
Then add
```html
<div id="tooltip"></div>
```
to your HTML, for example right after the body tag.

Now let's say you want to create a tooltip for a link, that says: "This will open in a new window".
1. Add the class "tt" to your link, to declare that you want a tooltip there.
2. Add the attribute data-tooltip with the content that you want to be in your tooltip.

For example:
```html
<a class="tt" data-tooltip="This will open in a new window">Link</a>
```
simple!

#### Effects ####
There are effects to change how the tooltip appears and disappears.
Let's say you have your link now, but you think the tooltip appears too sudden.
We can change that with the attribute data-tt-effect!
An example of how to make the tooltip fade in and out:
```html
<a class="tt" data-tooltip="This will open in a new window" data-tt-effect="fade">Link</a>
```
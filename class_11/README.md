# jQuery Continued

## jQuery Animations
- jQuery wraps in some neat animations that help us achieve some interesting effects.
- jQuery animations work by altering the `style` attribute dynamically over a set period of time.
- These animations are great but less performant than CSS3 animations, which are hardware-accelerated.
- Here are a few common animations you will see:

Slide down (show the element):

```
$("my-selector").slideDown();
```

Slide up (hide the element):

```
$("my-selector").slideUp();
```

Slide toggle (back and forth):

```
$("my-selector").slideToggle();
```

Fade in:

```
$("my-selector").fadeIn();
```

Fade out:

```
$("my-selector").fadeOut();
```

Fade toggle (back and forth):

```
$("my-selector").fadeToggle();
```

- Each of these animation functions take three parameters: duration, easing, and callback function to be completed when the animation is complete.

## FAQ - Redux
- Explain the use of the `this` keyword by demonstrating how to improve and make our code more efficient with an example of a Frequently Asked Question section

## Arrays

## In-Class Lab / Homework
- You will be hacking on a newspaper article website and making it cool using jQuery.
- Download the exercise files: divided_times.
- The code in js/main.js is obfuscated, which means it is practically unreadable.
- Your job is to look through the way the site works and try to replicate the same functionality using jQuery.
- A couple of functions you may want to use for this, but are not necessarily required:
	- .toggleClass()
	- .hasClass()
	- .hide()
	- .show()
	- .slideUp()
	- .siblings()
	- .removeClass()
	- .addClass()

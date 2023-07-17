# CustomTabs
Simple tab control class with JavaScript for WordPress and others.

## Usage

This is a very simple library. Get your tab buttons and containers into two separate arrays and implement the tabs.

```html
<script src="path/src/tabcontrol.js"></script>
```
or Copy the code in src directly.

```javascript
const tab1 = new CustomTabs(["#btn1"], ["#cont1"], {
    activeBtnClass:"custom-tabcontrol-active",
    baseBtnClass:"custom-tabcontrol",
    setClassAtInit:false
});
```

<br>

## Other Functions

There are some other useful functions to control these tabs.

```javascript
tab1.NextSlide(); //show next slide
tab1.PreviousSlide(); //show previous slide
tab1.ShowSlide(2); //show a slide by index
```
ShowSlide function is taking 0 indexed argument.

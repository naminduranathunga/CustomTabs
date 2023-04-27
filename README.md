# CustomTabs
Simple tab control class with JavaScript for WordPress and other.

## Usage

This is very simple library. Get your tab buttons and containers into two seperate arrays and impliment the tabs.

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
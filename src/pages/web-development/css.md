---
layout: ../../layouts/WebDevelopmentTemplate.astro
title: "CSS - Digital Language"
description: "Basic information about Cascading Style Sheets."
author: "Kaleel Boston"
---

## Cascading Style Sheets - CSS  

Cascading Style Sheet aka CSS is a rule-based language. CSS is responsible for editing the look and feel of elements in an HTML document. It can be added to an HTML document via three ways:  

* Inline - as an global attribute of all elements (`style = "css"`).
* Internal - as content for the `style element` (`<style>css</style>`).
* External - as an external document that is linked to the HTML document through the `link element` (`<link href="css document"rel="stylesheet" type="text/css">`).  

<br>

### Components of CSS  

<br>

* [CSS Comments](#css-comments)
* [CSS Structure](#css-structure)
* [Properties](#properties)

<br>

### CSS Comments  

Comments in CSS are `* *`. Comments allow whatever code or text in between them to be hidden from the browser. For example, `*body {color: green;}*` hides the changing of text color to green from the browser.  

Using comments is a good way to leave notes or explain what some code does. Also, it is a good way to hide code for various reasons such as it is faulty, not yet ready to implement or you may want to use again later.  

<br>

### CSS Structure  

CSS consists of multiple components. They are: 

* Selector - the element, or its class(es) or id the rules are applied to too.
* Property - the what aspect of the element is being edited.
* Value - how the property is being edited.  

For external css it is formatted as:  

```css
body {
    color: green;
}
```  

For internal it is formatted as:  

```html
<style>
    body {
        color: green;
    }
</style>
```  

For inline it is formatted as:

```html
<body style="color: green;">
    <p>Hello World!</p>
</body>
```  
<br>

### Properties  

Properties are the aspects of elements that the values edits. To make things easier below they are categorized to make such easier: 

* [Animation](#animation)
* [Background](#background)
* [Border](#border)
* [Misc](#misc)
* [Position](#positioning)
* [Sizing](#sizing)
* [Spacing](#spacing)
* [Text Formatting](#text-formatting)

#### Animation  

|Property|Value(s)|
|:------:|--------|
|@keyframes <br> Defines the animation.|@keyframes animation-name { <br> &nbsp;&nbsp;&nbsp; 0-100% {css}  &verbar; from {css} <br> &nbsp;&nbsp;&nbsp; to {css} <br>}|
|animation <br> Shorthand for  `animation` properties.|animation-name &nbsp; animation-duration &nbsp; animation-timing-function &nbsp; animation-delay &nbsp; animation-iteration-count &nbsp; animation-direction &nbsp; animation-fill-mode &nbsp; animation-play-state &verbar; initial &verbar; inherit|
|animation-delay <br> How long to delay the start of the animation.|time (s &verbar; ms) &verbar; initial &verbar; inherit|
|animation-direction <br> Determines whether the animation should be played forwards, backwards or alternate.|normal &verbar; reverse &verbar; alternate &verbar; alternate-reverse &verbar; initial &verbar; inherit|
|animation-duration <br> How long an animation should last.|time (s &verbar; ms) &verbar; initial &verbar; inherit|
|animation-fill-mode <br> What style the element should have outside of the animation cycle.|none &verbar; forwards &verbar; backwards &verbar; both &verbar; initial &verbar; inherit|
|animation-iteration-count <br> How many times an animation should be repeated.|number &verbar; infinite &verbar; initial &verbar; inherit|
|animation-name <br> Name for the animation.|text &verbar; none &verbar; initial &verbar; inherit|
|animation-play-state <br> Whether the animation is playing or paused.|paused &verbar; running &verbar; initial &verbar; inherit|
|animation-timing-function <br> Determines the speed curve of the animation.|linear &verbar; ease &verbar; ease-in &verbar; ease-out &verbar; ease-in-out &verbar; step-start &verbar; step-end &verbar; step(int, start &verbar; end) &verbar; cubic-bezier(n, n, n, n) &verbar; initial &verbar; inherit|
|transition <br> Shorthand for `transition` properties.|transition-property &verbar; transition-duration &verbar; transition-timing-function &verbar; transition-delay &verbar; initial &verbar; inherit|
|transition-delay <br> How long to delay the start of the transition.|time (s &verbar; ms) &verbar; initial &verbar; inherit|
|transition-duration <br> How long a transition should last.|time (s &verbar; ms) &verbar; initial &verbar; inherit|
|transition-property <br> Determines the property the transition is affecting.|none &verbar; all &verbar; property &verbar; initial &verbar; inherit|
|transition-timing-function <br> Determines the speed curve of the transition.|linear &verbar; ease &verbar; ease-in &verbar; ease-out &verbar; ease-in-out &verbar; step-start &verbar; step-end &verbar; step(int, start &verbar; end) &verbar; cubic-bezier(n, n, n, n) &verbar; initial &verbar; inherit|

<br>

#### Background  

|Property|Value(s)|
|:------:|--------|
|background <br> Shorthand for `background` properties.|background-color &nbsp; background-image &nbsp; background-position/background-size &nbsp; background-repeat &nbsp; background-origin &nbsp; background-clip &nbsp; background-attachment &verbar; initial &verbar; inherit|
|background-attachment <br> Background image's behaviour.|scroll &verbar; fixed &verbar; local &verbar; initial &verbar; inherit|
|background-clip <br> How much of the element to cover.|border-box &verbar; padding-box &verbar; content-box &verbar; initial &verbar; inherit|
|background-color <br> Color of background.|name &verbar; rgb &verbar; rgba &verbar; hex &verbar; initial &verbar; inherit|
|background-image <br> Image used for background|url &verbar; none &verbar; initial &verbar; inherit|
|background-origin <br> Where the background starts from (upper left corner).|padding-box &verbar; border-box &verbar; content-box &verbar; initial &verbar; inherit|
|background-position <br> Starting position of background.|left top &verbar; left center &verbar; left bottom &verbar; right top &verbar; right center &verbar; right bottom &verbar; center top &verbar; center center &verbar; center bottom &verbar; x% y% &verbar; xpos ypos &verbar; initial &verbar; inherit|
|background-repeat <br> Whether a background should be repeated and how.|repeat &verbar; repeat-x &verbar; repeat-y &verbar; no-repeat &verbar; space &verbar; round &verbar; initial &verbar; inherit|
|background-size <br> Size of background image.|auto &verbar; length &verbar; percentage &verbar; cover &verbar; contain &verbar; initial &verbar; inherit|

<br>

#### Border  

|Property|Value(s)|
|:------:|--------|
|border <br> Shorthand for `border-color`, `border-style` and `border-width`.|border-width &nbsp; border-style &nbsp; border-color &verbar; initial &verbar; inherit|
|border-bottom <br> Shorthand for `border-bottom-color`, `border-bottom-style` and `border-bottom-width`.|border-bottom-width &nbsp; border-bottom-style &nbsp; border-bottom-color &verbar; initial &verbar; inherit|
|border-bottom-color <br> Color of the bottom part of an element's border.|name &verbar; rgb &verbar; rgba &verbar; hex &verbar; initial &verbar; inherit|
|border-bottom-left-radius <br> Radius of the bottom left corner of an element's border.|length (em &verbar; ex &verbar; ch &verbar; rem &verbar; vw &verbar; vh &verbar; vmin &verbar; vmax &verbar; px &verbar; cm &verbar; mm &verbar; in &verbar; pt &verbar; pc &verbar; medium &verbar; xx-small &verbar; x-small &verbar; small &verbar; large &verbar; x-large &verbar; xx-large &verbar; smaller &verbar; larger) &verbar; percentage &verbar; initial &verbar; inherit|
|border-bottom-right-radius <br> Radius of the bottom right corner of an element's border.|length (em &verbar; ex &verbar; ch &verbar; rem &verbar; vw &verbar; vh &verbar; vmin &verbar; vmax &verbar; px &verbar; cm &verbar; mm &verbar; in &verbar; pt &verbar; pc &verbar; medium &verbar; xx-small &verbar; x-small &verbar; small &verbar; large &verbar; x-large &verbar; xx-large &verbar; smaller &verbar; larger) &verbar; percentage &verbar; initial &verbar; inherit|
|border-bottom-style <br> Style of the bottom part of an element's border.|none &verbar; hidden &verbar; dotted &verbar; dashed &verbar; solid &verbar; double &verbar; grove &verbar; ridge &verbar; inset &verbar; outset &verbar; initial &verbar; inherit|
|border-bottom-width <br> Width of the bottom part of an element's border.|medium &verbar; thin &verbar; thick &verbar; length &verbar; initial &verbar; inherit|
|border-color <br> Color of an element's border.|border-top-color &nbsp; border-right-color &nbsp; border-bottom-color &nbsp; border-left-color &verbar; initial &verbar; inherit|
|border-left <br> Shorthand for `border-left-color`, `border-left-style` and `border-left-width`.|border-left-width &nbsp; border-left-style &nbsp; border-left-color &verbar; initial &verbar; inherit|
|border-left-color <br> Color of an element's left border.|name &verbar; rgb &verbar; rgba &verbar; hex &verbar; initial &verbar; inherit|
|border-left-style <br> Style of the left part of an element's border.|none &verbar; hidden &verbar; dotted &verbar; dashed &verbar; solid &verbar; double &verbar; grove &verbar; ridge &verbar; inset &verbar; outset &verbar; initial &verbar; inherit|
|border-left-width <br> Width of the left part of an element's border.|medium &verbar; thin &verbar; thick &verbar; length &verbar; initial &verbar; inherit|
|border-radius <br> The radius of an element's border.|1-4 length &verbar; 1-4 % &verbar; initial &verbar; inherit|
|border-right <br> Shorthand for `border-right-color`, `border-right-style` and `border-right-width`.|border-right-width &nbsp; border-right-style &nbsp; border-right-color &verbar; initial &verbar; inherit|
|border-right-color <br> Color of an element's right border.|name &verbar; rgb &verbar; rgba &verbar; hex &verbar; initial &verbar; inherit|
|border-right-style <br> Style of the right part of an element's border.|none &verbar; hidden &verbar; dotted &verbar; dashed &verbar; solid &verbar; double &verbar; grove &verbar; ridge &verbar; inset &verbar; outset &verbar; initial &verbar; inherit|
|border-right-width <br> Width of the right part of an element's border.|medium &verbar; thin &verbar; thick &verbar; length &verbar; initial &verbar; inherit|
|border-style <br> Style of an element's border.|border-top-style &nbsp; border-right-style &nbsp; border-bottom-style &nbsp; border-left-style &verbar; initial &verbar; inherit|
|border-top <br> Shorthand for `border-top-color`, `border-top-style` and `border-top-width`.|border-top-width &nbsp; border-top-style &nbsp; border-top-color &verbar; initial &verbar; inherit|
|border-top-color <br> Color of an element's top border.|name &verbar; rgb &verbar; rgba &verbar; hex &verbar; initial &verbar; inherit|
|border-top-left-radius <br> Radius of the top left corner of an element's border.|length (em &verbar; ex &verbar; ch &verbar; rem &verbar; vw &verbar; vh &verbar; vmin &verbar; vmax &verbar; px &verbar; cm &verbar; mm &verbar; in &verbar; pt &verbar; pc &verbar; medium &verbar; xx-small &verbar; x-small &verbar; small &verbar; large &verbar; x-large &verbar; xx-large &verbar; smaller &verbar; larger) &verbar; percentage &verbar; initial &verbar; inherit|
|border-top-right-radius <br> Radius of the top right corner of an element's border.|length (em &verbar; ex &verbar; ch &verbar; rem &verbar; vw &verbar; vh &verbar; vmin &verbar; vmax &verbar; px &verbar; cm &verbar; mm &verbar; in &verbar; pt &verbar; pc &verbar; medium &verbar; xx-small &verbar; x-small &verbar; small &verbar; large &verbar; x-large &verbar; xx-large &verbar; smaller &verbar; larger) &verbar; percentage &verbar; initial &verbar; inherit|
|border-top-style <br> Style of the top part of an element's border.|none &verbar; hidden &verbar; dotted &verbar; dashed &verbar; solid &verbar; double &verbar; grove &verbar; ridge &verbar; inset &verbar; outset &verbar; initial &verbar; inherit|
|border-top-width <br> Width of the top part of an element's border.|medium &verbar; thin &verbar; thick &verbar; length &verbar; initial &verbar; inherit|
|border-width <br> Width of an element's border.|border-top-width &nbsp; border-right-width &nbsp; border-bottom-width &nbsp; border-left-width &verbar; initial &verbar; inherit|

<br>

#### Misc  

|Property|Value(s)|
|:------:|--------|
|cursor <br> Determines how the mouse pointer looks on top of an element.|alias &verbar; all-scroll &verbar; auto &verbar; cell &verbar; col-resize &verbar; context-menu &verbar; copy &verbar; crosshair &verbar; default &verbar; e-resize &verbar; ew-resize &verbar; grab &verbar; grabbing &verbar; help &verbar; move &verbar; n-resize &verbar; ne-resize &verbar; nesw-resize &verbar; ns-resize &verbar; nw-resize &verbar; nwse-resize &verbar; no-drop &verbar; none &verbar; not-allowed &verbar; pointer &verbar; progress &verbar; row-resize &verbar; s-resize &verbar; se-resize &verbar; sw-resize &verbar; text &verbar; url &verbar; vertical-text &verbar; w-resize &verbar; wait &verbar; zoom-in &verbar; zoom-out &verbar; initial &verbar; inherit|

<br>

#### Positioning  

|Property|Value(s)|
|:------:|--------|
|align-content <br> Determines vertical alignment of flex lines (different rows in a flex container) of a flex container.|stretch &verbar; center &verbar; flex-start &verbar; flex-end &verbar; space-between &verbar; space-around &verbar; space-evenly &verbar; initial &verbar; inherit|
|align-items <br> Determines vertical alignment of elements in a flex or grid container.|normal &verbar; stretch &verbar; center &verbar; flex-start &verbar; flex-end &verbar; start &verbar; end &verbar; baseline &verbar; initial &verbar; inherit|
|align-self <br> Determines vertical alignment of the individual element in a flex or grid container.|normal &verbar; stretch &verbar; center &verbar; flex-start &verbar; flex-end &verbar; baseline &verbar; initial &verbar; inherit|
|clear <br> Determines what happens to the element next to a floated element.|none &verbar; left &verbar; right &verbar; both &verbar; initial &verbar; inherit|
|display <br> How the element is displayed.|inline &verbar; block &verbar; content &verbar; flex &verbar; grid &verbar; inline-block &verbar; inline-flex &verbar; inline-grid &verbar; list-item &verbar; run-in &verbar; table &verbar; table-caption &verbar; table-column-group &verbar; table-header-group &verbar; table-footer-group &verbar; table-row-group &verbar; table-cell &verbar; table-column &verbar; table-row &verbar; none &verbar; initial &verbar; inherit|
|flex-direction <br> Direction the flex elements flow in.|row &verbar; row-reverse &verbar; column &verbar; column-reverse &verbar; initial &verbar; inherit|
|flex-flow <br> Shorthand for `flex-direction` and `flex-wrap` properties.|flex-direction &nbsp; flew-wrap &verbar; initial &verbar; inherit|number &verbar; initial &verbar; inherit|
|flex-wrap <br> Whether a flex element/content should wrap or not.|nowrap &verbar; wrap &verbar; wrap-reverse &verbar; initial &verbar; inherit|
|float <br> Whether to float an element left or right.|none &verbar; left &verbar; right &verbar; initial &verbar; inherit.|
|position <br> Type of positioning method used on element.|static &verbar; absolute &verbar; fixed &verbar; relative &verbar; sticky &verbar; initial &verbar; inherit|
|justify-content <br> Determines horizontal alignment of elements in a flex container.|flex-start &verbar; flex-end &verbar; center &verbar; space-between &verbar; space-around &verbar; space-evenly &verbar; initial &verbar; inherit|
|justify-items <br> Determines horizontal alignment of elements in a grid container.|legacy &verbar; normal &verbar; stretch &verbar; start &verbar; left &verbar; center &verbar; end &verbar; right &verbar; overflow-alignment(safe &verbar; unsafe) &verbar; baseline &verbar; initial &verbar; inherit|
|justify-self <br> Determines horizontal alignment of individual elements in a grid container.|auto &verbar; normal &verbar; stretch &verbar; start &verbar; left &verbar; center &verbar; end &verbar; right &verbar; overflow-alignment(safe &verbar; unsafe) &verbar; baseline &verbar; initial &verbar; inherit|
|overflow <br> Whether to clip or add scrollbar to element with content that is too big for it.|visible &verbar; hidden &verbar; clip &verbar; scroll &verbar; auto &verbar; initial &verbar; inherit|
|text-align <br> Horizontal alignment of text.|left &verbar; right &verbar; center &verbar; justify &verbar; initial &verbar; inherit|
|z-index <br> Stack order of element.|auto &verbar; number &verbar; initial &verbar; inherit|

<br>

#### Sizing  

|Property|Value(s)|
|:------:|--------|
|flex <br> Shorthand for `flex-basis`, `flex-grow` and `flex-shrink` properties.|flex-grow &nbsp; flex-shrink &nbsp; flex-basis &verbar; auto &verbar; initial &verbar; inherit|
|flex-basis <br> Initial length of a flex element/content.|number &verbar; auto &verbar; initial &verbar; inherit|
|flex-grow <br> How much a flex element/content will grow in relation to other flex elements in the same container.|number &verbar; initial &verbar; inherit|
|flex-shrink <br> How much a flex element/content will shrink in relation to other flex elements in the same container.|number &verbar; initial &verbar; inherit|
|height <br> Height of element.|auto &verbar; length &verbar; percentage &verbar; initial &verbar; inherit|
|width <br> Width of element.|auto &verbar; length &verbar; percentage &verbar; initial &verbar; inherit|

<br>

#### Spacing  

|Property|Value(s)|
|:------:|--------|
|column-gap <br> The space between columns for grid, flex and multi-column layouts.|length &verbar; normal &verbar; initial &verbar; inherit|
|gap <br> Shorthand for `column-gap` and `row-gap` properties.|row-gap &nbsp; column-gap &verbar; initial &verbar; inherit|
|letter-spacing <br> Space between characters within an element.|normal &verbar; length &verbar; initial &verbar; inherit|
|line-height <br> Height of a line of text within an element.|normal &verbar; number &verbar; length &verbar; initial &verbar; inherit|
|margin <br> Shorthand for `margin` properties|margin-top &nbsp; margin-right &nbsp; margin-bottom &nbsp; margin-left &verbar; auto &verbar; initial &verbar; inherit|
|margin-bottom <br> Bottom margin of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
|margin-left <br> Left margin of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
|margin-right <br> Right margin of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
margin-top <br> Top margin of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
|padding <br> Shorthand for `padding` properties|padding-top &nbsp; padding-right &nbsp; padding-bottom &nbsp; padding-left &verbar; auto &verbar; initial &verbar; inherit|
|padding-bottom <br> Bottom padding of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
|padding-left <br> Left padding of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
|padding-right <br> Right padding of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
padding-top <br> Top padding of an element.|length &verbar; percentage &verbar; auto &verbar; initial &verbar; inherit|
|row-gap <br> The space between columns for grid, flex and multi-column layouts.|length &verbar; normal &verbar; initial &verbar; inherit|
|word-spacing <br> Space between words within an element.|

<br>

#### Text Formatting

|Property|Value(s)|
|:------:|--------|
|color <br> Color of text.|name &verbar; rgb &verbar; rgba &verbar; hex &verbar; initial &verbar; inherit|  
|@font-face <br> Custom Font|font-family (name of the custom font) <br> url|
|font <br> Shorthand for `font` properties|font-style &nbsp; font-variant &nbsp; font-weight &nbsp; font-size/line-height &nbsp; font-family|
|font-family <br> List of different fonts to use for the webpage. if first one is unavailable go to the second.|font name, font name... (if font has more than one word, enclose it in "")|
|font-size <br> Size of the font.|percentage &verbar; length &verbar; initial &verbar; inherit|
|font-stretch <br> Some fonts come with a narrower (condensed) or wider (expanded) font face.|ultra-condensed &verbar; extra-condensed &verbar; condensed &verbar; semi-condensed &verbar; normal &verbar; semi-expanded &verbar; expanded &verbar; extra-expanded &verbar; ultra-expanded &verbar; initial &verbar; inherit|
|font-style <br> Whether the font should be in italics or not.|italic &verbar; normal &verbar; oblique &verbar; initial &verbar; inherit|
|font-variant <br> Whether the lowercase letters should be capitalized, however when they become uppercase it is slightly smaller than regular uppercase.|normal &verbar; small-caps &verbar; initial &verbar; inherit|
|font-weight|normal &verbar; bold &verbar; bolder &verbar; lighter &verbar; value from 100 - 900 &verbar; initial &verbar; inherit|
|text-decoration <br> Shorthand for text-decoration properties.|text-decoration-line &nbsp; text-decoration-color &nbsp; text-decoration-thickness &verbar; initial &verbar; inherit|
|text-decoration-color <br> Color of text decoration.|name &verbar; rbg &verbar; rbga &verbar; hex &verbar; initial &verbar; inherit|
|text-decoration-line <br> Type of text decoration.|none &verbar; underline &verbar; overline &verbar; line-through &verbar; initial &verbar; inherit|
|text-decoration-style <br> Style of text decoration.|solid &verbar; double &verbar; dotted &verbar; dashed &verbar; wavy &verbar; initial &verbar; inherit|
|text-decoration-thickness <br> Thickness of text decoration.|auto &verbar; from-font &verbar; percentage &verbar; length(em &verbar; ex &verbar; ch &verbar; rem &verbar; vw &verbar; vh &verbar; vmin &verbar; vmax &verbar; px &verbar; cm &verbar; mm &verbar; in &verbar; pt &verbar; pc &verbar; medium &verbar; xx-small &verbar; x-small &verbar; small &verbar; large &verbar; x-large &verbar; xx-large &verbar; smaller &verbar; larger) &verbar; initial &verbar; inherit|
|text-indent <br> Indents first line of text.|percentage &verbar; length &verbar; initial &verbar; inherit|
|text-orientation <br> Orientation of characters.|mixed &verbar; upright &verbar; use-glyph-orientation &verbar; initial &verbar; inherit|
|text-overflow <br> How to show text that escaped the boundaries of a container.|clipped &verbar; ellipsis &verbar; string &verbar; initial &verbar; inherit|
|text-shadow <br> Adds shadows to text.|h-shadow &nbsp; v-shadow &nbsp; blur-radius &nbsp; color &nbsp; none &verbar; initial &verbar; inherit|
|text-transform <br> Whether to capitalize character or words.|none &verbar; capitalize &verbar; uppercase &verbar; lowercase &verbar; initial &verbar; inherit|
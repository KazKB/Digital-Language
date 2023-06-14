---
layout: ../../layouts/WebDevelopmentTemplate.astro
title: "SASS - Digital Language"
description: "Basic information about Syntactically Awesome Style Sheets."
author: "Kaleel Boston"
---

## Syntactically Awesome Style Sheets - SASS

Syntactically Awesome Style Sheets aka SASS is an improved version of CSS, It also has a counterpart called Sassy Cascading Stylesheets aka SCSS. SASS includes default CSS as well as other features such as functions, mixins and nesting. This makes it even easier to apply styles to the different HTML elements. As well as increase the readability of the CSS. But like every other good thing, it has its own flaws. SASS must be converted to CSS for a browser to understood what styles to apply to the HTML document.

N.B - Regular CSS is not accepted by SASS as it has a different format than CSS. That is there is no semi-colons and curly brackets. Indentation has meaning as they replace the curly brackets. Whilst a new line replaces the semi-colons.

### Components of SASS

<br>

- [Comment](#comment "Comment")
- [Nesting](#nesting "Nesting")
- [Variables](#variables "Variables")
- [Mixins](#mixins "Mixins")
- [Media Queries](#media-queries "Media Queries")
- [Imports](#imports "Imports")
- [CSS Parsing](#css-parsing "CSS Parsing")

---

### Comment

Comments are the same as the one in ***[CSS](/web-development/css#comment "CSS Comment")***.

---

### Nesting

Simply put, selectors can be styled within each other. Making it more organized and simpler to style children, and pseudo-classes and pseudo-elements.

CSS Format:

```css
nav {
    background: black;
}
nav p {
    color: white;
}
nav p a {
    color: grey;
}

a { 
    color: purple;
}
a:hover {
    color: green;
}
```

SASS Format:

```scss
nav 
    background: black
    p 
        color: white
        a 
            color: grey
        

a 
    color: purple

    &:hover 
        color: green
```

N.B - The ampersand allows for one to nest the different pseudo-classes and pseudo-elements of an element. Also, nesting should not be overused as it increases the CSS converted file's size as well as the bandwidth as the browser will have to work more.

---

### Variables

The variables of SASS are easier to call and declare in SASS. And it is possible thanks to a dollar sign.

CSS Format:

```css
--grey: #101010

p 
    color: var(--grey)
```

SASS Format:

```scss
$grey: #101010

p
    color: $grey
```

Variables declared outside of curly brackets are global while inside are local. And a variable that is overridden (re-declared) is applied to SASS after it.

```scss
$grey: #101010 // Global and Applies to just P

p 
    $font-size: 12px // Local
    color: $grey
    font-size: $font-size

$grey: #c0c0c0 // Applies to A and the rest that would follow unless if it is overridden again

a 
    color: $grey
```

N.B - CSS variables can be accessed and manipulated in JavaScript while SASS variables cannot. The simple solution to that problem would be to use CSS variables instead as CSS is accepted in SASS.

---

### Mixins

A mixin is a collection of relevant SASS. The keyword `@mixin` is used to declare the mixin, while @include is used to call it.

```scss
@mixin uni-border 
    border: 0.01rem solid #101010
    border-radius: 0.5rem

nav 
    a 
        @include uni-border

.display 
    @include uni-border
```

The mixins can even have parameters just like a regular function. With the @include having the arguments.

```scss
@mixin uni-border($border-width, $border-radius)
    border: $border-width solid #101010
    border-radius: $border-radius

nav
    a
        @include uni-border(0.01rem, 0.5rem)

.display 
    @include uni-border(0.1rem, 1rem)
```

---

### Media Queries

SASS way of doing media queries is the inverse of regular CSS. Meaning instead of having a section for the all the changes, they are done in the selector itself.

```scss
SASS Media Query

@media only screen and (min-width: 700px) 
    body 
        width: 500px

SASS Media Query

body
    @media only screen and (min-width: 700px) 
        width: 500px
```

---

### Imports

SASS also allows for an ease of incorporating multiple styles in an HTML document. If one wants to incorporate multiple styles from multiple files with CSS, multiple imports of css files is done in one HTML document. This causes the browser to use extra resources to load all the styles causing the page to take up more bandwidth. However, this can be avoided with SASS by importing mixins, variables and other style changes from other SASS files into another. The SASS file that is being imported is called a module.

The way these modules are imported is by the use of `@use` which has replaced the deprecated `@import`. 

```scss
template.sass

$background: #101010
$inverse-background: #fff
$border-size: 0.01rem

@mixin border
    border: solid $inverse-background $border-size

body
     p 
        color: #fff

global.sass

@use 'folder/template'

body 
    background: template.background
    @include template.border

OR

global.sass

@use 'folder/template' as t

body 
    background: t.background
    @include t.border

The change of p color in template is applied to global as well.
```

When using `@use` you call the SASS file that is being imported by its name and location, no need for the extension. It can be included, but it is not necessary. Also the name of the filename is used as a namespace which is like a variable or function name. Well in this case it is closer to being used in a format similar to that of calling a class method. And the `as` keyword allows for a custom namespace instead of the filename.

---

### Partials

SASS allows for snippets of CSS to be included in what is called a partial files. These files will not be generated in CSS, so it can be seen as a module that can only be imported to be usable. Partial SASS files are identified by an underscore in front of the name, for example `_partial.sass`. And like a module they are used by importing them with the `@use` rule.

---

### CSS Parsing

There are multiple ways to parse SASS into CSS. One is to use the command line with a package manager or to use extensions from the IDE or software being used. 

#### Command Line

To parse with a command line, a package manager must be installed such as Node.js as well as the sass package. If using npm, `npm i -g sass` must be typed in the command line to download the sass package. Then to parse an SASS file into a CSS file, `sass source/stylesheets/index.SASS build/stylesheets/index.css` aka `sass source.SASS destination.css`. Also `sass --watch source/index.SASS build/index.css` allows SASS to be parsed in CSS in real time.

#### Extensions

Extensions are additional features for an IDE or software that are downloadable. For example, an IDE like Visual Studio Code has an extension called Live Sass Compiler which compiles Sass or SASS in real time.
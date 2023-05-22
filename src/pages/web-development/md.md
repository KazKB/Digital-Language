---
layout: ../../layouts/WebDevelopmentTemplate.astro
title: "MD - Digital Language"
description: "Basic information about Markdown."
author: "Kaleel Boston"
---

## Markdown - MD

Markdown is a lightweight markup language that helps to format text. The idea behind it is to allow ease of reading and writing of a large amount of text. While being able to have basic formatting capabilities such as lists, bolding and italics. Markdown can be used in the creation of web documents, but it shouldn't be used as a replacement for HTML. It is more suited for blogs, chats, forums, readme files and software documentations as they are more text focused. Also, a variety of HTML tags can be used with markdown for extra format ability and precision.  

### Components of Markdown  

<br>

- [Comment](#comment "Comment")
- [Formats](#formats "Formats")
- [HTML Tags](#html-tags "Hypertext Markup Language Tags")

---

### Comment

Comments in Markdown are `<!-- -->`. Comments allow whatever code or text in between them to be hidden from the browser. For example - `<!-- # Hello There -->` hides the first level header 'Hello There' from the browser.  

Using comments is a good way to leave notes or explain what some code does. Also, it is a good way to hide code for various reasons such as it is faulty, not yet ready to implement or you may want to use again later.  

---

### Formats  

The main bulk of markdown is its text and text on its own doesn't really have much distinction between itself. Thus, markdown offers a formatting solution to make the text be more readable and easily distinguishable.  

N.B - In markdown to denote a break line a double space is added at the end of the text. And it is a good practice to leave a blank line after headings, lists, text (block or not), tables, etc..., so that it is easier to read and the browser or software reading the markdown file does not confuse the different formats.

The different formats are:

- [Code Snippets](#code-snippets "Code Snippets")
- [Heading](#heading "Heading")
- [Links](#links "Links")
- [Lists](#lists "Lists")
- [Tables](#tables "Tables")
- [Text Emphasis](#text-emphasis "Text Emphasis")

<br>

#### Code Snippets

Code snippets can be emphasis or highlighted by the use of ` (backtick - it is on the same key as ~).

Inline Format:

&#96;code&#96;

Block Format:

&#96;&#96;&#96; <br> code <br><br> &#96;&#96;&#96;

Syntax Highlighting: 

&#96;&#96;&#96;programming language <br> code <br><br> &#96;&#96;&#96;

<br>

#### Heading  

Markdown has 2 ways of signifying that a piece of text is a heading. One way uses hashtags while the other uses hyphens. If the hashtag method is used it has six levels just like HTML. However, if the hyphen method is used there are only two levels, primary and secondary. The hashtag headers have more versatility, while the hyphen headers are easy to identify when writing.  

N.B - Headers in markdown creates ids. The id is the header in lowercase where the space replaced with a hyphen. Also, special characters such as '&' are replaced with hyphens. For example - My Header has an id of `my-header` while My Header & I has an id of `my-header--i`.

Format of The Hashtag Method:  

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```  

Format of The Hyphen Method:  

```markdown
Primary Heading
---------------
---------------

Secondary Heading
-----------------
```  

<br>

#### Links

Links contain two parts the mask (what is shown in place of the link) and the link itself (whether it is absolute, relative, etc...). And link everything in markdown there is multiple ways to go about linking.

Absolute Link:

- `[Mask](https://absolute-link.com)`

Inline Link:

- `[Mask](#id)`

Reference Link:

- `[Mask][Reference Name]`
- `[Mask][Reference Number]`

- `[Reference Name]: link`
- `[Reference Number]: link`

Relative Link:

- `[Mask](../folder/folder)`

N.B - In the link part of markdown links a title can be added by putting what should appear between double quotes. For example - `[Mask](#link "Title")`.

<br>

#### Lists

Markdown have check, ordered and unordered lists.

Checklist Format:

```markdown
- [x] Checked
- [ ] Unchecked
- [ ] Unchecked
``` 

Checklists are a combination of either an ordered or unordered list format and its own format for the boxes and checks. An open and close square bracket is used to form the box with whatever is inside to denote whether it is checked or not. A common x inside is for a checked box while an empty space inside for an empty/unchecked box.

Ordered List Format:  

```markdown
1. First
1. Second
1. Third

22. First
23. Second
24. Third
```  

The order of the numbers do not matter after the first number. It just has to follow the format of number, period, space and list item. The list always starts from what the first number of the list is in ascending order, but that can be changed via CSS.

Unordered List Format:  

```markdown
* First
* Second
* Third

- First
- Second
- Third
```  

Either an asterisk or hyphen can be used to denote an unordered list. Both have the same result. And as shown above the format is the asterisk or hyphen then a space then the list item. List style type can be changed via CSS.

Sub List Format:

```markdown
1. Main List
  1. Sub List

- Main List
  - Sub List

- [x] Main List
  - [ ] Sub List
```

Each type of list can have a sub list. This is done on a new line below the main list indented by two spaces.

<br>

#### Tables

Tables can be done via the use of vertical bars, hyphens and colons, or using the html table tag.

Format:

```markdown
What is needed for it to work:  

|Name|Name|
|---|---|
|Info|Info|

For readability:

|Name|Name|
|----|----|
|Info|Info|
```

The vertical bars are the vertical line separators for the columns. And they are not needed on the outside. Therefore `Name|Name` is valid and the same applies for the rest of the table. As for the hyphens they determine the alignment. Three hyphens are needed for it to be valid. After that all is needed for you to do is populate the table.

Alignment:

- `---` - default alignment which is usually the left alignment. 
- `:---` - left alignment. 
- `---:` - right alignment. 
- `:---:` - center alignment. 

---

#### Text Emphasis

Text on its own doesn't really carry weight, thus text emphasis were created. They give a little umph to the writing. Luckily, markdown has some.

Format: 

- Bold - `*text*` or `_text_`
- Italics - `**text**` or `__text__`
- Bold & Italics - `***text***` or `___text___`
- Strikethrough - `~~text~~`
---
layout: ../../layouts/WebDevelopmentTemplate.astro
title: "HTML - Digital Language"
description: "Basic information about Hyper Text Markup Language."
author: "Kaleel Boston"
---
## Hypertext Markup Language - HTML  

Hypertext Markup Language aka HTML is the language used to create content that browsers understand and use to create web pages. The Hypertext part in HTML stands for links and the ability to traverse pages and websites. While Markup stands for the tags that describe what the content are to the browser.  

HTML consist of elements. These elements are the different components that tell the browser what to display and what it means. Elements consist of the previous mentioned tags(what the content means) and the content(what to show).

### Components of HTML  

<br>

- [Comment](#html-comment "HTML Comment")
- [Element Structure](#element-structure "Element Structure")
- [Tag Structure](#tag-structure "Tag Structure")
- [Document Structure](#html-document-structure "HTML Document Structure")
- [Head Structure](#head-structure "Head Structure")
- [Body Structure](#body-structure "Body Structure")
- [Global Attributes](#global-attributes "Global Attributes")
- [Event Attributes](#event-attributes "Event Attributes")

---

### Comment  

Comments in HTML are `<!-- -->`. Comments allow whatever code or text in between them to be hidden from the browser. For example - `<!-- Hey there -->` hides Hey there from the browser.  

Using comments is a good way to leave notes or explain what some code does. Also, it is a good way to hide code for various reasons such as it is faulty, not yet ready to implement or you may want to use again later.  

---

### Element Structure  

An element is structured as `<tag>content</tag>` or `<tag>`. Usually, if there is a need for content, typically text, there is an opening and closing tag. Otherwise it is just the `<` and `>`.  

---

### Tag Structure  

An element consists of the tag and content, with the content usually being text. Additionally, the tag can be broken down even further. Tags contain the name of the tag as well as attributes and their values. Attributes are only contained in the opening tag if the tag has both the opening and closing tag. For example - `<tag attribute="value">content</tag>`.  

There are multiple types of tags:  

- Non-replaced - have an opening and closing tag(sometimes optional) that surround text or other tags. Example, `<h1>...</h1>`.
- Replaced - have only opening tag, sometimes have a closing tag and is used for non text content. Example, `<img>`.
- Void - has no content, but performs other actions. Example, `<br>`.  

---

### Document Structure  

|Tag(Global & Event Attributes)|Description|
|:----------------------------:|-----------|
|`<!DOCTYPE html>`|Tells the browser that it is using the HTML5 version of HTML.|
|`<html>...</html>`|Signals the start and end of the HTML document.|
|`<head>...</head>`|Contains the metadata of the document. Such as the title of the page, search engine information, and linking of stylesheets and javascript.|
|`<body>...</body>`|Contains the content of the HTML document.|
|`<div>...</div>`|Custom made section of relative content.|
|`<span>...</span>`|Contains a small piece of content that can be edited separately compared to the paragraph, heading, etc... it is in.|
|`<header>...</header>`|Usually contains the website's logo and main navigation.|
|`<footer>...</footer>`|Usually contains the contact details, copyright, location details, and some other website navigation.|
|`<nav>...</nav>`|Contains navigation links whether main or minor.|
|`<article>...</article>`|Contains information for an article.|
|`<section>...</section>`|Contains related content.|
|`<aside>...</aside>`|Contains barely related content and ads.|  

---

### Head Structure  

<table class="phone-table">
    <tr>
        <th>Tag</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;title&gt;...&lt;/title&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>The title of the webpage</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;meta&gt;</code></td>
        <td class="center-table-element">charset | content | http-equiv | name</td>
        <td>The metadata of the webpage as well as linking different media such as icons, scripts and stylesheets.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;link&gt;</code></td>
        <td class="center-table-element">cross-origin | href | hreflang | media | referrerpolicy | rel | sizes | title | type</td>
        <td>Establishes a connection between the current document and an external source.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;script&gt;...&lt;/script&gt;</code></td>
        <td class="center-table-element">async | cross-origin | defer | integrity | nomodule | referrerpolicy | src | type</td>
        <td>Allows the use of scripts in the document or access to external scripts.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;style&gt;...&lt;/style&gt;</code></td>
        <td class="center-table-element">media | type</td>
        <td>Contains the code that changes the colors, size, spacing, and other UI aspects of the tags and content.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;noscript&gt;...&lt;/noscript&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Alternate content that is displayed when javascript is not allowed or available.</td>
    </tr>
    <br>
</table>

<table class="phone-table">
    <tr>
        <th>Attribute</th>
        <th>Value(s)</th>
    </tr>
    <tr>
        <td class="center-table-element">
            async<br>
            Specifies that the script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes) (only for external scripts).
        </td>
        <td class="center-table-element">async</td>
    </tr>
    <tr>
        <td class="center-table-element">
            charset<br>
            Character set to be used by the document.
        </td>
        <td class="center-table-element">character set</td>
    </tr>
    <tr>
        <td class="center-table-element">
            content<br>
            The value for the http-equiv and name attributes.
        </td>
        <td class="center-table-element">value</td>
    </tr>
    <tr>
        <td class="center-table-element">
            cross-origin<br>
            Specifies how the element handles cross-origin requests.
        </td>
        <td class="center-table-element">anonymous | use-credentials</td>
    </tr>
    <tr>
        <td class="center-table-element">
            defer<br>
            Specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing (only for external scripts).
        </td>
        <td class="center-table-element">defer</td>
    </tr>
    <tr>
        <td class="center-table-element">
            integrity<br>
            Allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated.
        </td>
        <td class="center-table-element">filehash</td>
    </tr>
    <tr>
        <td class="center-table-element">
            http-equiv<br>
            HTTP header for the information/value of the content attribute.
        </td>
        <td class="center-table-element">content-security-policy | content-type | default-style | refresh</td>
    </tr>
    <tr>
        <td class="center-table-element">
            href<br>
            The location of the linked document.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            hreflang<br>
            Language of the text in the linked source.
        </td>
        <td class="center-table-element">language</td>
    </tr>
    <tr>
        <td class="center-table-element">
            media<br>
            All the devices the media can be viewed on.
        </td>
        <td class="center-table-element">all | aspect-ratio | color | color-index | grid | height | monochrome | orientation | print | resolution | scan | screen | speech | width</td>
    </tr>
    <tr>
        <td class="center-table-element">
            name<br>
            The name for the metadata the tag is about.
        </td>
        <td class="center-table-element">application-name | author | description | generator (software packages) | keyword | viewport</td>
    </tr>
    <tr>
        <td class="center-table-element">
            nomodule<br>
            Whether the script should not be executed in browsers supporting ES2015 modules.
        </td>
        <td class="center-table-element">true | false</td>
    </tr>
    <tr>
        <td class="center-table-element">
            referrerpolicy<br>
            The referrer information to send when fetching a script.
        </td>
        <td class="center-table-element">no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | unsafe-url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            rel<br>
            The relationship between the current document and the linked document.
        </td>
        <td class="center-table-element">alternate | author | dns-prefetch | help | icon | license | next | pingback | preconnect | prefetch | preload | prerender | prev | search | stylesheet</td>
    </tr>
    <tr>
        <td class="center-table-element">
            sizes<br>
            Only for icons.
        </td>
        <td class="center-table-element">height x width</td>
    </tr>
    <tr>
        <td class="center-table-element">
            src<br>
            Source of external script file.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            title<br>
            Defines preferred or alternate stylesheet.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            type<br>
            Defines the type of media the linked document is.
        </td>
        <td class="center-table-element">text/css | media type</td>
    </tr>
</table>

<table class="computer-table">
    <tr>
        <th>Tag</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;title&gt;...&lt;/title&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>The title of the webpage</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;meta&gt;</code></td>
        <td>
            <li> charset (character set) - character set to be used by the document.
            <li> content (value) - the value for the http-equiv and name attributes.
            <li> http-equiv ( content-security-policy | content-type | default-style | refresh) - hTTP header for the information/value of the content attribute.
            <li> name (application-name | author | description | generator (software packages) | keyword | viewport) - the name for the metadata the tag is about.
        </td>
        <td>The metadata of the webpage as well as linking different media such as icons, scripts and stylesheets.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;link&gt;</code></td>
        <td>
            <li> cross-origin (anonymous | use-credentials) - specifies how the element handles cross-origin requests.
            <li> href (url) - the location of the linked document.
            <li> hreflang (language) - language of the text in the linked source.
            <li> media (all | aspect-ratio | color | color-index | grid | height | monochrome | orientation | print | resolution | scan | screen | speech | width) - all the devices the media can be viewed on.
            <li> referrerpolicy (no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | unsafe-url) - the referrer to use when fetching the resource.
            <li> rel (alternate | author | dns-prefetch | help | icon | license | next | pingback | preconnect | prefetch | preload | prerender | prev | search | stylesheet) -  the relationship between the current document and the linked document. 
            <li> sizes (height x width) - only for icons.
            <li> title (text) - defines preferred or alternate stylesheet.
            <li> type (media type) - defines the type of media the linked document is.
        </td>
        <td>Establishes a connection between the current document and an external source.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;script&gt;...&lt;/script&gt;</code></td>
        <td>
            <li> async (async) - specifies that the script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes) (only for external scripts).
            <li> cross-origin (anonymous | use-credentials) - specifies how the element handles cross-origin requests.
            <li> defer (defer) - specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing (only for external scripts).
            <li> integrity (filehash) - allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated.
            <li> nomodule (true | false) - whether the script should not be executed in browsers supporting ES2015 modules.
            <li> referrerpolicy (no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | unsafe-url) - the referrer to use when fetching the resource.
            <li> src (url) - source of external script file.
            <li> type (media type) - defines the type of media the linked document is.
        </td>
        <td>Allows the use of scripts in the document or access to external scripts.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;style&gt;...&lt;/style&gt;</code></td>
        <td>
            <li> media (all | aspect-ratio | color | color-index | grid | height | monochrome | orientation | print | resolution | scan | screen | speech | width) - all the devices the media can be viewed on.
            <li> type (text/css) - defines the type of media the linked document is.
        </td>
        <td>Contains the code that changes the colors, size, spacing, and other UI aspects of the tags and content.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;noscript&gt;...&lt;/noscript&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Alternate content that is displayed when javascript is not allowed or available.</td>
    </tr>
</table>

---

### Body Structure  

The Body of an HTML document contains the majority of the content a user sees. Such as:  

- [Bullet & Numbered Lists](#bulleted--numbered-lists "Bullet & Numbered Lists")
- [Forms](#forms "Forms")
- [Links & Media](#links--media "Links & Media")
- [Tables](#tables "Tables")
- [Text & Text Formatting](#text--text-formatting "Text & Text Formatting")

#### Bulleted & Numbered Lists  

<table class="phone-table">
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;ul&gt;...&lt;/ul&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Signifies the start and end of an unordered(bulleted) list.</td>
    </tr>
        <td class="center-table-element"><code>&lt;ol&gt;...&lt;/ol&gt;</code></td>
        <td class="center-table-element">reversed | start | type</td>
        <td>Signifies the start and end of an ordered(numbered) list.</td>
    </tr>
        <td class="center-table-element"><code>&lt;li&gt;</code></td>
        <td class="center-table-element">value</td>
        <td>List item. The tag can have an ending (&lt;/li&gt;), but it doesn't need to be specified.</td>
    </tr>
</table>

<table class="phone-table">
    <tr>
        <th>Attribute</th>
        <th>Value(s)</th>
    </tr>
    <tr>
        <td class="center-table-element">
            reversed<br>
            Reverses the order of the list.
        </td>
        <td class="center-table-element">reversed</td>
    </tr>
    <tr>
        <td class="center-table-element">
            start<br>
            The number where the list starts from.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            type<br>
            The type of numbering system the list uses.
        </td>
        <td class="center-table-element">1 | A | a | I | i</td>
    </tr>
    <tr>
        <td class="center-table-element">
            value<br>
            The number where the ordered list starts from.
        </td>
        <td class="center-table-element">number</td>
    </tr>
</table>

<table class="computer-table">
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;ul&gt;...&lt;/ul&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Signifies the start and end of an unordered(bulleted) list.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;ol&gt;...&lt;/ol&gt;</code></td>
        <td>
            <li> reversed (reversed) - reversed the order of the list.
            <li> start (number) - the number where the list starts from.
            <li> type (1 | A | a | I | i) - the type of numbering system the list uses.
        </td>
        <td>Signifies the start and end of an ordered(numbered) list.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;li&gt;</code></td>
        <td>
            <li> value (number) - the number where the ordered list start from.
        </td>
        <td>List item. The tag can have an ending (&lt;/li&gt;), but it doesn't need to be specified.</td>
    </tr>
</table>

<br>

#### Forms  

<table class="phone-table">
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table element"><code>&lt;form&gt;...&lt;/form&gt;</code></td>
        <td class="center-table-element">=accept-charset | action | autocomplete | enctype | method | name | novalidate | rel | target </td>
        <td>Signifies the start and end of a form.</td>
    </tr>
    <tr>
        <td class="center-table element"><code>&lt;label&gt;...&lt;/label&gt;</code></td>
        <td class="center-table-element">for | form</td>
        <td>Gives context or a label to the form element.</td>
    </tr>
    <tr>
        <td class="center-table element"><code>&lt;input&gt;</code></td>
        <td class="center-table-element">accept | alt | autocomplete | autofocus | checked | dirname | disabled | form | formaction | formenctype | formmethod | formnovalidate | formtarget | height | list | max | maxlength | min | minlength | multiple | name | pattern | placeholder | readonly | required | size | src | step | type | value | width</td>
        <td>How the input will be accepted into the form.</td>
    </tr>
    <tr>
        <td class="center-table element"><code>&lt;textarea&gt;...&lt;/textarea&gt;</code></td>
        <td class="center-table-element">autofocus | cols | dirname | disabled | form | maxlength | name | placeholder | readonly | required | rows | wrap</td>
        <td>Multiline textbox</td>
    </tr>
    <tr>
        <td class="center-table element"><code>&lt;select&gt;...&lt;/select&gt;</code></td>
        <td class="center-table-element">autofocus | disabled | form | multiple | name | required | size</td>
        <td>Signifies the start and end of a dropdown select menu.</td>
    </tr>
    <tr>
        <td class="center-table element"><code>&lt;option&gt;...&lt;/option&gt;</code></td>
        <td class="center-table-element">disabled | label | selected | value</td>
        <td>Option items for the dropdown select menu.</td>
    </tr>
</table>

<table class="phone-table">
    <tr>
        <th>Attribute</th>
        <th>Value(s)</th>
    </tr>
    <tr>
        <td class="center-table-element">
            accept<br>
            What files can be uploaded to the <code>file input</code>. Only for the input type of file.
        </td>
        <td class="center-table-element">audio/* | image/* | file extension | media type | video/*</td>
    </tr>
    <tr>
        <td class="center-table-element">
            accept-charset<br>
            Character set to be used by the form.
        </td>
        <td class="center-table-element">character set</td>
    </tr>
    <tr>
        <td class="center-table-element">
            action<br>
            Where the data from the form will be sent.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            alt<br>
            Alternate text for images. Only for the input type of image.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            autocomplete<br>
            Whether a form/input element should have autocomplete on/off.
        </td>
        <td class="center-table-element">on | off</td>
    </tr>
    <tr>
        <td class="center-table-element">
            autofocus<br>
            Whether to focus on the input when the page loads automatically.
        </td>
        <td class="center-table-element">autofocus</td>
    </tr>
    <tr>
        <td class="center-table-element">
            checked<br>
            Pre-checked item on page load. Only for the input types of checkbox and radio.
        </td>
        <td class="center-table-element">checked</td>
    </tr>
    <tr>
        <td class="center-table-element">
            cols<br>
            The width of a textarea element.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            dirname<br>
            The text direction the data will be in once submitted.
        </td>
        <td class="center-table-element">inputname.dir | textareainputname.dir</td>
    </tr>
    <tr>
        <td class="center-table-element">
            disabled<br>
            Element is disabled (not interactive).
        </td>
        <td class="center-table-element">disabled</td>
    </tr>
    <tr>
        <td class="center-table-element">
            enctype<br>
            How the data should be encoded when being sent to the server.
        </td>
        <td>application/x-www-form-urlencoded | multipart/form-data | text/plain</td class="center-table-element">
    </tr>
    <tr>
        <td class="center-table-element">
            for<br>
            The element this element is bound to (usually <code>label element</code>).
        </td>
        <td class="center-table-element">element id</td>
    </tr>
    <tr>
        <td class="center-table-element">
            form<br>
            The form the element belongs to.
        </td>
        <td class="center-table-element">form id</td>
    </tr>
    <tr>
        <td class="center-table-element">
            formaction<br>
            The location of the file that will process the data when submitted. Only for input types of image and submit.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            formenctype<br>
            How the data should be encoded when being sent to the server.
        </td>
        <td class="center-table-element">application/x-www-form-urlencoded | multipart/form-data | text/plain</td>
    </tr>
    <tr>
        <td class="center-table-element">
            formmethod<br>
            HTTP method of sending data to the action url. Only for input types of image and submit.
        </td>
        <td class="center-table-element">get | post</td>
    </tr>
    <tr>
        <td class="center-table-element">
            formnovalidate<br>
            Whether the element should be validated on submission.
        </td>
        <td class="center-table-element">formnovalidate</td>
    </tr>
    <tr>
        <td class="center-table-element">
            formtarget<br>
            Where and how to display response after form is submitted. Only for input types of image and submit.
        </td>
        <td class="center-table-element">_blank | _parent | _self | _top</td>
    </tr>
    <tr>
        <td class="center-table-element">
            height<br>
            The height of image input element.
        </td>
        <td class="center-table-element">pixels</td>
    </tr>
    <tr>
        <td class="center-table-element">
            label<br>
            Label for the option element.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            list<br>
            Datalist element that has pre-defined options for an input element.
        </td>
        <td class="center-table-element">datalist id</td>
    </tr>
    <tr>
        <td class="center-table-element">
            max<br>
            Maximum value accepted by an input element.
        </td>
        <td class="center-table-element">date | number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            maxlength<br>
            Maximum characters accepted by an input element.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            method<br>
            HTTP method that will be used when sending data.
        </td>
        <td class="center-table-element">get | post</td>
    </tr>
    <tr>
        <td class="center-table-element">
            min<br>
            Minimum value accepted by an input element.
        </td>
        <td class="center-table-element">date | number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            minlength<br>
            Minimum characters accepted by an input element.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            multiple<br>
            Allows multiple values to be inputted/selected for an input element.
        </td>
        <td class="center-table-element">multiple</td>
    </tr>
    <tr>
        <td class="center-table-element">
            name<br>
            Name of the element/form.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            novalidate<br>
            Whether a form should validate the data to be sent out.
        </td>
        <td class="center-table-element">novalidate</td>
    </tr>
    <tr>
        <td class="center-table-element">
            pattern<br>
            Regular expression that an input element's value is checked against.
        </td>
        <td class="center-table-element">regexp</td>
    </tr>
    <tr>
        <td class="center-table-element">
            placeholder<br>
            A hint that suggests what the value of an input element should be.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            readonly<br>
            Whether an input element is read only or not.
        </td>
        <td class="center-table-element">readonly</td>
    </tr>
    <tr>
        <td class="center-table-element">
            rel<br>
            The relationship between the current document and linked document.
        </td>
        <td class="center-table-element">external | help | license | next | nofollow | noopener | noreferrer | opener | prev | search</td>
    </tr>
    <tr>
        <td class="center-table-element">
            required<br>
            Whether an input element is required to be filled before submission.
        </td>
        <td class="center-table-element">required</td>
    </tr>
    <tr>
        <td class="center-table-element">
            rows<br>
            The height of a textarea element.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            selected<br>
            Pre-selected option on page load.
        </td>
        <td class="center-table-element">selected</td>
    </tr>
    <tr>
        <td class="center-table-element">
            size<br>
            The width of an input element in characters.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            src<br>
            Source of the image used as submit image. Only for input type of image.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            step<br>
            Interval between legal numbers of an input element.
        </td>
        <td class="center-table-element">any | number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            target<br>
            Where and how to display response after form is submitted.
        </td>
        <td class="center-table-element">_blank | _parent | _self | _top</td>
    </tr>
    <tr>
        <td class="center-table-element">
            type<br>
            What type of input the element will be and ask for.
        </td>
        <td class="center-table-element">button | checkbox | color | date | datetime-local | email | file | hidden | image | month | number | password | radio | range | reset | search | submit | tel | text | time | url | week</td>
    </tr>
    <tr>
        <td class="center-table-element">
            value<br>
            A pre-set value for an input element.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            width<br>
            The width of an image input element.
        </td>
        <td class="center-table-element">pixels</td>
    </tr>
    <tr>
        <td class="center-table-element">
            wrap<br>
            How the text of the textarea element is wrapped on submission.
        </td>
        <td class="center-table-element">hard | soft</td>
    </tr>
</table>

<table class="computer-table">
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element">
            <code>&lt;form&gt;...&lt;/form&gt;</code>
        </td>
        <td>
            <li> accept-charset (character set) - character set to be used by the form.
            <li> action (url) - where the data from the form will be sent.
            <li> autocomplete (on | off) - whether a form/input element should have autocomplete on/off.
            <li> enctype (application/x-www-form-urlencoded | multipart/form-data | text/plain) - how the data should be encoded when being sent to the server. 
            <li> method (get | post) - HTTP method that will be used when sending data.
            <li> name (text) - name of the form.
            <li> novalidate (novalidate) - whether a form should validate the data to be sent out.
            <li> rel (external | help | license | next | nofollow | noopener | noreferrer | opener | prev | search) - the relationship between the current document and linked document.
            <li> target (_blank | _parent | _self | _top) - where and how to display response after form is submitted.
        </td>
        <td>Signifies the start and end of a form.</td>
    </tr>
    <tr>
        <td class="center-table-element">
            <code>&lt;label&gt;...&lt;/label&gt;</code>
        </td>
        <td>
            <li> for (element id) - the element this element is bound to (usually <code>label element</code>).
            <li> form (form id) - the form the element belongs to.
        </td>
        <td>Gives context or a label to the form element</td>
    </tr>
    <tr>
        <td class="center-table-element">
            <code>&lt;input&gt;...&lt;/input&gt;</code>
        </td>
        <td>
            <li> accept (audio/* | image/* | file extension | media type | video/*) - what files can be uploaded to the <code>file input</code>. Only for the input type of file.
            <li> alt (text) - alternate text for images. Only for the input type of image.
            <li> autocomplete (on | off) - whether a form/input element should have autocomplete on/off.
            <li> autofocus (autofocus) - whether to focus on the input when the page loads automatically.
            <li> checked (checked) - pre-checked item on page load. Only for the input types of checkbox and radio.
            <li> dirname (inputname.dir) - the text direction the data will be in once submitted.
            <li> disabled (disabled) - element is disabled (not interactive).
            <li> form (form id) - the form the element belongs to.
            <li> formaction (url) - the location of the file that will process the data when submitted. Only for input types of image and submit.
            <li> formenctype (application/x-www-form-urlencoded | multipart/form-data | text/plain) - how the data should be encoded when being sent to the server.
            <li> formmethod (get | post) - HTTP method of sending data to the action url. Only for input types of image and submit.
            <li> formnovalidate (formnovalidate) - whether the element should be validated on submission.
            <li> formtarget (_blank | _parent | _self | _top) - where and how to display response after form is submitted. Only for input types of image and submit.
            <li> height (pixels) - the height of image input element.
            <li> list (datalist list) - datalist element that has pre-defined options for an input element.
            <li> max (date | number) - maximum value accepted by an input element.
            <li> maxlength (number) - maximum characters accepted by an input element.
            <li> min (date | number ) - minimum value accepted by an input element.
            <li> minlength (number) - minimum characters accepted by an input element.
            <li> multiple (multiple) - allows multiple values to be inputted/selected for an input element.
            <li> name (text) - name of the element.
            <li> pattern (regexp) - regular expression that an input element's value is checked against.
            <li> placeholder (text) - a hint that suggests what the value of an input element should be.
            <li> readonly (readonly) - whether an input element is read only or not.
            <li> required (required) - whether an input element is required to be filled before submission.
            <li> size (number) - the width of an input element in characters.    
            <li> src (url) - source of the image used as submit image. Only for input type of image.
            <li> step (any | number) - interval between legal numbers of an input element.
            <li> type (button | checkbox | color | date | datetime-local | email | file | hidden | image | month | number | password | radio | range | reset | search | submit | tel | text | time | url | week) - what type of input the element will be and ask for.
            <li> value (text) - a pre-set value for an input element.
            <li> width (pixels) - the width of an image input element.
        </td>
        <td>How the input will be accepted into the form.</td>
    </tr>
    <tr>
        <td class="center-table-element">
            <code>&lt;textarea&gt;...&lt;/textarea&gt;</code>
        </td>
        <td>
            <li> autofocus (autofocus) - whether to focus on the input when the page loads automatically.
            <li> cols (number) - the width of a textarea element.
            <li> dirname (textareainputname.dir) - specifies the text direction the data will be in once submitted.
            <li> disabled (disabled) - element is disabled (not interactive).
            <li> form (form id) - the form the element belongs to.
            <li> maxlength (number) - maximum characters accepted by an input element.
            <li> name (text) - name of the element.
            <li>placeholder (text) - a hint that suggests what the value of an input element should be.
            <li> readonly (readonly) - whether an input element is read only or not.
            <li> required (required) - whether an input element is required to be filled before submission.
            <li> rows (number) - the height of a textarea element.
            <li> wrap (hard | soft) - how the text of the textarea element is wrapped on submission.
        </td>
        <td>Multiline textbox</td>
    </tr>
    <tr>
        <td class="center-table-element">
            <code>&lt;select&gt;...&lt;/select&gt;</code>
        </td>
        <td>
            <li> autofocus (autofocus) - whether to focus on the input when the page loads automatically.
            <li> disabled (disabled) - element is disabled (not interactive).
            <li> form (form id) - the form the element belongs to.
            <li> multiple (multiple) - allows multiple values to be inputted/selected for an input element.
            <li> name (text) - Name of the element.
            <li> required (required) - whether an input element is required to be filled before submission.
            <li> size (size) - the width of an input element in characters.
        </td>
        <td>Signifies the start and end of a dropdown select menu.</td>
    </tr>
    <tr>
        <td class="center-table-element">
            <code>&lt;option&gt;...&lt;/option&gt;</code>
        </td>
        <td>
            <li> disabled (disabled) - element is disabled (not interactive).
            <li> label (text) - label for the option element.
            <li> selected (selected) - pre-selected option on page load.
            <li> value (text) - a pre-set value for an input element.
        </td>
        <td>Option items for the dropdown select menu.</td>
    </tr>
</table>

<br>

#### Links & Media  

<table class=phone-table>
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;a&gt;...&lt;/a&gt;</code></td>
        <td class="center-table-element">download | href | hreflanguage | media | ping | referrerpolicy | rel | target | type</td>
        <td>Anchor that allows the use of hyperlinks.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;audio&gt;...&lt;/audio&gt;</code>autoplay | controls | loop | muted | preload | src</td>
        <td class="center-table-element"></td>
        <td>Audio</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;picture&gt;...&lt;/picture&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Defines multiple images for different screen sizes.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;video&gt;...&lt;/video&gt;</code></td>
        <td class="center-table-element">autoplay | controls | height | loop | muted | poster | preload | src | width</td>
        <td>Video</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;img&gt;</code></td>
        <td class="center-table-element">alt | crossorigin | height | ismap | loading | longdesc | referrerpolicy | sizes | src | srcset | usemap | width</td>
        <td>Image</td>
    </tr>
        <td class="center-table-element"><code>&lt;source&gt;...&lt;/source&gt;</code></td>
        <td class="center-table-element">media | sizes | src | srcset | type</td>
        <td>Individual audio, image or video for the different media tags.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;track&gt;...&lt;/track&gt;</code></td>
        <td class="center-table-element">default | kind | label | src | srclang</td>
        <td>Text tracks for <code>audio and video elements</code>.</td>
    </tr>
</table>

<table class=phone-table>
    <tr>
        <th>Attribute</th>
        <th>Value(s)</th>
    </tr>
    <tr>
        <td class="center-table-element">
            alt<br>
            Alternate text for an image.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            autoplay<br>
            Whether the audio or video will automatically start playing when it is ready to play.
        </td>
        <td class="center-table-element">autoplay</td>
    </tr>
    <tr>
        <td class="center-table-element">
            controls<br>
            Whether the audio or video controls (play/pause) should be visible.
        </td>
        <td class="center-table-element">controls</td>
    </tr>
    <tr>
        <td class="center-table-element">
            crossorigin<br>
            Allows images from third-party websites that allow cross-origin access to be used with canvas.
        </td>
        <td class="center-table-element">anonymous | use-credentials</td>
    </tr>
    <tr>
        <td class="center-table-element">
            default<br>
            Track is enabled by default unless user sets another track as default.
        </td>
        <td class="center-table-element">default</td>
    </tr>
    <tr>
        <td class="center-table-element">
            download<br>
            Whether the target will be downloaded when the hyperlink is clicked.
        </td>
        <td class="center-table-element">filename</td>
    </tr>
    <tr>
        <td class="center-table-element">
            height<br>
            Sets height of image or video player.
        </td>
        <td class="center-table-element">pixels</td>
    </tr>
     <tr>
        <td class="center-table-element">
            href<br>
            The location of the linked document.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            hreflang<br>
            Language of the text in the linked source.
        </td>
        <td class="center-table-element">language</td>
    </tr>
    <tr>
        <td class="center-table-element">
            ismap<br>
            Whether an image should be a server-side image map.
        </td>
        <td class="center-table-element">ismap</td>
    </tr>
    <tr>
        <td class="center-table-element">
            kind<br>
            The type of text track.
        </td>
        <td class="center-table-element">captions | chapters | descriptions | metadata | subtitles</td>
    </tr>
    <tr>
        <td class="center-table-element">
            label<br>
            The title of the text track.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            loading<br>
            Whether a browser should load an image immediately or after some kind of action occurs.
        </td>
        <td class="center-table-element">eager | lazy</td>
    </tr>
    <tr>
        <td class="center-table-element">
            longdesc<br>
            A url to a detailed description of an image.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            loop<br>
            Whether that an audio or video will restart upon finishing.
        </td>
        <td class="center-table-element">loop</td>
    </tr>
    <tr>
        <td class="center-table-element">
            media<br>
            Accepts any valid media query that is usually defined by CSS. 
        </td>
        <td class="center-table-element">media_query</td>
    </tr>
    <tr>
        <td class="center-table-element">
            muted<br>
            Whether audio or video output should be muted.
        </td>
        <td class="center-table-element">muted</td>
    </tr>
    <tr>
        <td class="center-table-element">
            ping<br>
            Space-separated list of URLs to which, when the link is followed, post requests with the body ping will be sent by the browser (in the background). Typically used for tracking.
        </td>
        <td class="center-table-element">list_of_urls</td>
    </tr>
    <tr>
        <td class="center-table-element">
            poster<br>
            Whether an image should be shown whilst the video is downloading or until the user clicks play.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            preload<br>
            Specifies if and how an audio or video should be loaded when the page loads.
        </td>
        <td class="center-table-element">auto | metadata | none</td>
    </tr>
    <tr>
        <td class="center-table-element">
            referrerpolicy<br>
            Which referrer information to send with the link.
        </td>
        <td class="center-table-element">no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | same-origin | strict-origin-when-cross-origin | unsafe-url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            rel<br>
            The relationship between the current document and linked document.
        </td>
        <td class="center-table-element">alternate | author | bookmark | external | help | license | next | nofollow | noreferrer | noopener | prev | search | tag</td>
    </tr>
    <tr>
        <td class="center-table-element">
            sizes<br>
            Image sizes for different page layouts.
        </td>
        <td class="center-table-element">Null</td>
    </tr>
    <tr>
        <td class="center-table-element">
            src<br>
            Location of media file.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            srclang<br>
            Language of the track text data.
        </td>
        <td class="center-table-element">language</td>
    </tr>
    <tr>
        <td class="center-table-element">
            srcset<br>
            Url(s) of image(s) to use in different situations.
        </td>
        <td class="center-table-element">url | url-list</td>
    </tr>
    <tr>
        <td class="center-table-element">
            target<br>
            Where to open linked document.
        </td>
        <td class="center-table-element">_blank | _parent | _self | _top</td>
    </tr>
    <tr>
        <td class="center-table-element">
            type<br>
            The media or mime type of linked document.
        </td>
        <td class="center-table-element">media_type | mime-type</td>
    </tr>
    <tr>
        <td class="center-table-element">
            usemap<br>
            Whether an image should be a client-side image map.
        </td>
        <td class="center-table-element">#mapname</td>
    </tr>
    <tr>
        <td class="center-table-element">
            width<br>
            Sets width of image or video player.
        </td>
        <td class="center-table-element">pixels</td>
    </tr>
</table>

<table class=computer-table>
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;a&gt;...&lt;/a&gt;</code></td>
        <td>
            <li> download (filename) - whether the target will be downloaded when the hyperlink is clicked.
            <li> href (url) - the location of the linked document.
            <li> hreflanguage (language) - language of the text in the linked source.
            <li> media (media_query) - accepts any valid media query that is usually defined by CSS.
            <li> ping (list_of_urls) - space-separated list of URLs to which, when the link is followed, post requests with the body ping will be sent by the browser (in the background). Typically used for tracking.
            <li> referrerpolicy (no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | same-origin | strict-origin-when-cross-origin | unsafe-url) - which referrer information to send with the link.
            <li> rel (alternate | author | bookmark | external | help | license | next | nofollow | noreferrer | noopener | prev | search | tag) - the relationship between the current document and linked document.
            <li> target (_blank | _parent | _self | _top) - where to open linked document.
            <li> type (media_type) - the media type of linked document.
        </td>
        <td>Anchor that allows the use of hypertext.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;audio&gt;...&lt;/audio&gt;</code></td>
        <td>
            <li> autoplay (autoplay) - whether the audio or video will automatically start playing when it is ready to play.
            <li> controls (controls) - whether the audio or video controls (play/pause) should be visible.
            <li> loop (loop) - whether that an audio will restart upon finishing.
            <li> muted (muted) - whether audio output should be muted.
            <li> preload (auto | metadata | none) - specifies if and how an audio should be loaded when the page loads.
            <li> src (url) - location of audio file.
        </td>
        <td>Audio</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;picture&gt;...&lt;/picture&gt;</code></td>
        <td>Null</td>
        <td>Defines multiple images for different screen sizes.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;video&gt;...&lt;/video&gt;</code></td>
        <td>
            <li> autoplay (autoplay) - whether the audio or video will automatically start playing when it is ready to play.
            <li> controls (controls) - whether the audio or video controls (play/pause) should be visible.
            <li> height (pixels) - sets height of video player.
            <li> loop (loop) - whether that an video will restart upon finishing.
            <li> muted (muted) - whether video output should be muted.
            <li> poster (url) - whether an image should be shown whilst the video is downloading or until the user clicks play.
            <li> preload (auto | metadata | none) - specifies if and how an video should be loaded when the page loads.
            <li> src (url) - location of video file.
            <li> width (pixels) - sets width of video player.
        </td>
        <td>Video</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;img&gt;</td>
        <td>
            <li> alt (text) - Alternate text for an image.
            <li> crossorigin (anonymous | use-credentials) - allows images from third-party websites that allow cross-origin access to be used with canvas.
            <li> height (pixels) - sets height of image.
            <li> ismap (ismap) - whether an image should be a server-side image map.
            <li> loading (lager | lazy) - whether a browser should load an image immediately or after some kind of action occurs.
            <li> longdesc (url) - a url to a detailed description of an image.
            <li> referrerpolicy (no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | same-origin | strict-origin-when-cross-origin | unsafe-url) - which referrer information to send with the link.
            <li> sizes (null) - image sizes for different page layouts.
            <li> src (url) - location of image file.
            <li> srcset (url-list) - urls of images to use in different situations.
            <li> usemap (#mapname) - whether an image should be a client-side image map.
            <li> width (pixels) - sets width of image.
        </td>
        <td>Image</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;source&gt;...&lt;/source&gt;</code></td>
        <td>
            <li> media (media_query) - accepts any valid media query that is usually defined by CSS.
            <li> sizes (null) - image sizes for different page layouts.
            <li> src (url) - location of media file.
            <li> srcset (url) - url of an image to use in different situations.
            <li> type (mime-type) - 
        </td>
        <td>Individual audio, image or video for the different media tags.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;track&gt;...&lt;/track&gt;</code></td>
        <td>
            <li> default (default) - track is enabled by default unless user sets another track as default.
            <li> kind (captions | chapters | descriptions | metadata | subtitles) - The type of text track.
            <li> label (text) - The title of the text track.
            <li> src (url) - location of media file.
            <li> srclang (language) - language of the track text data.
        </td>
        <td>Text tracks for <code>audio and video elements</code>.</td>
    </tr>
</table>

<br>

#### Tables  

<table class="phone-table">
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;table&gt;...&lt;/table&gt;</td>
        <td class="center-table-element">Null</td>
        <td>Signifies the start and end of a table.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;caption&gt;...&lt;/caption&gt;</td>
        <td class="center-table-element">Null</td>
        <td>Table Title</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;tr&gt;...&lt;/tr&gt;</td>
        <td class="center-table-element">Null</td>
        <td>Table Row</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;th&gt;...&lt;/th&gt;</td>
        <td class="center-table-element">abbr | colspan | headers | rowspan | scope</td>
        <td>Table Header</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;td&gt;...&lt;/td&gt;</td>
        <td class="center-table-element">colspan | headers | rowspan</td>
        <td>Table Cell</td>
    </tr>
</table>

<table class="phone-table">
    <tr>
        <th>Attribute</th>
        <th>Value(s)</th>
    </tr>
    <tr>
        <td class="center-table-element">
            abbr<br>
            Abbreviation of the table header.
        </td>
        <td class="center-table-element">text</td>
    </tr>
    <tr>
        <td class="center-table-element">
            colspan<br>
            Number of columns a cell/header occupies.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            headers<br>
            One or more headers this element is related to.
        </td>
        <td class="center-table-element">header id</td>
    </tr>
    <tr>
        <td class="center-table-element">
            rowspan<br>
            Number of rows a cell/header occupies.
        </td>
        <td class="center-table-element">number</td>
    </tr>
    <tr>
        <td class="center-table-element">
            scope<br>
            Whether a header is a header for a column or a group of columns, or for a row or a group of rows.
        </td>
        <td class="center-table-element">col | colgroup | row | rowgroup</td>
    </tr>
</table>

<table class="computer-table">
    <tr>
        <th>Tag (Global & Event Attributes)</th>
        <th>Attribute(s)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;table&gt;...&lt;/table&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Signifies the start and end of a table.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;caption&gt;...&lt;/caption&gt;</code></td>
        <td class="center-table-element">Null</td>
        <td>Table Title</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;tr&gt;...&lt;/tr&gt;</code></td>
        <<td class="center-table-element">Null</td>
        <td>Table Row</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;th&gt;...&lt;/th&gt;</code></td>
        <td>
            <li> abbr (text) - abbreviation of the table header.
            <li> colspan (number) - number of columns a header occupies.
            <li> headers (header id) - one or more headers this element is related to.
            <li> rowspan (number) - number of rows a header occupies.
            <li> scope (col | colgroup | row | rowgroup) - whether a header is a header for a column or a group of columns, or for a row or a group of rows.
        </td>
        <td>Table Header</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;td&gt;...&lt;/td&gt;</code></td>
        <td>
            <li> colspan (number) - number of columns a cell occupies.
            <li> headers (header id) - one or more headers this element is related to.
            <li> rowspan (number) - number of rows a cell occupies.
        </td>
        <td>Table Cell</td>
    </tr>
</table>

<br>

#### Text & Text Formatting  

|Tag (Global & Event Attributes)|Description|
|:-----------------------------:|-----------|
|`<h1>...</h1>`<br>`.`<br>`.`<br>`.`<br>`<h6>...</h6>`|Header|
|`<p>...</p>`|Paragraph|
|`<b>...</b>`|Bolds content.|
|`<strong>...</strong>`|Signifies important content and bolds it.|
|`<i>...</i>`|Italicizes content.|
|`<em>...</em>`|Emphasizes and italicized content.|
|`<mark>...</mark>`|Highlights content.|
|`<small>...</small>`|Makes content smaller compared to other content in the paragraph, span or container.|
|`<del>...</del>`|Strikes a line through content.|
|`<ins>...</ins>`|Underlines content.|
|`<sub>...</sub>`|Formats content into a subscript.|
|`<sup>...</sup>`|Formats content into a superscript.|
|`<blockquote cite="source">...</blockquote>`|Signifies that content is a paragraph length quote or extracted from an external source.|
|`<abbr title="unabbreviated ofr of the word">...</abbr>`|Acronym|
|`<br>`|Break line|
|`---`|Horizontal rule|
|`<details>...</details>`|Content that can be toggled to be shown or hidden by default (no scripting).|
|`<summary>...</summary>`|Heading of `<details>` element.|

---

### Global Attributes  

Global Attributes are attributes that are shared by every element.  

|Attribute|Value(s)|
|:-------:|:------:|
|accesskey<br> Shortcut character in combination with the Alt key to activate or focus on element.|character|
|class<br> Multiple element identifier where an element can have multiple. It also allows the allocation of CSS or code scripts.|classname|
|contenteditable<br> Whether an element is editable or not.|true &verbar; false|
|data-*<br> Stores custom data towards the page or application.|somevalue|
|dir<br> Direction that the element's text flows in.|ltr &verbar; rtl &verbar; auto|
|draggable<br> Whether an element is draggable or not.|true &verbar; false &verbar; auto|
|hidden<br> Element is not yet or no longer relevant.|Null|
|id<br> Unique element identifier for an element. It also allows the allocation of CSS or code scripts.|idname|
|lang<br> Element's language|language code|
|spellcheck<br> Whether to check the spelling of the element's content.|true &verbar; false|
|style<br> Inline style for the element|css|
|tabindex<br> Tab order of element.|number|
|title<br> Extra information of the element's content in the form a tooltip.|text|
|translate<br> Whether the element's content should be translated or not.|yes &verbar; no|

---

### Event Attributes  

Event Attributes are attributes that run external or in document scripts and are shared by every element.  

They can be categorized as such:  

- [Clipboard Events](#clipboard-events "Clipboard Events")
- [Drag Events](#drag-events "Drag Events")
- [Form Events](#form-events "Form Events")
- [Keyboard Events](#keyboard-events "Keyboard Events")
- [Media Events](#media-events "Media Events")
- [Misc Events](#misc-events "Misc Events")
- [Mouse Events](#mouse-events "Mouse Events")
- [Window Events](#window-events "Window Events")

<br>

#### Clipboard Events  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|oncopy|When the content of the element is copied.|
|oncut|When the content of the element is cut.|
|onpaste|When content has been pasted into the element.|  

<br>

#### Drag Events  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|ondrag|When the element is being dragged.|
|ondragend|When the element isn't being dragged.|
|ondragenter|When the element is dragged to a valid drop point.|
|ondragleave|When the element is dragged out of a valid drop point.|
|ondragover|When the element is dragged over a valid drop point.|
|ondragstart|At the start of the element being dragged.|
|ondrop|When the element is dropped.|
|onscroll|When the scrollbar is moved up or down within the element.|  

<br>

#### Form Events  

Events triggered by actions inside a HTML form (applies to almost all HTML elements, but is most used in form elements).  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|onblur|When the element loses focus.|
|onchange|When the element's value changes.|
|oncontextmenu|When the context menu changes.|
|onfocus|When the element is in focus.|
|oninput|When the user enters data into the element.|
|oninvalid|When the element is invalid.|
|onreset|When the reset button related to the form is pressed.|
|onselect|When text has been selected within the element.|
|onsubmit|When the submit button related to the form is pressed.|  

<br>

#### Keyboard Events  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|onkeydown|When a key is being pressed.|
|onkeypress|When a key is pressed.|
|onkeyup|When a key is released.|  

<br>

#### Media Events  

Events triggered by media like videos, images and audio (applies to all HTML elements, but is most common in media elements, like audio, embed, img, object, and video).

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|onabort|On abort|
|oncanplay|When the media file is ready to play (after buffering enough to play).|
|oncanplaythrough|When the media file can play to the end without buffering.|
|oncuechange|When the cue changes in a track element.|
|ondurationchange|When the length of a media changes.|
|onemptied|When the media file is unavailable.|
|onended|When the media reached its end.|
|onerror|When an error occurs while the media is being played.|
|onloadeddata|When the media's data is loaded.|
|onloadedmetadata|When the media's metadata is loaded.|
|onloadstart|When the media starts to load before anything else loads.|
|onpause|When the media is paused.|
|onplay|When the media is ready to play.|
|onplaying|While the media is being played.|
|onprogress|While the browser is getting the media's data.|
|onratechange|When the playback rate is changed.|
|onseeked|When the seeking attribute is set to false after seeking is finished.|
|onseeking|When the seeking attribute is set to true while seeking.|
|onstalled|When the browser is unable to fetch media data.|
|onsuspend|When fetching media data is stopped for whatever reason.|
|ontimeupdate|When the playing position is updated.|
|onvolumechange|When the volume is changed.|
|onwaiting|When the media is paused, but still expected to play/continued again.|  

<br>

#### Misc Events  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|ontoggle|When the details element is opened or closed.|

<br>

#### Mouse Events  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|onclick|When the mouse is clicked on the element.|
|ondbclick|When the mouse is double clicked on the element.|
|onmousedown|When the mouse button is pressed while over the element.|
|onmousemove|When the mouse is being moved over the element.|
|onmouseout|When the mouse moves from being over the element.|
|onmouseover|When the mouse is over the element.|
|onmouseup|When the mouse button is release while over the element.|
|onwheel|When the mouse wheel moves up or down while over the element.|  

<br>

#### Window Events  

Events triggered for the window object(applies to the body element).  

|Attribute|Description (Script To Be Ran)|
|:-------:|-----------|
|onafterprint|After the document is printed.|
|onbeforeprint|Before the document is printed.|
|onbeforeunload|Before the document is unloaded.|
|onerror|When an error occurs.|
|onhashchange|When there have been changes to the anchor part of an URL.|
|onload|When the webpage is loaded.|
|onmessage|When a message is triggered.|
|onoffline|When the browser starts to work offline.|
|ononline|When the browser starts to work online.|
|onpagehide|When the user navigates away for the webpage.|
|onpageshow|When the user navigates to the webpage.|
|onpopstate|When the window's history change.|
|onresize|When the window's size is changed or minimized.|
|onstorage|When the web storage area is updated.|
|onunload|When the webpage is unloaded or the browser is closed.|  
---
layout: ../../layouts/WebDevelopmentTemplate.astro
title: "HTML - Digital Language"
description: "Basic information about Hyper Text Markup Language."
author: "Kaleel Boston"
---
## Hypertext Markup Language - HTML  

Hypertext Markup Language aka HTML is the language used to create content that browsers understand and use to create web pages. The Hypertext part in HTML stands for links and the ability to traverse pages and websites. While Markup stands for the tags that describe what the content are to the browser.  

HTML consist of elements. These elements are the different components that tell the browser what to display and what it means. Elements consist of the previous mentioned tags(what the content means) and the content(what to show).  

### HTML Comment  

Comments in HTML are `<!-- -->`. Comments allow whatever code or text in between them to be ignored from the browser. For example, `<!-- Hey there -->` hides Hey there from the browser.  

Using comments is a good way to leave notes or explain what some code does. Also, it is a good way to hide code for various reasons such as it is faulty, not yet ready to implement or you may want to use again later.  

### Element Structure  

An element is structured as `<tag>content</tag>` or `<tag>`. Usually, if there is a need for content, typically text, there is an opening and closing tag. Otherwise it is just the `<` and `>`.  

### Tag Structure  

An element consists of the tag and content, with the content usually being text. Additionally, the tag can be broken down even further. Tags contain the name of the tag as well as attributes and their values. Attributes are only contained in the opening tag if the tag has both the opening and closing tag. For example, `<tag attribute="value">content</tag>`.  

There are multiple types of tags:  

* Non-replaced - have an opening and closing tag(sometimes optional) that surround text or other tags. Example, `<h1>...</h1>`.
* Replaced - have only opening tag, sometimes have a closing tag and is used for non text content. Example, `<img>`.
* Void - has no content, but performs other actions. Example, `<br>`.  

### HTML Document Structure  

<br>

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

### Head Structure  

<br>

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
        <td class="center-table-element">
            charset<br>
            content<br>
            http-equiv<br>
            name
        </td>
        <td>The metadata of the webpage as well as linking different media such as icons, scripts and stylesheets.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;link&gt;</code></td>
        <td class="center-table-element">
            cross-origin<br>
            href<br>
            hreflang<br>
            media<br>
            referrerpolicy<br>
            rel<br>
            sizes<br>
            title<br>
            type
        </td>
        <td>Establishes a connection between the current document and an external source.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;script&gt;...&lt;/script&gt;</code></td>
        <td class="center-table-element">
            async<br>
            cross-origin<br>
            defer<br>
            integrity<br>
            nomodule<br>
            referrerpolicy<br>
            src<br>
            type<br>
        </td>
        <td>Allows the use of scripts in the document or access to external scripts.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;style&gt;...&lt;/style&gt;</code></td>
        <td class="center-table-element">
            media<br>
            type
        </td>
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
        <td class="center-table-element">
            anonymous<br>
            use-credentials
        </td>
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
        <td class="center-table-element">
            content-security-policy<br>
            content-type<br>
            default-style<br>
            refresh
        </td>
    </tr>
    <tr>
        <td class="center-table-element">
            href<br>
            Specifies location of the linked document.
        </td>
        <td class="center-table-element">url</td>
    </tr>
    <tr>
        <td class="center-table-element">
            hreflang<br>
            Language of the text in the linked source.
        </td>
        <td class="center-table-element">lanaguge</td>
    </tr>
    <tr>
        <td class="center-table-element">
            media<br>
            All the devices the media can be viewed on.
        </td>
        <td class="center-table-element">
            all<br>
            aspect-ratio<br>
            color<br>
            color-index<br>
            grid<br>
            height<br>
            monochrome<br>
            orientation<br>
            print<br>
            resolution<br>
            scan<br>
            screen<br>
            speech<br>
            width
        </td>
    </tr>
    <tr>
        <td class="center-table-element">
            name<br>
            The name for the metadata the tag is about.
        </td>
        <td class="center-table-element">
            application-name<br>
            author<br>
            description<br>
            generator (software packages)<br>
            keyword<br>
            viewport
        </td>
    </tr>
    <tr>
        <td class="center-table-element">
            nomodule<br>
            Whether the script should not be executed in browsers supporting ES2015 modules.
        </td>
        <td class="center-table-element">
            true<br>
            false
        </td>
    </tr>
    <tr>
        <td class="center-table-element">
        referrerpolicy<br>
        The referrer information to send when fetching a script.
        </td>
        <td class="center-table-element">
            no-referrer<br>
            no-referrer-when-downgrade<br>
            origin<br>
            origin-when-cross-origin<br>
            unsafe-url
        </td>
    </tr>
    <tr>
        <td class="center-table-element">
            rel<br>
            The relationship between the current document and the linked document.
        </td>
        <td class="center-table-element">
            alternate<br>
            author<br>
            dns-prefetch<br>
            help<br>
            icon<br>
            license<br>
            next<br>
            pingback<br>
            preconnect<br>
            prefetch<br>
            preload<br>
            prerender<br>
            prev<br>
            search<br>
            stylesheet
        </td>
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
        </td>
        <td class="center-table-element">text/css</td>
    </tr>
    <tr>
        <td class="center-table-element">
            type<br>
        </td>
        <td class="center-table-element">media type</td>
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
        <td>Null</td>
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
            <li> href (url) - specifies location of the linked document.
            <li> hreflang (language) - language of the text in the linked source.
            <li> media (all | aspect-ratio | color | color-index | grid | height | monochrome | orientation | print | resolution | scan | screen | speech | width) - all the devices the media can be viewed on.
            <li> referrerpolicy (no-referrer | no-referrer-when-downgrade | origin | origin-when-cross-origin | unsafe-url) - the referrer to use when fetching the resource.
            <li> rel (alternate | author | dns-prefetch | help | icon | license | next | pingback | preconnect | prefetch | preload | prerender | prev | search | stylesheet) -  the relationship between the current document and the linked document. 
            <li> sizes (height x width) - only for icons.
            <li> title (text) - defines preferred or alternate stylesheet.
            <li> type (media type)
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
            <li> type (media type)
        </td>
        <td>Allows the use of scripts in the document or access to external scripts.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;style&gt;...&lt;/style&gt;</code></td>
        <td>
            <li> media (all | aspect-ratio | color | color-index | grid | height | monochrome | orientation | print | resolution | scan | screen | speech | width) - all the devices the media can be viewed on.
            <li> type (text/css) 
        </td>
        <td>Contains the code that changes the colors, size, spacing, and other UI aspects of the tags and content.</td>
    </tr>
    <tr>
        <td class="center-table-element"><code>&lt;noscript&gt;...&lt;/noscript&gt;</code></td>
        <td>Null</td>
        <td>Alternate content that is displayed when javascript is not allowed or available.</td>
    </tr>
</table>

### Body Structure  
#### Text & Text Formatting  
---
external: false
draft: true
title: "Extended markdown style guide"
description: "In addition to supporting all basic Markdoc syntax, this template also supports extended markdown syntax to render custom components."
date: 2022-11-01
---

This blog's markdown is powered by [Markdoc](https://markdoc.dev/). In addition to supporting all basic markdown syntax, this blog also supports extended syntax to render custom components that are not conventionally available via basic markdown. This post is an example to showcase all available extended markdown syntax.

## Code Blocks

Syntax highlighting is done using [Prism.js](https://github.com/PrismJS/prism). You can customise to whichever theme you want from the [plenty available prism themes](https://github.com/PrismJS/prism-themes).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Images

![Blogster](/images/blogster.png)

Syntax highlighting is done using [Prism.js](https://github.com/PrismJS/prism) with the default [nord theme](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-nord.css). You can customise to whichever theme you want from the [plenty available prism themes](https://github.com/PrismJS/prism-themes).

## HTML Code Block

An example `HTML` code block.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## JSX Code Block

An example `jsx` code block.

```jsx
const Greet = () => {
  const message = `Hello World!`;
  return <div>{message}</div>;
};
```

## CSS Code Block

An example `css` code block.

```css
.layout {
  display: grid;
  grid-template-columns: 5rem minmax(0, 1fr) 4rem;
}
```

...and many more. [Explore all the languages supported by Prism.js](https://prismjs.com/#supported-languages).

## YouTube Video

You can embed YouTube videos in your blog posts.

{% youtube url="https://www.youtube-nocookie.com/embed/StTqXEQ2l-Y" label="Everything is awesome - Lego movie song" /%}

## Tweet

You can embed tweets in your blog posts.

{% tweet url="https://twitter.com/flexdinesh/status/1605685194312122370" /%}

## CodePen

You can embed codepens in your blog posts.

{% codepen url="https://codepen.io/ruphaa/pen/eYJqjgq" title="Ecosystem - Pen in CSS by Ruphaa" /%}

## GitHub Gist

You can embed GitHub gists in your blog posts.

{% githubgist id="d96064c9c4ef2e8ef71c90a10ffcf3b2" /%}

## Lesser Known HTML Elements

### abbr

{% abbr title="Graphics Interchange Format" %}GIF{% /abbr %} is a bitmap image format.

### sub

H{% sub %}2{% /sub %}O

### sup

X{% sup %}n{% /sup %} + Y{% sup %}n{% /sup %} = Z{% sup %}n{% /sup %}

### kbd

Press {% kbd %}{% kbd %}CTRL{% /kbd %}+{% kbd %}ALT{% /kbd %}+{% kbd %}Delete{% /kbd %}{% /kbd %} to end the session.

### mark

Most {% mark %}salamanders{% /mark %} are nocturnal, and hunt for insects, worms, and other small creatures.

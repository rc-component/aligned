# Aligned

Aligned Component for [react](https://facebook.github.io/react/).

Build with [webpack](https://webpack.github.io/)

## Usage

```
<Aligned
  show={this.state.show}
  to={props.el}
  monitorWindowResize={true}
  style={{zIndex: 99, backgroundColor: 'rgba(0,0,0,0.2)'}}
  delay={200} />
```

## Props

name   | type   | default    | description
-------| ------ | ---------- | ------------
*show  | boolean|            | show the aligned element if true
to     | HTMLElement | parentNode | the element to align to
position | string    | 'tr-tl' | `align-to` option string
monitorWindowResize | boolean | false | whether realign when window is resized


# License

Copyright 2017 chemzqm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

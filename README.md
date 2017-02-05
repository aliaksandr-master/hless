[![npm](http://img.shields.io/npm/v/hless.svg?style=flat-square)](https://www.npmjs.com/package/hless)
[![Bower](https://img.shields.io/bower/v/hless.svg?style=flat-square)](https://github.com/aliaksandr-master/hless)
[![npm](http://img.shields.io/npm/l/hless.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-master/hless.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/hless)
[![devDependency Status](https://david-dm.org/aliaksandr-master/hless/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/hless#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-master/hless.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-master/hless)

# HLESS
Small powerfull mixin library for less. 

Css utils and css hacks kit.

## Setup
To install hless from npm, run:

```shell
$ npm install hless --save
# or
$ bower install hless --save
```

Finally, use in your `less` file:
```css
@import "node_modules/hless/lib/index.less";

// do something usefull
```

### Features
```less
// STRUCTURE ELEMENTS:

._grid-row(@margin: 0);
._grid-column(@factor, @margin: 0);
._grid-column-factor(@factor);

._center();

._block_justify_parent();
._block_justify_child();
._block_justify_child(@font_size, @line_height);

._position_middle(@height);

._position_middle_parent(@height: 100%);
._position_middle_child();

._clearfix();




// FIGURES:
// counter
._counter(@attr_name, @font_size, @bg, @color, @opacity: 1, @right: -3px, @bottom: -5px);

// rectangle
._ratio(@width, @height);
._ratio_before(@width, @height);

// fake element placeholders
._fake-text(@color-fake: #eee, @width: 80%);
._fake-icon(@color-fake: #eee, @width: 100%, @height-ratio: 1, @radius: 0);

// triangle
._triangle_color(@color);
._triangle_size(@size);

._triangle_bottom();
._triangle_bottom(@size);
._triangle_bottom(@size, @color);

._triangle_top();
._triangle_top(@size);
._triangle_top(@size, @color);

._triangle_left();
._triangle_left(@size);
._triangle_left(@size, @color);

._triangle_right();
._triangle_right(@size);
._triangle_right(@size, @color);

._triangle_right_top();
._triangle_right_top(@size);
._triangle_right_top(@size, @color);

._triangle_right_bottom();
._triangle_right_bottom(@size);
._triangle_right_bottom(@size, @color);

._triangle_left_top();
._triangle_left_top(@size);
._triangle_left_top(@size, @color);

._triangle_left_bottom();
._triangle_left_bottom(@size);
._triangle_left_bottom(@size, @color);




// STYLES
._square-pattern-bg (@bgColor: white, @squareColor: rgba(0,0,0,0.1), @squareSize: 10px);



// TEXT ELEMENTS
._selection_disabled(@color: #444);

._placeholder(@color, @font_style: italic);




// CSS3_shim 

._rotate_ie(@deg);

._grad_h_ie(@startColor, @endColor);

._grad_v_ie(@startColor, @endColor);

._opacity_ie(@rate);
```

### Similar and additional projects
You can use this library with another less libraries without name conflicts. This is good idea. 

- [less-elements](http://lesselements.com/)
- [lesshat](https://github.com/madebysource/lesshat)
- [animate.less](https://github.com/machito/animate.less)
- [less-mixins](https://github.com/drublic/less-mixins)


### Thank you for usage

## License
MIT

## Support
If you have any problems, catch the bug or have any suggestion - please [find an existing issue or create new](https://github.com/aliaksandr-master/hless/issues)

## Contributing
Do that! [How to contribute open-source projects](https://guides.github.com/activities/contributing-to-open-source/)

### Together we can change the world!

[![npm](http://img.shields.io/npm/v/hless.svg?style=flat-square)](https://www.npmjs.com/package/hless)
[![Bower](https://img.shields.io/bower/v/hless.svg?style=flat-square)](https://github.com/aliaksandr-pasynkau/hless)
[![npm](http://img.shields.io/npm/l/hless.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/hless.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/hless)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/hless/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/hless#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/hless.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/hless)

# HLESS
Small powerfull mixin library for less preprocessor of css. 

Css utils and css hacks kit.

## Usage
To install hless from npm, run:

```shell
# npm:
$ npm install hless --save

# bower:
$ bower install hless --save
```

Finally, use in your `less` file:
```css
@import "bower_components/hless/lib/index";

// do something usefull
```

### Features
```css
// STRUCTURE ELEMENTS:
._box_sizing(@type);

._inline_block_old();

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
._clearfix_hard();




// FIGURES:
// counter
._counter(@attr_name, @font_size, @bg, @color, @opacity: 1, @right: -3px, @bottom: -5px);

// rectangle
._ratio(@width, @height);
._ratio_before(@width, @height);

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




// TEXT ELEMENTS
._text_overflow(@overflow: ellipsis, @wrap: nowrap);

._selection_disabled(@color: #444);

._placeholder(@color, @font_style: italic);




// CSS3_shim 

._rotate_ie(@deg);

._grad_h_ie(@startColor, @endColor);

._grad_v_ie(@startColor, @endColor);

._opacity_ie(@rate);


.base-typography {
	@typo-fs: 16px;
    @typo-fs-h1: 32px*1em/@typo-fs;
    @typo-fs-h2: 27px*1em/@typo-fs;
    @typo-fs-h3: 24px*1em/@typo-fs;
    @typo-fs-h4: 18px*1em/@typo-fs;
    @typo-fs-quote: 24px*1em/@typo-fs;

    @typo-font: Arial, Helvetica, sans-serif;
    @typo-font-code: 'Corner New', monospace;
    @typo-font-quote: Georgia, 'Times New Roman', serif;

    @typo-color: #444444;
    @typo-color-anchor: #cb0000;
    @typo-color-header: #000000;
    @typo-color-quote: gray;

    @typo-border-color-table: #dddddd;
    @typo-border-color-code: @typo-border-color-table;
    @typo-border-color-quote: @typo-color-anchor;
    @typo-border-color-hr: @typo-border-color-table;

    @typo-padding: 4px*1em/@typo-fs;
    @typo-padding-big: 4*@typo-padding;
    @typo-padding-table: @typo-padding;
    @typo-padding-list: 8*@typo-padding;

    @typo-line-height: 1.4;

    @typo-weight-header: bold;

	._typo();
}
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
If you have any problems, catch the bug or have any suggestion - please [find an existing issue or create new](https://github.com/aliaksandr-pasynkau/hless/issues)

## Contributing
Do that! [How to contribute open-source projects](https://guides.github.com/activities/contributing-to-open-source/)

### Together we can change the world!

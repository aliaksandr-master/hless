[![npm](http://img.shields.io/npm/v/hless.svg?style=flat-square)](https://www.npmjs.com/package/hless)
[![Bower](https://img.shields.io/bower/v/hless.svg?style=flat-square)](https://github.com/aliaksandr-pasynkau/hless)
[![npm](http://img.shields.io/npm/l/hless.svg?style=flat-square)](http://opensource.org/licenses/MIT)
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

._inline_block();
._inline_block(@v-align);

._center();
._center(@width);

._size(@w, @h);
._size(@w);

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
._ratio(@width, @height, @element: 'after');

// circle
._circle(@size);
._circle_color(@background);
._circle_border(@border);

._circle(@size, @background);
._circle(@size, @background, @border);

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
._text(@f-size, @l-height);
._text(@size);
._text_hide(); 
._text_overflow(@overflow: ellipsis, @wrap: nowrap);

._selection(@bg, @color: #fff, @shadow: none);
._selection_disabled(@color: #444);

._placeholder(@color, @font_style: italic);

._link(@normal, @hover, @active, @visited, @td_normal: underline, @td_focus: none);




// CSS3 
._border_radius(@r);
._border_radius_top_left(@r);
._border_radius_top_right(@r);
._border_radius_bottom_right(@r);
._border_radius_bottom_left(@r);

._box_shadow(@a);
._box_shadow(@a, @b);

._animate(@time: 0.3s, @easing: linear, @elements: all);
._transition(@transition);
._transition_delay(@delay);
._transition_duration(@duration);
._transform_scale(@ratio);
._transform_translate(@x, @y);
._transform_skew(@x, @y);
._transform_translate3d(@x, @y, @z);

._rotate(@deg);
._rotate_ie(@deg);

._grad_h(@startColor, @endColor);
._grad_h_ie(@startColor, @endColor);

._grad_v(@startColor, @endColor);
._grad_v_ie(@startColor, @endColor);

._grad_v_multi(@startColor, @midColor1, @midColor2, @endColor);
._grad_h_multi(@startColor, @midColor1, @midColor2, @endColor);

._grad_radial(@innerColor: #555, @outerColor: #333);
._background_size(@size);

._opacity(@rate);


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

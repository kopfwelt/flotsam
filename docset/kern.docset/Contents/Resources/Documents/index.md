# Kern
Kern is a CSS framework based on [SUIT CSS](https://suitcss.github.io) by [KOPFWELT](https://kopfwelt.com).
## Contents
{{TOC}}

## Usage
Install kern framework using npm:  
```
npm i -S kopfwelt/kern
```

In your main css file:

```css
@import 'kern';
@import 'kern-theme';
@import 'kern/component-name';
```


## File structure
### Framework

```

_kern.scss
components/
  burger/
    _burger.scss
    burger.hbs
  modal/
    _magnificpopup.scss
modules/
theme/
tools/
```
### Theme

```
_config.scss
_elements.scss
_layout.scss
_theme-default.scss
config/
  _breakpoints.scss
  _colors.scss
  _easings.scss
  _fonts.scss
  _spacing.scss
elements/
  _anchors.scss
  _buttons.scss
  _defaults.scss
  _divider.scss
  _forms.scss
  _html.scss
  _icons.scss
  _images.scss
  _typography.scss
layout/
  _nav.scss
  regions/
    _footer.scss
    _header.scss
```

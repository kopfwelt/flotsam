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

├── kern.css                      # →
├── components/                   # →
│   ├── burger/                   # →
│   ├── burger.css                # →
│   ├── burger.hbs                # →
│   └── modal/                    # →
│       └── magnificpopup.css     # →
├── modules/                      # →
├── theme/                        # →
└── tools/                        # →
```
### Theme

```
├── config.css                    # →
├── elements.css                  # →
├── layout.css                    # →
├── theme-default.css             # →
├── config/                       # →
│   ├── breakpoints.css           # →
│   ├── colors.css                # →
│   ├── easings.css               # →
│   ├── fonts.css                 # →
│   └── spacing.css               # →
├── elements/                     # →
│   ├── anchors.css               # →
│   ├── buttons.css               # →
│   ├── defaults.css              # →
│   ├── divider.css               # →
│   ├── forms.css                 # →
│   ├── html.css                  # →
│   ├── icons.css                 # →
│   ├── images.css                # →
│   └── typography.css            # →
└── layout/                       # →
    ├── nav.css                   # →
    └── regions/                  # →
        ├── footer.css            # →
        └── header.css            # →
```

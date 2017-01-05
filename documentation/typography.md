# Typography

## General
Title classes (title1, title2, title3...) only include:

```
font-family
font-size
font-weight
line-height
letter-spacing
text-transform
```

## Rules
- If there has to be changes to the padding/margin or other attributes, they will be resolved in the content-specific classes.
- **Never** use the titles or headings (h1, h2...) in a nested context like below.

```
.Teaser-title {
  title1 {
    margin-top: 20px;
  }
  h2 {
    color: red;
  }
}
```

## Examples

How to handle attribute changes:
```
<div class=".Teaser">
  <h1 class=".Teaser-title title1">Title of the Teaser</h1>
</div>


/* typography.css */

:root {
  --title1: {
    font-size: 1rem;
  }
}

.title1 {
  @apply --title1;
}


/* Teaser Component styling */

.Teaser-title {
  margin:
  padding:
  ...
}
```

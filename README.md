# Med-landing (Discourse Theme Component)

## Overview

**Med-landing** is a Discourse **theme component** that adds a custom landing page for
**private Discourse forums**.

When the forum is private and a visitor is **not logged in**, the default Discourse
homepage is replaced with a custom landing page.  
The landing page is **not shown** on login or signup screens and does **not affect**
logged-in users.

This component is implemented using Discourse-supported **theme connectors only**
(no Ember routing overrides, no JavaScript hacks).

---

## What this component does

- Shows a **custom landing page** on `/` for logged-out users
- Hides the default Discourse homepage for anonymous visitors
- Keeps `/login` and `/signup` pages unchanged
- Does not affect logged-in users or forum navigation
- Does not override Discourse routing or core behavior

---

## What this component does NOT do

- It does not modify Discourse authentication
- It does not replace the login or signup pages
- It does not add redirects or JavaScript routing
- It does not change forum behavior for logged-in users

---

## How it works

- Uses the `above-main-container` theme connector to render the landing page
- Uses CSS to control visibility based on Discourse page state
- Relies only on Discourse-provided DOM structure and classes
- Safe for Discourse upgrades

---

## Intended use case

This component is intended for:

- **Private Discourse forums**
- Communities that want a branded or explanatory landing page
- Forums where visitors must log in before accessing content

Examples:
- Professional communities
- Internal company forums
- Member-only discussion spaces

---

## Installation

1. Go to **Admin → Customize → Themes**
2. Add this repository as a **Theme Component**
3. Attach it to your active theme
4. Ensure the forum is set to **private** if required

No additional configuration is required.

---

## Compatibility

- Discourse: current stable versions
- Works with private forums
- No JavaScript dependencies
- No plugin dependencies

---

## License

This theme component is provided as-is.  
See the `license_url` in `about.json` if specified.

---

## Author

Pushpender

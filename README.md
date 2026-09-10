# JanSamadhan — Professional Static Frontend

A cleaned, responsive, dependency-light static prototype for **JanSamadhan — जनसमाधान · The Problem Bridge**.

## Structure

```text
JanSamadhan-Professional/
├── index.html
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    └── img/
```

## Run locally

Because this is a static frontend, no build step is required.

Recommended: serve the folder with a small local HTTP server so browser APIs such as geolocation and speech recognition behave more consistently.

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Included fixes

- Responsive navigation with accessible mobile-menu state.
- Safer text escaping for dynamically generated content.
- Better reset behavior for the report form and image preview URLs.
- Graceful handling of unsupported Speech Recognition and Geolocation APIs.
- Prevents duplicate animation loops and handles reduced-motion preferences.
- Improved mobile layouts for the bridge, form, registry, modal, stats and partner sections.
- Removes most inline styling so presentation lives in the stylesheet.
- Adds semantic labels, button types and accessibility attributes where appropriate.
- Keeps the original local/demo architecture: no backend or external application server is introduced.

## External resources

The page still loads Google Fonts and Lucide Icons from their CDNs. The application logic itself remains client-side.

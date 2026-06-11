# After the Bell

A static digital counterstory website about poverty, work, and education. It uses textual storytelling, real photos, official report figures, scroll-based spatial layout, and sourced data cards.

## Files

- `index.html` contains the story and source links.
- `styles.css` creates the visual layout and scrollytelling scenes.
- `script.js` handles scroll progress and scene changes.
- `assets/` contains the local images used by the website.

## Research note

Maya is a fictional composite character. The story is based on patterns from student-voice reporting and statistics from the NCES `Report on the Condition of Education 2024`.

## Cache-busting

The page uses versioned asset URLs like `styles.css?v=20260610-1` so GitHub Pages and browsers are less likely to serve stale CSS, JavaScript, or images after a new push. When updating the site, bump that version string in `index.html`.

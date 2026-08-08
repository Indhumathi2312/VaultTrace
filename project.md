# PROJECT.md

# HTML → Next.js Exact Conversion Project

## 1. Project Objective

Convert the provided **HTML project into a production-ready Next.js project** while preserving the original website as accurately as possible.

The converted Next.js website must visually and behaviorally match the original HTML website.

### Primary Rule

> **Do NOT redesign, modernize, simplify, or reinterpret the original HTML design.**

The original HTML project is the **single source of truth**.

Everything that already exists in the HTML project must be preserved:

* Layout
* Section structure
* Spacing
* Typography
* Font sizes
* Font weights
* Colors
* Backgrounds
* Borders
* Border radius
* Shadows
* Images
* Icons
* Videos
* Gradients
* Hover effects
* Transitions
* Animations
* Scroll effects
* Responsive behavior
* Element positioning
* Widths and heights
* Breakpoints
* Content
* Buttons
* Navigation
* Cards
* Forms
* Interactive elements

The goal is an **exact functional and visual conversion**, not a redesign.

---

# 2. Required Technology Stack

Use the latest stable versions available at the time of implementation.

### Required

* Next.js — latest stable version
* React — latest stable version compatible with Next.js
* JavaScript only
* JSX only
* Tailwind CSS — latest stable version compatible with the selected Next.js version
* Framer Motion — latest stable version when required for animations

### Important

Do NOT use:

* TypeScript
* `.ts`
* `.tsx`
* TypeScript configuration
* Unnecessary UI libraries
* Unnecessary component libraries
* Unnecessary CSS frameworks
* Bootstrap
* Material UI
* Chakra UI
* Ant Design

Use the minimum number of dependencies required.

---

# 3. JavaScript Requirement

This project must use **JavaScript only**.

Allowed:

```text
.js
.jsx
```

Not allowed:

```text
.ts
.tsx
```

Do not introduce TypeScript anywhere in the project.

---

# 4. Source of Truth

The provided HTML project is the primary reference.

Before writing any Next.js code:

1. Inspect the complete HTML project.
2. Inspect all CSS files.
3. Inspect all JavaScript files.
4. Inspect all images.
5. Inspect all videos.
6. Inspect fonts.
7. Inspect SVGs.
8. Inspect animations.
9. Inspect responsive rules.
10. Inspect hover states.
11. Inspect scroll behavior.
12. Inspect DOM hierarchy.
13. Inspect external libraries already being used.
14. Understand the complete page structure.

Do not start coding after looking at only the first section.

Understand the entire original website first.

---

# 5. Exact Conversion Requirement

The converted website must match the original HTML website as closely as technically possible.

### Preserve exactly

```text
HTML structure
↓
Section hierarchy
↓
Layout
↓
Dimensions
↓
Spacing
↓
Typography
↓
Colors
↓
Images
↓
Animations
↓
Interactions
↓
Responsive behavior
```

Do not make arbitrary improvements.

For example:

### Original

```text
padding: 82px 64px;
font-size: 72px;
line-height: 0.95;
```

Do not change it to:

```text
padding: 80px 60px;
font-size: 64px;
line-height: 1;
```

unless the original behavior requires a responsive change.

---

# 6. Section-by-Section Development

The website must be converted **section by section**.

Do not create the entire page as one huge JSX component.

Example structure:

```text
Header
Hero
About
Services
Projects
Features
Testimonials
CTA
Footer
```

Each meaningful section should become a reusable component.

Example:

```text
components/
├── Header.jsx
├── Hero.jsx
├── About.jsx
├── Services.jsx
├── Projects.jsx
├── Testimonials.jsx
├── CTA.jsx
└── Footer.jsx
```

If a section contains repeated UI patterns, create smaller reusable components.

Example:

```text
components/
├── cards/
│   ├── ProjectCard.jsx
│   └── ServiceCard.jsx
```

---

# 7. Component Architecture

Use reusable components wherever repetition exists.

Avoid:

```jsx
<div>...</div>
<div>...</div>
<div>...</div>
<div>...</div>
```

when the structure can be represented by a reusable component.

Prefer:

```jsx
{items.map((item) => (
  <Card key={item.id} {...item} />
))}
```

However:

> Do not over-componentize simple one-time elements.

The goal is:

**Reusable + maintainable + lightweight code.**

---

# 8. Code Weight Optimization

The final project must have a low and efficient code footprint.

Follow these principles:

* Reuse components.
* Avoid duplicate JSX.
* Avoid duplicate CSS.
* Avoid unnecessary JavaScript.
* Avoid unnecessary dependencies.
* Avoid unnecessary client components.
* Prefer Server Components where possible.
* Use `"use client"` only when required.
* Avoid unnecessary state.
* Avoid unnecessary effects.
* Avoid unnecessary event listeners.
* Avoid duplicate animation logic.
* Avoid large third-party libraries for simple functionality.

Do not sacrifice visual accuracy for code reduction.

The priority is:

```text
Exact Design
+
Correct Functionality
+
Performance
+
Maintainability
```

---

# 9. Tailwind CSS Requirement

Use Tailwind CSS for styling.

Convert the original CSS into Tailwind utilities wherever practical.

Example:

```css
padding: 24px;
background: #111111;
border-radius: 16px;
```

should preferably become:

```jsx
className="p-6 bg-[#111111] rounded-2xl"
```

Do not blindly replace every CSS property with arbitrary Tailwind classes if doing so reduces accuracy.

For complex styles that cannot be cleanly represented with Tailwind:

* Use CSS modules or global CSS only when necessary.
* Keep custom CSS minimal.
* Preserve the original visual result.

### Important

Do not change the original design simply because a Tailwind utility is easier to use.

---

# 10. Exact Typography

Typography must match the original HTML.

Inspect and preserve:

* Font family
* Font size
* Font weight
* Letter spacing
* Line height
* Text transform
* Text decoration
* Font style
* Text color
* Text alignment

If the original project contains local font files, use them.

Example:

```text
public/fonts/
```

Do not replace the original font with another font unless the original font is genuinely unavailable.

---

# 11. Exact Colors

Preserve the original color values.

Inspect:

```text
background-color
color
border-color
box-shadow
gradient colors
hover colors
active colors
```

Do not approximate colors visually.

If the original uses:

```text
#0F0F0F
```

do not replace it with:

```text
bg-black
```

if the resulting color is different.

Use the exact value when necessary.

---

# 12. Images and Local Assets

All existing local assets must be reused.

Inspect:

```text
images
photos
SVGs
icons
videos
GIFs
fonts
background images
```

If the asset already exists locally, **do not download another replacement asset**.

Use assets from the existing project.

---

# 13. Public Folder

If an image already exists inside the `public` folder, reuse it.

Example:

```text
public/
├── images/
├── icons/
├── videos/
└── fonts/
```

Use:

```jsx
<img src="/images/example.png" alt="" />
```

or Next.js Image where appropriate.

For static local images, prefer:

```jsx
import Image from "next/image";
```

when it does not change the original rendering behavior.

---

# 14. Image Accuracy

Images must preserve:

* Aspect ratio
* Width
* Height
* Object fit
* Object position
* Border radius
* Crop
* Position
* Overlay
* Opacity
* Blur
* Filter
* Animation

Do not replace an image with a visually similar image.

Use the exact local image whenever available.

---

# 15. SVG and Icons

Inspect the original project for SVGs and icon assets.

If the original uses an SVG:

* Reuse the SVG.
* Preserve its dimensions.
* Preserve its stroke width.
* Preserve its fill.
* Preserve its animation.
* Preserve its positioning.

Do not replace an original icon with a random icon library icon unless absolutely necessary.

---

# 16. Animation Requirement

All animations from the original HTML website must be recreated.

Inspect:

* CSS animations
* CSS transitions
* JavaScript animations
* GSAP animations
* Intersection Observer animations
* Scroll animations
* Hover animations
* Cursor effects
* Parallax
* Image reveal animations
* Text reveal animations
* Loading animations
* Infinite animations
* Transform effects
* Opacity effects
* Scale effects
* Blur effects

---

# 17. Framer Motion

Use **Framer Motion** when it is the most suitable solution for recreating the original animation.

Examples:

```jsx
import { motion } from "framer-motion";
```

Use Framer Motion for:

* Scroll reveal
* Fade-in
* Slide-in
* Scale animations
* Stagger animations
* Page transitions
* Hover interactions
* Layout animations
* Element reveal
* Viewport-based animation

Example:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  ...
</motion.div>
```

But do not use Framer Motion unnecessarily.

If a simple CSS transition exactly reproduces the original behavior, prefer CSS.

---

# 18. Animation Accuracy

Do not create generic animations just because the website should have animations.

Animations must reproduce the original behavior.

Match:

```text
Initial state
Trigger
Delay
Duration
Easing
Direction
Distance
Scale
Opacity
Rotation
Stagger
Viewport behavior
Repeat behavior
Hover behavior
Exit behavior
```

For example, if the original animation takes:

```text
700ms
```

do not arbitrarily use:

```text
300ms
```

unless testing proves the original behavior requires adjustment.

---

# 19. Responsive Design

Responsive behavior must match the original HTML project.

Test at multiple screen sizes.

Minimum testing sizes:

```text
320px
375px
390px
414px
480px
640px
768px
820px
1024px
1280px
1440px
1600px
1920px
```

Also test:

```text
Desktop
Laptop
Tablet
Mobile
Large Desktop
```

---

# 20. Responsive Rule

Do NOT redesign the mobile version.

If the original HTML has specific mobile behavior, reproduce it exactly.

Preserve:

* Breakpoints
* Element stacking
* Navigation behavior
* Font scaling
* Image scaling
* Spacing
* Section height
* Visibility
* Alignment
* Overflow
* Horizontal scrolling
* Mobile menu
* Mobile animations

---

# 21. Avoid Unnecessary Responsive Changes

Do not automatically add:

```text
sm:
md:
lg:
xl:
2xl:
```

everywhere.

Use breakpoints only when the original design changes.

The responsive CSS should be based on the original website behavior.

---

# 22. Header / Navigation

The header must preserve the original:

* Height
* Position
* Logo size
* Navigation spacing
* Font
* Colors
* Hover effect
* Active state
* Sticky behavior
* Fixed behavior
* Background
* Blur
* Border
* Shadow
* Mobile menu
* Scroll behavior

If the original header changes while scrolling, reproduce that behavior exactly.

---

# 23. Interactive Elements

Every interactive element must continue to work.

Examples:

* Buttons
* Links
* Navigation
* Mobile menu
* Tabs
* Accordions
* Sliders
* Forms
* Modals
* Dropdowns
* Hover states
* Scroll controls

Do not leave dummy interactions.

---

# 24. HTML Semantics

Use semantic HTML where it does not change the visual output.

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

instead of unnecessary generic containers.

Maintain accessibility without changing the design.

---

# 25. Accessibility

Maintain reasonable accessibility:

* Proper alt text
* Keyboard navigation
* Focus states
* Semantic buttons
* Proper links
* ARIA attributes when necessary
* Form labels

Do not remove functionality or visual behavior to implement accessibility.

---

# 26. Next.js Architecture

Use a clean Next.js architecture.

Example:

```text
project/
│
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   └── ...
│
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Footer.jsx
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── videos/
│   └── fonts/
│
├── package.json
├── next.config.js
├── postcss.config.js
├── jsconfig.json
├── .gitignore
└── README.md
```

Adjust the structure according to the actual project.

Do not create unnecessary folders.

---

# 27. Existing Project Folder Requirement

If an existing project folder is provided:

> Work inside the existing project folder.

Do not create another unnecessary nested project.

Incorrect:

```text
project/
└── next-project/
    └── ...
```

Correct:

```text
project/
├── app/
├── components/
├── public/
└── package.json
```

unless the user explicitly requests a separate folder.

---

# 28. Static Export Requirement

The project must generate a static production output.

Configure Next.js so that:

```bash
npm run build
```

generates:

```text
out/
```

The final output must be suitable for static hosting.

The `out` folder must contain the production-ready static website.

---

# 29. Build Configuration

Use the appropriate current Next.js static export configuration.

The implementation should support:

```bash
npm run build
```

and produce:

```text
out/
```

Do not use deprecated Next.js configuration patterns when a current equivalent exists.

---

# 30. Production Build

The final project must successfully execute:

```bash
npm install
npm run build
```

without errors.

The build must finish successfully.

No unresolved imports.

No missing assets.

No invalid JSX.

No hydration errors.

No build warnings caused by implementation mistakes.

---

# 31. Console Requirement

The browser console must have:

```text
0 errors
```

and preferably:

```text
0 unnecessary warnings
```

Fix:

* React errors
* Hydration errors
* Missing key warnings
* Invalid DOM nesting
* Missing imports
* Broken image paths
* Animation errors
* JavaScript errors
* Runtime errors
* Next.js errors

Do not ignore console errors.

---

# 32. Hydration Safety

Because Next.js may render components on the server:

Avoid hydration mismatches.

Be careful with:

```javascript
window
document
localStorage
sessionStorage
Date
Math.random()
```

If browser-only APIs are required:

```jsx
"use client";
```

and appropriate lifecycle handling should be used.

Do not unnecessarily convert the entire application into Client Components.

---

# 33. Performance

The website must be optimized for production performance.

Use:

* Server Components where possible
* Minimal JavaScript
* Optimized images
* Lazy loading where appropriate
* Efficient animations
* Reusable components
* Minimal dependencies
* Code splitting where useful
* Proper asset loading
* Avoid unnecessary re-renders

Do not optimize by changing the visual design.

---

# 34. Animation Performance

Animations must be smooth.

Prefer GPU-friendly properties:

```text
transform
opacity
```

Avoid unnecessary animations of:

```text
width
height
top
left
margin
padding
```

when transform-based animation can reproduce the same result.

Avoid animation logic that causes excessive React re-renders.

---

# 35. Image Performance

Use optimized image loading where it does not affect the original visual behavior.

Consider:

```text
priority
loading
sizes
width
height
```

appropriately.

Do not aggressively lazy-load above-the-fold images if that causes visible layout differences.

---

# 36. Layout Stability

Avoid layout shifts.

Images should have predictable dimensions where possible.

Preserve:

* Aspect ratios
* Section heights
* Container sizes
* Image dimensions

The page should not visibly jump while loading.

---

# 37. Visual Verification

After implementing every major section:

1. Run the Next.js application.
2. Open the original HTML website.
3. Open the Next.js version.
4. Compare them side-by-side.
5. Compare at the same viewport size.
6. Check spacing.
7. Check typography.
8. Check colors.
9. Check images.
10. Check alignment.
11. Check animations.
12. Check hover states.
13. Check responsive behavior.

Do not assume the implementation is correct just because the code looks correct.

---

# 38. Pixel-Level Comparison

Perform visual comparison section by section.

Check:

```text
Header
Hero
Section 1
Section 2
Section 3
...
Footer
```

For each section compare:

```text
Position
Width
Height
Padding
Margin
Font
Color
Image
Border
Shadow
Animation
Responsive behavior
```

Fix visual differences before moving to the next section.

---

# 39. Browser Testing

Use browser inspection/testing tools where available.

Check:

```text
Desktop
Tablet
Mobile
```

Use browser DevTools to inspect:

* Computed styles
* Box model
* Font rendering
* Element dimensions
* Breakpoints
* Overflow
* Positioning
* Animations
* Network requests
* Console

---

# 40. Original vs Next.js Validation

The final implementation should be validated using this process:

```text
Original HTML
      ↓
Inspect
      ↓
Implement Section
      ↓
Run Next.js
      ↓
Visual Compare
      ↓
Fix Differences
      ↓
Responsive Test
      ↓
Animation Test
      ↓
Console Test
      ↓
Build Test
      ↓
Next Section
```

Repeat until the entire page is complete.

---

# 41. Do Not Skip Sections

Every section from the original HTML must be converted.

Do not:

* Remove sections
* Hide sections
* Replace sections with placeholders
* Simplify sections
* Skip animations
* Skip mobile behavior
* Replace images
* Remove content

unless the original project itself does not contain those elements.

---

# 42. Do Not Invent Design

Do not introduce:

* New colors
* New sections
* New buttons
* New animations
* New layouts
* New fonts
* New cards
* New content
* New UI patterns

The implementation must follow the source HTML.

---

# 43. Content Preservation

Preserve the exact:

* Text
* Headings
* Paragraphs
* Button labels
* Navigation labels
* Image assets
* Links
* Icons

Do not rewrite content unless explicitly requested.

---

# 44. Links

Existing links should remain functional.

If the original has:

```html
<a href="/about">
```

preserve the intended destination.

Use Next.js routing where appropriate without changing the user experience.

---

# 45. SEO

Preserve or improve the original SEO metadata without changing the visible UI.

Configure:

* Title
* Description
* Viewport
* Open Graph metadata
* Favicon
* Canonical metadata when appropriate

Do not remove existing metadata.

---

# 46. Favicon

If the original project contains a favicon:

> Reuse the exact favicon.

Do not generate a replacement if an original asset exists.

---

# 47. Environment Variables

If environment variables are required:

Use:

```text
.env.local
```

Never commit secrets.

Add appropriate entries to:

```text
.gitignore
```

---

# 48. .gitignore

The project must contain a proper `.gitignore`.

At minimum ignore:

```text
node_modules
.next
out
.env
.env.local
.env.*.local
*.log
.DS_Store
```

Do not ignore required source files or public assets.

---

# 49. Dependency Management

Only install dependencies that are actually required.

Before installing a package, ask:

```text
Can this be implemented with Next.js?
Can this be implemented with React?
Can Tailwind CSS handle it?
Can CSS handle it?
```

If yes, avoid adding another dependency.

---

# 50. Version Policy

Use the **latest stable versions available at the time the project is created**.

Do not intentionally use:

* Deprecated versions
* Old major versions
* Deprecated APIs
* Deprecated configuration
* Legacy Next.js patterns

After installing dependencies, verify compatibility between:

```text
Next.js
React
React DOM
Tailwind CSS
Framer Motion
```

Do not mix incompatible versions.

---

# 51. package.json

The final `package.json` must contain only required dependencies.

Avoid unnecessary packages.

Scripts should include at minimum:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

Add additional scripts only when genuinely useful.

---

# 52. Error Handling

Before completion, check for:

```text
Missing modules
Missing files
Broken imports
Invalid paths
JSX syntax errors
Hydration errors
Runtime errors
Build errors
Console errors
Broken images
Broken links
Animation errors
```

Everything must be resolved.

---

# 53. Final Validation Checklist

Before considering the project complete, verify every item below.

## Structure

* [ ] Next.js project works
* [ ] JavaScript only
* [ ] JSX only
* [ ] No TypeScript
* [ ] Reusable components
* [ ] Clean folder structure
* [ ] No unnecessary files

## Design

* [ ] Original layout preserved
* [ ] Exact section structure
* [ ] Exact spacing
* [ ] Exact colors
* [ ] Exact typography
* [ ] Exact borders
* [ ] Exact shadows
* [ ] Exact images
* [ ] Exact icons
* [ ] Exact backgrounds
* [ ] Exact content

## Animation

* [ ] All original animations recreated
* [ ] Hover animations recreated
* [ ] Scroll animations recreated
* [ ] Transitions recreated
* [ ] Timing matched
* [ ] Easing matched
* [ ] No unnecessary animations
* [ ] Animations are smooth

## Responsive

* [ ] 320px tested
* [ ] 375px tested
* [ ] 390px tested
* [ ] 414px tested
* [ ] 480px tested
* [ ] 640px tested
* [ ] 768px tested
* [ ] 820px tested
* [ ] 1024px tested
* [ ] 1280px tested
* [ ] 1440px tested
* [ ] 1600px tested
* [ ] 1920px tested
* [ ] Mobile behavior matches
* [ ] Tablet behavior matches
* [ ] Desktop behavior matches

## Assets

* [ ] Existing local images reused
* [ ] Public folder assets reused
* [ ] SVGs preserved
* [ ] Fonts preserved
* [ ] Videos preserved
* [ ] No unnecessary duplicate assets

## Code Quality

* [ ] Reusable components
* [ ] Minimal duplication
* [ ] Minimal dependencies
* [ ] Minimal client components
* [ ] No unnecessary state
* [ ] No unnecessary effects
* [ ] Clean JSX
* [ ] Maintainable structure

## Performance

* [ ] Images optimized appropriately
* [ ] Animations performant
* [ ] No unnecessary re-renders
* [ ] No unnecessary JavaScript
* [ ] No unnecessary dependencies
* [ ] Layout shifts minimized

## Browser

* [ ] Page loads correctly
* [ ] No visual glitches
* [ ] No broken images
* [ ] No broken links
* [ ] No overflow issues
* [ ] Hover states work
* [ ] Mobile navigation works
* [ ] Interactive elements work

## Console

* [ ] 0 JavaScript errors
* [ ] 0 React errors
* [ ] 0 hydration errors
* [ ] 0 missing asset errors
* [ ] 0 invalid DOM errors
* [ ] No avoidable warnings

## Build

Run:

```bash
npm install
npm run build
```

Verify:

```text
Build successful
```

Verify:

```text
out/
```

exists after production build.

---

# 54. Final Production Test

After everything is complete:

```bash
npm run build
```

Then verify the generated:

```text
out/
```

folder.

The final website must be production-ready.

The production build must not depend on the development server.

---

# 55. Final Rule

The most important rule of this project is:

> **The original HTML website is the visual and functional source of truth.**

Do not optimize by changing the design.

Do not redesign.

Do not simplify.

Do not approximate.

Do not replace assets unnecessarily.

Do not remove animations.

Do not skip responsive behavior.

Do not introduce TypeScript.

Do not create unnecessary dependencies.

Do not leave console errors.

Do not leave build errors.

The final result should look and behave as if the original HTML website was rebuilt natively in Next.js.

---

# 56. Completion Criteria

The project is considered complete only when all of the following are true:

```text
Original HTML
      ↓
100% sections converted
      ↓
Reusable JSX components
      ↓
Tailwind CSS styling
      ↓
Exact local assets
      ↓
Original animations recreated
      ↓
Responsive behavior matched
      ↓
Visual comparison completed
      ↓
Console = 0 errors
      ↓
Production build successful
      ↓
out/ generated
      ↓
Production-ready Next.js project
```

**Do not declare the project complete until the final Next.js implementation has been visually compared against the original HTML at desktop, tablet, and mobile resolutions.**

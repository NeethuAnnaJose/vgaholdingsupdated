# How to Use the Greek Street Article Page in Another Website

Simple step-by-step guide to reuse this article page in a different project.

---

## Step 1: Copy the Files

Copy these 2 files from this project to your new project:

| From | To (in your new project) |
|------|--------------------------|
| `src/pages/NewsArticle.tsx` | `src/pages/NewsArticle.tsx` |
| `src/pages/NewsArticle.css` | `src/pages/NewsArticle.css` |

---

## Step 2: Copy the Images

Copy these images from `public/` to your new project's `public/` folder:

- `vgalogo.png`
- `Greeklogo.jpg`
- `greek1image.jpg`
- `Greekimage2.jpg`

---

## Step 3: Install React Router

In your new project folder, run:

```bash
npm install react-router-dom
```

---

## Step 4: Add the Route

**What it does:** Tells your website "when someone visits /latest-news/greek-street-sold, show the article page."

**Where to add it:** In `main.tsx` (or wherever your app starts).

**Before (example):**
```tsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />   // Only shows home page
)
```

**After (what to change it to):**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsArticle from './pages/NewsArticle'
import App from './App'        // Your home page
import Header from './Header'  // Your header/navbar

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/latest-news/greek-street-sold" element={
        <>
          <Header />
          <NewsArticle />
        </>
      } />
    </Routes>
  </BrowserRouter>
)
```

**In simple words:** Replace your current `render(...)` with the code above. Change `App` and `Header` to match your project's component names.

---

## Step 5: Add the Scroll CSS

**What it does:** Lets the article page scroll up and down. Without it, the page may be stuck and not scrollable.

**Where to add it:** At the bottom of your `index.css` file (or main global CSS file).

**What to add:** Copy and paste this block at the end of index.css:

```css
/* Article page - allows scrolling */
html.article-page-active,
body.article-page-active {
  overflow-y: auto !important;
  overflow-x: hidden !important;
  height: auto !important;
  min-height: 100vh;
  background: #f8f7f4 !important;
}

#root.article-page-active {
  overflow: visible !important;
  height: auto !important;
  min-height: 100vh;
}
```

**In simple words:** Open index.css, scroll to the bottom, paste the code above. Save the file.

---

## Step 6: Add the Font (optional)

Add to your `index.html` inside `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## Step 7: Set Header Height (if you have a fixed header)

Add to your CSS:

```css
:root {
  --header-height: 80px;  /* Change to your header height */
}
```

---

## Done

Visit: `http://localhost:5173/latest-news/greek-street-sold` (or your dev server URL)

---

## Quick Checklist

- [ ] Step 1: Copy NewsArticle.tsx and NewsArticle.css
- [ ] Step 2: Copy 4 images to public folder
- [ ] Step 3: Run `npm install react-router-dom`
- [ ] Step 4: Add route in App/main
- [ ] Step 5: Add scroll CSS to index.css
- [ ] Step 6: Add font link (optional)
- [ ] Step 7: Set --header-height (optional)

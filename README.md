# 🎂 Birthday Zine — Ivan

A self-contained interactive birthday card web app built as a single HTML file. Styled as a mobile phone UI mockup with a pastel blue and yellow indie-zine aesthetic, animated confetti, and multiple interactive popups.

---

## 📁 File

| File | Description |
|------|-------------|
| `birthday_zine_app.html` | The entire app — HTML, CSS, and JavaScript in one file. No build tools or dependencies required. |

---

## 🚀 How to Run

1. Download `birthday_zine_app.html`
2. Open it in any modern browser (Chrome, Safari, Firefox, Edge)
3. No server, no install, no dependencies — it just works

> **Note:** The app uses Google Fonts (Nunito + Caveat). An internet connection is required for fonts to load correctly. The app still functions offline but will fall back to system fonts.

---

## ✨ Features

### 📱 Phone UI Mockup
- Animated floating phone frame with a gentle bob animation
- Status bar, nav bar, bottom navigation with ribbon-shaped icons
- Floating emoji balloons (`🎈 🎉 🎊`) in the background
- Confetti dot pattern on the page background

### 🎂 Hero Panel
- **"Happy Birthday Ivan!"** banner in Caveat handwriting font
- Animated confetti pieces falling (pink, yellow, blue, coral)
- Two balloons (pink, purple) flanking a layered birthday cake SVG
- **"make a wish 🌟"** caption button — **clickable**, opens the Wish Modal

---

## 🎮 Interactive Popups

### 🌟 Make a Wish Modal
Triggered by clicking **"make a wish 🌟"** in the hero panel.

A cake-shaped popup containing:
- Three decorative candles at the top
- **Mini Map** featuring:
  - SVG hand-drawn forest clusters (top-left and top-right)
  - A winding river with shimmer effect and a small turtle 🐢
  - **Ivan** 🐑 pinned at the bottom-left
  - **Bestie** 🦁 with `₍^. .^₎Ⳋ` at the top-right
  - A wiggly hand-drawn dashed path from bestie to Ivan
  - Grid overlay and "find bestie! →" label
- Close button

### 🎂 Birthday Loop Gallery
Triggered by clicking the **"birthday loop"** card.

A photo gallery popup with:
- 4 slides (emoji illustrations)
- `‹` `›` arrow navigation buttons
- Dot indicator row (tap to jump to any slide)
- Swipe gesture support on mobile
- Close button

---

## 🃏 Cards

| Card | Description |
|------|-------------|
| **Birthday Loop** | Yellow card with outlined birthday cake SVG (two tiers, candles, flames). Opens gallery on click. |
| **Party Theory** | Blue card with silver `#C0C0C0` and gold `#D2B450` animated confetti falling. Says *"arriving Mar 18 — fashionably 6 days early 🎉"* (Ivan's actual birthday is March 24). |

---

## 📋 Recent List

Three clickable list items in the scroll area:

| Item | Emoji | Description |
|------|-------|-------------|
| **past** | 🕰️ | Memories — tap to open photo upload popup |
| **present** | 🎁 | Right now — tap to open photo upload popup |
| **future** | 🔮 | Dreams — tap to open photo upload popup |

Each item opens a **Photo Modal** with a drag-and-drop style upload zone where you can tap to select and preview a photo from your device.

---

## 🎨 Design System

### Colour Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--yellow` | `#F5D800` | Primary accent — buttons, labels, Ivan's tag |
| `--yellow-dark` | `#C8A800` | Borders on yellow elements |
| `--blue` | `#7EC8E3` | Primary UI colour — phone frame, nav, hero border |
| `--blue-light` | `#BDE8F5` | Light blue fills — nav title, card labels |
| `--blue-mist` | `#D0EFFA` | Backgrounds — nav bar, bottom nav, map |
| `--blue-deep` | `#1A5570` | Dark text on blue backgrounds |
| `--bg` | `#EFF8FD` | Page and phone background |

### Typography
- **Nunito** (400, 600, 700, 900) — UI labels, body text, buttons
- **Caveat** (500, 700) — Handwritten display text (banner, modal titles)

### Animations
| Animation | Used On |
|-----------|---------|
| `floatPhone` | Phone frame gentle floating |
| `floatUp` | Background emoji balloons |
| `cfFall` | Hero confetti pieces |
| `confettiFall` | Party theory card silver/gold confetti |
| `popIn` | Modal entry spring animation |

---

## 🗂 Code Structure

```
|-app
├── app.js - openWish, closeWish, openGallery, closeGallery,
                   changeSlide, goToSlide, updateSlide,
                   openPhoto, closePhoto, previewPhoto, swipe support
|
|-css
├── style.css
birthday_zine_app.html
├── <head>
│   ├── Google Fonts link
│   └── <style> — all CSS (variables, layout, components, animations, modals)
│
└── <body>
    ├── Floating balloons (outside phone)
    ├── .phone
    │   ├── .notch
    │   ├── .status-bar
    │   ├── .nav-bar
    │   ├── .hero  (confetti, banner, balloons, cake, caption button)
    │   ├── #wishOverlay  (make a wish modal + mini map)
    │   ├── #galleryOverlay  (birthday loop photo gallery)
    │   └── .scroll-area
    │       ├── "for you" section → card-row (birthday loop + party theory)
    │       ├── divider
    │       └── "recent" section → list items (past, present, future)
    │           └── Each opens a #photoOverlay-{key} modal
    ├── .bottom-nav
```

---

## 📝 Customisation

| What | Where |
|------|-------|
| Change name | Search `Ivan` in the HTML |
| Change birthday date | Search `Mar 24` and `Mar 18` |
| Change the "arriving early" message |
| Swap gallery slide content | `#gallerySlides` — edit the four `.gslide` divs |
| Change colour palette | `:root` CSS variables at the top of `<style>` |
| Add more photo slots | Duplicate a `#photoOverlay-*` block and list item |

---

## 🛠 Browser Support

Works in all modern browsers. No polyfills needed.

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ |
| Safari 14+ | ✅ |
| Firefox 88+ | ✅ |
| Edge 90+ | ✅ |
| Mobile (iOS/Android) | ✅ (swipe gestures supported) |

---

*Made with 💛 for Ivan's birthday — March 24*

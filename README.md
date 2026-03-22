# Art Portfolio — GitHub Pages Website

A simple, clean portfolio website for displaying drawings and paintings.
Built with plain HTML, CSS, and JavaScript — no frameworks needed.

---

## Pages

| File           | Purpose                                        |
|----------------|------------------------------------------------|
| `index.html`   | Home — shows your newest / featured work       |
| `archive.html` | Full archive — filterable grid + lightbox zoom |
| `shop.html`    | Works for sale or open to bids                 |
| `about.html`   | About you — photo, story, contact details      |
| `style.css`    | All shared styles                              |
| `script.js`    | Lightbox + filter logic                        |

---

## Folder structure

```
art-portfolio/
├── index.html
├── about.html
├── archive.html
├── shop.html
├── style.css
├── script.js
├── images/          ← put all your images here
│   ├── work-1.jpg
│   ├── work-2.jpg
│   └── ...
└── README.md
```

---

## How to publish on GitHub Pages

1. **Create a GitHub account** at https://github.com if you don't have one.

2. **Create a new repository**
   - Click the **+** icon → *New repository*
   - Name it exactly: `yourusername.github.io`
     (replace `yourusername` with your actual GitHub username)
   - Set it to **Public**
   - Click *Create repository*

3. **Upload your files**
   - Click *uploading an existing file*
   - Drag and drop all the files from this folder
     (including the `images/` folder)
   - Click *Commit changes*

4. **Enable GitHub Pages**
   - Go to your repository → *Settings* → *Pages*
   - Under *Source*, select **Deploy from a branch**
   - Choose branch: `main`, folder: `/ (root)`
   - Click *Save*

5. **Wait ~1 minute**, then visit:
   `https://yourusername.github.io`

---

## How to add a new artwork

### To the Archive (`archive.html`) and Home (`index.html`):

1. Put your image in the `images/` folder (e.g. `images/new-work.jpg`)
2. Copy one of the `<article class="card">` blocks
3. Fill in the `onclick` values and `img` attributes
4. For the archive, set `data-category="painting"` or `data-category="drawing"`

### To the Shop (`shop.html`):

1. Copy one of the `<article class="shop-card">` blocks
2. Fill in the image path, title, price, and email address
3. Set the badge class:
   - `badge-sale` → fixed price, for sale
   - `badge-bidding` → open to bids
   - `badge-sold` → already sold (remove the email button)

---

## Personalising the site

Search for `REPLACE` in any HTML file — every spot that needs your info
is marked with a comment starting with `<!-- REPLACE:`.

Things to update:
- Your name (in `<title>`, `.nav-logo`, footer, etc.)
- Your email address
- Your Instagram handle
- The "About me" text in `about.html`
- Your portrait photo (`images/portrait.jpg`)
- The featured hero image on the home page

---

## Image tips

- **Format:** JPEG works best for photos and paintings. PNG for drawings with
  transparency.
- **Size:** 1200–2000 px on the long side is plenty. Larger files slow down
  the page with no visible benefit.
- **The lightbox uses the same image as the thumbnail** — CSS handles sizing,
  so you don't need separate thumbnail files.
- **Compress images** before uploading with a free tool like
  https://squoosh.app — this keeps the site fast.

---

## Updating the site

After the initial upload, you can edit files directly on GitHub:
- Go to your repository
- Click any file → click the pencil icon to edit
- Or upload a new version of the file

---

## License

All website code: free to use and adapt.
Your artwork images remain entirely your own copyright.

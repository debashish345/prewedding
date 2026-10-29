# 💍 Royal Wedding Showcase & 3D Interactive Invitation Suite

A luxury 3D wedding showcase website featuring opening cinematic video reveal, interactive 3D Bengali invitation card booklet, uneven 2.5D depth parallax bento gallery, horizontal filmstrip panorama, background music controller, and falling petals effect.

---

## 📁 Categorized Asset Structure

All media paths in `index.html` and `luxury_3d_parallax_bento_showcase (1).html` use clean relative paths pointing to the `assets/` directory:

```
Our Wedding/
├── index.html                               # Main entry point (GitHub Pages ready)
├── luxury_3d_parallax_bento_showcase (1).html
├── README.md
└── assets/
    ├── videos/
    │   ├── intro.mp4                        # Opening hero fullscreen background video
    │   ├── ceremony.mp4                     # Bento gallery feature film 1
    │   └── reception.mp4                    # Bento gallery feature film 2
    ├── audio/
    │   └── background-music.mp3             # Romantic background instrumental track
    └── images/
        ├── invitation/
        │   ├── couple-portrait.jpg          # Inside page art portrait in Bengali invitation
        │   └── poster.jpg                   # Video loading poster fallback
        ├── bento/
        │   ├── photo-1.jpg                  # Bridal / lace capture
        │   ├── photo-2.jpg                  # Architecture / terrace view
        │   ├── photo-3.jpg                  # Rose bouquet / botanical detail
        │   ├── photo-4.jpg                  # Champagne / celebration
        │   └── photo-5.jpg                  # Cathedral veil / portrait
        └── filmstrip/
            ├── slide-1.jpg                  # Arrival panorama
            ├── slide-2.jpg                  # Floral vows archway
            ├── slide-3.jpg                  # Courtyard portraits
            ├── slide-4.jpg                  # Candlelit imperial banquet
            └── slide-5.jpg                  # Twilight fireworks over water
```

> **Note:** If any image or video file is not yet uploaded, built-in fallback handlers ensure the site never displays broken media links.

---

## 🚀 How to Host on GitHub Pages

1. **Initialize Git & Commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Luxury 3D Wedding Showcase"
   ```

2. **Push to Your GitHub Repository:**
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `main` / `/ (root)` and click **Save**.
   - Your wedding showcase will be live at: `https://<your-username>.github.io/<your-repo-name>/`

---

## ⚙️ Customization

Open `index.html` (or `luxury_3d_parallax_bento_showcase (1).html`) in any code editor:
- Modify `GOOGLE_DRIVE_MEDIA_CONFIG` (around line 1500) to change couple names, Instagram/Facebook handles, or replace any media links with Google Drive share URLs or local asset paths.

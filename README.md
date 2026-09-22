# Shaurya Yadav — Portfolio

## Run in VS Code
1. Unzip and open the `shaurya-portfolio` folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.

You can also just double-click `index.html` to open it in a browser.

## Files
- `index.html`: page content
- `style.css`: styles, colours, hover effects
- `script.js`: theme toggle, mobile menu, active nav, back-to-top

## Host on Vercel
This is a static site, so Vercel does not need a build command.

1. Push this `shaurya-portfolio` folder to GitHub.
2. Go to https://vercel.com/new and import the GitHub repository.
3. Use these project settings:
   - Framework Preset: `Other`
   - Root Directory: `shaurya-portfolio` if you uploaded the outer folder, otherwise leave it as the repo root
   - Build Command: leave empty
   - Output Directory: leave empty
4. Click **Deploy**.

If you use the Vercel CLI, run these commands from this folder:

```bash
npm i -g vercel
vercel
vercel --prod
```

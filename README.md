# geo.isjuliatoast.com

A standalone Next.js App Router project with a gently bouncing rainbow Comic Sans heading and Julia’s Garmin MapShare iframe. No added visible copy beyond the heading; Garmin controls its own labels inside the iframe. Comic Sans uses the installed system font; devices without it fall back to Chalkboard or their cursive font. Reduced-motion preferences stop the bounce.

## Run locally

Install Node.js 20.9 or newer (Node 22 or 24 recommended). Unzip this project, open the `geo` folder in VS Code, then run these commands in its terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Check the map on desktop and mobile.

Before deployment:

```bash
npm run build
```

## GitHub → Vercel → subdomain

1. Create a new empty GitHub repository named `geo`, without a README or other initial files.
2. From the `geo` folder run:

```bash
git init
git add .
git commit -m "Build Garmin MapShare page"
git branch -M main
git remote add origin https://github.com/JcAverbuch/geo.git
git push -u origin main
```

3. In Vercel choose Add New → Project, import the `geo` repository, and let Vercel detect Next.js. Deploy.
4. Check the default Vercel URL, including the live Garmin iframe.
5. In this new project, Settings → Domains → add `geo.isjuliatoast.com`.
6. If Vercel asks for DNS changes, add a CNAME with Host/Name `geo` at your DNS provider. Copy the exact Target/Value Vercel displays. If Vercel manages your domain it may configure this automatically.
7. Wait for valid domain configuration and test https://geo.isjuliatoast.com on your phone.

## Embed

The iframe uses the supplied URL directly:

https://share.garmin.com/6YKP47WHZB

MapShare must be enabled in your Garmin Explore account. Any MapShare password still applies inside the frame. Garmin owns the map content, controls, availability, and tracking updates; this page does not generate tracking data or override Garmin settings. Cross-origin iframe content cannot be restyled by this app.

References:
- https://forums.garmin.com/outdoor-recreation/outdoor-recreation-archive/f/inreach-general/157687/show-mapshare-as-iframe-an-web-page
- https://support.roadpost.com/hc/en-us/articles/5465671409300-Embedding-inReach-MapShare-with-an-IFrame
- https://nextjs.org/docs/app/getting-started/installation

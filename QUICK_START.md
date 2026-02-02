# Quick Reference - npm Commands

## Getting Started

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start development server
npm run dev
# Opens at http://localhost:3000

# 3. Build for production
npm run build
# Output: dist/ folder

# 4. Preview production build
npm run preview

# 5. Deploy to Firebase
npm run deploy
```

## Current Status

✅ **npm setup complete!**
- Dependencies installed
- Vite dev server running at http://localhost:3000
- Firebase configured with modular SDK
- Ready for development

## What's Different?

### Old (CDN):
- Firebase loaded from CDN
- Larger bundle size
- No build step required

### New (npm):  
- Firebase installed as npm package
- Smaller, optimized bundles
- Modern ES modules
- Vite for fast development
- **This is Firebase's recommended approach**

## Files Updated

1. **package.json** - Added dependencies and scripts
2. **firebase-config.js** - Now uses modular SDK imports
3. **app.js** - Imports from firebase-config
4. **index.html** - Removed CDN scripts, uses module script
5. **vite.config.js** - Build configuration

## Firebase Modular SDK

```javascript
// Old way (compat)
firebase.database().ref('path').set(data)

// New way (modular)
import { ref, set } from 'firebase/database'
set(ref(database, 'path'), data)
```

## Next Steps

1. Your dev server is already running at http://localhost:3000
2. Open that URL in your browser to test the app
3. Make changes to any file - Vite will auto-reload
4. When ready to deploy, run `npm run build` then `firebase deploy`

## Troubleshooting

**Module errors?** 
- Make sure you ran `npm install`

**Port already in use?**
- Change port in vite.config.js

**Build fails?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

**The app is now using npm as recommended by Firebase! 🎉**

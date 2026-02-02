# NPM Setup & Usage Guide

This project now uses npm for dependency management and Vite for building, following Firebase's recommended approach.

## Installation

```bash
npm install
```

This will install:
- **firebase** (v10.7.1) - Modular Firebase SDK
- **vite** (v5.0.0) - Fast build tool and dev server

## Available Scripts

### `npm run dev`
Starts the development server with hot-reload at `http://localhost:3000`

```bash
npm run dev
```

### `npm run build`
Creates an optimized production build in the `dist/` folder

```bash
npm run build
```

### `npm run preview`
Preview the production build locally before deploying

```bash
npm run preview
```

### `npm run deploy`
Builds the app and deploys to Firebase Hosting (requires Firebase CLI setup)

```bash
npm run deploy
```

## What Changed from CDN to npm

### Before (CDN approach):
```html
<!-- Old way with CDN -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js"></script>
<script src="firebase-config.js"></script>
<script src="app.js"></script>
```

### After (npm with modules):
```html
<!-- New way with ES modules -->
<script type="module" src="/app.js"></script>
```

```javascript
// firebase-config.js - now uses modular SDK
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app, database, analytics };
```

```javascript
// app.js - imports from firebase-config
import { database } from './firebase-config.js';
import { ref, set, onValue } from 'firebase/database';
```

## Benefits of npm Approach

1. **Tree Shaking**: Only include Firebase features you actually use
2. **Better Performance**: Smaller bundle sizes
3. **Type Safety**: Better IDE support and autocomplete
4. **Version Control**: Lock dependencies with package-lock.json
5. **Modern Build Tools**: Use Vite for fast development
6. **Firebase Recommended**: Official recommendation from Firebase team

## Firebase Modular SDK Migration

The app now uses Firebase's modular SDK (v9+ style). Key changes:

### Old compat API:
```javascript
firebase.initializeApp(config);
const db = firebase.database();
db.ref('path').set(data);
db.ref('path').on('value', callback);
```

### New modular API:
```javascript
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const app = initializeApp(config);
const db = getDatabase(app);
set(ref(db, 'path'), data);
onValue(ref(db, 'path'), callback);
```

## Troubleshooting

### "Module not found" errors
Make sure you've run `npm install` first.

### Port 3000 already in use
Either kill the process using port 3000, or edit `vite.config.js` to use a different port:
```javascript
server: {
  port: 3001  // Change to any available port
}
```

### Build fails
Clear cache and rebuild:
```bash
rm -rf node_modules dist .vite
npm install
npm run build
```

### Firebase import errors
Ensure all Firebase imports match the modular SDK syntax. Check that you're importing from 'firebase/app', 'firebase/database', etc., not from 'firebase'.

## Production Deployment

Always build before deploying:

```bash
# Build optimized production bundle
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Or use the combined script
npm run deploy
```

The `dist/` folder contains your production-ready app.

## Development Tips

1. **Use the dev server** (`npm run dev`) during development - it's much faster with hot-reload
2. **Check the browser console** for any import/module errors
3. **Preview builds** (`npm run preview`) before deploying to catch production-only issues
4. **Keep dependencies updated** but test thoroughly after updates

## Next Steps

1. Run `npm install` to get started
2. Update `firebase-config.js` with your Firebase credentials
3. Run `npm run dev` to start developing
4. When ready, run `npm run build` and deploy

Happy coding! 🚀

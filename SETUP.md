# Unlock the Lab - Workshop Web Application

A Firebase-powered web application for interactive science literacy workshops. Participants rate research papers and compare their assessments with others in real-time.

## Features

- **Mobile-First Design**: Optimized for smartphones and tablets
- **Individual Participation**: Each participant uses their own device
- **Real-Time Ratings**: See how your assessment compares to the group average instantly
- **Educational Content**: Built-in glossary and rating rubric accessible anytime
- **Progressive Flow**: Guided experience from welcome to completion
- **Firebase Integration**: Real-time database for collaborative rating
- **Modern Build Setup**: Uses npm and Vite for optimal performance

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A Firebase account (free tier is sufficient)

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up Firebase** (see detailed steps below)

3. **Run development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
```

## Detailed Setup Instructions

### Prerequisites

- A Firebase account (free tier is sufficient)
- A web hosting service (Firebase Hosting, GitHub Pages, Netlify, etc.)
- Basic text editor

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "unlock-the-lab-workshop")
4. Disable Google Analytics (optional for this project)
5. Click "Create project"

### Step 2: Set Up Realtime Database

1. In your Firebase project, go to "Build" → "Realtime Database"
2. Click "Create Database"
3. Select a location (choose closest to your workshop location)
4. Start in **test mode** for development (set rules for production later)
5. Click "Enable"

### Step 3: Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (`</>`) to create a web app
4. Register your app with a nickname (e.g., "Workshop App")
5. Copy the `firebaseConfig` object shown
6. Open `firebase-config.js` in this project
7. Replace the configuration values with your actual Firebase config

The file already uses the modular SDK format, so just update the values:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456",
    measurementId: "G-XXXXXXXXXX"
};
```

### Step 4: Configure Database Rules (Important!)

For development/testing:
1. Go to Realtime Database → Rules
2. Use these rules (allows read/write for testing):

```json
{
  "rules": {
    "ratings": {
      ".read": true,
      ".write": true
    }
  }
}
```

For production (more secure):
```json
{
  "rules": {
    "ratings": {
      "$paperId": {
        ".read": true,
        "$sessionId": {
          ".write": "!data.exists()",
          ".validate": "newData.hasChildren(['rating', 'timestamp'])"
        }
      }
    }
  }
}
```

This prevents users from changing ratings after submission.

### Step 5: Customize Content (Optional)

You can customize the workshop content by editing these JSON files:

- **`papers.json`**: Add, remove, or modify research papers
- **`glossary.json`**: Add or edit glossary terms
- **`rubric.json`**: Modify the rating criteria

Each paper in `papers.json` should have:
- `id`: Unique identifier (e.g., "STUDY-001")
- `headline`: The paper's headline
- `access`: Description of how accessible the paper is
- `overview`: Brief overview of the study
- `methods`: Description of methodology and data
- `conclusion`: The paper's conclusions
- `source`: Where the paper is published

### Step 6: Deploy the Application

#### Option A: Firebase Hosting (Recommended)

1. Install Firebase CLI (if not already installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project folder:
```bash
firebase init hosting
```
- Select your Firebase project
- Set public directory as **`dist`** (the build output folder)
- Configure as single-page app: **Yes**
- Set up automatic builds with GitHub: Optional

4. Build and deploy:
```bash
npm run build
firebase deploy --only hosting
```

Or use the combined script:
```bash
npm run deploy
```

5. Your app will be live at: `https://your-project.firebaseapp.com`

#### Option B: GitHub Pages

1. Build the application:
```bash
npm run build
```

2. Create a new GitHub repository
3. Push the **`dist`** folder contents to the `gh-pages` branch:
```bash
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin gh-pages
```

4. Go to repository Settings → Pages
5. Select `gh-pages` branch and `/root` folder
6. Save and wait for deployment
7. Access at: `https://yourusername.github.io/repository-name`

#### Option C: Netlify

1. Build the application:
```bash
npm run build
```

2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the **`dist`** folder (not the project root)
4. Your site will be deployed instantly
5. Optionally configure custom domain

### Step 7: Test the Application

1. Open the deployed URL on your mobile phone
2. Go through the complete flow:
   - Welcome page
   - Glossary and rubric page
   - Rate at least one paper
   - Check that results show your rating and average
3. Open in a second device/browser and rate the same paper
4. Verify that the average updates in real-time

## Usage During Workshop

### Before the Workshop

1. Test the application thoroughly
2. Create a short URL (using bit.ly, QR code, etc.) for easy access
3. Ensure stable internet connection at venue
4. Have backup plan (printed materials) in case of technical issues

### During the Workshop

1. Display the URL or QR code prominently
2. Give participants 2-3 minutes to read the welcome and guide pages
3. Let participants work at their own pace
4. Remind participants they can access glossary/rubric anytime (📖 button)
5. Monitor the Firebase Realtime Database to see participation rates

### After the Workshop

1. Go to Firebase Console → Realtime Database
2. Export the data (JSON) for analysis
3. Optional: Clear the database before the next workshop session
4. Review the data to see which papers had most agreement/disagreement

## Resetting Data Between Sessions

To clear ratings between workshop sessions:

1. Go to Firebase Console → Realtime Database
2. Find the "ratings" node
3. Click the ⋮ menu → Delete
4. Confirm deletion

Or use Firebase CLI:
```bash
firebase database:remove /ratings
```

## Troubleshooting

### Ratings Not Saving
- Check Firebase Console → Realtime Database rules
- Verify internet connection
- Check browser console for errors
- Ensure `firebase-config.js` has correct credentials

### Average Not Updating
- Check that multiple devices are rating the same paper ID
- Verify database rules allow reading
- Check browser console for JavaScript errors

### Mobile Display Issues
- Ensure viewport meta tag is present in HTML
- Test on various screen sizes
- Check CSS media queries

### Database Permission Errors
- Review database rules in Firebase Console
- Temporarily use test mode rules for debugging
- Check that timestamps are being set correctly

## File Structure

```
unlock-the-lab-workshop/
├── index.html              # Main HTML structure
├── styles.css              # All styling and responsive design
├── app.js                  # Application logic (ES Module)
├── firebase-config.js      # Firebase configuration (ES Module)
├── papers.json             # Research paper data
├── glossary.json           # Glossary terms
├── rubric.json             # Rating criteria
├── package.json            # npm dependencies and scripts
├── vite.config.js          # Vite build configuration
├── .gitignore              # Git ignore file
├── README.md               # Original workshop description
├── Licence.md              # License information
└── SETUP.md                # This file
```

## Development Workflow

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000` with hot-reload enabled.

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## Customization Tips

### Adding More Papers
Edit `papers.json` and add new objects following the existing structure. The app will automatically create pages for all papers.

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;  /* Main blue color */
    --secondary-color: #10b981; /* Green for success */
    /* ... other colors ... */
}
```

### Modifying Text
- Welcome message: Edit `index.html` → `#page-welcome`
- Final message: Edit `index.html` → `#page-final`
- Instructions: Edit the HTML content directly

### Analytics
Add Google Analytics or similar by including tracking code in `index.html` before `</body>`.

## Privacy & Data

- Each participant gets a random session ID
- No personal information is collected
- Only ratings and timestamps are stored
- Consider adding privacy notice if required by your institution

## Support & Contributions

For issues or questions:
1. Check troubleshooting section above
2. Review Firebase documentation
3. Check browser console for specific error messages

## License

See `Licence.md` for license information.

---

**Ready to Run Your Workshop?**

1. ✅ Node.js installed
2. ✅ Dependencies installed (`npm install`)
3. ✅ Firebase project created
4. ✅ `firebase-config.js` updated with your credentials
5. ✅ Application built (`npm run build`)
6. ✅ Application deployed
7. ✅ Tested on mobile device
8. ✅ QR code or short URL ready

You're all set! Good luck with your workshop! 🔬✨

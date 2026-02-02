# Fix Firebase Database Rules

Your app has Firebase credentials configured, but you need to set up the database rules to allow reading and writing.

## Quick Fix (5 minutes)

### Step 1: Go to Firebase Console
1. Open https://console.firebase.google.com
2. Click on "unlock-the-lab-workshop" project

### Step 2: Set Up Database Rules
1. In the left sidebar, click **"Realtime Database"**
2. If you don't see a database, click **"Create Database"**
   - Choose location: **europe-west1** (matches your config)
   - Start in **test mode**
   - Click **Enable**

### Step 3: Update Rules
1. Click on the **"Rules"** tab
2. Replace the existing rules with this:

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

3. Click **"Publish"**

### Step 4: Test
1. Go back to http://localhost:3000
2. Navigate to a paper
3. Select a rating and click Submit
4. You should see your rating and the average!

---

## What These Rules Do

- **".read": true** - Anyone can read ratings (needed for showing averages)
- **".write": true** - Anyone can write ratings (needed for submitting)

**Note:** These are test rules for development. For production, use more secure rules (see SETUP.md).

---

## Check If It's Working

1. Submit a rating on a paper
2. Open Firebase Console → Realtime Database → Data tab
3. You should see:
   ```
   ratings
     └─ STUDY-001
         └─ session_[timestamp]_[random]
             ├─ rating: 5
             └─ timestamp: 1738518123456
   ```

---

## Still Not Working?

**Check browser console (F12) for errors:**
- Press F12 in your browser
- Click the "Console" tab
- Look for red error messages
- Common issues:
  - "Permission denied" → Rules not set correctly
  - "Database not found" → Need to create database first
  - "Firebase not initialized" → Check firebase-config.js

**The rating/comparison WILL work locally once the database rules are set!** 🎯

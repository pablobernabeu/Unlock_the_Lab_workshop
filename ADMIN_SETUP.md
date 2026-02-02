# Admin Panel Setup Guide

## 🔐 Quick Setup (2 minutes)

### Step 1: Enable Google Sign-In

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select project: **unlock-the-lab-workshop**
3. Click **Authentication** → **Sign-in method** tab
4. Click **Add new provider**
5. Select **Google**
6. Toggle **Enable** to ON
7. Click **Save**

### Step 2: Add Your Google Account

1. Still in Firebase Console
2. Click **Authentication** → **Users** tab
3. Your email will appear here automatically after first login
4. Or manually add: Click **Add User** → Enter your Google email

### Step 3: Access Admin Panel

1. Navigate to: `https://unlock-the-lab.web.app/admin.html`
2. Click **Sign in with Google**
3. Choose your Google account
4. Done!

---

## Two Dashboards Explained

### 1️⃣ Admin Panel (Private - `admin.html`)

- **Who:** Only you (requires login)
- **Access:** Welcome page → "Admin" link
- **Features:** Session management, stop all sessions
- **URL:** `unlock-the-lab.web.app/admin.html`

### 2️⃣ Public Dashboard (Public - `dashboard.html`)

- **Who:** Anyone (no login)
- **Access:** Final results page → "View Live Dashboard" button
- **Features:** Statistics, charts, participant data
- **URL:** `unlock-the-lab.web.app/dashboard.html`

---

## Admin Functions

### Stop All Active Sessions
- Clears all active participant data
- Forces users to start new sessions
- **Does NOT delete** ratings or leaderboard data
- Useful for:
  - Ending a workshop session
  - Clearing test data during development
  - Resetting participant counts

## Security Note

The admin panel uses Firebase Authentication. Only users you manually add to Firebase Authentication can access it.

## Troubleshooting

### "Login failed: Firebase: Error (auth/...)"

Common errors:
- **auth/wrong-password** - Incorrect password
- **auth/user-not-found** - Email not registered in Firebase Auth
- **auth/too-many-requests** - Too many failed attempts, wait a few minutes

### Can't access admin.html

Make sure:
1. The file is deployed (check GitHub Actions)
2. Firebase hosting includes the admin.html file
3. You're using the correct URL

### "Permission denied" when stopping sessions

Check Firebase Database Rules - the admin user needs write access to `/active`:

```json
{
  "rules": {
    "active": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

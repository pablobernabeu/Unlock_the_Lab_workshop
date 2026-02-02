# Firebase Database Rules Configuration

## ⚠️ URGENT: Fix "PERMISSION_DENIED" Error

If you're seeing **"Error submitting rating: PERMISSION_DENIED: Permission denied"**, you MUST update your Firebase database rules immediately.

## Quick Fix (5 minutes)

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select project: **unlock-the-lab-workshop**
3. Click **Realtime Database** → **Rules** tab
4. **Copy and paste this** (replace everything):

```json
{
  "rules": {
    "ratings": {
      ".read": true,
      ".write": true
    },
    "leaderboard": {
      ".read": true,
      ".write": true
    },
    "active": {
      ".read": true,
      ".write": true
    }
  }
}
```

5. Click **Publish**
6. Refresh your workshop app
7. Try submitting a rating - it should work now!

---

## Why This Is Safe

Your workshop app collects **zero personal information**:
- No personal information is collected
- Session IDs are random and not linked to users
- Usernames are auto-generated (e.g., "Red Raccoon")
- Workshop data is meant to be shared

### Alternative: Rate-Limited Rules (Prevents Spam)

If you want to prevent abuse while still allowing writes:

```json
{
  "rules": {
    "ratings": {
      ".read": true,
      "$paperId": {
        "$sessionId": {
          ".write": "!data.exists() || data.child('timestamp').val() + 60000 < now",
          ".validate": "newData.hasChildren(['rating', 'prediction', 'timestamp']) && 
                        newData.child('rating').isNumber() && 
                        newData.child('rating').val() >= 1 && 
                        newData.child('rating').val() <= 7 &&
                        newData.child('prediction').isNumber() && 
                        newData.child('prediction').val() >= 1 && 
                        newData.child('prediction').val() <= 7"
        }
      }
    },
    "leaderboard": {
      ".read": true,
      "$sessionId": {
        ".write": true,
        ".validate": "newData.hasChildren(['score', 'timestamp', 'papersRated', 'userName'])"
      }
    },
    "active": {
      ".read": true,
      "$sessionId": {
        ".write": true
      }
    }
  }
}
```

**This prevents:**
- Multiple submissions from same session for same paper within 60 seconds
- Invalid ratings (must be 1-7)
- Malformed data

## Testing After Update

1. Save and publish the new rules
2. Refresh your workshop app
3. Try submitting a rating
4. Check browser console (F12) for any error messages
5. If errors persist, check the Firebase Console → Realtime Database → Data tab to see if data is being written

## Checking Current Rules

To see your current rules:
1. Firebase Console → Realtime Database → Rules tab
2. The current rules will be displayed

## Common Error Messages

- **"PERMISSION_DENIED"** → Rules don't allow writes
- **"VALIDATION_FAILED"** → Data doesn't match validation rules
- **"Network error"** → Check internet connection or Firebase status

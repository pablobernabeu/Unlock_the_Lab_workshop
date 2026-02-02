# Testing Checklist - Complete App Flow

## 🚀 App is Running!

Your development server is live at: **http://localhost:3000**

---

## ✅ Test Each Component

### 1. Page 1: Welcome
- [ ] Open http://localhost:3000
- [ ] See workshop title and description
- [ ] See "How It Works" instructions (3 steps)
- [ ] Click "Get Started" button
- [ ] Verify navigation to Page 2

---

### 2. Page 2: Glossary & Rubric
- [ ] See "Before We Begin" title
- [ ] **Glossary section displays:**
  - [ ] 12 scientific terms (Open Access, Paywall, Peer Review, etc.)
  - [ ] Each term has a definition
- [ ] **Rubric section displays:**
  - [ ] Table with 4 columns (Category, Low, Medium, High)
  - [ ] 6 categories (Access, Headline, Theory, Methods & Data, Conclusion, Source)
  - [ ] Descriptions for each quality level
- [ ] See info box about 📖 help button
- [ ] Click "Start Rating Papers"
- [ ] Verify navigation to first paper

---

### 3. Paper Pages (Test on STUDY-001)

#### Paper Information
- [ ] See paper ID badge (STUDY-001)
- [ ] See headline: "Miracle Berry Cures Cancer in Just 3 Days!"
- [ ] See 5 sections with icons:
  - [ ] 📰 Access section
  - [ ] 🔬 Study Overview
  - [ ] 📊 Methods & Data
  - [ ] 📝 Conclusion
  - [ ] 🏛️ Source
- [ ] All text is readable on mobile screen

#### Rating Interface
- [ ] See "Rate This Study (1-7)" heading
- [ ] See 7 radio buttons labeled 1-7
- [ ] See labels "Poor Quality" and "Excellent Quality"
- [ ] Submit button is **disabled** initially
- [ ] Click a rating (e.g., 2)
- [ ] Submit button **enables**
- [ ] Click different rating
- [ ] Selection updates correctly

#### Help Button
- [ ] See floating 📖 button in bottom-right corner
- [ ] Click the 📖 button
- [ ] Modal opens with glossary and rubric
- [ ] Click "Glossary" tab → See glossary
- [ ] Click "Rating Rubric" tab → See rubric table
- [ ] Click X or outside modal → Modal closes

#### Submit Rating
- [ ] Select a rating (1-7)
- [ ] Click "Submit Rating" button
- [ ] Button shows "Submitting..." briefly
- [ ] Rating form disappears
- [ ] **Results box appears** with:
  - [ ] Green checkmark and "Rating Submitted!"
  - [ ] "Your Rating" shows your number
  - [ ] "Average Rating" shows a number (initially same as yours if first)
  - [ ] "Based on X participant(s)" message
  - [ ] "Next Paper" button appears

---

### 4. Real-Time Average Test

**Open in Second Browser/Tab:**
- [ ] Open http://localhost:3000 in incognito/private window
- [ ] Navigate to same paper (STUDY-001)
- [ ] Rate it differently (e.g., if you rated 2, rate this one 6)
- [ ] Submit the rating
- [ ] **In BOTH windows**, verify average updates:
  - [ ] Example: (2 + 6) / 2 = 4.0
  - [ ] Participant count shows "2 participants"

**Real-time Update Test:**
- [ ] Keep both windows open on results page
- [ ] Open third tab/window
- [ ] Navigate to same paper and rate it
- [ ] **Check original windows** → Average updates automatically!

---

### 5. Test All 6 Papers

Navigate through each paper and verify:

#### STUDY-001: "Miracle Berry Cures Cancer"
- [ ] All sections display
- [ ] Rating system works
- [ ] Click "Next Paper" → Goes to STUDY-002

#### STUDY-002: "Coffee Drinkers Live Longer"
- [ ] All sections display
- [ ] Rating system works
- [ ] Click "Next Paper" → Goes to STUDY-003

#### STUDY-003: "New Vaccine Shows Promise"
- [ ] All sections display
- [ ] Rating system works
- [ ] Click "Next Paper" → Goes to STUDY-004

#### STUDY-004: "Smartphone App Reduces Anxiety"
- [ ] All sections display
- [ ] Rating system works
- [ ] Click "Next Paper" → Goes to STUDY-005

#### STUDY-005: "Eating Chocolate Makes You Smarter"
- [ ] All sections display
- [ ] Rating system works
- [ ] Click "Next Paper" → Goes to STUDY-006

#### STUDY-006: "Exercise Associated with Better Sleep"
- [ ] All sections display
- [ ] Rating system works
- [ ] Click "View Results" → Goes to final page

---

### 6. Page 9: Recap & Goodbye
- [ ] See "Workshop Complete!" title with 🎉
- [ ] See "You've evaluated **6** research papers"
- [ ] Number "6" is displayed correctly
- [ ] See 4 key takeaways listed
- [ ] See "Keep Exploring Science!" section
- [ ] See 4 tips for future science reading
- [ ] See "Thank you for participating!" message
- [ ] 📖 help button is **hidden** on this page

---

## 📱 Mobile Responsiveness Test

### On Mobile Device or Emulator:
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable (at least 44px)
- [ ] Rating buttons work with touch
- [ ] No horizontal scrolling
- [ ] Modal fits on screen
- [ ] Help button doesn't overlap content
- [ ] Tables in rubric are scrollable if needed

### Test Different Screen Sizes:
```
Desktop: 1920x1080
Tablet: 768x1024
Phone: 375x667
```

---

## 🔥 Firebase Integration Test

### Check Firebase Console:
1. Go to https://console.firebase.google.com
2. Select "unlock-the-lab-workshop" project
3. Go to Realtime Database
4. After rating papers, verify data structure:

```
ratings/
  ├─ STUDY-001/
  │   ├─ session_[timestamp]_[random]/
  │   │   ├─ rating: 2
  │   │   └─ timestamp: 1738518123456
  │   └─ session_[timestamp]_[random]/
  │       ├─ rating: 6
  │       └─ timestamp: 1738518234567
  └─ STUDY-002/
      └─ ...
```

- [ ] Ratings are saved under correct paper IDs
- [ ] Each session has unique ID
- [ ] Timestamp is recorded
- [ ] Multiple ratings from different sessions appear

---

## 🐛 Common Issues to Check

### If Glossary/Rubric Don't Load:
- [ ] Check browser console (F12)
- [ ] Verify glossary.json and rubric.json exist
- [ ] Check for JSON syntax errors

### If Papers Don't Appear:
- [ ] Check browser console for errors
- [ ] Verify papers.json exists and is valid JSON
- [ ] Check generatePaperPages() function runs

### If Ratings Don't Save:
- [ ] Check Firebase configuration in firebase-config.js
- [ ] Verify database rules allow writes
- [ ] Check browser console for Firebase errors
- [ ] Confirm internet connection

### If Average Doesn't Update:
- [ ] Check Firebase database rules allow reads
- [ ] Verify onValue() listener is set up
- [ ] Check browser console for errors
- [ ] Try refreshing the page

---

## ✅ Final Verification

All components working correctly:
- [ ] Navigation flows smoothly (welcome → guide → papers → recap)
- [ ] All 6 papers display correctly
- [ ] Rating submission works for each paper
- [ ] Real-time averaging works
- [ ] Help button appears/disappears correctly
- [ ] Modal opens and closes properly
- [ ] Mobile layout looks good
- [ ] Firebase saves data correctly

---

## 🎉 Success!

If all items are checked, your app is **fully assembled and working**!

**Next Steps:**
1. Customize papers in papers.json if needed
2. Adjust styling in styles.css
3. Build for production: `npm run build`
4. Deploy to Firebase Hosting: `firebase deploy`

---

## 🆘 Need Help?

- **Build errors**: Check [NPM_GUIDE.md](NPM_GUIDE.md)
- **Firebase issues**: Check [SETUP.md](SETUP.md)
- **How it works**: Read [APP_STRUCTURE.md](APP_STRUCTURE.md)

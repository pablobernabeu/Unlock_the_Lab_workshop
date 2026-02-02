# Workshop Data Backups

This directory contains automated backups of Firebase Realtime Database data.

## Files

- `ratings.json` - All participant ratings for each paper
- `leaderboard.json` - Top scores from each session
- `active.json` - Currently active participants (updates every 30s)
- `backup-info.json` - Timestamp of last backup

## Backup Schedule

Data is automatically backed up:
- Daily at midnight UTC
- Can be manually triggered from GitHub Actions tab

## Data Structure

### ratings.json
```json
{
  "STUDY-001": {
    "session123": 4.5,
    "session456": 3.2
  }
}
```

### leaderboard.json
```json
{
  "session123": {
    "name": "Participant Name",
    "score": 580,
    "timestamp": 1234567890
  }
}
```

### active.json
```json
{
  "session123": {
    "timestamp": 1234567890
  }
}
```

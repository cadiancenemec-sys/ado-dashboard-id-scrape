# ADO Dashboard Query Extraction Guide

**Purpose:** Extract all query IDs from any Azure DevOps dashboard for automated auditing and reporting.

---

## 🚀 Quick Start (Future Use)

When given a dashboard ID, follow these steps:

### Option 1: Browser Console (Fastest - No Setup Required)

1. **Navigate to the dashboard:**
   ```
   https://dev.azure.com/{ORG}/{PROJECT}/_dashboards/dashboard/{DASHBOARD-ID}
   ```

2. **Open DevTools Console** (F12 or Cmd+Option+J)

3. **Paste and run this extraction script:**
   ```javascript
   () => {
       const h = document.documentElement.innerHTML;
       const s = new Set();
       const r1 = /\/_queries\/query\/([a-f0-9-]{36})/gi;
       let m1;
       while((m1 = r1.exec(h)) !== null) s.add(m1[1].toLowerCase());
       const r2 = /"(filter|queryId|groupId)"\s*:\s*"([a-f0-9-]{36})"/gi;
       let m2;
       while((m2 = r2.exec(h)) !== null) s.add(m2[2].toLowerCase());
       return JSON.stringify({count: s.size, ids: Array.from(s)}, null, 2);
   }
   ```

4. **Copy the output** - you'll get all query IDs!

---

### Option 2: Browser Automation (CDP - For Full Automation)

If Chrome is running with CDP enabled (port 18800):

1. **Start Chrome with CDP:**
   ```bash
   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
     --remote-debugging-port=18800 \
     --user-data-dir=/tmp/chrome-cdp
   ```

2. **Run the extraction script:**
   ```bash
   cd /Users/donaldnemec/ado-dashboard-id-scrape
   node scripts/extract-dashboard-queries.js <dashboard-id>
   ```

3. **Or use browser automation directly:**
   - Navigate to dashboard URL
   - Execute extraction function
   - Parse results and save

---

## 📋 Complete Extraction Process

### Step 1: Authentication
- Ensure you're logged into Azure DevOps
- Browser must have valid session cookies
- If redirected to sign-in, complete authentication first

### Step 2: Navigate to Dashboard
```
https://dev.azure.com/{ORG}/{PROJECT}/_dashboards/dashboard/{DASHBOARD-ID}
```

### Step 3: Extract Query IDs

**Method A: Direct URL Extraction**
```javascript
const urls = document.querySelectorAll('a[href*="/_queries/query/"]');
const ids = Array.from(urls).map(a => {
    const match = a.href.match(/\/query\/([a-f0-9-]{36})/i);
    return match ? match[1].toLowerCase() : null;
}).filter(Boolean);
console.log(`Found ${ids.length} query IDs from URLs`);
```

**Method B: Full HTML Scan (Catches Pie Charts)**
```javascript
const html = document.documentElement.innerHTML;
const ids = new Set();

// From query URLs
const urlMatches = html.match(/\/_queries\/query\/([a-f0-9-]{36})/gi) || [];
urlMatches.forEach(m => ids.add(m.match(/([a-f0-9-]{36})/i)[1].toLowerCase()));

// From widget settings
const settingMatches = html.match(/"(filter|queryId|groupId)"\s*:\s*"([a-f0-9-]{36})"/gi) || [];
settingMatches.forEach(m => {
    const id = m.match(/([a-f0-9-]{36})/i);
    if(id) ids.add(id[1].toLowerCase());
});

console.log(`Total unique query IDs: ${ids.size}`);
console.log(JSON.stringify(Array.from(ids), null, 2));
```

### Step 4: Save Results

**JSON Format:**
```json
{
  "dashboardId": "{DASHBOARD-ID}",
  "organization": "{ORG}",
  "project": "{PROJECT}",
  "extractedAt": "2026-03-09T16:00:00.000Z",
  "totalQueries": 35,
  "queryIds": [...]
}
```

**Markdown Documentation:**
- Create/update `dashboard-{ID}-queries.md`
- Organize by widget category
- Include query names and IDs in tables

---

## 🔧 Browser Automation Commands

### Chrome CDP Setup
```bash
# Start Chrome with remote debugging
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=18800 \
  --user-data-dir=/tmp/chrome-cdp
```

### Browser Tool Commands (OpenClaw)
```javascript
// Navigate to dashboard
browser.navigate(url, target: "host")

// Take snapshot to see widgets
browser.snapshot(refs: "aria", target: "host")

// Extract query IDs
browser.evaluate(`
  () => {
    const h = document.documentElement.innerHTML;
    const s = new Set();
    const r = /\\/_queries\\/query\\/([a-f0-9-]{36})/gi;
    let m;
    while((m = r.exec(h)) !== null) s.add(m[1].toLowerCase());
    return JSON.stringify({c: s.size, i: Array.from(s)});
  }
`, target: "host")
```

---

## 📁 File Structure

```
/Users/donaldnemec/ado-dashboard-id-scrape/
├── scripts/
│   ├── extract-dashboard-queries.js    # CLI extraction tool
│   └── scrape-ado-queries.js           # Original scraper
├── dashboard-{ID}-queries.md           # Documentation per dashboard
├── extracted-query-ids-complete.json   # Machine-readable output
└── README.md                           # Project overview
```

---

## 🎯 Expected Results

**Typical Dashboard Breakdown:**
- **16** Hierarchy & State queries (direct links)
- **6** Epic Required Fields (pie charts)
- **6** Feature Required Fields (pie charts)
- **4** PBI Required Fields (pie charts)
- **2** Bug Required Fields (pie charts)
- **2** Task Required Fields (pie charts)
- **= 36 total widgets** (may share some query IDs → ~35 unique)

---

## ⚠️ Common Issues & Solutions

### Issue: Redirected to Sign-In
**Solution:** Complete authentication in browser first, then re-run extraction

### Issue: Only Getting 16 Query IDs
**Cause:** Only extracting from direct links, missing pie chart widgets
**Solution:** Use full HTML scan method (Method B above)

### Issue: Browser Automation Timeout
**Solution:** Increase timeout or use manual console extraction

### Issue: Query IDs Not Matching Widget Names
**Cause:** Some widgets share query IDs or use dynamic loading
**Solution:** Cross-reference with widget titles from snapshot

---

## 📝 Example: Extract from New Dashboard

```bash
# Given dashboard ID: abc12345-6789-def0-1234-56789abcdef0

# 1. Navigate to dashboard
https://dev.azure.com/BECU/HUB/_dashboards/dashboard/abc12345-6789-def0-1234-56789abcdef0

# 2. Run extraction in console
[Paste extraction script]

# 3. Save results
# Output: dashboard-abc12345-6789-def0-1234-56789abcdef0-queries.json

# 4. Document
# Create: dashboard-abc12345-6789-def0-1234-56789abcdef0-queries.md
```

---

## 🔗 Reference Links

- **Dashboard URL Pattern:** `https://dev.azure.com/{org}/{project}/_dashboards/dashboard/{id}`
- **Query URL Pattern:** `https://dev.azure.com/{org}/{project}/_queries/query/{query-id}`
- **GitHub Repo:** https://github.com/cadiancenemec-sys/ado-dashboard-id-scrape

---

## 📚 Previous Extractions

- **Dashboard:** `00f7d3e1-7563-4c2d-91a8-67578d9c15c6`
- **Name:** DevEx Improvements - ADO Standards Audit
- **Extracted:** March 9, 2026
- **Total Queries:** 35
- **Files:** `ado-dashboard-queries.md`, `extracted-query-ids-complete.json`

---

**Last Updated:** March 9, 2026  
**Maintained By:** Don's AI Assistant

# 🚀 ADO Query Extraction - Quick Reference

## Next Time You Need to Extract Query IDs from a Dashboard

### 📌 What You Need
- Dashboard ID (e.g., `00f7d3e1-7563-4c2d-91a8-67578d9c15c6`)
- Browser access (logged into Azure DevOps)

---

### ⚡ Fastest Method (30 seconds)

1. **Open dashboard:**
   ```
   https://dev.azure.com/BECU/HUB/_dashboards/dashboard/{DASHBOARD-ID}
   ```

2. **Press F12** (open Console)

3. **Paste this:**
   ```javascript
   const h = document.documentElement.innerHTML;
   const s = new Set();
   const r = /\/_queries\/query\/([a-f0-9-]{36})/gi;
   let m; while((m = r.exec(h)) !== null) s.add(m[1].toLowerCase());
   console.log(`Found ${s.size} query IDs:`, JSON.stringify(Array.from(s), null, 2));
   ```

4. **Done!** Copy the output ✅

---

### 🤖 Automated Method (OpenClaw)

**Tell your AI assistant:**
> "Extract query IDs from ADO dashboard {DASHBOARD-ID}"

**AI will:**
1. Navigate to dashboard via browser automation
2. Run extraction script
3. Save results to JSON and Markdown
4. Commit to GitHub repo

---

### 📁 Output Files Created

- `dashboard-{ID}-queries.json` - Machine-readable
- `dashboard-{ID}-queries.md` - Human-readable documentation

---

### 📚 Full Documentation

See: `EXTRACTION-GUIDE.md` for complete instructions

---

### 🔗 Repository

https://github.com/cadiancenemec-sys/ado-dashboard-id-scrape

---

**Created:** March 9, 2026  
**After successful extraction of 35 queries from dashboard `00f7d3e1-7563-4c2d-91a8-67578d9c15c6`**

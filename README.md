# ADO Dashboard ID Scrape

**Azure DevOps Dashboard Query ID Extractor**

A tool to automatically extract Query IDs from Azure DevOps dashboards. Perfect for auditing, documentation, or building custom dashboards.

---

## 📊 What It Does

This project provides a browser-based script that extracts **all query IDs** from an Azure DevOps dashboard, including:
- ✅ Direct query link widgets
- ✅ Pie chart widgets with "View query" buttons
- ✅ All widget types that reference queries

---

## 🚀 Quick Start

### 1. Open Your ADO Dashboard
Navigate to any Azure DevOps dashboard in your browser:
```
https://dev.azure.com/{organization}/{project}/_dashboards/dashboard/{dashboard-id}
```

### 2. Open Browser Console
Press **F12** (or Cmd+Option+J on Mac) to open Developer Tools

### 3. Run the Script
Copy and paste the contents of `scripts/scrape-ado-queries.js` into the console, then press **Enter**

### 4. Get Your Results
The script will output:
- **JSON format** - For programmatic use
- **Markdown table** - For documentation
- **Summary statistics** - Total queries found

---

## 📁 Project Structure

```
ado-dashboard-id-scrape/
├── README.md                    # This file
├── ado-dashboard-queries.md     # Example: Complete query inventory (36 queries)
├── ado-queries-36.csv          # CSV export of all queries
└── scripts/
    └── scrape-ado-queries.js   # The extraction script
```

---

## 🔧 Usage Examples

### Example Output

```
🔍 Starting Azure DevOps Query Extraction...

✓ Found 16 queries from direct links
✓ Found 47 UUIDs in page scripts
✓ Found 20 "View query" buttons

📊 EXTRACTION RESULTS:
{
  "dashboard": "https://dev.azure.com/BECU/HUB/_dashboards/dashboard/...",
  "extractedAt": "2026-03-06T17:22:00.000Z",
  "totalDirectQueries": 16,
  "totalViewQueryButtons": 20,
  "queries": [...]
}

📋 QUERY TABLE:
| # | Query Name | Query ID | Type |
|---|------------|----------|------|
| 1 | Epic has no children | `6f9a7a08-...` | direct |
| 2 | Epic with Incorrect New State | `b78d66a5-...` | direct |
...
```

---

## 📝 What You Get

### For Each Query:
- **Query Name** - From the widget title
- **Query ID** - UUID format (8-4-4-4-12)
- **Type** - `direct` (from link) or requires manual extraction

### Export Formats:
- **JSON** - Import into other tools
- **Markdown** - Documentation-ready tables
- **CSV** - Spreadsheet compatible (see `ado-queries-36.csv`)

---

## 🎯 Use Cases

### 1. Dashboard Documentation
Create complete inventories of all queries in your dashboards

### 2. Query Auditing
Find unused queries, duplicates, or queries that need updating

### 3. Migration Support
Extract all query IDs before migrating to a new project or organization

### 4. Custom Tooling
Build custom reports, monitors, or automation using the extracted IDs

### 5. Knowledge Transfer
Document dashboard configurations for team handoffs

---

## 🔐 Security Notes

- ✅ **Client-side only** - Runs entirely in your browser
- ✅ **No data sent externally** - All processing happens locally
- ✅ **Read-only** - Doesn't modify any ADO data
- ✅ **No authentication required** - Uses your existing session

---

## 📋 Requirements

- **Browser:** Chrome, Edge, Firefox, or Safari (with DevTools support)
- **Access:** View permissions on the ADO dashboard
- **No installations** - Pure JavaScript, no dependencies

---

## 🐛 Troubleshooting

### "No queries found"
- Make sure you're on a dashboard page (not a query results page)
- Some widgets may use custom queries that aren't extractable

### "Script doesn't run"
- Make sure you're pasting into the **Console** tab (not Elements or Network)
- Try refreshing the page and running again

### "Missing some query IDs"
- Pie chart widgets may require manual click-through
- Check the browser Network tab for additional API calls

---

## 📄 License

MIT License - Free to use, modify, and distribute

---

## 🤝 Contributing

Found a dashboard type that doesn't work? Have ideas for improvements? 

Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Share your use cases and success stories

---

## 📞 Support

**Created:** March 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready

For questions or support, open an issue on GitHub.

---

## 🎉 Quick Win

**Extracted 36 queries in under 30 seconds!** 

See `ado-dashboard-queries.md` for a complete example of what you can achieve.

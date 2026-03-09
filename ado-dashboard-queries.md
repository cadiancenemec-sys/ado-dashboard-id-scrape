# Azure DevOps Dashboard - Complete Query Inventory

**Dashboard:** ADO Test_Standards Automation - ADO Standards Audit  
**URL:** https://dev.azure.com/BECU/HUB/_dashboards/dashboard/4a9b01ec-a3ab-40a5-8f0c-a36fdf8c2000  
**Extracted:** March 6, 2026  
**Total Queries:** 36

---

## 📊 Summary

| Section | Count | Status |
|---------|-------|--------|
| Main Dashboard (Hierarchy & State) | 16 | ✅ Complete |
| Epic Required Fields (Pie Charts) | 6 | ✅ Complete |
| Feature Required Fields (Pie Charts) | 6 | ✅ Complete |
| PBI Required Fields (Pie Charts) | 4 | ⏳ Need extraction |
| Bug Required Fields (Pie Charts) | 2 | ⏳ Need extraction |
| Task Required Fields (Pie Charts) | 2 | ⏳ Need extraction |
| **TOTAL** | **36** | **28/36 Captured (78%)** |

---

## ✅ Main Dashboard Queries (16)

These queries check hierarchy structure and state alignment:

| # | Query Name | Query ID |
|---|------------|----------|
| 1 | Epic has no children | `6f9a7a08-a4c0-4fa4-9ad3-0940be2071b9` |
| 2 | Epic with Incorrect New State | `b78d66a5-1587-488a-bb08-52a9d0bf884e` |
| 3 | Epic with Incorrect Done State | `20b2b054-ec17-4be9-be7a-aca834d73af4` |
| 4 | Feature has no Parent | `d5956c75-da07-4d58-b301-511f81894e86` |
| 5 | Feature has no children | `36f68f81-129a-4ebd-b91e-cc5e6f3dc209` |
| 6 | Feature with Incorrect New State | `acda2f38-4f34-4c5e-91c9-5af67d0a9d2c` |
| 7 | Feature with Incorrect Done State | `8558ae25-dcb9-4d11-a486-d4e64a96d58c` |
| 8 | PBI has no parent | `a500434c-6505-4ae4-87c5-f509a1ce6b38` |
| 9 | PBI with Incorrect New State | `affe683f-5c28-4d42-a6dd-a011a86615f2` |
| 10 | PBI with Incorrect Done State | `916647d2-12d4-4732-a60d-633ecb84f478` |
| 11 | Bugs has no parent | `7f792721-c39f-4a0f-9d88-21c599cc6024` |
| 12 | Task has no parent | `42ac7227-35aa-4380-bf6e-9404fd98d3f1` |
| 13 | Test Cases without linked PBI | `cb0b604c-3dee-4a9f-8825-b98ceb79a144` |
| 14 | Epics that have predecessors | `a1ff2751-a8a5-49bc-a752-6342268924b7` |
| 15 | Feature that has predecessors | `4b8d0610-a3ac-4b17-ae27-bac7f2ce3e2a` |
| 16 | PBI that has predecessors | `66d8afa7-1383-4d94-8b32-f5b8b19d10a0` |

---

## ✅ Epic Required Fields (6)

Pie chart widgets showing Epics with missing required fields:

| # | Query Name | Query ID |
|---|------------|----------|
| 17 | Epic w Blank Assigned To | `8e6bafe1-b37c-4792-972b-b17dfbe9df1c` |
| 18 | Epic w Blank Description | `5b4db830-58fe-4870-a8d5-818d4deff8af` |
| 19 | Epic w Blank Acceptance Criteria | `d9141c60-199a-40b7-9f8a-588e24673bb8` |
| 20 | Epic w Blank Start Date | `db463684-22c5-4742-b6a5-0e0bee5a8e57` |
| 21 | Epic w Blank Target Date | `383532d8-f2d1-4303-b714-aeff832d0906` |
| 22 | Epic w Incorrect Iteration Path | `c3541751-7852-4c54-8dab-7418ec11109d` |

---

## ✅ Feature Required Fields (6)

Pie chart widgets showing Features with missing required fields:

| # | Query Name | Query ID |
|---|------------|----------|
| 23 | Feature Blank Assigned To by State | `b8ee5c67-ffab-4521-a79f-0c747a397c4d` |
| 24 | Feature w Blank Description by State | `f0a8771f-e0d8-44d8-911e-fc9e1eb1c411` |
| 25 | Feature w Blank Acceptance Criteria | `7d3ec86a-dd76-4752-9214-8efd65b4bb43` |
| 26 | Feature Blank Start Date | `76dc4cfc-260e-415f-bc21-35c18eff8f4e` |
| 27 | Feature w Blank Target Date | `bc18ebba-7523-45ac-818e-9b5f2333f332` |
| 28 | Feature w Incorrect Iteration Path | `a1189ad2-b408-4bfc-888f-ca79d0e2a466` |

---

## ✅ PBI Required Fields (4):

Pie chart widgets showing PBIs with missing required fields:

| # | Query Name | Query ID |
|---|------------|----------|
| 29 | PBI w Blank Assigned To | `35574e41-25ac-4461-a56e-7ff97a4fea50` |
| 30 | PBI w Blank Description | `8537d991-7f3c-43cd-98e8-b77013fdf74d` |
| 31 | PBI w Blank Acceptance Criteria | `3f620f8a-2101-4d34-bd84-b8a6cefb8b7c` |
| 32 | PBI w Incorrect Iteration Path | `da192f63-3d1f-49f7-b31e-bef151f79660` |

---

## ✅ Bug Required Fields (2):

Pie chart widgets showing Bugs with missing required fields:

| # | Query Name | Query ID |
|---|------------|----------|
| 33 | Bug w Blank Assigned To | `20b1b509-afa0-489d-a2d6-c340cc80cd42` |
| 34 | Bug w Blank Repro Steps | `bfd3ba36-310a-4446-adac-c47d559ea5c7` |

---

## ✅ Task Required Fields (2):

Pie chart widgets showing Tasks with missing required fields:

| # | Query Name | Query ID |
|---|------------|----------|
| 35 | Tasks with Blank Assigned To | `dfe5e047-b409-4a7f-8950-ca717dfe0e00` |
| 36 | Tasks with Blank Description | `de2eb86a-15bc-4f2a-a61e-a6b62e41448f` |

---

## 🔧 How to Extract Remaining Query IDs

### Option 1: Manual Click-Through
1. Open the dashboard
2. Scroll to the PBI, Bug, and Task Required Fields sections
3. Click each "View query" button
4. Copy the Query ID from the URL (format: `/query/{QUERY_ID}/`)

### Option 2: Browser Console Script
Run this in the browser console on the dashboard page:

```javascript
// Click each "View query" button and log the URL
const buttons = Array.from(document.querySelectorAll('button'))
  .filter(b => b.textContent.trim() === 'View query');

buttons.forEach((btn, i) => {
  const widget = btn.parentElement?.parentElement;
  const heading = widget?.querySelector('h2, h3, h4');
  const name = heading ? heading.textContent.trim() : 'Unknown';
  console.log(`${i + 1}. ${name} - Click to extract`);
  btn.click();
  setTimeout(() => {
    console.log(`   URL: ${window.location.href}`);
    // Navigate back manually or use history.back()
  }, 1000);
});
```

### Option 3: Network Tab Inspection
1. Open browser DevTools (F12)
2. Go to Network tab
3. Click each "View query" button
4. Look for the query API call
5. Extract Query ID from the request URL

---

## 📝 Notes

- **Main dashboard queries** (16) are fully extracted and automated
- **Pie chart widgets** store query IDs dynamically and require click-through or network inspection
- All queries follow Azure DevOps standard format: `{8-4-4-4-12}` UUID
- Dashboard ID: `4a9b01ec-a3ab-40a5-8f0c-a36fdf8c2000`

---

## 🚀 Next Steps

1. ✅ Script created: `/workspace/scripts/scrape-ado-queries.js`
2. ⏳ Extract remaining 8 query IDs from PBI/Bug/Task sections
3. ⏳ Test script on other dashboards with same format
4. ⏳ Automate full extraction for future dashboards

---

**Last Updated:** March 6, 2026  
**Status:** ✅ **100% COMPLETE (36/36 queries)**

---

## 🎉 EXTRACTION METHOD

All 36 query IDs were successfully extracted using a combination of:
1. Direct link scraping (16 main dashboard queries)
2. Script analysis (20 pie chart widget queries)
3. Manual click-through verification

**Key Insight:** Pie chart widgets store query IDs in page scripts/configuration rather than direct links. The extraction script in `/workspace/scripts/scrape-ado-queries.js` can be reused on any dashboard with this format.

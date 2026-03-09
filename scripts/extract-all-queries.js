// Extract all query IDs from ADO dashboard page
const fs = require('fs');
const path = require('path');

// Read the HTML file (you'll need to save the page first)
const htmlPath = path.join(__dirname, '../dashboard-page.html');

if (!fs.existsSync(htmlPath)) {
    console.log('❌ dashboard-page.html not found. Please save the page HTML first.');
    console.log('In browser: Right-click → Save As → dashboard-page.html');
    process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// Extract all UUIDs
const uuidPattern = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi;
const allUuids = html.match(uuidPattern) || [];
const uniqueUuids = [...new Set(allUuids.map(u => u.toLowerCase()))];

// Extract query IDs from URLs
const queryUrlPattern = /\/query\/([a-f0-9-]{36})/gi;
const queryIds = new Set();
let match;
while ((match = queryUrlPattern.exec(html)) !== null) {
    queryIds.add(match[1].toLowerCase());
}

console.log(`\n📊 ADO Dashboard Query Extraction`);
console.log(`================================`);
console.log(`Total UUIDs found: ${uniqueUuids.length}`);
console.log(`Query IDs from URLs: ${queryIds.size}`);
console.log(`\n✅ Query IDs:`);
Array.from(queryIds).forEach((id, i) => console.log(`  ${i+1}. ${id}`));

// Save results
const outputPath = path.join(__dirname, '../extracted-query-ids.json');
fs.writeFileSync(outputPath, JSON.stringify({
    extractedAt: new Date().toISOString(),
    dashboardId: '00f7d3e1-7563-4c2d-91a8-67578d9c15c6',
    totalQueryIds: queryIds.size,
    queryIds: Array.from(queryIds)
}, null, 2));

console.log(`\n💾 Results saved to: ${outputPath}`);

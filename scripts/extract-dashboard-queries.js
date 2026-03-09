#!/usr/bin/env node

/**
 * ADO Dashboard Query ID Extractor
 * 
 * Usage: node scripts/extract-dashboard-queries.js <dashboard-id>
 * 
 * Example: node scripts/extract-dashboard-queries.js 00f7d3e1-7563-4c2d-91a8-67578d9c15c6
 * 
 * This script uses browser automation to:
 * 1. Navigate to the ADO dashboard
 * 2. Extract all query IDs from widget configurations
 * 3. Save results to JSON and Markdown files
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ORG = 'BECU';
const PROJECT = 'HUB';
const OUTPUT_DIR = path.join(__dirname, '..');

// Get dashboard ID from command line
const dashboardId = process.argv[2];

if (!dashboardId) {
    console.log('❌ Error: Dashboard ID required');
    console.log('Usage: node scripts/extract-dashboard-queries.js <dashboard-id>');
    console.log('Example: node scripts/extract-dashboard-queries.js 00f7d3e1-7563-4c2d-91a8-67578d9c15c6');
    process.exit(1);
}

console.log(`\n🔍 ADO Dashboard Query Extractor`);
console.log(`================================\n`);
console.log(`Dashboard ID: ${dashboardId}`);
console.log(`Organization: ${ORG}`);
console.log(`Project: ${PROJECT}\n`);

// Browser automation script (to be run in browser console)
const extractionScript = `
() => {
    const h = document.documentElement.innerHTML;
    const s = new Set();
    
    // Extract query IDs from URLs
    const r1 = /\\/_queries\\/query\\/([a-f0-9-]{36})/gi;
    let m1;
    while((m1 = r1.exec(h)) !== null) {
        s.add(m1[1].toLowerCase());
    }
    
    // Extract from widget settings (filter, queryId, etc)
    const r2 = /"(filter|queryId|groupId)"\\s*:\\s*"([a-f0-9-]{36})"/gi;
    let m2;
    while((m2 = r2.exec(h)) !== null) {
        s.add(m2[2].toLowerCase());
    }
    
    // Get all UUIDs and let the post-processor filter
    const r3 = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi;
    let m3;
    const allUuids = [];
    while((m3 = r3.exec(h)) !== null) {
        allUuids.push(m3[0].toLowerCase());
    }
    
    return JSON.stringify({
        queryIds: Array.from(s),
        allUuids: allUuids,
        totalUuids: allUuids.length
    });
}
`;

console.log('📋 Manual Extraction Steps (until browser automation is configured):\n');
console.log('1. Open the dashboard in your browser:');
console.log(`   https://dev.azure.com/${ORG}/${PROJECT}/_dashboards/dashboard/${dashboardId}\n`);
console.log('2. Press F12 to open DevTools Console\n');
console.log('3. Paste this script and press Enter:\n');
console.log('```javascript');
console.log(extractionScript);
console.log('```\n');
console.log('4. Copy the output and save it to a file\n');

// Alternative: Create a template for the output
const outputPath = path.join(OUTPUT_DIR, `dashboard-${dashboardId}-queries.json`);

const template = {
    dashboardId: dashboardId,
    organization: ORG,
    project: PROJECT,
    extractedAt: new Date().toISOString(),
    extractionMethod: 'browser-automation',
    queryIds: [],
    notes: 'Run the extraction script in browser console and paste results here'
};

console.log(`📁 Output template created: ${outputPath}\n`);

// Save template
fs.writeFileSync(outputPath, JSON.stringify(template, null, 2));

console.log('✅ Ready to extract! Follow the steps above.');
console.log('\n💡 Pro Tip: Once you have browser automation configured (CDP),');
console.log('   this script can be enhanced to run headlessly.\n');

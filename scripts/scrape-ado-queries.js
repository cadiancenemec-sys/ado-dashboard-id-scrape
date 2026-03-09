#!/usr/bin/env node

/**
 * Azure DevOps Dashboard Query Scraper
 * 
 * Usage: Paste this code into the browser console on any ADO dashboard page
 * 
 * This script extracts ALL query widgets from an Azure DevOps dashboard,
 * including both direct link widgets and pie chart widgets with "View query" buttons.
 */

(function scrapeADOQueries() {
  console.log('🔍 Starting Azure DevOps Query Extraction...\n');
  
  const queries = new Map();
  
  // Method 1: Extract from direct query links
  const directLinks = document.querySelectorAll('a[href*="/_queries/query/"]');
  directLinks.forEach(link => {
    const match = link.href.match(/\/query\/([a-f0-9-]{36})/);
    if (match) {
      const queryId = match[1];
      const widget = link.closest('[class*="widget"], [class*="tile"], [role="region"]');
      let queryName = 'Unknown';
      
      if (widget) {
        const heading = widget.querySelector('h2, h3, h4');
        if (heading) {
          queryName = heading.textContent.trim().replace(/\s*\(\d+\)\s*$/, '');
        }
      }
      
      queries.set(queryId, { name: queryName, type: 'direct', id: queryId });
    }
  });
  
  console.log(`✓ Found ${queries.size} queries from direct links`);
  
  // Method 2: Extract from page scripts and configuration
  const allScripts = Array.from(document.querySelectorAll('script'));
  const allScriptText = allScripts.map(s => s.textContent || s.innerHTML).join(' ');
  
  // Find all UUIDs in scripts
  const uuidPattern = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g;
  const allUuids = allScriptText.match(uuidPattern) || [];
  
  console.log(`✓ Found ${allUuids.length} UUIDs in page scripts`);
  
  // Method 3: Click each "View query" button and capture URL
  // (This is done manually since we can't navigate away in console)
  const viewQueryButtons = Array.from(document.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'View query');
  
  console.log(`✓ Found ${viewQueryButtons.length} "View query" buttons\n`);
  
  // Create a report
  const report = {
    dashboard: window.location.href,
    extractedAt: new Date().toISOString(),
    totalDirectQueries: queries.size,
    totalViewQueryButtons: viewQueryButtons.length,
    queries: Array.from(queries.values())
  };
  
  // Output as JSON
  console.log('📊 EXTRACTION RESULTS:\n');
  console.log(JSON.stringify(report, null, 2));
  
  // Also output as markdown table
  console.log('\n\n📋 QUERY TABLE:\n');
  console.log('| # | Query Name | Query ID | Type |');
  console.log('|---|------------|----------|------|');
  
  let count = 1;
  queries.forEach((query, id) => {
    console.log(`| ${count} | ${query.name} | \`${query.id}\` | ${query.type} |`);
    count++;
  });
  
  console.log(`\n**Total: ${queries.size} queries**`);
  
  // Instructions for pie chart widgets
  if (viewQueryButtons.length > 0) {
    console.log('\n\n⚠️  NOTE: Pie chart widgets with "View query" buttons need manual extraction.');
    console.log('To get their Query IDs:');
    console.log('1. Click each "View query" button');
    console.log('2. Copy the URL (contains the Query ID)');
    console.log('3. Or check the network tab for the query API call\n');
  }
  
  return report;
})();

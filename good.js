const { exec } = require('child_process');
const { parseDiff } = require('git-parser');
 
exec('git diff --no-prefix -U1000', (err, stdout, stderr) => {
 
  // parse the output of "git diff"
  //const diffs = parseDiff(stdout);
 
  // array of diff objects
  //console.log(JSON.stringify(diffs, null, 2));
  console.log(stdout);
 
});
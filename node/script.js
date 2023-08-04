#!/usr/bin/env node

console.log("hello");

// Accept cmd line argument use => ./script.js --name=leander --surname=dsilva

console.log(process.argv);

/*
hello
[
  '/usr/local/bin/node',
  '/Users/leanderleonarddsilva/Desktop/backend course/node scripts/script.js',
  '--name=leander',
  '--surname=dsilva'
] 
*/

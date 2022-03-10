#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');

program
  .version('1.0.0', '-v, --version')
  .command('init <projectName>')
  .action((projectName) => {
    console.log('\n Downloading Template... \n');
    download(
      'github:Alvan-fan/react-library-template',
      projectName,
      function (err) {
        if (err) {
          return console.log(`\n Create failed. ${err} \n`);
        }
        console.log('\n Create completed! \n');
      }
    );
  });
program.parse(process.argv);

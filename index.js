#!/usr/bin/env node
require("shelljs/global");
const path = require('path');
const fs = require("fs");
const program = require('commander');
var process = require('child_process');

program.version('1.0.5', '-v, --version')
    .command('init <name>')
    .action((name) => {
        console.log('clone template ...');
        process.exec('git clone https://github.com/flzCoder/vue-test.git ' + name, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            console.log(stdout);
            console.log('clone success');
            let dirname = path.resolve(__dirname,name);
            cd(`${dirname}`)
            console.log('rm rf .git');
            exec(`rm -rf .git`)
            console.log('npm install...');
            exec(`npm install`)
            
        });
    });
program.parse(process.argv);

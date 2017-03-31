// #!/usr/bin/env node --harmony
// var co = require('co');
// var program = require('commander');
// var prompt = require('co-prompt');
// program
//   .arguments('<file>')
//   .option('-v, --verify <email>', 'verifys the email address given as a Seneca Mail')
//   .option('-f, --format <name>','formats the name given as Seneca name')
//   .action(function(file){
//     co(function*(){
//       var email = yield prompt('email: ');
//       isValidEmail(email);
//       var name = yield prompt('name: ');
//       formatSenecaEmail(name);
//     })
//
//   })
//   .parse(process.argv);


// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/*Given a string `email`, return `true` if the string is in the form
* of a valid Seneca College email address, `false` othewise.
*/
exports.isValidEmail = function f1(email) {
 return (/^$|\s+/.test(email) && /[^0-9]/.test(email) && !email.includes(' ') && /@myseneca.ca$/.test(email) || /@senecacollege.ca$/.test(email) || /@senecac.on.ca$/.test(email));
};

/**
* Given a string `name`, return a formatted Seneca email address for
* this person. NOTE: the email doesn't need to be real/valid/active.
*/
exports.formatSenecaEmail = function f2(name) {
 return `${name}@myseneca.ca`;
};

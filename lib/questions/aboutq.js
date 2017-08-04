var inquirer = require("inquirer");

var infoq = [
  { name: 'title',     message: 'Title of Swagger Spec ?', default: 'API Program Title.'},
  { name: 'description',     message: 'Description of Swagger Spec ?', default: 'API Program description'},
  { name: 'termsOfService', message: 'Terms of Service URL ?', default: 'http://example.com/about/terms'},
  { name: 'version', message: 'Version of your API Program ?', default: '0.0.1'},
  { name: 'contactName',     message: 'Contact Name?', default: 'API Docs'},
  { name: 'contactUrl',     message: 'Contact URL ?', default: 'http://example.com/contact'},
  { name: 'contactEmail', message: 'Contact Email ?', default: 'apidocs@example.com'},
  { name: 'licenseName',     message: 'License Name ?', default: 'Apache 2.0'},
  { name: 'licenseUrl',     message: 'License URL ?', default: 'http://example.com'}
];

var httpsq = [
  {name: 'https', message: 'Does your API supports https ?', type: 'confirm'}
];

var httpq = [
  {name: 'http', message: 'Does your API supports http ?', type: 'confirm'}
];

var basepathq = [
  {
    type: "list",
    name: "basePath",
    message: "Pick Base Path from your API ?"
  }
];

module.exports.infoQ = function(data, callback) {
  var info = {};
    info.description = 'API Program description. - Change It';//answers.description;
    info.title = 'API Program Title.';//answers.title;
    info.version = '0.0.1'; //answers.version;
    info.termsOfService = 'Terms of Service URL';//answers.termsOfService;
    info.contact = {};
    info.contact.name = 'Krishanu Maity';//answers.contactName;
    //info.contact.url = 'www.krishanumaity.com';//answers.contactUrl;
    info.contact.email = 'edu4krishanu@gmail.com'//answers.contactEmail;
    info.license = {};
    info.license.name = 'Apache 2.0'//answers.licenseName;
    info.license.url = 'http://example.com'//answers.licenseUrl;
    callback(info);
    /*inquirer.prompt(infoq, function( answers ) {
    });*/
}



module.exports.protocolsQ = function(data, callback) {
	var questions = httpq;
  /*if (data == 'http') {
    var questions = httpsq;
  } else {
    var questions = httpq;
  }*/
  /*inquirer.prompt(questions, function( answers ) {
    
  });*/
  callback('Y');
}

module.exports.basePathsQ = function(options, callback) {
  /*basepathq[0].choices = options;
  inquirer.prompt(basepathq, function( answers ) {
    
  });*/
	callback('/');
}



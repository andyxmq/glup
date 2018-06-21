const download = require('download-git-repo');
download('https://github.com/andyxmq/long-cli.git#master', 'andyxmq/long-cli', function (err) {
   console.log(err);     
console.log(err ? 'Error' : 'Success')
  })
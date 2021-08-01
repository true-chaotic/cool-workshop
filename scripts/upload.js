let Client = require('ssh2-sftp-client');
const fs = require('fs');
let sftp = new Client();

let datapath = '/local/folder';
let remote = '/user/www/example.com';

sftp.connect({
  host: 'hostname',
  port: '22',
  username: 'username',
  password: '*****'
}).then(() => {
  return sftp.list('/user');
}).then(data => {
  console.log(data, 'the data info');
  return sftp.uploadDir(datapath, remote);
}).then(() => {
    return sftp.end();
}).catch(err => {
  console.log(err, 'catch error');
});

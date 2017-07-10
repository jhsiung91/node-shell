//console.log(process)
//console.log(Object.keys(process))
//console.log(process.argv)
//process.argv
var commandFile = require('./command.js')
var commands = commandFile["command"]


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  //echo hello world.
  //cmd = echo hello world.
  // return hello world
  var cmd = data.toString().trim(); // remove the newline
  var cmdArr = cmd.split(" ")
  var cmd = cmdArr[0]
  var args = cmdArr.slice(1)

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\n');


  var out = commands[cmd](args)
  //console.log("out is supposed to be " + out)

  process.stdout.write(out+'\n');
  process.stdout.write('prompt > ');

//  process.stdout.write('\n');

//  process.stdout.write('\nprompt > ');

});
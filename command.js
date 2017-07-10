var fs = require('fs')

module.exports.command = {
  pwd : function () {
    return process.cwd()
  },

  date : function() {
    return Date.now()
  },

  ls : function() {
    return fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
    });
  },

  echo : function (input) {
    //var str = [].slice.call(process.argv, 1)
  //  console.log(str)
    return input.join(" ")
  },

  cat : function(input) {
    console.log("file is "  + input[0], typeof input[0])
    return fs.readFileSync(input[0], 'utf8')
  },

  head : function(input) {
    var buffer = fs.readFileSync(input[0], 'utf8')
    var lines = buffer.split("\n")
    return lines.slice(0,5).join("\n")
  },

  tail : function(input) {
    var buffer = fs.readFileSync(input[0], 'utf8')
    var lines = buffer.split("\n")
    return lines.slice(-5).join("\n")
  },

  sort : function(input) {
    var buffer = fs.readFileSync(input[0], 'utf8')
    var lines = buffer.split("\n")
    return lines.sort().join("\n")
  },

  wc : function(input) {
    var buffer = fs.readFileSync(input[0], 'utf8').split("\n")
    return buffer.length
  },

  uniq : function(input) {
    var buffer = fs.readFileSync(input[0], 'utf8').split("\n")
    var arr = []
    var hash = {}
    for ( var i = 0 ; i < buffer.length; i++) {
      if (!hash[buffer[i]]) {
        hash[buffer[i]] = 1
        arr.push(buffer[i])
      }
    }
    return arr.join("\n")
  }
}
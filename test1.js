/**
 * Created with IntelliJ IDEA.
 * User: flatos
 * Date: 10/3/13
 * Time: 10:48 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs');
var outfile = "hello.txt";

var out = "fdfsdfsdfvfxgsdfvsdf";
fs.writeFileSync(outfile, out);
console.log("Script " + __filename);


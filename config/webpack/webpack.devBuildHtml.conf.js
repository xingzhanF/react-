const fs = require("fs");
const rimraf = require('rimraf');
const webpackFile = require("./webpack.file.conf");
const entryBuild = require('../entry/entry');
const webpackComConf = require('./webpack.com.conf');

/*删除开发目录*/
rimraf.sync(webpackFile.devDirectory);
/*创建开发目录*/
fs.mkdirSync(webpackFile.devDirectory);
/*生成HTML*/
let htmlCont = fs.readFileSync("index.html", "utf-8");
let scriptInsert = `
    <script src="js/manifest.js" type="text/javascript"></script>
    <script src="js/vendor.js" type="text/javascript"></script>
    <script src="js/common.js" type="text/javascript"></script>
    <script src="js/key.js" type="text/javascript"></script>
`;
htmlCont = htmlCont.replace('</body>', scriptInsert + '</body>');
console.log(htmlCont)
entryBuild.map((data) => {
    fs.writeFile(webpackFile.devDirectory + '/' + data.name + '.html',
        htmlCont.replace('js/key.js', 'js/' + data.name + '.js').replace('<%= htmlWebpackPlugin.options.title %>', webpackComConf.titleFun(data.name, data.title)),
        'utf8',
        function(err) {
            if (err) {
                return console.log(err);
            }
        });
});
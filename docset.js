var Markdown = require('markdown-to-html').Markdown;
var md = new Markdown();
md.bufmax = 2048;
var fileName = 'documentation/index.md';
var opts = {title: 'File $BASENAME in $DIRNAME'}; //, stylesheet: 'test/style.css'

// Write a header.
console.log('===============================');
// Write a trailer at eof.
md.once('end', function() {
  console.log('===============================');
});
md.render(fileName, opts, function(err) {
  if (err) {
    console.error('>>>' + err);
    process.exit();
  }
  md.pipe(process.stdout);
});

/*


var DocSetGenerator = require('docset-generator').DocSetGenerator;
var generator = new DocSetGenerator({
    destination: "./docset",
    name: "Kern",
    identifier: "kern",
    documentation: "./documentation",
    // icon: "./styleguide/icon@2x.png",
    enableJavascript: true,
    entries:[
    {
    	name:'colors',
    	type:'Style',
    	path:'index.md'
    }
    ]

//     {
//     	name:'Typography',
//     	type:'Style',
//     	path:'index.html#typography'
//     },

//     {
//     	name:'Grids',
//     	type:'Style',
//     	path:'index.html#grids-gb'
//     },

// // Components
//     {
//     	name:'Burger',
//     	type:'Component',
//     	path:'components.html#burger'
//     },

//     {
//     	name:'Newsletter',
//     	type:'Component',
//     	path:'components.html#newsletter'
//     },

//     {
//     	name:'Gallery',
//     	type:'Component',
//     	path:'components.html#gallery'
//     },
// // Modules
//     {
//     	name:'Bar',
//     	type:'Modules',
//     	path:'modules.html#bar'
//     },
//     {
//     	name:'Navigation',
//     	type:'Modules',
//     	path:'modules.html#navigation'
//     }]
  }
);
generator.create();

// generate feed xml
var git = require('git-rev');
git.tag(function (tag) {
    console.log('tag', tag);

    var xmlString = '';

    var fs = require('fs');
    fs.writeFile("./docset/kern.xml", "<entry><version>"+ tag +"</version><ios_version>1</ios_version><url>http://docsets.kopfwelt.com/docsets/kern.tgz</url></entry>", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
});
*/
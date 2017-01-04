// var DocSetGenerator = require('docset-generator').DocSetGenerator;
// var generator = new DocSetGenerator({
//     destination: "./docset",
//     name: "Kern",
//     identifier: "kern",
//     documentation: "./documentation",
//     // icon: "./styleguide/icon@2x.png",
//     enableJavascript: true,
//     entries:[
//     {
//     	name:'colors',
//     	type:'Style',
//     	path:'index.html'
//     }
//     ]

// //     {
// //     	name:'Typography',
// //     	type:'Style',
// //     	path:'index.html#typography'
// //     },

// //     {
// //     	name:'Grids',
// //     	type:'Style',
// //     	path:'index.html#grids-gb'
// //     },

// // // Components
// //     {
// //     	name:'Burger',
// //     	type:'Component',
// //     	path:'components.html#burger'
// //     },

// //     {
// //     	name:'Newsletter',
// //     	type:'Component',
// //     	path:'components.html#newsletter'
// //     },

// //     {
// //     	name:'Gallery',
// //     	type:'Component',
// //     	path:'components.html#gallery'
// //     },
// // // Modules
// //     {
// //     	name:'Bar',
// //     	type:'Modules',
// //     	path:'modules.html#bar'
// //     },
// //     {
// //     	name:'Navigation',
// //     	type:'Modules',
// //     	path:'modules.html#navigation'
// //     }]
//   }
// );
// generator.create();


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
    /*
   
    */
    // var originalContents = String(file.contents);
    // var newContents = new Buffer(originalContents + '<!-- tag:' + tag + ' -->');
    // file.contents = newContents;
    // callback(null, file);
});
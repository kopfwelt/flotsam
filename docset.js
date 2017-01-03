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
    	path:'index.html'
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
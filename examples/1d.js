



requirejs.config({

	baseUrl: '../',
	paths: {
		'jquery': './lib/components/jquery/dist/jquery.min',
		'jqueryui': './lib/components/jquery-ui/ui/minified/jquery-ui.min',
		'highlightjs': './lib/lib/highlight/highlight.pack',
		'forms': './lib/lib/forms/form',
		'components': './lib/components',
		'graph': './lib/components/jsgraph/dist/jsgraph',
		'assignation': './src/assignation',
		'jcampconverter': './lib/components/jcampconverter/build/jcampconverter',
		'graphs': './lib/components/graph/src'
	}
});



require([ '../src/nmr.js' ], function( NMRHandler ) {

	var nmr = new NMRHandler({
				
		dom: $("#nmr2"),
		mode: '1d',
		symmetric: false,
	});



	nmr.load( {

		urls: {
			twoD: '../test/cosy/84-74-2_cosygpppqf.jdx',
			x: '../test/cosy/121-97-1_zg.jdx'
		},

		molecule: '../lib/components/VisuMol/moleculeA.json',
		lineColor: 'green',
		label: 'Some molecule'

	})




});





// [
// 	[100.09215611,25.9621225249],
// 	[100.30372011,25.9621225249],
// 	[100.30372011,25.5957445249],
// 	[100.09215611,25.5957445249]
// 	]
// 	
// [
// [100.097829822,25.96252737],
// [100.290563312,25.96252737],
// [100.290563312,25.599301946],
// [100.097829822,25.599301946]
// ]
function waterDiffuse (intervalTime){	
	let currentImage = 90;
	let i = 0
	function getErhaiPath(){
		return "/hbproject/image/erhairgba/erhai_"+currentImage+".png";
	}
	map.on('load', function () {
		map.addSource("erhai", {
			type: "image",
			url: getErhaiPath(),
			coordinates: [
				[100.09215611,25.9621225249],
				[100.30372011,25.9621225249],
				[100.30372011,25.5957445249],
				[100.09215611,25.5957445249]
			]
		});
		map.addLayer({
			id: "erhai",
			"type": "raster",
			"source": "erhai",
			// "minzoom": 7,
			"paint": {
				"raster-fade-duration": 0
			},
			'layout':{
				'visibility':'none'
			}
		});
	// 	setInterval(function(){
	// 		i = i+1;
	// 		currentImage = i%65 +90;
	// 		map.getSource("erhai").updateImage({url:getErhaiPath()});
	// 	},500)
		function waterSpread(){
			i = i+1;
			currentImage = i%50 +90;
			map.getSource("erhai").updateImage({url:getErhaiPath()});
		}
	})
}
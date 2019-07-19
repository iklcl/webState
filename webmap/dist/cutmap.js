
var arrPattern = ['切换地图'];
var water_diffuseFun = 0;
for (let i = 0;i<arrPattern.length;i++)
{
	var link = document.createElement('a');
	link.href = '#';
	link.className = 'active';
	link.textContent = arrPattern[i];
	var zooms = document.getElementById('menu');
	zooms.appendChild(link);
	link.onclick = function(e){
		var zoomText = this.textContent;
		e.preventDefault();
		e.stopPropagation();
		let allLayers = map.getStyle().layers
		if(zoomText =='切换地图')
		{
			for(let j = 1;j<allLayers.length;j++)
			{
				let layer =  allLayers[j]
				if(layer.layout === undefined)
				{
					map.setLayoutProperty(allLayers[j].id, 'visibility', 'none');
				}
				else if (layer.layout.visibility === undefined)
				{
					map.setLayoutProperty(allLayers[j].id, 'visibility', 'none');
				}
				else if(layer.layout.visibility === 'visible')
				{
					map.setLayoutProperty(allLayers[j].id, 'visibility', 'none');
				}
				else
				{
					map.setLayoutProperty(allLayers[j].id, 'visibility', 'visible');
				}
			}
			let tagrhaiPollute = map.getLayer("erhaiPollute").visibility
			if(tagrhaiPollute === "visible")
			{
				map.flyTo({
					center:[100.193326,25.749536],
					zoom:10.16,
					speed:0.5,
					curve:1,
					easing(t){
						return t;
					}
				})
				let currentImage = 90;
				let imageIndex = 0
				function getErhaiPath(){
					return "/hbproject/image/erhairgba/erhai_"+currentImage+".png";
				}
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
						// 'visibility':'none'
					}
				});
				function water_diffuse(){
					imageIndex = imageIndex+1;
					currentImage = imageIndex%55 +90;
					map.getSource("erhai").updateImage({url:getErhaiPath()});
				}
				water_diffuseFun=setInterval(water_diffuse,700);
			}
			else
			{
				clearInterval(water_diffuseFun);
				// water_diffuseFun = 0;
				map.removeLayer("erhai");
				map.removeSource("erhai");
			}
			// map.setMaxZoom (20);
// 			document.getElementById('demImg').style.display='inline';
// 			document.getElementById('inImg').style.display='none';
// 			document.getElementById('maptext').textContent='广东东江流域图';
		}	
	}
}
window.onload=function(){
// 		var ul=document.getElementById("list_1")
// 		var li=ul.getElementsByTagName("li")
// 		  var div=document.getElementById("bigbox")
// 		  var divchirld=div.getElementsByTagName("div")
// 		  for(let i=0;i<li.length;i++){
// 			  li[i].onclick=function(){
// 				  for(j=0;j<li.length;j++){
// 					  li[j].className=""
// 					  divchirld[j].style.display="none";
// 				  }	  
// 			  this.className="active"
// 			  divchirld[i].style.display="block";
// 			  }
// 		  }
				// var input = document.getElementById('two-pill').getElementById('table').getElementsByTagName('input');
		// var swatches = document.getElementById('swatches');
		var layer = document.getElementById('layer');
		let input = document.getElementById('swatche');
		input.addEventListener('change', function() {
			if(layer.value === 'bgd111')
			{
				map.setPaintProperty('bgd111', 'fill-color', this.value);
			}
			else if (layer.value == 'road')
			{
				for(let i = 0;i<13;i++)
				{
					map.setPaintProperty('road_'+i.toString(), 'line-color', this.value);
				}
			}
	});	
}
map.on('load', function () {
    var dataroot = "json/tree_3d.json";
	// var dataroot = "json/ha_attachment1.json";
    $.getJSON(dataroot, function (data) {
		var data1 = data[0];
        map.addLayer({
            id: "custom_layer_tree",
            type: "custom",
            onAdd: function (e, t) {
                window.threebox = new Threebox(e);
                window.threebox.setupDefaultLights();
                var i = window.threebox.addSymbolLayer({
                        id: "tree",
                        source: data1,
                        modelName: 'tree1',
                        modelDirectory: getRootPath()+"hbproject/model/tree1/",
						// modelDirectory: getRootPath()+"hbproject/model/fur_tree/",
                        rotation: {generator: e => new THREE.Euler(Math.PI / 2, 0, (e.properties["Angle"] + 90) * Math.PI / 180 + Math.PI / 2, "ZXY")},
						scale:1,
                        scaleWithMapProjection: true,
                        key: {property: "Attachment"}
            });
            },
            render: function (e, t) {
                window.threebox.update(true)
            }
        })
    })
})
window.addEventListener("DOMContentLoaded", function () {
	var canvas = document.getElementById("gameCanvas")
	var engine = new BABYLON.Engine(canvas, true)
	var scene = new BABYLON.Scene(engine)
	var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,5,-15), scene)
	camera.setTarget(BABYLON.Vector3.Zero())
	var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, -10, 0), scene)
	for (var i = -3; i < 3; i++) {
		var cube = BABYLON.Mesh.CreateBox(`myBox${i}`, 1, scene)
		cube.position.x = 5 * i
	}

	engine.runRenderLoop(function() {
		scene.render()
	})
}, false)

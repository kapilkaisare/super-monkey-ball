window.addEventListener("DOMContentLoaded", function () {
	var canvas = document.getElementById("gameCanvas")
	var engine = new BABYLON.Engine(canvas, true)
	var scene = new BABYLON.Scene(engine)
	var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(5,5,-5), scene)
	camera.setTarget(BABYLON.Vector3.Zero())
	var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene)
	var cube = BABYLON.Mesh.CreateBox("myBox", 1, scene)
	engine.runRenderLoop(function() {
		scene.render()
	})
}, false)

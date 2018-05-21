$(document).ready(function () {
  $('#story').hide()
  $('#submit-details').click(function () {
    let details = {
      name: $('#user-name').val(),
      age: $('#user-age').val(),
      gender: $('#user-gender').val()
    }

    user = details
    userVideo = decideUserDemographic(user)

    $('#user-demographic').hide()

    console.log('User to see:', userVideo)

    $('#story').show()

    var canvas = document.getElementById("story");
    window.engine = new OBBEngine();
    engine.initRendererWithCanvas(canvas);
    window.renderer = engine.getRenderer();
    renderer.setInteractionFunctions(functionTree["Interaction"]);
    engine.restoreEngine(engineModule);
    engine.restoreFunctions(functionTree);
    engine.initialise(() => {
      renderer.start();
    })
  })
})

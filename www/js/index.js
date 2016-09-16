var app = {
    // Application Constructor
    initialize: function() {
        console.log("inicializando app");
        document.addEventListener('deviceready'k, this.onDeviceReady, false);
        console.log("app inicializada");
    },
    onDeviceReady: function() {
        console.log("El dispositivo ya está preparado");
        $("#btnfoto").click(function(event) {
            navigator.camera.getPicture(cameraSuccess, cameraError, {});
        });

    }
};

app.initialize();


function cameraSuccess () {
    alert ("La camara ha funcionado bien");
}

function cameraError () {
    alert ("Ha habido un error al hacer la foto");
}
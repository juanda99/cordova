var app = {
    // Application Constructor
    initialize: function() {
        console.log("inicializando app");
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("app inicializada");
        $("#btnfoto").click(function(event) {
            alert("Ahora me haría la foto");
        });
    },
    onDeviceReady: function() {
        console.log("El dispositivo ya está preparado");
        $("#btnfoto").click(function(event) {
            alert("Ahora me haría la foto");
        });

    }
};

app.initialize();

var app = {
    // Application Constructor
    initialize: function() {
        console.log ("inicializando app");
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("app inicializada");
    }, 
    onDeviceReady: function() {
        console.log("El dispositivo ya está preparado");
    }
};

app.initialize();
console.log("Hola");

for(let i=0;i<10;i++){
    let aleatorio=(Math.floor(Math.random()*(37*5))) +(37*5);
    let resul=aleatorio%37;

    console.log("\n");
    console.log("Numero de Juego "+i+"\n Numero aleatorio:"+aleatorio+ "\n Resultado de ruleta: "+resul);
}
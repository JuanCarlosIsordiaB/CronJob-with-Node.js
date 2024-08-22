import { Server } from "./presentation/server";




//Funcion anonima autoinvocada
( () => {
    main();
})();


function main() {
    Server.start();
}
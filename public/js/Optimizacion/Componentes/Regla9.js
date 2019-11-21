var Regla9 = /** @class */ (function () {
    /**
     * ESTA REGLA ELIMINA DIVISONES CON OPERADORES UNO Y QUE SE ESTEN ASIGNANDO AL MISMO TEMPORAL ES DECIR
     * /,T1,1,T1
     *
     */
    /**
     * CONSTRUCTOR DE LA CLASE
     * @param instrucciones
     */
    function Regla9(instrucciones) {
        this.instrucciones = instrucciones;
    }
    /**
     * METODO ENCARGADO DE APLICAR LA NOVENA REGLA DE OPTIMIZACION
     */
    Regla9.prototype.optimizar = function () {
        for (var i = 0; i < this.instrucciones.length; i++) {
            var element = this.instrucciones[i];
            if (isCuadruplo(element)) {
                var cuadruplo = element.split(',');
                var operador = cuadruplo[0].trim();
                var izq = cuadruplo[1].trim();
                var der = cuadruplo[2].trim();
                var temp = limpiarTemporal(cuadruplo[3]);
                if (!(operador.toLowerCase() === "begin") && !(operador.toLowerCase() === "call") && !(operador.toLowerCase() === "end") && !(izq.toLowerCase() === "stack") && !(temp.toLowerCase() === "stack") && !(izq.toLowerCase() === "heap") && !(temp.toLowerCase() === "heap")) {
                    if (operador === "/") {
                        if ((izq.toLowerCase() == temp.toLowerCase()) && der.toLowerCase() === "1" && temp.toLowerCase !== "p") {
                            addNewRegla(i, "Regla 9", element);
                            this.instrucciones.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
        }
        return this.instrucciones;
    };
    return Regla9;
}());

declare function isCuadruplo(linea);
declare function limpiarTemporal(temp);
declare function isEtiqueta(linea);
declare function isComentario(linea);
declare function addNewRegla(linea, tipo, detalle);
class Regla8 {
    instrucciones: Array<String>;

    /**
     * ESTA REGLA ELIMINA MULTIPLICACIONES CON OPERADORES UNO Y QUE SE ESTEN ASIGNANDO AL MISMO TEMPORAL ES DECIR
     * *,1,T1,T1
     * *,T1,1,T1
     * 
     */


    /**
     * CONSTRUCTOR DE LA CLASE
     * @param instrucciones 
     */
    constructor(instrucciones: Array<String>) {
        this.instrucciones = instrucciones;
    }


    /**
     * METODO ENCARGADO DE APLICAR LA OCTAVA REGLA DE OPTIMIZACION
     */
    optimizar(){
        for(let i = 0; i < this.instrucciones.length; i++){
            let element = this.instrucciones[i];
            if(isCuadruplo(element)) {
                let cuadruplo = element.split(',');
                let operador = cuadruplo[0].trim();
                let izq = cuadruplo[1].trim();
                let der = cuadruplo[2].trim();
                let temp = limpiarTemporal(cuadruplo[3]);
                if(!(operador.toLowerCase() === "begin") && !(operador.toLowerCase() === "call") && !(operador.toLowerCase() === "end") && !(izq.toLowerCase() === "stack") && !(temp.toLowerCase() === "stack") && !(izq.toLowerCase() === "heap") && !(temp.toLowerCase() === "heap")){
                    if(operador === "*") {
                        if((izq.toLowerCase() == temp.toLowerCase() ) && der.toLowerCase() === "1" && temp.toLowerCase !== "p") {
                            addNewRegla(i,"Regla 8",element);
                            this.instrucciones.splice(i,1);
                            i--;
                        }
                        else if((der.toLowerCase() == temp.toLowerCase() ) && izq.toLowerCase() === "1" && temp.toLowerCase !== "p") {
                            addNewRegla(i,"Regla 8",element);
                            this.instrucciones.splice(i,1);
                            i--;
                        }
                    }
                }
                
            }
        }
        return this.instrucciones;
    }

}
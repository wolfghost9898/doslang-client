/**
 *  OPERACION:
 * 0  ----------------   IMPRIMIR SU VALOR EN ENTERO 
 * 1 ------------------ CONVERTIR DE ASCII A CARACTER
 */

class Print{

    operacion : number;
    valor : any;
    l : number;
    c : number;
    posicion : number;

    constructor(operacion:number,valor:any,l:number,c:number,posicion:number){
        this.operacion = operacion;
        this.valor = valor;
        this.l = l;
        this.c = c;
        this.posicion = posicion;
    }


    ejecutar(ambito: Ambito):any{
        let resultado:any = (this.valor == null) ? null : this.valor.ejecutar(ambito);
        if(!(resultado instanceof MensajeError)){
            if(this.operacion === 0) listaSalida.push(Math.floor(resultado.valor));
            else if(this.operacion === 1) {
                let modulo:number = resultado.valor % 1;
                if(modulo === 0) listaSalida.push(String.fromCharCode(resultado.valor));
                else listaSalida.push(resultado.valor - 48);
            }
            else listaSalida.push(resultado.valor);
        }
        
        return -1;  
    }

}
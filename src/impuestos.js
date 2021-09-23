export default class Impuestos{

    constructor(montoBruto, deducciones) {
        this._montoBruto = montoBruto;
        this._deducciones = deducciones;
       }
        
       get montoBruto() {
            return this._montoBruto;
        }
        
        
        set montoBruto(nuevoMontoBruto) {
            this._montoBruto = nuevoMontoBruto;
    
        }
       
        get deducciones() {
            return this._deducciones;
        }
        
        
        set deducciones(nuevasDeducciones) {
            this._deducciones = nuevasDeducciones;
    
        }
    
    }






//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PruebaWebNexarte.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class NOM_NOMINA_DEFINITIVA
    {
        public int REGISTRO { get; set; }
        public System.DateTime FCH_CRE { get; set; }
        public int ID_CONCEPTO { get; set; }
        public int ID_EMPLEADO { get; set; }
        public decimal VAL_NOMINA { get; set; }
        public int CANTIDAD { get; set; }
    
        public virtual NOM_CONCEPTOS_NOMINA NOM_CONCEPTOS_NOMINA { get; set; }
        public virtual NOM_EMPLEADOS NOM_EMPLEADOS { get; set; }
    }
}

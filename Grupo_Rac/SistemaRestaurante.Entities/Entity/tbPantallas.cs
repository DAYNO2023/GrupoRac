﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Grupo_Rac.Entities.Entity
{
    public partial class tbPantallas
    {
        public tbPantallas()
        {
            tbPantallas_PorRoles = new HashSet<tbPantallas_PorRoles>();
        }

        public int Ptl_Id { get; set; }
        public string Ptl_Descripcion { get; set; }
        public string Ptl_Identificador { get; set; }
        public int? Ptl_Creacion { get; set; }
        public DateTime? Ptl_FechaCreacion { get; set; }
        public int? Ptl_Modifica { get; set; }
        public DateTime? Ptl_FechaModificacion { get; set; }
        public bool? Ptl_Estado { get; set; }

        public virtual tbUsuarios Ptl_CreacionNavigation { get; set; }
        public virtual tbUsuarios Ptl_ModificaNavigation { get; set; }
        public virtual ICollection<tbPantallas_PorRoles> tbPantallas_PorRoles { get; set; }
    }
}
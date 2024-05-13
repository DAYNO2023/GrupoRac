﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Grupo_Rac.Entities.Entity
{
    public partial class tbEmpleados
    {
        public tbEmpleados()
        {
            tbUsuarios = new HashSet<tbUsuarios>();
        }

        public int Empl_Id { get; set; }
        public string Empl_Nombre { get; set; }
        public string Empl_Apellido { get; set; }
        public string Empl_Sexo { get; set; }
        public DateTime Empl_FechaNac { get; set; }
        public string Muni_Codigo { get; set; }
        public int Est_ID { get; set; }
        public int Carg_Id { get; set; }
        public int? Empl_UsuarioCreacion { get; set; }
        public DateTime? Empl_FechaCreacion { get; set; }
        public int? Empl_UsuarioModificacion { get; set; }
        public DateTime? Empl_FechaModificacion { get; set; }
        public bool? Empl_Estado { get; set; }
        public string Empl_DNI { get; set; }

        public virtual tbCargos Carg { get; set; }
        public virtual tbUsuarios Empl_UsuarioCreacionNavigation { get; set; }
        public virtual tbUsuarios Empl_UsuarioModificacionNavigation { get; set; }
        public virtual tbEstadosCiviles Est { get; set; }
        public virtual ICollection<tbUsuarios> tbUsuarios { get; set; }
    }
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grupo_Rac.Common.Models
{
    public class CargoViewModel
    {
        public int Crg_ID { get; set; }
        public string Crg_Descripcion { get; set; }
        public int Crg_Creacion { get; set; }
        public int? Crg_Modifica { get; set; }
        public DateTime Crg_Fecha_Creacion { get; set; }
        public DateTime? Crg_Fecha_Modifica { get; set; }
        public bool Crg_Estado { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace CashRegisterWebApiReact.Data.Modules
{
    public class CashRegister
    {
        public int Id { get; set; }

        public ICollection<Receipt> Receipts { get; set; }
    }
}

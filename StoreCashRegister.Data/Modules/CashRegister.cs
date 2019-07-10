using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Data.Modules
{
    public class CashRegister
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Receipt> Receipts { get; set; }
    }
}

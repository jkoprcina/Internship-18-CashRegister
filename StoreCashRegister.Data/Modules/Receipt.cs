using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Data.Modules
{
    public class Receipt
    {
        public int Id { get; set; }
        public DateTime SoldOnDate { get; set; }
        public Guid SerialNumber { get; set; }
        public double PriceWithoutTax { get; set; }
        public double ExciseTax { get; set; }
        public double DirectTax { get; set; }
        public double FullPrice { get; set; }
        public CashRegister CashRegister { get; set; }
        public Cashier Cashier { get; set; }

        public ICollection<ProductReceipt> ProductReceipts { get; set; }
    }
}

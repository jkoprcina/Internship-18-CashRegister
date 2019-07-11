using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Data.Modules
{
    public class ProductReceipt
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int ReceiptId { get; set; }
        public Receipt Receipt { get; set; }

        public string Name { get; set; }
        public int Amount { get; set; }
        public double PriceAtTheTime { get; set; }
    }
}

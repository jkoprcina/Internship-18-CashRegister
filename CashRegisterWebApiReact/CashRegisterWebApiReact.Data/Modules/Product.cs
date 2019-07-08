﻿using System;
using System.Collections.Generic;
using System.Text;

namespace CashRegisterWebApiReact.Data.Modules
{
    public class Product
    {
        public int Id { get; set; }
        public Guid Barcode { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int AmountAvailable { get; set; }

        public ICollection<ProductReceipt> ProductReceipts { get; set; }
    }
}

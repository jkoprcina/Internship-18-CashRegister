using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Implementations
{
    class ProductReceiptRespository
    {
        public ProductReceiptRespository(StoreCashRegisterContext context)
        {
            _context = context;
        }
        private readonly StoreCashRegisterContext _context;

        public bool ProductReceipt(ProductReceipt productReceiptToAdd)
        {
            return true;
        }
    }
}

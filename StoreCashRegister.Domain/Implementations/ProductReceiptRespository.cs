using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
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
            var product = _context.Products.FirstOrDefault(pro => pro.Id == productReceiptToAdd.ProductId);
            var receipt = _context.Receipts.FirstOrDefault(rec => rec.Id == productReceiptToAdd.ReceiptId);
            if (product == null || receipt == null)
                return false;

            productReceiptToAdd.Product = product;
            productReceiptToAdd.Receipt = receipt;

            _context.Add(productReceiptToAdd);
            _context.SaveChanges();
            return true;
        }
    }
}

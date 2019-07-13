using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using StoreCashRegister.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StoreCashRegister.Domain.Implementations
{
    public class ProductReceiptRespository : IProductReceiptRepository
    {
        public ProductReceiptRespository(StoreCashRegisterContext context)
        {
            _context = context;
        }
        private readonly StoreCashRegisterContext _context;

        public bool AddProductReceipts(ProductReceipt productReceiptToAdd)
        {
            var product = _context.Products.FirstOrDefault(pro => pro.Id == productReceiptToAdd.ProductId);
            var receipt = _context.Receipts.FirstOrDefault(rec => rec.Id == productReceiptToAdd.ReceiptId);

            if (product == null || receipt == null)
                return false;

            if (productReceiptToAdd.Amount < 0 || productReceiptToAdd.PriceAtTheTime < 0 
                || productReceiptToAdd.Name.Length < 1 || productReceiptToAdd.Tax < 0)
                return false;

            _context.Add(productReceiptToAdd);
            _context.SaveChanges();
            
            return true;
        }

        public List<ProductReceipt> GetAllProductReceiptsWithReceiptId(int id)
        {
            if (id < 0)
                return null;

            return  _context.ProductReceipts.Where(proRec => proRec.ReceiptId == id).ToList();
        }
    }
}

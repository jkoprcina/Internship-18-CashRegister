using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using StoreCashRegister.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StoreCashRegister.Domain.Implementations
{
    public class ReceiptRepository : IReceiptRepository
    {

        private readonly StoreCashRegisterContext _context;
        public ReceiptRepository(StoreCashRegisterContext context)
        {
            _context = context;
        }
       

        public List<Receipt> GetAllReceipts()
        {
            return _context.Receipts.ToList();
        }

        public bool AddReceipt(Receipt receiptToAdd)
        {
            if (receiptToAdd.PriceWithoutTax < 0 || receiptToAdd.FullPrice < 0)
                return false;

            _context.Receipts.Add(receiptToAdd);
            _context.SaveChanges();
            return true;
        }

        public Receipt GetReceiptById(int id)
        {
            return _context.Receipts.Find(id);
        }
    }
}

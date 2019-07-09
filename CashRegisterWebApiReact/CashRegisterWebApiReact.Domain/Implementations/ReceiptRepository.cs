using CashRegisterWebApiReact.Data.Entities;
using CashRegisterWebApiReact.Data.Modules;
using CashRegisterWebApiReact.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CashRegisterWebApiReact.Domain.Implementations
{
    public class ReceiptRepository : IReceiptRepository
    {
        public ReceiptRepository(CashRegisterWebApiReactContext context)
        {
            _context = context;
        }
        private readonly CashRegisterWebApiReactContext _context;

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

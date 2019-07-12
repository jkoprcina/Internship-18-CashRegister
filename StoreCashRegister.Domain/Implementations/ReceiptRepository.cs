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

        public bool AddReceipt(Receipt receiptToAdd, int cashRegisterId, int cashierId)
        {
            var cashier = _context.Cashiers.FirstOrDefault(cas => cas.Id == cashierId);
            var cashRegister = _context.CashRegisters.FirstOrDefault(casReg => casReg.Id == cashRegisterId);

            if (cashier == null || cashRegister == null)
                return false;

            if (receiptToAdd.PriceWithoutTax < 0 || receiptToAdd.FullPrice < 0)
                return false;

            receiptToAdd.CashRegister = cashRegister;
            receiptToAdd.Cashier = cashier;

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

using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Interfaces
{
    public interface IReceiptRepository
    {
        List<Receipt> GetAllReceipts();

        bool AddReceipt(Receipt receiptToAdd);

        Receipt GetReceiptById(int id);
    }
}

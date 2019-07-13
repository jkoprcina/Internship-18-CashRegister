using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Interfaces
{
    public interface IReceiptRepository
    {
        List<Receipt> GetAllReceipts();

        Receipt AddReceipt(Receipt receiptToAdd, int cashRegisterId, int cashierId);

        Receipt GetReceiptById(int id);

        List<Receipt> GetTenReceipts(int whereToGetReceiptsFrom);
    }
}

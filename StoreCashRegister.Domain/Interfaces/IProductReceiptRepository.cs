using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Interfaces
{
    public interface IProductReceiptRepository
    {
        bool AddProductReceipts(ProductReceipt productReceiptToAdd);

        List<ProductReceipt> GetAllProductReceiptsWithReceiptId(int id);
    }
}

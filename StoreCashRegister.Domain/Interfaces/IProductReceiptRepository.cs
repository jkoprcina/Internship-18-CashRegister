using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Interfaces
{
    public interface IProductReceiptRepository
    {
        bool AddProductReceipt(ProductReceipt productReceiptToAdd);
    }
}

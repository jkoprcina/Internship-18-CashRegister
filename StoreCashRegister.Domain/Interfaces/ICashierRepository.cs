using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Interfaces
{
    public interface ICashierRepository
    {
        Cashier GetCashierByUsername(string username);
    }
}

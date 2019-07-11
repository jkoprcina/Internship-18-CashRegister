using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using StoreCashRegister.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StoreCashRegister.Domain.Implementations
{
    public class CashierRepository : ICashierRepository
    {
        public CashierRepository(StoreCashRegisterContext context)
        {
            _context = context;
        }
        private readonly StoreCashRegisterContext _context;

        public Cashier GetCashierByUsername(string username, string password)
        {
            var cashier = _context.Cashiers.FirstOrDefault(cas => cas.Username == username);

            if (cashier == null)
                return null;
            if (cashier.Password == password && cashier.Username == username)
                return cashier;
            return null;
        }
    }
}

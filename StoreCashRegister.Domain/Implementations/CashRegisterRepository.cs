using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using StoreCashRegister.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Implementations
{
    public class CashRegisterRepository : ICashRegisterRepository
    {
        public CashRegisterRepository(StoreCashRegisterContext context)
        {
            _context = context;
        }
        private readonly StoreCashRegisterContext _context;

        public CashRegister GetCashRegisterById(int id)
        {
            return _context.CashRegisters.Find(id);
        }

    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Data.Modules
{
    public class Cashier
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<Receipt> Receipts { get; set; }
    }
}

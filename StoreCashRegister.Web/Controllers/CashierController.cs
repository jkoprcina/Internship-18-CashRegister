using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreCashRegister.Domain.Interfaces;

namespace StoreCashRegister.Web.Controllers
{
    [Route("api/cashiers")]
    [ApiController]
    public class CashierController : ControllerBase
    {
        public CashierController(ICashierRepository cashierRepository)
        {
            _cashierRepository = cashierRepository;
        }
        private readonly ICashierRepository _cashierRepository;

        [HttpGet("get-cashier-by-username")]
        public IActionResult GetCashierByUsername(string username, string password)
        {
            var cashier = _cashierRepository.GetCashierByUsername(username, password);
            if (cashier != null)
                return Ok(cashier);
            return NotFound();
        }
    }
}
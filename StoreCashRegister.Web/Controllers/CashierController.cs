using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
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

        [HttpGet("getd-by-username")]
        public IActionResult GetCashierByUsername([FromBody]JObject data)
        {
            var cashier = _cashierRepository.GetCashierByUsername(data["username"].ToString(), data["password"].ToString());
            if (cashier != null)
                return Ok(cashier);
            return NotFound();
        }
    }
}
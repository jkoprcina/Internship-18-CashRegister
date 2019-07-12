using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using StoreCashRegister.Data.Modules;
using StoreCashRegister.Domain.Interfaces;

namespace StoreCashRegister.Web.Controllers
{
    [Route("api/cash-registers")]
    [ApiController]
    public class CashRegisterController : ControllerBase
    {
        public CashRegisterController(ICashRegisterRepository cashRegisterRepository)
        {
            _cashRegisterRepository = cashRegisterRepository;
        }
        private readonly ICashRegisterRepository _cashRegisterRepository;

        [HttpGet("get-by-id")]
        public IActionResult GetCashRegisterById(int id)
        {
            var cashRegister = _cashRegisterRepository.GetCashRegisterById(id);
            if (cashRegister != null)
                return Ok(cashRegister);
            return NotFound();
        }
    }
}
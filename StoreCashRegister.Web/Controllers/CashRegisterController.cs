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
        public IActionResult GetCashRegisterById([FromBody]JObject data)
        {
            var cashRegister = _cashRegisterRepository.GetCashRegisterById((int)data["id"]);
            if (cashRegister != null)
                return Ok(cashRegister);
            return NotFound();
        }
    }
}
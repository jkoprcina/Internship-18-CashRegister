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
    [Route("api/receipts")]
    [ApiController]
    public class ReceiptController : ControllerBase
    {
        public ReceiptController(IReceiptRepository receiptRepository)
        {
            
            _receiptRepository = receiptRepository;
        }
        private readonly IReceiptRepository _receiptRepository;

        [HttpGet("all")]
        public IActionResult GetAllReceipts()
        {
            return Ok(_receiptRepository.GetAllReceipts());
        }

        [HttpPost("add")]
        public IActionResult AddReceipt([FromBody]JObject data)
        {
            var receiptToAdd = new Receipt();
            receiptToAdd.PriceWithoutTax = (double)data["fullPriceNoTax"];
            receiptToAdd.SerialNumber = Guid.NewGuid();
            receiptToAdd.SoldOnDate = DateTime.Now;
            receiptToAdd.FullPrice = (double)data["fullPriceWithTax"];
            receiptToAdd.ExciseTax = (double)data["fullLowerTaxPrice"];
            receiptToAdd.DirectTax = (double)data["fullHigherTaxPrice"];

            var addedReceipt = _receiptRepository.AddReceipt(receiptToAdd, (int)data["cashRegisterId"], (int)data["cashierId"]);
            if (addedReceipt != null)
                return Ok(addedReceipt);
            return Forbid();
        }

        [HttpGet("get-by-id")]
        public IActionResult GetReceiptById(int id)
        {
            var receipt = _receiptRepository.GetReceiptById(id);
            if (receipt != null)
                return Ok(receipt);
            return NotFound();
        }

        [HttpGet("get-ten")]
        public IActionResult GetTenReceipts(int whereToGetReceiptsFrom)
        {
            return Ok(_receiptRepository.GetTenReceipts(whereToGetReceiptsFrom));
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult AddReceipt(Receipt receiptToAdd, double fullPriceNoTax,
                double fullPriceWithTax,
                double fullLowerTaxPrice,
                double fullHigherTaxPrice,
                int cashRegisterId,
                int cashierId )
        {

            receiptToAdd.PriceWithoutTax = fullPriceNoTax;
            receiptToAdd.SerialNumber = Guid.NewGuid();
            receiptToAdd.SoldOnDate = DateTime.Now;
            receiptToAdd.FullPrice = fullPriceWithTax;
            receiptToAdd.ExciseTax = fullLowerTaxPrice;
            receiptToAdd.DirectTax = fullHigherTaxPrice;

            var wasAddSuccessful = _receiptRepository.AddReceipt(receiptToAdd, cashRegisterId, cashierId);
            if (wasAddSuccessful)
                return Ok();
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
    }
}
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
    [Route("api/product-receipts")]
    [ApiController]
    public class ProductReceiptController : ControllerBase
    {
        public ProductReceiptController(IProductReceiptRepository productReceiptRepository)
        {
            _productReceiptRepository = productReceiptRepository;
        }
        private readonly IProductReceiptRepository _productReceiptRepository;

        [HttpPost("add")]
        public IActionResult AddProductReceipt([FromBody] JObject data)
        {
            var productReceiptToAdd = new ProductReceipt();
            productReceiptToAdd.ProductId = (int)data["productId"];
            productReceiptToAdd.ReceiptId = (int)data["receiptId"];
            productReceiptToAdd.Name = data["name"].ToString();
            productReceiptToAdd.Amount = (int)data["amount"];
            productReceiptToAdd.Tax = (int)data["tax"];
            productReceiptToAdd.PriceAtTheTime = (double)data["price"];

            var wasAddSuccessful = _productReceiptRepository.AddProductReceipt(productReceiptToAdd);
            if (wasAddSuccessful)
                return Ok();
            return Forbid();
        }
    }
}
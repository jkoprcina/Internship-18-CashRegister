﻿using System;
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
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        private readonly IProductRepository _productRepository;

        [HttpGet("all")]
        public IActionResult GetAllProducts()
        {
            return Ok(_productRepository.GetAllProducts());
        }

        [HttpPost("add")]
        public IActionResult AddProduct(Product productToAdd)
        {
            var wasAddSuccessful = _productRepository.AddProduct(productToAdd);
            if (wasAddSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpPost("edit")]
        public IActionResult EditProduct([FromBody]JObject data)
        {
            var wasEditSuccessful = _productRepository.EditProduct((int)data["id"], (double)data["price"], (int)data["tax"]);
            if (wasEditSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpPost("add-amount")]
        public IActionResult AddProductAmount([FromBody]JObject data)
        {
            var wasAddingSuccessful = _productRepository.AddProductAmount((int)data["id"], (int)data["amountToAdd"]);
            if (wasAddingSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpPost("remove-amount")]
        public IActionResult RemoveProductAmount([FromBody]JObject data)
        {
            var wasRemovingSuccessful = _productRepository.RemoveProductAmount((int)data["id"], (int)data["amountToRemove"]);
            if (wasRemovingSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpGet("get-by-id")]
        public IActionResult GetProductById([FromBody]JObject data)
        {
            var product = _productRepository.GetProductById((int)data["identifier"]);
            if (product != null)
                return Ok(product);
            return NotFound();
        }
    }
}
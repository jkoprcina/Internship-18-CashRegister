using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CashRegisterWebApiReact.Data.Modules;
using CashRegisterWebApiReact.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CashRegisterWebApiReact.Web.Controllers
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
        public IActionResult AddProduct(string name, double price, int ammount)
        {
            var productToAdd = new Product(Guid.NewGuid(), name, price, ammount);
            var wasAddSuccessful = _productRepository.AddProduct(productToAdd);
            if (wasAddSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpPost("edit")]
        public IActionResult EditProduct(Product productToEdit)
        {
            var wasEditSuccessful = _productRepository.AddProduct(productToEdit);
            if (wasEditSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpPost("addAammount")]
        public IActionResult AddAmmount(Product productToEdit, int ammountToAdd)
        {
            var wasAddingSuccessful = _productRepository.AddProductAmmount(productToEdit, ammountToAdd);
            if (wasAddingSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpPost("removeAmmount")]
        public IActionResult RemoveAmmount(Product productToEdit, int ammountToRemove)
        {
            var wasRemovingSuccessful = _productRepository.RemoveProductAmmount(productToEdit, ammountToRemove);
            if (wasRemovingSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpGet("getById")]
        public IActionResult GetProductById(int id)
        {
            var product = _productRepository.GetProductById(id);
            if (product != null)
                return Ok(product);
            return NotFound();
        }
    }
}
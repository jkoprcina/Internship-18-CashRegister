﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CashRegisterWebApiReact.Data.Modules;
using CashRegisterWebApiReact.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CashRegisterWebApiReact.Web.Controllers
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
        public IActionResult AddReceipt(Receipt productToAdd)
        {
            var wasAddSuccessful = _receiptRepository.AddReceipt(productToAdd);
            if (wasAddSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpGet("getById")]
        public IActionResult GetReceiptById(int id)
        {
            var receipt = _receiptRepository.GetReceiptById(id);
            if (receipt != null)
                return Ok(receipt);
            return NotFound();
        }
    }
}
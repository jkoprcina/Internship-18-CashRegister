using CashRegisterWebApiReact.Data.Entities;
using CashRegisterWebApiReact.Data.Modules;
using CashRegisterWebApiReact.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CashRegisterWebApiReact.Domain.Implementations
{
    public class ProductRepository : IProductRepository
    {
        public ProductRepository(CashRegisterWebApiReactContext context)
        {
            _context = context;
        }
        private readonly CashRegisterWebApiReactContext _context;

        public List<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }

        public bool AddProduct(Product productToAdd)
        {
            var doesProductExist = _context.Products.Any
                (product => string.Equals(product.Name, productToAdd.Name, StringComparison.CurrentCultureIgnoreCase));

            if (doesProductExist || productToAdd.AmountAvailable < 0 || productToAdd.Price < 0)
                return false;

            _context.Products.Add(productToAdd);
            _context.SaveChanges();
            return true;
        }

        public bool EditProduct(Product editedProduct)
        {
            var doesProductExist = _context.Products.Any
                (product => string.Equals(product.Name, editedProduct.Name, StringComparison.CurrentCultureIgnoreCase));

            if (!doesProductExist || editedProduct.AmountAvailable < 0 || editedProduct.Price < 0)
                return false;

            var productToEdit = _context.Products.Find(editedProduct.Id);
            if (productToEdit == null)
                return false;

            productToEdit.Price = editedProduct.Price;
            productToEdit.Barcode = editedProduct.Barcode;

            _context.SaveChanges();
            return true;
        }

        public bool AddProductAmmount(Product productToAddAmmountTo, int ammountToAdd)
        {
            var productToEdit = _context.Products.Find(productToAddAmmountTo.Id);
            if (productToEdit == null || ammountToAdd < 1)
                return false;

            productToEdit.AmountAvailable += ammountToAdd;

            _context.SaveChanges();
            return true;
        }

        public bool RemoveProductAmmount(Product productToRemoveAmmountTo, int ammountToRemove)
        {
            var productToEdit = _context.Products.Find(productToRemoveAmmountTo.Id);
            if (productToEdit == null || ammountToRemove < 1)
                return false;

            if (productToEdit.AmountAvailable - ammountToRemove < 0) {
                return false;
            }
            productToEdit.AmountAvailable -= ammountToRemove;

            _context.SaveChanges();
            return true;
        }

        public Product GetProductById(int id)
        {
            return _context.Products.Find(id);
        }
    }
}

using StoreCashRegister.Data;
using StoreCashRegister.Data.Modules;
using StoreCashRegister.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StoreCashRegister.Domain.Implementations
{
    public class ProductRepository : IProductRepository
    {
        public ProductRepository(StoreCashRegisterContext context)
        {
            _context = context;
        }
        private readonly StoreCashRegisterContext _context;

        public List<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }

        public bool AddProduct(Product productToAdd)
        {
            var doesProductExistWithName = _context.Products.Any
                (product => string.Equals(product.Name, productToAdd.Name, StringComparison.CurrentCultureIgnoreCase));

            var doesProductExistWithBarcode = _context.Products.Any
                (product => string.Equals(product.Barcode, productToAdd.Barcode, StringComparison.CurrentCultureIgnoreCase));

            if (doesProductExistWithName || doesProductExistWithBarcode || productToAdd.AmountAvailable < 0 || productToAdd.Price < 0)
                return false;

            _context.Products.Add(productToAdd);
            _context.SaveChanges();
            return true;
        }

        public bool EditProduct(int id, string barcode, double price, int tax)
        {
            var productToEdit = _context.Products.Find(id);

            var doesProductExistWithBarcode = false;
            if (!(productToEdit.Barcode == barcode))
            {
                doesProductExistWithBarcode = _context.Products.Any
                (product => string.Equals(product.Barcode, barcode, StringComparison.CurrentCultureIgnoreCase));
            }

            if (doesProductExistWithBarcode || price < 0 || tax < 0)
                return false;

            if (productToEdit == null)
                return false;

            productToEdit.Price = price;
            productToEdit.Tax = tax;
            productToEdit.Barcode = barcode;

            _context.SaveChanges();
            return true;
        }

        public bool AddProductAmount(int id, int amountToAdd)
        {
            var productToEdit = _context.Products.Find(id);
            if (productToEdit == null || amountToAdd < 1)
                return false;

            productToEdit.AmountAvailable += amountToAdd;

            _context.SaveChanges();
            return true;
        }

        public bool RemoveProductAmount(int id, int amountToRemove)
        {
            var productToEdit = _context.Products.Find(id);
            if (productToEdit == null || amountToRemove < 1)
                return false;

            if (productToEdit.AmountAvailable - amountToRemove < 0)
            {
                return false;
            }
            productToEdit.AmountAvailable -= amountToRemove;

            _context.SaveChanges();
            return true;
        }

        public Product GetProductById(int id)
        {
            return _context.Products.Find(id);
        }

        public List<Product> GetTenProducts(int whereToGetProductsFrom)
        {
            return _context.Products.OrderByDescending(receipt => receipt.Name).Skip(whereToGetProductsFrom).Take(10).ToList();
        }
    }
}

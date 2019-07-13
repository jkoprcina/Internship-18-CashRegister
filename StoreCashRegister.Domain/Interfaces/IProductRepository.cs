using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Domain.Interfaces
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();

        bool AddProduct(Product productToAdd);

        bool EditProduct(int id, string barcode, double price, int tax);

        bool AddProductAmount(int id, int amountToAdd);

        bool RemoveProductAmount(int id, int amountToRemove);

        Product GetProductById(int id);

        List<Product> GetTenProducts(int whereToGetProductsFrom)
    }
}

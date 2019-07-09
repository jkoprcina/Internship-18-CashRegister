using CashRegisterWebApiReact.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace CashRegisterWebApiReact.Domain.Interfaces
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();

        bool AddProduct(Product productToAdd);

        bool EditProduct(Product productToEdit);

        bool AddProductAmmount(Product productToAddAmmountTo, int ammountToAdd);

        bool RemoveProductAmmount(Product productToRemoveAmmountTo, int ammountToRemove);

        Product GetProductById(int id);
    }
}

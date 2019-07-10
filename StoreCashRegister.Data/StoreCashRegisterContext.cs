using Microsoft.EntityFrameworkCore;
using StoreCashRegister.Data.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreCashRegister.Data
{
    public class StoreCashRegisterContext : DbContext
    {
        public StoreCashRegisterContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Cashier> Cashiers { get; set; }
        public DbSet<CashRegister> CashRegisters { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<ProductReceipt> ProductReceipts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductReceipt>()
                .HasKey(pr => new { pr.ProductId, pr.ReceiptId });

            modelBuilder.Entity<ProductReceipt>()
                .HasOne(pr => pr.Product)
                .WithMany(p => p.ProductReceipts)
                .HasForeignKey(pr => pr.ProductId);

            modelBuilder.Entity<ProductReceipt>()
                .HasOne(pr => pr.Receipt)
                .WithMany(r => r.ProductReceipts)
                .HasForeignKey(pr => pr.ReceiptId);
        }
    }
}

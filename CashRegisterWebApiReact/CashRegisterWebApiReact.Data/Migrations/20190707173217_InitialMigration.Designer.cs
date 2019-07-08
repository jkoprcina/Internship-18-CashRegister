﻿// <auto-generated />
using System;
using CashRegisterWebApiReact.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CashRegisterWebApiReact.Data.Migrations
{
    [DbContext(typeof(CashRegisterWebApiReactContext))]
    [Migration("20190707173217_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.CashRegister", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.HasKey("Id");

                    b.ToTable("CashRegisters");
                });

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.Cashier", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Cashiers");
                });

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AmountAvailable");

                    b.Property<Guid>("Barcode");

                    b.Property<string>("Name");

                    b.Property<double>("Price");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.ProductReceipt", b =>
                {
                    b.Property<int>("ProductId");

                    b.Property<int>("ReceiptId");

                    b.Property<int>("Amount");

                    b.Property<double>("PriceAtTheTime");

                    b.HasKey("ProductId", "ReceiptId");

                    b.HasIndex("ReceiptId");

                    b.ToTable("ProductReceipts");
                });

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.Receipt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CashRegisterId");

                    b.Property<int?>("CashierId");

                    b.Property<double>("DirectTax");

                    b.Property<double>("ExciseTax");

                    b.Property<double>("FullPrice");

                    b.Property<double>("PriceWithoutTax");

                    b.Property<Guid>("SerialNumber");

                    b.Property<DateTime>("SoldOnDate");

                    b.HasKey("Id");

                    b.HasIndex("CashRegisterId");

                    b.HasIndex("CashierId");

                    b.ToTable("Receipts");
                });

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.ProductReceipt", b =>
                {
                    b.HasOne("CashRegisterWebApiReact.Data.Modules.Product", "Product")
                        .WithMany("ProductReceipts")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CashRegisterWebApiReact.Data.Modules.Receipt", "Receipt")
                        .WithMany("ProductReceipts")
                        .HasForeignKey("ReceiptId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CashRegisterWebApiReact.Data.Modules.Receipt", b =>
                {
                    b.HasOne("CashRegisterWebApiReact.Data.Modules.CashRegister", "CashRegister")
                        .WithMany("Receipts")
                        .HasForeignKey("CashRegisterId");

                    b.HasOne("CashRegisterWebApiReact.Data.Modules.Cashier", "Cashier")
                        .WithMany("Receipts")
                        .HasForeignKey("CashierId");
                });
#pragma warning restore 612, 618
        }
    }
}

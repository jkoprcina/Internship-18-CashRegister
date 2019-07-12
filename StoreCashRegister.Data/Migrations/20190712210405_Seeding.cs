using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace StoreCashRegister.Data.Migrations
{
    public partial class Seeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "CashRegisters",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "CashRegister 1"},
                    { 2, "CashRegister 2"},
                    { 3, "CashRegister 3"}
                });

            migrationBuilder.InsertData(
                table: "Cashiers",
                columns: new[] { "Id", "Username", "Password", "FirstName", "LastName"},
                values: new object[,]
                {
                    { 1, "Ana", "Ana", "Ana", "Vucak"},
                    { 2, "Josip", "Josip", "Josip", "Koprcina"},
                    { 3, "Marko", "Marko", "Marko", "Koprcina"}
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Barcode", "Name", "Price", "AmountAvailable", "Tax"},
                values: new object[,]
                {
                    { 1, "0123456789101", "Coca-Cola", 6.00, 200, 25},
                    { 2, "7524834474499", "Pizza", 10.98, 100, 25},
                    { 3, "7734685384598", "Cokolada", 6.00, 200, 25},
                    { 4, "8758393449722", "Kruh", 6.00, 300, 5},
                    { 5, "7464884767373", "Mlijeko", 5.99, 400, 5},
                    { 6, "8578877837565", "Cokolino", 6.99, 500, 5},
                    { 7, "6838783356676", "Banana", 3.99, 200, 5},
                    { 8, "9935645588342", "Maslac od kikirikia", 49.99, 200, 25},
                    { 9, "4432969659768", "Kruska", 4.99, 240, 5},
                    { 10, "3632898655933", "Jabuka", 4.99, 220, 5},
                    { 11, "7549352833969", "Sladoled", 8.00, 100, 25},
                    { 12, "3834488423695", "Tuna", 15.00, 400, 25},
                    { 13, "6985654995744", "Tost", 4.00, 22200, 25},
                    { 14, "8488982426238", "Jaja", 2.00, 1200, 5},
                    { 15, "2963574973464", "Voda", 4.00, 2300, 5},
                    { 16, "8964325553655", "Fanta", 6.49, 300, 25},
                    { 17, "5758487563296", "Ananas", 23.54, 2100, 25},
                    { 18, "7475922638893", "Chips", 7.45, 200, 25},
                });

            migrationBuilder.InsertData(
                table: "Receipts",
                columns: new[] { "Id", "SerialNumber","SoldOnDate", "PriceWithoutTax", "DirectTax", "ExciseTax", "FullPrice", "CashRegisterId", "CashierId", },
                values: new object[,]
                {
                    { 1, new Guid("b4f41242-87a4-43ea-8e2f-0777411e15f2"), new DateTime(2019, 7, 12, 11, 6, 20, 234, DateTimeKind.Local).AddTicks(23), 27.6, 5.00, 0.38, 32.98, 1, 1},
                    { 2, new Guid("20349a55-9e38-4b8b-b4f3-2cc24ff846ec"), new DateTime(2019, 7, 12, 12, 7, 20, 234, DateTimeKind.Local).AddTicks(442), 25.52, 4.00, 0.48, 30.00, 2, 2},
                    { 3, new Guid("1b21ed4e-31a7-4462-bd07-438463f2cc25"), new DateTime(2019, 7, 12, 13, 2, 20, 234, DateTimeKind.Local).AddTicks(425), 38.53, 9.63, 0.00, 48.16, 2, 1},
                    { 4, new Guid("a0d6e778-9626-4a61-ae2f-d2df030aa539"), new DateTime(2019, 7, 12, 14, 3, 20, 234, DateTimeKind.Local).AddTicks(52), 7.62, 0.00, 0.38, 8.00, 2, 2},
                    { 5, new Guid("9fd3d2c7-7b5e-4cab-aefd-e973cde26994"), new DateTime(2019, 7, 12, 15, 3, 20, 234, DateTimeKind.Local).AddTicks(52), 7.62, 0.00, 0.38, 8.00, 1, 1}
                });


            migrationBuilder.InsertData(
                table: "ProductReceipts",
                columns: new[] { "ProductId", "ReceiptId",  "Name", "Amount", "Tax", "PriceAtTheTime" },
                values: new object[,]
                {
                    { 12, 1, "Tuna", 2, 25, 15.00},
                    { 14, 1, "Jaja", 2, 25, 2.00},
                    { 15, 1, "Voda", 2, 25, 4.00},
                    { 17, 2, "Ananas", 2, 25, 23.54},
                    { 18, 2, "Chips", 2, 25, 7.45},
                    { 7, 3, "Banana", 2, 25, 3.99},
                    { 12, 3, "Tuna", 2, 25, 15.00},
                    { 12, 4, "Tuna", 2, 25, 15.00},
                    { 3, 4, "Cokolino", 2, 25, 6.99},
                    { 1, 4, "Coca-Cola", 2, 25, 6.00},
                    { 8, 5, "Maslac od kikirikia", 2, 25, 49.99},
                    { 4, 5, "Kruh", 2, 25, 6.00},
                    { 11, 5, "Sladoled", 2, 25, 8.00},
                    { 16, 5, "Fanta", 2, 25, 6.49},
                    { 8, 1, "Maslac od kikirikia", 2, 25, 49.99},
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}

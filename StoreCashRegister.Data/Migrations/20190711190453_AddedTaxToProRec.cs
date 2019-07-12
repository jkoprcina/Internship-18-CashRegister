using Microsoft.EntityFrameworkCore.Migrations;

namespace StoreCashRegister.Data.Migrations
{
    public partial class AddedTaxToProRec : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Tax",
                table: "ProductReceipts",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tax",
                table: "ProductReceipts");
        }
    }
}

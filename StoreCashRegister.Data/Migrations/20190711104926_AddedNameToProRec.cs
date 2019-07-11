using Microsoft.EntityFrameworkCore.Migrations;

namespace StoreCashRegister.Data.Migrations
{
    public partial class AddedNameToProRec : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "ProductReceipts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "ProductReceipts");
        }
    }
}

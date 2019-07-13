using Microsoft.EntityFrameworkCore.Migrations;

namespace StoreCashRegister.Data.Migrations
{
    public partial class AddedCasIdAndCasRegIdToReceipt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts");

            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts");

            migrationBuilder.AlterColumn<int>(
                name: "CashierId",
                table: "Receipts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CashRegisterId",
                table: "Receipts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts",
                column: "CashRegisterId",
                principalTable: "CashRegisters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts",
                column: "CashierId",
                principalTable: "Cashiers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts");

            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts");

            migrationBuilder.AlterColumn<int>(
                name: "CashierId",
                table: "Receipts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CashRegisterId",
                table: "Receipts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts",
                column: "CashRegisterId",
                principalTable: "CashRegisters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts",
                column: "CashierId",
                principalTable: "Cashiers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

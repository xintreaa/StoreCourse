using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }


        // Navigation properties (relationships)
        public int ProductId { get; set; }
        public required Product Product { get; set; } = null!; // Required, so we initialize it to a non-null value

        public int BasketId { get; set; }
        public ShoppingCart Basket { get; set; } = null!; // Required, so we initialize it to a non-null value
    }
}
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Comission
    {
        public int Id { get; set; }
        [ForeignKey("ProductId")]
        public required int ProductId { get; set; }
        [ForeignKey("ClientId")]
        public required int ClientId { get; set; }
    }
}

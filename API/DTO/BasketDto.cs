namespace API.DTO
{
    public class BasketDto
    {
        public required string BasketId { get; set; } // for cookies in browser

        // Navigation properties (relationships)
        public List<BasketItemDto> Items { get; set; } = [];
    }
}

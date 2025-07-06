using API.DTO;
using API.Models;

namespace API.Extensions
{
    public static class BasketExtensions
    {
        public static BasketDto ToDto(this ShoppingCart basket) //basket.ToDto() extension method
        {
            return new BasketDto
            {
                BasketId = basket.BasketId,
                Items = basket.Items.Select(item => new BasketItemDto
                {   // Mapping BasketItem to BasketItemDto
                    ProductId = item.Product.Id,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    Brand = item.Product.Brand,
                    Type = item.Product.Type,
                    PictureUrl = item.Product.PictureUrl,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
    }
}

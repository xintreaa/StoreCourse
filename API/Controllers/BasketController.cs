using API.Data;
using API.DTO;
using API.Extensions;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController(StoreContext context) : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket is null)
                return NoContent();

            return basket.ToDto();// extension method
        }
        [HttpPost]
        // path should be /api/basket/{productId}/{quantity}
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasket();

            basket ??= CreateBasket();

            var product = await context.Products.FindAsync(productId);

            if (product is null)
            {
                return NotFound(new { Message = $"Oops..This product was not found." });
            }

            basket.AddItem(product, quantity);

            var result = await context.SaveChangesAsync() > 0;
            if (result)
            {
                return CreatedAtAction(nameof(GetBasket), basket.ToDto());
            }

            return BadRequest();
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            var basket = await RetrieveBasket();

            if (basket is null)
            {
                return BadRequest("Basket is unable to retrieve");
            }

            basket.RemoveItem(productId, quantity);
           
            var result = await context.SaveChangesAsync() > 0;

            if (result)
            {
                return Ok();
            }

            return BadRequest("There is a problem updating shopping cart");
        }

        public async Task<ShoppingCart?> RetrieveBasket()
        {
            return await context.Baskets
               .Include(x => x.Items)
               .ThenInclude(p => p.Product)
               .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);
        }

        private ShoppingCart CreateBasket()
        {
            var basketId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                Expires = DateTimeOffset.UtcNow.AddDays(30),
                IsEssential = true
            };
            Response.Cookies.Append("basketId", basketId, cookieOptions);

            var basket = new ShoppingCart { BasketId = basketId };

            context.Baskets.Add(basket);
            return basket;
        }
    }
}

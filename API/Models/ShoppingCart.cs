namespace API.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public required string BasketId { get; set; } // for cookies in browser

        // Navigation properties (relationships)
        public List<BasketItem> Items { get; set; } = [];

        // Один ShoppingCart має багато BasketItem.
        // Кожен BasketItem посилається на один Product

        public void AddItem(Product product, int quantity)
        {
            if (product is null)
            {
                throw new ArgumentNullException(nameof(product), "Product cannot be null");
            }
            if (quantity <= 0)
            {
                throw new ArgumentException("Quantity must be greater than zero", nameof(quantity));
            }

            var existingItem = FindItem(product.Id);

            if (existingItem is null)
            {
                Items.Add(new BasketItem
                {
                    Product = product,
                    Quantity = quantity
                });
            }
            else
            {
                existingItem.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId, int quantity)
        {
            if (quantity <= 0)
            {
                throw new ArgumentException("Quantity must be greater than zero", nameof(quantity));
            }
            var item = FindItem(productId);

            if (item is null)
            {
                return;
            }

            item.Quantity -= quantity;
            if (item.Quantity <= 0)
            {
                Items.Remove(item);
                // Повністю видаляємо товар, якщо кількість стала 0 або менше
            }


        }

        private BasketItem? FindItem(int productId)
        {
            return Items.FirstOrDefault(item => item.ProductId == productId);
        }
    }
}

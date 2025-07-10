using System.Reflection.Metadata.Ecma335;
using API.Models;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string? orderBy)
        {
            // this,static дозволяє звертатись так: products.Sort - замість ProductExtensions.Sort
            // Тобто this — це спосіб зробити метод "вбудованим" у IQueryable<Product> без модифікації самого типу.
            query = orderBy switch
            {
                "priceDesc" => query.OrderByDescending(p => p.Price),
                "price" => query.OrderBy(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };

            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string? searchItem)
        {
            if (string.IsNullOrEmpty(searchItem)) return query;

            var lowerSearchItem = searchItem.Trim().ToLowerInvariant();

            return query.Where(p => p.Name.ToLower().Contains(lowerSearchItem));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string? brands, string? types)
        {
            var brandList = new List<string>();
            var typeList = new List<string>();

            if (!string.IsNullOrEmpty(brands))
            {
                brandList.AddRange([.. brands.ToLower().Split(",")]);
            }

            if (!string.IsNullOrEmpty(types))
            {
                typeList.AddRange([.. types.ToLower().Split(",")]);
            }

            query = query.Where(p => brandList.Count == 0 || brandList.Contains(p.Brand.ToLower()));
            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Type.ToLower()));

            return query;
        }
    }
}

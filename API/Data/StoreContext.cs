﻿using API.Models;
using Microsoft.EntityFrameworkCore;
namespace API.Data
{   /*options - містить connection string
     нижче це primary constructor.
     Це конструктор, який приймає параметри,
     які використовуються для ініціалізації класу.
     Entity - він допомагає нам надсилати sql запити до БД
     використовуючи c# код.*/
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public required DbSet<Product> Products { get; set; }

        public required DbSet<ShoppingCart> Baskets { get; set; }
        //public required DbSet<Comission> Comissions { get; set; }
        //public required DbSet<Client> Clients { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<ShoppingCart>()
        //        .HasMany(c => c.Items)
        //        .WithOne()
        //        .OnDelete(DeleteBehavior.Cascade);
        //    // Встановлюємо каскадне видалення для ShoppingCart
        //    // при видаленні ShoppingCart видаляються всі BasketItem
        //}

    }
}
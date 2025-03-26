using API.Entities;
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

    }
}
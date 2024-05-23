using Microsoft.EntityFrameworkCore;
using ShoppingList.Models;

namespace ShoppingList.DataAccess
{
    public class ItemsDbContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public DbSet<Item> Items => Set<Item>();

        public ItemsDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));
        }
    }
}

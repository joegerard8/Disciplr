using Microsoft.EntityFrameworkCore;
using Disciplr.Backend.Models;

namespace Disciplr.Backend.Data  
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Goal> Goals { get; set; }
    }
}



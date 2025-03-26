using Microsoft.EntityFrameworkCore;
using Disciplr.Backend.Data;

namespace Disciplr.Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Goal> Goals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .ToTable("Users");
            
            modelBuilder.Entity<Profile>()
                .ToTable("Profiles");
            
            modelBuilder.Entity<Goal>()
                .ToTable("Goals");
        }
    }
}
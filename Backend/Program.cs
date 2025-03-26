using Microsoft.EntityFrameworkCore;
using Disciplr.Backend.Data; // Ensure this namespace is included

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=disciplr.db"));

builder.Services.AddCors(options => {
    options.AddPolicy("AllowAllOrigins",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAllOrigins");
app.MapControllers();

app.Run();
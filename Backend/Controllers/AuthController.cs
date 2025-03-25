using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Disciplr.Backend.Data;

namespace Disciplr.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginRequest.Email);
            
            if (user == null || user.PasswordHash != loginRequest.Password)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            return Ok(new 
            { 
                message = "Login successful", 
                user = new { 
                    user.UserId, 
                    user.Email, 
                    user.FirstName, 
                    user.LastName 
                } 
            });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
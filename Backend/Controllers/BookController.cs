using Disciplr.Backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Disciplr.Backend.Data;

namespace Disciplr.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly AppDbContext _context;
        public BookController(AppDbContext temp)
        {
            _context = temp;
        }

        [HttpGet("allInfo", Name = "GetAllInfo")]
        public IActionResult GetAllInfo()
        {
            // Use LINQ to join the tables (User, Profile, and Goals)
            var allInfo = (from user in _context.Users
                join profile in _context.Profiles on user.UserId equals profile.UserId
                join goal in _context.Goals on user.UserId equals goal.UserId
                select new
                {
                    user.UserId,
                    user.FirstName,
                    user.LastName,
                    user.Email,
                    ProfileLevel = profile.Level,
                    ProfilePoints = profile.Points,
                    GoalName = goal.GoalName,
                    GoalDescription = goal.GoalDescription,
                    GoalTargetDate = goal.GoalTargetDate,
                    GoalProgress = goal.GoalProgress
                }).ToList();

            // Return the result as a JSON response
            return Ok(allInfo);
        }
        
        [HttpGet("user", Name = "GetUserInfo")]
        public IEnumerable<User> GetUsers()
        {
            var something = _context.Users.ToList();
            return something;
        }

        [HttpGet("profile", Name = "GetProfileInfo")]
        public IEnumerable<Profile> GetProfile()
        {
            var something = _context.Profiles.ToList();
            return something;
        }
        [HttpGet("goal", Name = "GetGoalInfo")]
        public IEnumerable<Goal> GetGoals()
        {
            var something = _context.Goals.ToList();
            return something;
        }
        
    }
}
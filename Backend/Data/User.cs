using System.ComponentModel.DataAnnotations;

namespace Disciplr.Backend.Data;

public class User
{
    [Key]
    public int UserId { get; set; }

    [Required, MaxLength(50)]
    public string Email { get; set; }

    [Required, MaxLength(50)]
    public string PasswordHash { get; set; }

    [MaxLength(50)]
    public string FirstName { get; set; }

    [MaxLength(100)]
    public string LastName { get; set; }

    public List<Goal> Goals { get; set; }
    public Profile Profile { get; set; }
}
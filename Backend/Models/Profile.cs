using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Disciplr.Backend.Models
{
    public class Profile
    {
        [Key]
        public int ProfileId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        public int Level { get; set; }
        public int Points { get; set; }
        public int Streak { get; set; }

        public User User { get; set; }
    }
}


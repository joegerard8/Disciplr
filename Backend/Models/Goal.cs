using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Disciplr.Backend.Models
{
    public class Goal
    {
        [Key]
        public int GoalId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required, MaxLength(50)]
        public string GoalName { get; set; }

        [MaxLength(255)]
        public string GoalDescription { get; set; }

        public DateTime GoalDateCreated { get; set; }
        public DateTime GoalTargetDate { get; set; }
        public DateTime? GoalDateAchieved { get; set; }

        public decimal GoalProgress { get; set; }
        public bool ReminderEnabled { get; set; }

        public User User { get; set; }
    }
}


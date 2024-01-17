using System.ComponentModel.DataAnnotations;

namespace API.DTOs{
    public class RegisterDto{
// THIS ACTS AS A VALIDATOR 
        [Required]

        public string Username {get;set;}
         
         [Required]
         

        public string Password{ get; set;}
    }
}
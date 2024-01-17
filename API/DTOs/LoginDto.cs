using System.ComponentModel.DataAnnotations;

namespace API.DTOs{
    public class LoginDto{
// THIS ACTS AS A VALIDATOR 
       

        public string Username {get;set;}
         
         
         

        public string Password{ get; set;}
    }
}
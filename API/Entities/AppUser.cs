using API.Extensions;
using Microsoft.AspNetCore.Identity;

namespace API.Entities;

// Id will be default primary key in entity framework 
public class AppUser  : IdentityUser<int>
{
    
      
           /* public int Id { get; set; }
    public string UserName { get; set;}

    public byte[] PasswordHash {get;set;}

    public byte[] PasswordSalt {get;set;}
    */
    public ICollection<AppUserRole> UserRoles {get;set;}
    /*
    public DateOnly DateOfBirth {get;set;}

    public string KnownAs {get;set;}

    public DateTime Created {get;set;} = DateTime.UtcNow;

    public DateTime LastActive {get;set;} = DateTime.UtcNow;

    public string Gender {get;set;}

    public string Introductiuon {get;set;}


    public string LookingFor {get;set;}


    public string Interests {get;set;}

    public string City {get;set;}

    public string Country{get;set;}


    
    public int GetAge(){
        return DateOfBirth.CalculateAge();
    }
    */



   

    
}


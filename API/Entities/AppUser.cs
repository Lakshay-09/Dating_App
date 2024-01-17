namespace API.Entities;

// Id will be default primary key in entity framework 
public class AppUser 
{
    
    public int Id { get; set; }
    public string UserName { get; set;}

    public byte[] PasswordHash {get;set;}

    public byte[] PasswordSalt {get;set;}
}

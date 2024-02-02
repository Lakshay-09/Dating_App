using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
using API.Interfaces.cs;
using Microsoft.AspNetCore.Identity;


namespace API.Controllers{
   public class AccountController : BaseApiController{
       
       private readonly ITokenService _tokenService;
        private readonly UserManager<AppUser> _userManager;

        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService){ // constructor 
            _tokenService = tokenService;
           _userManager = userManager ; 
        }
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto){
             if(await UserExists(registerDto.Username)) return BadRequest("Username is taken");
             
             var user = new AppUser{
                 UserName = registerDto.Username.ToLower(),
                 
                
             };
             var result = await _userManager.CreateAsync(user,registerDto.Password);

             if(!result.Succeeded) return BadRequest(result.Errors);

             var roleResult = await _userManager.AddToRoleAsync(user,"Member");
             if(!roleResult.Succeeded) return BadRequest(result.Errors);
             return new UserDto{
                Username = user.UserName,
                token = await _tokenService.CreateToken(user)
             };



        }
        [HttpPost("login")]

        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto){
            var user = await _userManager.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if(user== null) return Unauthorized();
            var result = await _userManager.CheckPasswordAsync(user,loginDto.Password);
            
            if(!result) return Unauthorized("Invalid Password");
            
             return new UserDto{
                Username = user.UserName,
                token = await  _tokenService.CreateToken(user)
                
             };


        }
        private async Task<bool> UserExists(string username){
            return await _userManager.Users.AnyAsync(x => x.UserName == username.ToLower());

        }

   }

   }

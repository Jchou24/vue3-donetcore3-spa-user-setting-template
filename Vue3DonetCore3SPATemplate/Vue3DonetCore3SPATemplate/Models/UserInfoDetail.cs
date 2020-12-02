using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vue3DonetCore3SPATemplate.DAL.DBModels;

namespace Vue3DonetCore3SPATemplate.Models
{
    public class UserInfoDetail: UserInfo
    {
        public int Id { get; set; }
        public UserInfoDetail(User user): base(user)
        {
            this.Id = user.Id; // TODO need encrypt
        }
    }
}

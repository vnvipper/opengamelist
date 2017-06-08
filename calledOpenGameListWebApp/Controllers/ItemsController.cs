using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using calledOpenGameListWebApp.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace calledOpenGameListWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {        // GET api/items/GetLatest/5        

        [HttpGet("GetLatest/{num}")]
        public JsonResult GetLatest(int num)
        {
            var arr = new List<ItemViewModel>();
            for (int i = 1; i <= num; i++)
                arr.Add(new ItemViewModel()
                {
                    Id = i,
                    Title = $"Item {i} Title",
                    Description = $"Item {i} Description"
                });
            var settings = new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            };

            return new JsonResult(arr, settings);
        }
    }
}

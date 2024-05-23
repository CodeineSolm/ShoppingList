using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingList.Contracts;
using ShoppingList.DataAccess;
using ShoppingList.Models;
using System.Linq.Expressions;

namespace ShoppingList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ItemsDbContext _dbContext;

        public ItemsController(ItemsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody]AddItemRequest request, CancellationToken ct)
        {
            var item = new Item(request.Title, request.Description, request.Price);
            await _dbContext.Items.AddAsync(item, ct);
            await _dbContext.SaveChangesAsync(ct);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]GetItemsRequest request, CancellationToken ct)
        {
            var itemsQuery = _dbContext.Items
                .Where(i => string.IsNullOrWhiteSpace(request.Search) ||
                i.Title.ToLower().Contains(request.Search.ToLower()));

            Expression<Func<Item, object>> selectorKey = request.SortItem?.ToLower() switch
            {
                "price" => item => item.Price,
                "title" => item => item.Title,
                _ => item => item.Id
            };

            itemsQuery = request.SortOrder == "desc" ? itemsQuery.OrderByDescending(selectorKey) : itemsQuery.OrderBy(selectorKey);
            var itemDtos = await itemsQuery.Select(i => new ItemDto(i.Id, i.Title, i.Description, i.Price)).ToListAsync(ct);
            return Ok(new GetItemsResponse(itemDtos));
        }
    }
}

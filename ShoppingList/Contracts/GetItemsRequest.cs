namespace ShoppingList.Contracts
{
    public record GetItemsRequest(string? Search, string? SortItem, string? SortOrder);
}

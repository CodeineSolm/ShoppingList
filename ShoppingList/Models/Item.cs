namespace ShoppingList.Models
{
    public class Item
    {
        public Guid Id { get; init; }

        public string Title { get; init; }

        public string Description { get; init; }

        public float Price { get; init; }

        public Item(string title, string description, float price)
        {
            Title = title;
            Description = description;
            Price = price;
        }
    }
}

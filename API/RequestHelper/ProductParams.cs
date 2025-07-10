namespace API.RequestHelper
{
    public class ProductParams : PaginationParams
    {
        public string? OrderBy { get; set; }
        public string? SearchTerm { get; set; } // така сама назва як на фронті
        public string? Brands { get; set; }
        public string? Types { get; set; }
    }
}

namespace API.Models
{
    public class Client
    {
        public int Id { get; set; }

        public required string FirstName { get; set; }

        public required string SecondName { get; set; }

        public required string Email { get; set; }
    }
}

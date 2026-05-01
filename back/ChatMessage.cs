namespace back;

public class ChatMessage
{
    public DateTime Date { get; set; }

    public int Id { get; set; }

    public string Author { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;
}

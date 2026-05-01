using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

[ApiController]
[Route("[controller]")]
public class ConversationController : ControllerBase
{
    private static List<ChatMessage> Messages = new List<ChatMessage>{
        new () {Author="Hugo", Content="hey les gens"},
        new () {Author="Jean", Content="coucou :) ca va ?"}
    };

    [HttpGet(Name = "GetConversation")]
    public IEnumerable<ChatMessage> Get()
    {
        return Messages;
    }
    [HttpPost]
    public IActionResult Create(ChatMessage message)
    {
        Messages.Add(message);
        return CreatedAtAction(nameof(Get), new {id=message.Id}, message);
    }
}

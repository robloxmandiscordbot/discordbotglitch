// Return normally
userManager.OnCurrentUserUpdate += () =>
{
    var currentUser = userManager.GetCurrentUser();
        Console.WriteLine(currentUser.Username);
        Console.WriteLine(currentUser.Discriminator);
        Console.WriteLine(currentUser.Id);
    };
};
public void LogProblemsFunction(Discord.LogLevel level, string message)
{
  Console.WriteLine("Discord:{0} - {1}", level, message);
}

discord.SetLogHook(Discord.LogLevel.Debug, LogProblemsFunction);
// c++ land
discord::Core* core{};
discord::Core::Create(53908232506183680, DiscordCreateFlags_Default, &core);

// c# land
var discord = new Discord(53908232506183680, (UInt64)Discord.CreateFlags.Default);
discord.Dispose();
MyCallbackFunction(LogLevel level, string message);
public void LogProblemsFunction(Discord.LogLevel level, string message)
{
  Console.WriteLine("Discord:{0} - {1}", level, message);
}

discord.SetLogHook(Discord.LogLevel.Debug, LogProblemFunctions);
void Update()
{
  discord.RunCallbacks();
}
var activityManager = discord.GetActivityManager();
var userManager = discord.GetUserManager();
var premiumType = userManager.GetCurrentUserPremiumType();
switch (premiumType)
{
  case PremiumType.None:
    Console.WriteLine("User is not a Nitro subscriber");

  case PremiumType.Tier1:
    Console.WriteLine("User has Nitro Classic");

  case PremiumType.Tier2:
    Console.WriteLine("User has Nitro");

  default:
    return;
}

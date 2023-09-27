using BloggerAPIemerino.Middlewares;
using Db;
using Implementation;
using Interfaces;
using Microsoft.EntityFrameworkCore;
using Shared;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Configure strongly typed settings object
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registering DataContext class using connection string saved in appsettings.json
builder.Services.AddDbContext<IDataContext, DataContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnectionString")));

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IJwtService, JwtService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// Custom Jwt Auth Middlewar
app.UseMiddleware<JwtMiddleware>();

app.MapControllers();

app.Run();

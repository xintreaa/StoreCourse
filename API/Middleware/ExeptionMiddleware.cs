using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware
{
    /// <summary>
    /// Клас ExeptionMiddleware обробляє винятки під час обробки HTTP-запитів.
    /// Він реалізує інтерфейс IMiddleware з методом InvokeAsync, який використовує блок try-catch для перехоплення винятків
    /// і передачі їх у метод HandleException.
    /// Middleware веде логування помилок за допомогою ILogger, встановлює тип вмісту відповіді
    /// як application/json і повертає статус 500 Internal Server Error з об’єктом ProblemDetails, серіалізованим у JSON.
    /// У режимі розробки додається стек викликів, тоді як у продакшені він приховується.
    /// </summary>
    public class ExeptionMiddleware(IHostEnvironment env, ILogger<ExeptionMiddleware> logger) : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch(Exception ex)
            {
                await HandleExeption(context, ex);
            }
        }

        private async Task HandleExeption(HttpContext context, Exception ex)
        {
            logger.LogError(ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var responce = new ProblemDetails
            {
                Status = 500,
                Detail = env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                Title = ex.Message
            };

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };

            var json = JsonSerializer.Serialize(responce, options);

            await context.Response.WriteAsync(json);
        }
    }
}

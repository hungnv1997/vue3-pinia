package main

import (
	"example.com/m/v2/database"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
    database.Test()
    app := fiber.New()
    app.Use(cors.New(cors.Config{
        AllowHeaders:     "Origin,Content-Type,Accept,Content-Length,Accept-Language,Accept-Encoding,Connection,Access-Control-Allow-Origin",
        AllowOrigins:     "*",
        AllowCredentials: true,
        AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
    }))
    app.Get("/", func(c *fiber.Ctx) error {
       return c.JSON(&fiber.Map{
            "success": true,
            "product":  "aaa",
            "message": "All product returned successfully",
          })
        // return c.SendString("Hello, World!")
    })

    app.Listen(":3000")
}
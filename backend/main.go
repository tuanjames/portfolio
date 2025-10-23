package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"portfolio-backend/handlers"
)

func main() {
	r := gin.Default()
	// ✅ Enable CORS for frontend (React)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		AllowCredentials: true,
	}))

	r.GET("/projects", handlers.GetProjects)
	r.POST("/contact", handlers.SendContact)

	r.Run(":8080")
}

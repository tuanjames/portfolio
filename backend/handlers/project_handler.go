package handlers

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"portfolio-backend/models"
)

func GetProjects(c *gin.Context) {
	projects := []models.Project{
		{1, "Portfolio Website", "My personal website built with React + Go", "React, Tailwind, Go", "https://yourwebsite.com"},
		{2, "Chat App", "Realtime chat using Django + WebSocket", "React, Django, WebSocket", "https://github.com/yourrepo"},
	}
	println("Projects requested")
	c.JSON(http.StatusOK, projects)
}

func SendContact(c *gin.Context) {
	var body struct {
		Name    string `json:"name"`
		Email   string `json:"email"`
		Message string `json:"message"`
	}
	println("Contact form submitted", c.Request.Body)
	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "received", "message": body.Message})
}

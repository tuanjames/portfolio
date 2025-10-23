package models

type Project struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	TechStack   string `json:"techStack"`
	Link        string `json:"link"`
}

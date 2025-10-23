FROM golang:1.25

# Install air for live reload
RUN go install github.com/air-verse/air@latest

WORKDIR /app

# Copy go.mod and go.sum first
COPY backend/go.mod backend/go.sum ./
RUN go mod download

# Copy the rest
COPY backend/ .

# Expose the port Gin runs on
EXPOSE 8080

# Start air (live reload)
CMD ["air", "-c", ".air.toml"]

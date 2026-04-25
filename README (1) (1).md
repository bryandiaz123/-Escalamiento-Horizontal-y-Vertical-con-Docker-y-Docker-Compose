# Horizontal Scaling with Node.js, Docker Compose & Nginx

Demostración de escalamiento horizontal y vertical usando Docker Compose, una app Node.js y Nginx como balanceador de carga.

## Estructura del proyecto

```
.
├── compose.yaml          # Orquestación de servicios
├── Dockerfile            # Imagen de la app Node.js
├── src/
│   └── server.js         # Servidor HTTP que reporta su hostname
└── docker/
    └── nginx.conf        # Configuración del balanceador Nginx
```

## Levantar el proyecto

```bash
# Construir imágenes y levantar 1 instancia
docker compose up --build -d

# Escalar la app a 3 instancias (escalamiento horizontal)
docker compose up --build -d --scale app=3

# Verificar contenedores activos
docker compose ps
```

## Verificar el funcionamiento

Abrir `http://localhost:8080` varias veces. Cada respuesta mostrará un `hostname` diferente, confirmando que Nginx distribuye las peticiones en round-robin entre los contenedores.

## Escalamiento Vertical (Nginx)

En `compose.yaml`, la sección `deploy.resources` del servicio `nginx` define:

| Parámetro | Valor |
|---|---|
| CPU límite | 1.0 core |
| Memoria límite | 256 MB |
| CPU reservada | 0.5 core |
| Memoria reservada | 128 MB |

Para ajustar, editar esos valores y ejecutar `docker compose up -d` nuevamente.

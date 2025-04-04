# Fase de Build
FROM node:18-alpine AS build
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

COPY . .

# Compilar la aplicación con Vite
RUN npm run build

# Fase de Runtime
FROM nginx:1.27-alpine

# Copiar los archivos compilados al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]


#BUILD:
#docker build --build-arg VITE_API_BASE_URL=http://localhost:8000 -t frontend:latest .

#Run:
#docker run --rm -p 5173:80 --name frontend frontend:1.1
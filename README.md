# Plan Media Maraton Lima

Proyecto React + Vite para seguir el plan de entrenamiento de 8 semanas rumbo a la Media Maraton de Lima (23 de agosto).

## Instalacion local

  npm install
  npm run dev

## Build de produccion

  npm run build
  npm run preview

## Deploy en Vercel

Opcion A - desde GitHub:
1. Sube este proyecto a un repositorio de GitHub.
2. Entra a vercel.com/new e importa el repositorio.
3. Vercel detecta Vite automaticamente (build: npm run build, output: dist).
4. Click en Deploy.

Opcion B - desde la CLI, sin GitHub:

  npm install -g vercel
  vercel

## Notas

El progreso de cada carrera se guarda en localStorage del navegador, por lo que persiste entre visitas en el mismo dispositivo pero no se sincroniza entre dispositivos distintos.

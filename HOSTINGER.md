# Hostinger deploy

## Tipo
Frontend estático generado con Vite. No requiere un proceso Node.js persistente en producción.

## Repositorio
`impejj/Piazzadimare`

## Rama de preview
`feature/premium-v1`

## Producción
`main` después de aprobación.

## Build
- Install: `npm install`
- Build: `npm run build`
- Output: `dist`

## Variables de entorno
Ninguna requerida para la V1.

## Seguridad
La V1 no expone backend, base de datos, secretos ni endpoints de administración.
Node se utiliza únicamente durante el proceso de build.

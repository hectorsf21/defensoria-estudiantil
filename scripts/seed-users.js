const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando la creación de usuarios por defecto...');

  // 1. Datos de los usuarios a crear
  const usuarios = [
    {
      cedula: '12345678', // Puedes cambiar esta cédula
      nombre: 'Administrador Master',
      claveOriginal: 'master123', // Contraseña que usarás para loguearte
      role: 'SUPER_ADMIN',
    },
    {
      cedula: '87654321', // Puedes cambiar esta cédula
      nombre: 'Usuario Básico',
      claveOriginal: 'user123', // Contraseña que usarás para loguearte
      role: 'BASIC_USER',
    },
  ];

  for (const u of usuarios) {
    // Verificar si el usuario ya existe
    const usuarioExistente = await prisma.user.findUnique({
      where: { cedula: u.cedula },
    });

    if (usuarioExistente) {
      console.log(`⚠️ El usuario con cédula ${u.cedula} ya existe. Saltando...`);
      continue;
    }

    // Hashear la contraseña con bcryptjs
    const salt = await bcrypt.genSalt(10);
    const claveHasheada = await bcrypt.hash(u.claveOriginal, salt);

    // Crear el usuario en la base de datos
    await prisma.user.create({
      data: {
        cedula: u.cedula,
        nombre: u.nombre,
        clave: claveHasheada,
        role: u.role,
      },
    });

    console.log(`✅ Usuario creado exitosamente:`);
    console.log(`   - Nombre: ${u.nombre}`);
    console.log(`   - Cédula: ${u.cedula}`);
    console.log(`   - Rol: ${u.role}`);
    console.log(`   - Contraseña de ingreso: ${u.claveOriginal}`);
    console.log('---------------------------------------------');
  }

  console.log('🎉 ¡Proceso de creación completado!');
}

main()
  .catch((e) => {
    console.error('❌ Error al crear los usuarios:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

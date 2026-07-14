const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const cedula = '10522739';
  const nuevaClave = '320830';

  console.log(`Generando nuevo hash para la contraseña...`);
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(nuevaClave, salt);

  console.log(`Actualizando la contraseña en la base de datos...`);
  const user = await prisma.user.update({
    where: { cedula },
    data: {
      clave: hash,
      role: 'SUPER_ADMIN' // Asegurando que tenga el rol de administrador master
    }
  });

  console.log(`✅ Contraseña actualizada con éxito para el usuario ${user.nombre} (Cédula: ${user.cedula})`);
}

main()
  .catch((e) => {
    console.error('Error al actualizar:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

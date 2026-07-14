const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const cedula = '10522739';
  const claveIntento = '320830';

  console.log(`Buscando usuario con cédula: ${cedula}...`);
  const user = await prisma.user.findUnique({
    where: { cedula },
  });

  if (!user) {
    console.log(`❌ El usuario con cédula ${cedula} NO EXISTE en la base de datos.`);
    return;
  }

  console.log(`✅ Usuario encontrado:`, {
    id: user.id,
    cedula: user.cedula,
    nombre: user.nombre,
    role: user.role
  });

  console.log(`Verificando contraseña...`);
  const isValid = await bcrypt.compare(claveIntento, user.clave);
  
  if (isValid) {
    console.log(`✅ La contraseña coincide correctamente.`);
  } else {
    console.log(`❌ La contraseña ingresada NO coincide con el hash guardado en la base de datos.`);
    console.log(`Hash guardado: ${user.clave}`);
  }
}

main()
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

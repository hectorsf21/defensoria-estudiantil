const bcrypt = require('bcryptjs');

// Cambia 'tu_contraseña_aqui' por la clave que quieras usar
const passwordOriginal = '77812345';

const saltRounds = 10; // Nivel de seguridad (10 es el estándar)

bcrypt.hash(passwordOriginal, saltRounds, (err, hash) => {
    if (err) {
        console.error("Error al hashear:", err);
        return;
    }
    console.log("------------------------------------------");
    console.log("Contraseña original:", passwordOriginal);
    console.log("Contraseña HASHEADA (esto es lo que guardas en la DB):");
    console.log(hash);
    console.log("------------------------------------------");
});
const bcrypt = require('bcryptjs');

async function main() {
    const saltAdmin = await bcrypt.genSalt(10);
    const hashAdmin = await bcrypt.hash('320830', saltAdmin);

    const saltBasico = await bcrypt.genSalt(10);
    const hashBasico = await bcrypt.hash('810250', saltBasico);

    console.log(`-- ID 2 (Admin) Clave: 320830`);
    console.log(`UPDATE User SET clave = '${hashAdmin}' WHERE id = 2;`);
    console.log();
    console.log(`-- ID 1 (Básico) Clave: 810250`);
    console.log(`UPDATE User SET clave = '${hashBasico}' WHERE id = 1;`);
}

main();

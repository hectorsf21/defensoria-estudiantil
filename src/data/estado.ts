
export interface Parroquia {
  nombre: string;
}

export interface Municipio {
  nombre: string;
  parroquias: Parroquia[];
}

export interface Estado {
  nombre: string;
  municipios: Municipio[];
}

export const estados: Estado[] = [
  {
    nombre: "Amazonas",
    municipios: [
      {
        nombre: "Alto Orinoco",
        parroquias: [
          { nombre: "La Esmeralda" },
          { nombre: "Huachamacare" }
        ]
      },
      {
        nombre: "Atabapo",
        parroquias: [
          { nombre: "Atabapo" },
          { nombre: "Ucata" }
        ]
      },
      {
        nombre: "Atures",
        parroquias: [
          { nombre: "Puerto Ayacucho" },
          { nombre: "Fernando Girón Tovar" },
          { nombre: "Luis Alberto Gómez" },
          { nombre: "Pana Pana" },
          { nombre: "Samariapo" }
        ]
      },
      {
        nombre: "Autana",
        parroquias: [
          { nombre: "Isla Ratón" },
          { nombre: "Guachapana" }
        ]
      },
      {
        nombre: "Manapiare",
        parroquias: [
          { nombre: "Maroa" },
          { nombre: "San Fernando de Atabapo" }
        ]
      },
      {
        nombre: "Maroa",
        parroquias: [
          { nombre: "Maroa" }
        ]
      },
      {
        nombre: "Río Negro",
        parroquias: [
          { nombre: "San Carlos de Río Negro" },
          { nombre: "Solano" }
        ]
      }
    ]
  },
  {
    nombre: "Apure",
    municipios: [
      {
        nombre: "Achaguas",
        parroquias: [
          { nombre: "Achaguas" },
          { nombre: " sustentável" },
          { nombre: "El Yagual" },
          { nombre: "Guachara" },
          { nombre: "Mucuritas" },
          { nombre: "Queseras del Medio" }
        ]
      },
      {
        nombre: "Biruaca",
        parroquias: [
          { nombre: "Biruaca" }
        ]
      },
      {
        nombre: "Paéz",
        parroquias: [
          { nombre: "Rincón Hondo" },
          { nombre: "San Vicente" },
          { nombre: "Santa Bárbara" },
          { nombre: "La Luz" },
          { nombre: "Guadalupe" },
          { nombre: "San Antonio" },
          { nombre: "San José de Guanareño" },
          { nombre: "Umuquena" }
        ]
      },
      {
        nombre: "Pedro Camejo",
        parroquias: [
          { nombre: "San Juan de Payara" },
          { nombre: "Codazzi" },
          { nombre: "Cunaviche" }
        ]
      },
      {
        nombre: "Rómulo Gallegos",
        parroquias: [
          { nombre: "Elorza" },
          { nombre: "La Trinidad" }
        ]
      },
      {
        nombre: "San Fernando",
        parroquias: [
          { nombre: "San Fernando" },
          { nombre: "El Recreo" },
          { nombre: "Peñalver" },
          { nombre: "San Rafael de Atamaica" }
        ]
      }
    ]
  },
  {
    nombre: "Anzoátegui",
    municipios: [
      {
        nombre: "Anaco",
        parroquias: [
          { nombre: "Anaco" },
          { nombre: "San Joaquín" }
        ]
      },
      {
        nombre: "Aragua",
        parroquias: [
          { nombre: "Aragua de Barcelona" },
          { nombre: "Cachipo" }
        ]
      },
      {
        nombre: "Diego Bautista Urbaneja",
        parroquias: [
          { nombre: "Lechería" },
          { nombre: "El Morro" }
        ]
      },
      {
        nombre: "Fernando de Peñalver",
        parroquias: [
          { nombre: "Puerto Píritu" },
          { nombre: "San Miguel" }
        ]
      },
      {
        nombre: "Francisco del Carmen Carvajal",
        parroquias: [
          { nombre: "Valle de Guanape" },
          { nombre: "Santa Bárbara" }
        ]
      },
      {
        nombre: "Francisco de Miranda",
        parroquias: [
          { nombre: "Pariaguán" },
          { nombre: "Atapirire" }
        ]
      },
      {
        nombre: "Guanta",
        parroquias: [
          { nombre: "Guanta" },
          { nombre: "Chorrerón" }
        ]
      },
      {
        nombre: "Independencia",
        parroquias: [
          { nombre: "Soledad" }
        ]
      },
      {
        nombre: "José Gregorio Monagas",
        parroquias: [
          { nombre: "Mapire" },
          { nombre: "Piar" },
          { nombre: "Santa Clara" }
        ]
      },
      {
        nombre: "Juan Antonio Sotillo",
        parroquias: [
          { nombre: "Puerto La Cruz" },
          { nombre: "Pozuelos" }
        ]
      },
      {
        nombre: "Juan Manuel Cajigal",
        parroquias: [
          { nombre: "Onoto" },
          { nombre: "San Pablo" }
        ]
      },
      {
        nombre: "Libertad",
        parroquias: [
          { nombre: "San Mateo" },
          { nombre: "El Carito" }
        ]
      },
      {
        nombre: "Manuel Ezequiel Bruzual",
        parroquias: [
          { nombre: "Clarines" },
          { nombre: "Guanape" }
        ]
      },
      {
        nombre: "Pedro María Freites",
        parroquias: [
          { nombre: "Cantaura" },
          { nombre: "Libertador" }
        ]
      },
      {
        nombre: "Píritu",
        parroquias: [
          { nombre: "Píritu" },
          { nombre: "San Francisco" }
        ]
      },
      {
        nombre: "San José de Guanipa",
        parroquias: [
          { nombre: "San José de Guanipa" }
        ]
      },
      {
        nombre: "San Juan de Capistrano",
        parroquias: [
          { nombre: "Boca de Uchire" },
          { nombre: "Boca de Chávez" }
        ]
      },
      {
        nombre: "Santa Ana",
        parroquias: [
          { nombre: "Santa Ana" }
        ]
      },
      {
        nombre: "Simón Bolívar",
        parroquias: [
          { nombre: "Barcelona" },
          { nombre: "El Carmen" },
          { nombre: "San Cristóbal" },
          { nombre: "Bergantín" }
        ]
      },
      {
        nombre: "Simón Rodríguez",
        parroquias: [
          { nombre: "El Chaparro" },
          { nombre: "Tomás Alfaro" },
          { nombre: "Calatrava" }
        ]
      },
      {
        nombre: "Sotillo",
        parroquias: [
          { nombre: "Puerto Piritu" },
          { nombre: "San Miguel" }
        ]
      },
      {
        nombre: "Turítico Diego Bautista Urbaneja",
        parroquias: [
          { nombre: "Lechería" },
          { nombre: "El Morro" }
        ]
      }
    ]
  },
  {
    nombre: "Aragua",
    municipios: [
      {
        nombre: "Francisco Linares Alcántara",
        parroquias: [
          { nombre: "Santa Rita" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "San Mateo" },
          { nombre: "San José de Ribas" }
        ]
      },
      {
        nombre: "Camatagua",
        parroquias: [
          { nombre: "Camatagua" },
          { nombre: "Carmen de Cura" }
        ]
      },
      {
        nombre: "Girardot",
        parroquias: [
          { nombre: "Maracay" },
          { nombre: "Joaquín Crespo" },
          { nombre: "Pedro José Ovalles" },
          { nombre: "San José" },
          { nombre: "Andrés Eloy Blanco" },
          { nombre: "Choroní" },
          { nombre: "Las Delicias" },
          { nombre: "Los Tacariguas" }
        ]
      },
      {
        nombre: "Mario Briceño Iragorry",
        parroquias: [
          { nombre: "Caña de Azúcar" }
        ]
      },
      {
        nombre: "José Ángel Lamas",
        parroquias: [
          { nombre: "Santa Cruz" }
        ]
      },
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Palo Negro" },
          { nombre: "San Martín de Porres" }
        ]
      },
      {
        nombre: "Santiago Mariño",
        parroquias: [
          { nombre: "Turmero" },
          { nombre: "Arevalo Aponte" },
          { nombre: "Chuao" },
          { nombre: "Samán de Güere" }
        ]
      },
      {
        nombre: "Santos Michelena",
        parroquias: [
          { nombre: "Las Tejerías" }
        ]
      },
      {
        nombre: "Ocumare de la Costa de Oro",
        parroquias: [
          { nombre: "Ocumare de la Costa" },
          { nombre: "San Sebastián" }
        ]
      },
      {
        nombre: "José Rafael Revenga",
        parroquias: [
          { nombre: "El Consejo" },
          { nombre: "Palo Negro" }
        ]
      },
      {
        nombre: "José Félix Ribas",
        parroquias: [
          { nombre: "La Victoria" },
          { nombre: "Pao de Zárate" },
          { nombre: "Zuata" },
          { nombre: "El Consejo" }
        ]
      },
      {
        nombre: "San Casimiro",
        parroquias: [
          { nombre: "San Casimiro" },
          { nombre: "Valle Morín" }
        ]
      },
      {
        nombre: "San Sebastián",
        parroquias: [
          { nombre: "San Sebastián" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Cagua" },
          { nombre: "Bella Vista" }
        ]
      },
      {
        nombre: "Tovar",
        parroquias: [
          { nombre: "Tovar" }
        ]
      },
      {
        nombre: "Urdaneta",
        parroquias: [
          { nombre: "Urdaneta" }
        ]
      },
      {
        nombre: "Zamora",
        parroquias: [
          { nombre: "Villa de Cura" },
          { nombre: "Magdaleno" },
          { nombre: "San Francisco de Cara" },
          { nombre: "Torres" }
        ]
      }
    ]
  },
  {
    nombre: "Barinas",
    municipios: [
      {
        nombre: "Alberto Arvelo Torrealba",
        parroquias: [
          { nombre: "Barinitas" },
          { nombre: "Altamira de Cáceres" },
          { nombre: "Calderas" }
        ]
      },
      {
        nombre: "Andrés Eloy Blanco",
        parroquias: [
          { nombre: "El Cantón" },
          { nombre: "Santa Cruz de Guacas" },
          { nombre: "Puerto Vivas" }
        ]
      },
      {
        nombre: "Antonio José de Sucre",
        parroquias: [
          { nombre: "Socopó" },
          { nombre: "La Unión" },
          { nombre: "Arias" }
        ]
      },
      {
        nombre: "Arismendi",
        parroquias: [
          { nombre: "Arismendi" },
          { nombre: "Guadarrama" },
          { nombre: "La Unión" }
        ]
      },
      {
        nombre: "Barinas",
        parroquias: [
          { nombre: "Barinas" },
          { nombre: "Alberto Arvelo Torrealba" },
          { nombre: "San Silvestre" },
          { nombre: "Santa Inés" },
          { nombre: "Santa Lucía" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "Barrancas" },
          { nombre: "El Socorro" },
          { nombre: "Masparrito" }
        ]
      },
      {
        nombre: "Cruz Paredes",
        parroquias: [
          { nombre: "Barrancas" },
          { nombre: "El Socorro" },
          { nombre: "Masparrito" }
        ]
      },
      {
        nombre: "Ezequiel Zamora",
        parroquias: [
          { nombre: "Santa Bárbara" },
          { nombre: "Pedro Briceño Méndez" },
          { nombre: "Ramón Ignacio Méndez" }
        ]
      },
      {
        nombre: "Obispos",
        parroquias: [
          { nombre: "Obispos" },
          { nombre: "Los Guasimitos" },
          { nombre: "El Real" }
        ]
      },
      {
        nombre: "Pedraza",
        parroquias: [
          { nombre: "Pedraza" },
          { nombre: "Ignacio Briceño" },
          { nombre: "José Félix Ribas" },
          { nombre: "Páez" }
        ]
      },
      {
        nombre: "Rojas",
        parroquias: [
          { nombre: "Ciudad Bolivia" },
          { nombre: "Ignacio Briceño" },
          { nombre: "Juan Antonio Rodríguez Domínguez" }
        ]
      },
      {
        nombre: "Sosa",
        parroquias: [
          { nombre: "Palmarito" },
          { nombre: "San Antonio" },
          { nombre: "Santa Catalina" }
        ]
      }
    ]
  },
  {
    nombre: "Bolívar",
    municipios: [
      {
        nombre: "Angostura",
        parroquias: [
          { nombre: "San Francisco" },
          { nombre: "La Sabanita" },
          { nombre: "Borbón" }
        ]
      },
      {
        nombre: "Angostura del Orinoco",
        parroquias: [
          { nombre: "Ciudad Bolívar" },
          { nombre: "Marhuanta" },
          { nombre: "Panapana" }
        ]
      },
      {
        nombre: "Caroní",
        parroquias: [
          { nombre: "Almacén" },
          { nombre: "Aripichi" },
          { nombre: "Ayacucho" },
          { nombre: "Cachamay" },
          { nombre: "Chirica" },
          { nombre: "Dalla Costa" },
          { nombre: "Once de Abril" },
          { nombre: "Simón Bolívar" },
          { nombre: "Unare" },
          { nombre: "Universidad" },
          { nombre: "Vista al Sol" }
        ]
      },
      {
        nombre: "Cedeño",
        parroquias: [
          { nombre: "Caicara del Orinoco" },
          { nombre: "Ascensión Farreras" },
          { nombre: "La Urbana" },
          { nombre: "Pierdrales" }
        ]
      },
      {
        nombre: "Chien",
        parroquias: [
          { nombre: "Chien" },
          { nombre: "San José" }
        ]
      },
      {
        nombre: "El Callao",
        parroquias: [
          { nombre: "El Callao" }
        ]
      },
      {
        nombre: "Gran Sabana",
        parroquias: [
          { nombre: "Santa Elena de Uairén" },
          { nombre: "Ikabarú" }
        ]
      },
      {
        nombre: "Piar",
        parroquias: [
          { nombre: "Upata" },
          { nombre: "Andrés Eloy Blanco" },
          { nombre: "Pedro Cova" }
        ]
      },
      {
        nombre: "Roscio",
        parroquias: [
          { nombre: "Guasipati" },
          { nombre: "Salom" }
        ]
      },
      {
        nombre: "Sifontes",
        parroquias: [
          { nombre: "Tumeremo" },
          { nombre: "Dalla Costa" },
          { nombre: "San Isidro" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Maripa" },
          { nombre: "Arias" },
          { nombre: "Arismendi" }
        ]
      }
    ]
  },
  {
    nombre: "Carabobo",
    municipios: [
      {
        nombre: "Bejuma",
        parroquias: [
          { nombre: "Bejuma" }
        ]
      },
      {
        nombre: "Carlos Arvelo",
        parroquias: [
          { nombre: "Güigüe" },
          { nombre: "Belén" }
        ]
      },
      {
        nombre: "Diego Ibarra",
        parroquias: [
          { nombre: "Mariara" }
        ]
      },
      {
        nombre: "Guacara",
        parroquias: [
          { nombre: "Guacara" }
        ]
      },
      {
        nombre: "Juan José Mora",
        parroquias: [
          { nombre: "Morón" },
          { nombre: "Urama" }
        ]
      },
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Tocuyito" },
          { nombre: "Independencia" }
        ]
      },
      {
        nombre: "Los Guayos",
        parroquias: [
          { nombre: "Los Guayos" }
        ]
      },
      {
        nombre: "Miranda",
        parroquias: [
          { nombre: "Miranda" }
        ]
      },
      {
        nombre: "Montalbán",
        parroquias: [
          { nombre: "Montalbán" }
        ]
      },
      {
        nombre: "Naguanagua",
        parroquias: [
          { nombre: "Naguanagua" }
        ]
      },
      {
        nombre: "Puerto Cabello",
        parroquias: [
          { nombre: "Puerto Cabello" },
          { nombre: "Bartolomé Salom" },
          { nombre: "Democracia" },
          { nombre: "Fraternidad" },
          { nombre: "Goaigoaza" },
          { nombre: "Juan José Flores" },
          { nombre: "Unión" },
          { nombre: "Borburata" },
          { nombre: "Patanemo" }
        ]
      },
      {
        nombre: "San Diego",
        parroquias: [
          { nombre: "San Diego" }
        ]
      },
      {
        nombre: "San Joaquín",
        parroquias: [
          { nombre: "San Joaquín" }
        ]
      },
      {
        nombre: "Valencia",
        parroquias: [
          { nombre: "Valencia" },
          { nombre: "Candelaria" },
          { nombre: "Catedral" },
          { nombre: "El Socorro" },
          { nombre: "Miguel Peña" },
          { nombre: "Negro Primero" },
          { nombre: "Rafael Urdaneta" },
          { nombre: "San Blas" },
          { nombre: "San José" },
          { nombre: "Santa Rosa" }
        ]
      }
    ]
  },
  {
    nombre: "Cojedes",
    municipios: [
      {
        nombre: "Anzoátegui",
        parroquias: [
          { nombre: "Anzoátegui" },
          { nombre: "Guanarito" }
        ]
      },
      {
        nombre: "San Carlos",
        parroquias: [
          { nombre: "San Carlos" },
          { nombre: "Juan Ángel Bravo" },
          { nombre: "Manuel Manrique" }
        ]
      },
      {
        nombre: "Girardot",
        parroquias: [
          { nombre: "Girardot" }
        ]
      },
      {
        nombre: "Lima Blanco",
        parroquias: [
          { nombre: "Macapo" },
          { nombre: "La Aguadita" }
        ]
      },
      {
        nombre: "Pao de San Juan Bautista",
        parroquias: [
          { nombre: "El Baúl" },
          { nombre: "Sucre" }
        ]
      },
      {
        nombre: "Ricaurte",
        parroquias: [
          { nombre: "Ricaurte" },
          { nombre: "El Amparo" }
        ]
      },
      {
        nombre: "Rómulo Gallegos",
        parroquias: [
          { nombre: "Rómulo Gallegos" }
        ]
      },
      {
        nombre: "Tinaco",
        parroquias: [
          { nombre: "Tinaco" },
          { nombre: "Chirgua" }
        ]
      },
      {
        nombre: "Tinaquillo",
        parroquias: [
          { nombre: "Tinaquillo" }
        ]
      }
    ]
  },
  {
    nombre: "Delta Amacuro",
    municipios: [
      {
        nombre: "Antonio Díaz",
        parroquias: [
          { nombre: "Curiapo" },
          { nombre: "Almirante Luis Brión" },
          { nombre: "Francisco Aniceto Lugo" },
          { nombre: "Manuel Renaud" },
          { nombre: "Padre Barral" },
          { nombre: "Santos de Abelgas" }
        ]
      },
      {
        nombre: "Casimiro de San Francisco",
        parroquias: [
          { nombre: "Imataca" },
          { nombre: "Juan Bautista Arismendi" },
          { nombre: "Manuel Piar" },
          { nombre: "Rómulo Gallegos" }
        ]
      },
      {
        nombre: "Pedernales",
        parroquias: [
          { nombre: "Pedernales" },
          { nombre: "Luis Beltrán Prieto Figueroa" }
        ]
      },
      {
        nombre: "Tucupita",
        parroquias: [
          { nombre: "Tucupita" },
          { nombre: "José Vidal Marcano" },
          { nombre: "Juan Millán" },
          { nombre: "Leonardo Ruíz Pineda" },
          { nombre: "Mariscal Antonio José de Sucre" },
          { nombre: "Monseñor Argimiro García" },
          { nombre: "San Rafael" },
          { nombre: "Virgen del Valle" }
        ]
      }
    ]
  },
  {
    nombre: "Distrito Capital",
    municipios: [
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Altagracia" },
          { nombre: "Antímano" },
          { nombre: "Candelaria" },
          { nombre: "Caricuao" },
          { nombre: "Catedral" },
          { nombre: "Coche" },
          { nombre: "El Junquito" },
          { nombre: "El Paraíso" },
          { nombre: "El Recreo" },
          { nombre: "El Valle" },
          { nombre: "La Pastora" },
          { nombre: "La Vega" },
          { nombre: "Macarao" },
          { nombre: "San Agustín" },
          { nombre: "San Bernardino" },
          { nombre: "San José" },
          { nombre: "San Juan" },
          { nombre: "San Pedro" },
          { nombre: "San Roque" },
          { nombre: "Santa Rosalía" },
          { nombre: "Sucre (Catia)" },
          { nombre: "23 de Enero" }
        ]
      }
    ]
  },
  {
    nombre: "Falcón",
    municipios: [
      {
        nombre: "Acosta",
        parroquias: [
          { nombre: "San Juan de los Cayos" },
          { nombre: "Capital Acosta" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "Capadare" },
          { nombre: "La Pastora" },
          { nombre: "Libertador" },
          { nombre: "San Juan de los Cayos" }
        ]
      },
      {
        nombre: "Buchivacoa",
        parroquias: [
          { nombre: "Capatárida" },
          { nombre: "El Charal" },
          { nombre: "Las Vegas del Tuy" },
          { nombre: "Capital Buchivacoa" }
        ]
      },
      {
        nombre: "Cacique Manaure",
        parroquias: [
          { nombre: "Yaracal" },
          { nombre: "Capital Cacique Manaure" }
        ]
      },
      {
        nombre: "Carirubana",
        parroquias: [
          { nombre: "Punta Cardón" },
          { nombre: "Santa Ana" },
          { nombre: "Capital Carirubana" }
        ]
      },
      {
        nombre: "Colina",
        parroquias: [
          { nombre: "Bariro" },
          { nombre: "Borojó" },
          { nombre: "Guajiro" },
          { nombre: "Macuquita" },
          { nombre: "Capital Colina" }
        ]
      },
      {
        nombre: "Dabajuro",
        parroquias: [
          { nombre: "Dabajuro" },
          { nombre: "Capital Dabajuro" }
        ]
      },
      {
        nombre: "Democracia",
        parroquias: [
          { nombre: "Agua Clara" },
          { nombre: "Avaria" },
          { nombre: "Churuguara" },
          { nombre: "Capital Democracia" }
        ]
      },
      {
        nombre: "Falcón",
        parroquias: [
          { nombre: "El Cayude" },
          { nombre: "El Charal" },
          { nombre: "Capital Falcón" }
        ]
      },
      {
        nombre: "Federación",
        parroquias: [
          { nombre: "Jacura" },
          { nombre: "Capital Federación" }
        ]
      },
      {
        nombre: "Jacura",
        parroquias: [
          { nombre: "Jacura" },
          { nombre: "Capital Jacura" }
        ]
      },
      {
        nombre: "Los Taques",
        parroquias: [
          { nombre: "Judibana" },
          { nombre: "Capital Los Taques" }
        ]
      },
      {
        nombre: "Mauroa",
        parroquias: [
          { nombre: "Mene de Mauroa" },
          { nombre: "San Félix" },
          { nombre: "Capital Mauroa" }
        ]
      },
      {
        nombre: "Miranda",
        parroquias: [
          { nombre: "Guzmán Guillermo" },
          { nombre: "Mitare" },
          { nombre: "Río Seco" },
          { nombre: "Sabaneta" },
          { nombre: "Capital Miranda" }
        ]
      },
      {
        nombre: "Monseñor Iturriza",
        parroquias: [
          { nombre: "Chichiriviche" },
          { nombre: "Boca de Tocuyo" },
          { nombre: "Capital Monseñor Iturriza" }
        ]
      },
      {
        nombre: "Palmasola",
        parroquias: [
          { nombre: "Palmasola" },
          { nombre: "Capital Palmasola" }
        ]
      },
      {
        nombre: "Petit",
        parroquias: [
          { nombre: "Capital Petit" }
        ]
      },
      {
        nombre: "Píritu",
        parroquias: [
          { nombre: "Capital Píritu" },
          { nombre: "San José de la Costa" }
        ]
      },
      {
        nombre: "San Francisco",
        parroquias: [
          { nombre: "Mirimire" },
          { nombre: "Capital San Francisco" }
        ]
      },
      {
        nombre: "Silva",
        parroquias: [
          { nombre: "Capital Silva" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Capital Sucre" }
        ]
      },
      {
        nombre: "Tocópero",
        parroquias: [
          { nombre: "Capital Tocópero" }
        ]
      },
      {
        nombre: "Unión",
        parroquias: [
          { nombre: "Capital Unión" }
        ]
      },
      {
        nombre: "Urumaco",
        parroquias: [
          { nombre: "Urumaco" },
          { nombre: "Capital Urumaco" }
        ]
      },
      {
        nombre: "Zamora",
        parroquias: [
          { nombre: "Puerto Cumarebo" },
          { nombre: "La Ciénaga" },
          { nombre: "Capital Zamora" }
        ]
      }
    ]
  },
  {
    nombre: "Guárico",
    municipios: [
      {
        nombre: "Camaguán",
        parroquias: [
          { nombre: "Camaguán" },
          { nombre: "Puerto Miranda" },
          { nombre: "Uverito" }
        ]
      },
      {
        nombre: "Chaguaramas",
        parroquias: [
          { nombre: "Chaguaramas" }
        ]
      },
      {
        nombre: "El Socorro",
        parroquias: [
          { nombre: "El Socorro" }
        ]
      },
      {
        nombre: "Francisco de Miranda",
        parroquias: [
          { nombre: "Calabozo" },
          { nombre: "El Calvario" },
          { nombre: "El Rastro" },
          { nombre: "Guardatinajas" }
        ]
      },
      {
        nombre: "José Félix Ribas",
        parroquias: [
          { nombre: "Tucupido" },
          { nombre: "San Rafael de Laya" }
        ]
      },
      {
        nombre: "José Tadeo Monagas",
        parroquias: [
          { nombre: "Altagracia de Orituco" },
          { nombre: "Lezama" },
          { nombre: "Libertad de Orituco" },
          { nombre: "Paso Real de Macaira" },
          { nombre: "San Francisco de Macaira" },
          { nombre: "San José de Unare" }
        ]
      },
      {
        nombre: "Juan Germán Roscio",
        parroquias: [
          { nombre: "San Juan de los Morros" },
          { nombre: "Cantagallo" },
          { nombre: "Parapara" }
        ]
      },
      {
        nombre: "Julián Mellado",
        parroquias: [
          { nombre: "El Sombrero" },
          { nombre: "Sosa" }
        ]
      },
      {
        nombre: "Las Mercedes",
        parroquias: [
          { nombre: "Las Mercedes" },
          { nombre: "Cabruta" },
          { nombre: "Santa Rita de Manapire" }
        ]
      },
      {
        nombre: "Leonardo Infante",
        parroquias: [
          { nombre: "Valle de la Pascua" },
          { nombre: "Espino" }
        ]
      },
      {
        nombre: "Pedro Zaraza",
        parroquias: [
          { nombre: "San José de Unare" },
          { nombre: "Zaraza" }
        ]
      },
      {
        nombre: "Ortíz",
        parroquias: [
          { nombre: "Ortíz" },
          { nombre: "San Francisco de Tiznados" },
          { nombre: "San José de Tiznados" },
          { nombre: "San Lorenzo de Tiznados" }
        ]
      },
      {
        nombre: "San Gerónimo de Guayabal",
        parroquias: [
          { nombre: "Guayabal" },
          { nombre: "Cazorla" }
        ]
      },
      {
        nombre: "San José de Guaribe",
        parroquias: [
          { nombre: "San José de Guaribe" }
        ]
      },
      {
        nombre: "Santa María de Ipire",
        parroquias: [
          { nombre: "Santa María de Ipire" },
          { nombre: "Altamira" }
        ]
      }
    ]
  },
  {
    nombre: "Lara",
    municipios: [
      {
        nombre: "Andrés Eloy Blanco",
        parroquias: [
          { nombre: "Cabudare" },
          { nombre: "José Gregorio Bastidas" },
          { nombre: "Aguedo Felipe Alvarado" },
          { nombre: "Buena Vista" }
        ]
      },
      {
        nombre: "Crespo",
        parroquias: [
          { nombre: "Duaca" },
          { nombre: "Presidente Betancourt" },
          { nombre: "Diego de Lozada" }
        ]
      }
    ]
  },
  {
    nombre: "Mérida",
    municipios: [
      {
        nombre: "Alberto Adriani",
        parroquias: [
          { nombre: "El Vigía" },
          { nombre: "Presidente Betancourt" },
          { nombre: "Presidente Páez" },
          { nombre: "Presidente Rómulo Gallegos" },
          { nombre: "Gabriel Picón González" },
          { nombre: "Héctor Amable Mora" },
          { nombre: "José Nucete Sardi" }
        ]
      },
      {
        nombre: "Andrés Bello",
        parroquias: [
          { nombre: "La Azulita" }
        ]
      },
      {
        nombre: "Antonio Pinto Salinas",
        parroquias: [
          { nombre: "Santa Cruz de Mora" },
          { nombre: "Mesa Bolívar" },
          { nombre: "Mesa de las Palmas" }
        ]
      },
      {
        nombre: "Aricagua",
        parroquias: [
          { nombre: "Aricagua" },
          { nombre: "San Antonio" }
        ]
      },
      {
        nombre: "Arzobispo Chacón",
        parroquias: [
          { nombre: "Canaguá" },
          { nombre: "Capuri" },
          { nombre: "Chacantá" },
          { nombre: "El Molino" },
          { nombre: "Guaimaral" },
          { nombre: "Mucutuy" },
          { nombre: "Mucuchachí" }
        ]
      },
      {
        nombre: "Campo Elías",
        parroquias: [
          { nombre: "Ejido" },
          { nombre: "Acequias" },
          { nombre: "Fernández Peña" },
          { nombre: "Isabel Rubio" },
          { nombre: "Matriz" },
          { nombre: "Montalbán" },
          { nombre: "San José de Acequias" }
        ]
      },
      {
        nombre: "Caracciolo Parra Olmedo",
        parroquias: [
          { nombre: "Tucaní" },
          { nombre: "Florencio Ramírez" }
        ]
      },
      {
        nombre: "Cardenal Quintero",
        parroquias: [
          { nombre: "Santo Domingo" },
          { nombre: "Las Piedras" },
          { nombre: "Santa María de Caparo" }
        ]
      },
      {
        nombre: "Guaraque",
        parroquias: [
          { nombre: "Guaraque" },
          { nombre: "Mesa de Quintero" },
          { nombre: "Río Negro" }
        ]
      },
      {
        nombre: "Julio César Salas",
        parroquias: [
          { nombre: "Palmira" }
        ]
      },
      {
        nombre: "Justo Briceño",
        parroquias: [
          { nombre: "San Cristóbal de Torondoy" }
        ]
      },
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Libertador" }
        ]
      },
      {
        nombre: "Miranda",
        parroquias: [
          { nombre: "Antonio Spinetti Dini" },
          { nombre: "Arias" },
          { nombre: "Caracciolo Parra Pérez" },
          { nombre: "Domingo Peña" },
          { nombre: "El Llano" },
          { nombre: "Gonzalo Picón Febres" },
          { nombre: "Jacinto Plaza" },
          { nombre: "Juan Rodríguez Suárez" },
          { nombre: "Lashero González" },
          { nombre: "Los Nevados" },
          { nombre: "Mariano Picón Salas" },
          { nombre: "Millar" },
          { nombre: "Osuna Rodríguez" },
          { nombre: "Sagrario" },
          { nombre: "El Morro" }
        ]
      },
      {
        nombre: "Obispo Ramos de Lora",
        parroquias: [
          { nombre: "Eloy Paredes" },
          { nombre: "San Rafael de Alcázar" }
        ]
      },
      {
        nombre: "Padre Noguera",
        parroquias: [
          { nombre: "Andrés Eloy Blanco" },
          { nombre: "La Venta" },
          { nombre: "Piñango" }
        ]
      },
      {
        nombre: "Pueblo Llano",
        parroquias: [
          { nombre: "Pueblo Llano" }
        ]
      },
      {
        nombre: "Rangel",
        parroquias: [
          { nombre: "Cacute" },
          { nombre: "La Toma" },
          { nombre: "Mucuchíes" },
          { nombre: "Mucurubá" },
          { nombre: "San Rafael" }
        ]
      },
      {
        nombre: "Rivas Dávila",
        parroquias: [
          { nombre: "Bailadores" },
          { nombre: "Estánquez" },
          { nombre: "Lagunillas" },
          { nombre: "La Playa" }
        ]
      },
      {
        nombre: "Santos Marquina",
        parroquias: [
          { nombre: "Chiguará" },
          { nombre: "Estánquez" },
          { nombre: "La Playa" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Acequias" },
          { nombre: "Jají" },
          { nombre: "La Mesa" },
          { nombre: "San José" }
        ]
      },
      {
        nombre: "Tovar",
        parroquias: [
          { nombre: "Tovar" }
        ]
      },
      {
        nombre: "Tulio Febres Cordero",
        parroquias: [
          { nombre: "El Amparo" },
          { nombre: "El Llano" },
          { nombre: "San Francisco" }
        ]
      },
      {
        nombre: "Zea",
        parroquias: [
          { nombre: "Zea" }
        ]
      }
    ]
  },
  {
    nombre: "Miranda",
    municipios: [
      {
        nombre: "Acevedo",
        parroquias: [
          { nombre: "Aragüita" },
          { nombre: "Arevalo González" },
          { nombre: "Capiata" },
          { nombre: "Caucagua" },
          { nombre: "Panaquire" },
          { nombre: "Ribas" },
          { nombre: "El Café" },
          { nombre: "Marizapa" }
        ]
      },
      {
        nombre: "Andrés Bello",
        parroquias: [
          { nombre: "Cumbo" },
          { nombre: "San José de Barlovento" }
        ]
      },
      {
        nombre: "Baruta",
        parroquias: [
          { nombre: "Baruta" },
          { nombre: "El Cafetal" },
          { nombre: "Las Minas" }
        ]
      },
      {
        nombre: "Bruzual",
        parroquias: [
          { nombre: "Curiepe" },
          { nombre: "Higuerote" },
          { nombre: "Tacarigua de Brión" }
        ]
      },
      {
        nombre: "Buroz",
        parroquias: [
          { nombre: "Mamporal" }
        ]
      },
      {
        nombre: "Carrizal",
        parroquias: [
          { nombre: "Carrizal" }
        ]
      },
      {
        nombre: "Chacao",
        parroquias: [
          { nombre: "Chacao" }
        ]
      },
      {
        nombre: "Cristóbal Rojas",
        parroquias: [
          { nombre: "Charallave" },
          { nombre: "Las Brisas" }
        ]
      },
      {
        nombre: "El Hatillo",
        parroquias: [
          { nombre: "El Hatillo" }
        ]
      },
      {
        nombre: "Guaicaipuro",
        parroquias: [
          { nombre: "Altagracia de la Montaña" },
          { nombre: "Cecilio Acosta" },
          { nombre: "Los Teques" },
          { nombre: "El Jarillo" },
          { nombre: "San Pedro" },
          { nombre: "Tácata" },
          { nombre: "Paracotos" }
        ]
      },
      {
        nombre: "Independencia",
        parroquias: [
          { nombre: "Cartanal" },
          { nombre: "Santa Teresa del Tuy" }
        ]
      },
      {
        nombre: "Lander",
        parroquias: [
          { nombre: "Altagracia de Orituco" },
          { nombre: "Lezama" },
          { nombre: "Ortiz" },
          { nombre: "San Francisco de Yare" },
          { nombre: "San José de Unare" },
          { nombre: "Taguay" }
        ]
      },
      {
        nombre: "Los Salias",
        parroquias: [
          { nombre: "San Antonio de los Altos" }
        ]
      },
      {
        nombre: "Páez",
        parroquias: [
          { nombre: "El Guapo" },
          { nombre: "La Pastora" },
          { nombre: "Río Chico" },
          { nombre: "San Fernando del Guapo" }
        ]
      },
      {
        nombre: "Paz Castillo",
        parroquias: [
          { nombre: "Santa Lucía" }
        ]
      },
      {
        nombre: "Pedro Gual",
        parroquias: [
          { nombre: "Cúpira" },
          { nombre: "Machurucuto" }
        ]
      },
      {
        nombre: "Plaza",
        parroquias: [
          { nombre: "Guarenas" },
          { nombre: "San Antonio de Yare" }
        ]
      },
      {
        nombre: "Simón Bolívar",
        parroquias: [
          { nombre: "San Francisco de Yare" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Petare" },
          { nombre: "Caucagüita" },
          { nombre: "Fila de Mariches" },
          { nombre: "La Dolorita" },
          { nombre: "Leoncio Martínez" }
        ]
      },
      {
        nombre: "Urdaneta",
        parroquias: [
          { nombre: "Cúa" },
          { nombre: "Nueva Cúa" }
        ]
      },
      {
        nombre: "Zamora",
        parroquias: [
          { nombre: "Guatire" },
          { nombre: "Bolívar" }
        ]
      }
    ]
  },
  {
    nombre: "Monagas",
    municipios: [
      {
        nombre: "Acosta",
        parroquias: [
          { nombre: "San Antonio de Capayacuar" },
          { nombre: "San Francisco de Capayacuar" },
          { nombre: "San José de Guanipa" }
        ]
      },
      {
        nombre: "Aguasay",
        parroquias: [
          { nombre: "Aguasay" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "Barrancas" },
          { nombre: "Los Barrancos de Fajardo" }
        ]
      },
      {
        nombre: "Caripe",
        parroquias: [
          { nombre: "El Furrial" },
          { nombre: "Caripe" },
          { nombre: "San Agustín" },
          { nombre: "Teresen" },
          { nombre: "La Pica" }
        ]
      },
      {
        nombre: "Cedeño",
        parroquias: [
          { nombre: "Alto de Los Godos" },
          { nombre: "Boquerón" },
          { nombre: "Las Cocuizas" },
          { nombre: "La Cruz" },
          { nombre: "San Simón" },
          { nombre: "El Corozo" },
          { nombre: "El Tejero" },
          { nombre: "Sotillo" }
        ]
      },
      {
        nombre: "Ezequiel Zamora",
        parroquias: [
          { nombre: "Punta de Mata" },
          { nombre: "Chaguaramas" },
          { nombre: "El Tejero" },
          { nombre: "Temblador" }
        ]
      },
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Chaguaramas" },
          { nombre: "Las Alhuacas" },
          { nombre: "Tabasca" }
        ]
      },
      {
        nombre: "Maturín",
        parroquias: [
          { nombre: "Alto de Los Godos" },
          { nombre: "Boquerón" },
          { nombre: "Las Cocuizas" },
          { nombre: "La Cruz" },
          { nombre: "San Simón" },
          { nombre: "El Corozo" },
          { nombre: "El Furrial" },
          { nombre: "Jusepín" },
          { nombre: "La Pica" },
          { nombre: "San Vicente" },
          { nombre: "Santa Bárbara" }
        ]
      },
      {
        nombre: "Piar",
        parroquias: [
          { nombre: "Aparicio" },
          { nombre: "Aragua de Maturín" },
          { nombre: "Chaguaramal" },
          { nombre: "El Pinto" },
          { nombre: "Guanaguana" },
          { nombre: "La Toscana" },
          { nombre: "Taguaya" }
        ]
      },
      {
        nombre: "Punceres",
        parroquias: [
          { nombre: "Areo" },
          { nombre: "Cachipo" },
          { nombre: "San Félix de Cantalicio" }
        ]
      },
      {
        nombre: "Santa Bárbara",
        parroquias: [
          { nombre: "Santa Bárbara" },
          { nombre: "Morón" }
        ]
      },
      {
        nombre: "Sotillo",
        parroquias: [
          { nombre: "Barrancas" },
          { nombre: "Los Barrancos de Fajardo" }
        ]
      },
      {
        nombre: "Uracoa",
        parroquias: [
          { nombre: "Uracoa" }
        ]
      },
      {
        nombre: "Zamora",
        parroquias: [
          { nombre: "Libertad" },
          { nombre: "Chaguaramas" },
          { nombre: "Las Piedras" },
          { nombre: "San Félix" }
        ]
      }
    ]
  },
  {
    nombre: "Nueva Esparta",
    municipios: [
      {
        nombre: "Antolín del Campo",
        parroquias: [
          { nombre: "La Plaza de Paraguachí" },
          { nombre: "San Juan" }
        ]
      },
      {
        nombre: "Arismendi",
        parroquias: [
          { nombre: "San Juan Bautista" },
          { nombre: "Zabala" }
        ]
      },
      {
        nombre: "Díaz",
        parroquias: [
          { nombre: "San Antonio" },
          { nombre: "Sabaneta" },
          { nombre: "San Francisco" }
        ]
      },
      {
        nombre: "García",
        parroquias: [
          { nombre: "El Valle" },
          { nombre: "Francisco Fajardo" }
        ]
      },
      {
        nombre: "Gómez",
        parroquias: [
          { nombre: "Santa Ana" },
          { nombre: "Punta de Piedras" },
          { nombre: "El Pilar" }
        ]
      },
      {
        nombre: "Maneiro",
        parroquias: [
          { nombre: "Aricagua" },
          { nombre: "San Juan Bautista" }
        ]
      },
      {
        nombre: "Marcano",
        parroquias: [
          { nombre: "Adrián" },
          { nombre: "San Juan Bautista" }
        ]
      },
      {
        nombre: "Mariño",
        parroquias: [
          { nombre: "Bolívar" },
          { nombre: "Guevara" }
        ]
      },
      {
        nombre: "Península de Macanao",
        parroquias: [
          { nombre: "Boca de Río" },
          { nombre: "San Francisco" }
        ]
      },
      {
        nombre: "Tubores",
        parroquias: [
          { nombre: "Punta de Piedras" },
          { nombre: "Los Barales" }
        ]
      },
      {
        nombre: "Villalba",
        parroquias: [
          { nombre: "Villa Rosa" }
        ]
      }
    ]
  },
  {
    nombre: "Portuguesa",
    municipios: [
      {
        nombre: "Araure",
        parroquias: [
          { nombre: "Araure" },
          { nombre: "Río Acarigua" }
        ]
      },
      {
        nombre: "Agua Blanca",
        parroquias: [
          { nombre: "Agua Blanca" }
        ]
      },
      {
        nombre: "Esteller",
        parroquias: [
          { nombre: "Píritu" },
          { nombre: "Uveral" }
        ]
      },
      {
        nombre: "Guanare",
        parroquias: [
          { nombre: "Guanare" },
          { nombre: "Córdoba" },
          { nombre: "San José de la Montaña" },
          { nombre: "San Juan de Guanaguanare" }
        ]
      },
      {
        nombre: "Guanarito",
        parroquias: [
          { nombre: "Guanarito" }
        ]
      },
      {
        nombre: "Monseñor José Vicente de Unda",
        parroquias: [
          { nombre: "Paraíso de Chabasquén" }
        ]
      },
      {
        nombre: "Ospino",
        parroquias: [
          { nombre: "Ospino" },
          { nombre: "La Aparición" }
        ]
      },
      {
        nombre: "Páez",
        parroquias: [
          { nombre: "Acarigua" },
          { nombre: "Payara" },
          { nombre: "Pimpinela" },
          { nombre: "Ramón Peraza" }
        ]
      },
      {
        nombre: "San Genaro de Boconoíto",
        parroquias: [
          { nombre: "Antolín Tovar" },
          { nombre: "Boconoíto" }
        ]
      },
      {
        nombre: "San Rafael de Onoto",
        parroquias: [
          { nombre: "San Rafael de Onoto" },
          { nombre: "Santa Fe" },
          { nombre: "Thermo Morles" }
        ]
      },
      {
        nombre: "Santa Rosalía",
        parroquias: [
          { nombre: "El Playón" },
          { nombre: "Florida" }
        ]
      },
      {
        nombre: "Turen",
        parroquias: [
          { nombre: "Turen" },
          { nombre: "Canelones" },
          { nombre: "Santa Cruz" },
          { nombre: "San Isidro Labrador" }
        ]
      }
    ]
  },
  {
    nombre: "Sucre",
    municipios: [
      {
        nombre: "Andrés Eloy Blanco",
        parroquias: [
          { nombre: "Mariño" },
          { nombre: "Rómulo Gallegos" }
        ]
      },
      {
        nombre: "Andrés Mata",
        parroquias: [
          { nombre: "San José de Aerocuar" },
          { nombre: "Tavera Acosta" }
        ]
      },
      {
        nombre: "Arismendi",
        parroquias: [
          { nombre: "Río Caribe" },
          { nombre: "Antonio José de Sucre" },
          { nombre: "El Morro de Puerto Santo" },
          { nombre: "San Juan de las Galdonas" }
        ]
      },
      {
        nombre: "Benítez",
        parroquias: [
          { nombre: "Biarica" },
          { nombre: "El Pilar" }
        ]
      },
      {
        nombre: "Bermúdez",
        parroquias: [
          { nombre: "Cumaná" },
          { nombre: "Altagracia" },
          { nombre: "Santa Inés" },
          { nombre: "Valentín Valiente" },
          { nombre: "San Juan" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "Marigüitar" }
        ]
      },
      {
        nombre: "Cajigal",
        parroquias: [
          { nombre: "Yaguaraparo" },
          { nombre: "El Paujil" },
          { nombre: "Libertad" }
        ]
      },
      {
        nombre: "Cruz Salmerón Acosta",
        parroquias: [
          { nombre: "Araya" },
          { nombre: "Chacopata" },
          { nombre: "Manicuare" }
        ]
      },
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Tunapuy" },
          { nombre: "Campo Elías" }
        ]
      },
      {
        nombre: "Mariño",
        parroquias: [
          { nombre: "Irapa" },
          { nombre: "Campo Claro" },
          { nombre: "Marabal" },
          { nombre: "San Antonio de Irapa" }
        ]
      },
      {
        nombre: "Mejía",
        parroquias: [
          { nombre: "San Antonio del Golfo" },
          { nombre: "Cumanacoa" },
          { nombre: "Arenas" },
          { nombre: "San Lorenzo" },
          { nombre: "Villa Frontado" }
        ]
      },
      {
        nombre: "Montes",
        parroquias: [
          { nombre: "Cariaco" },
          { nombre: "Catuaro" },
          { nombre: "Rendón" },
          { nombre: "Santa Cruz" },
          { nombre: "Santa María" }
        ]
      },
      {
        nombre: "Ribero",
        parroquias: [
          { nombre: "Concepción" },
          { nombre: "San Francisco" },
          { nombre: "Taguayabón" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Casanay" },
          { nombre: "San Juan de Unare" }
        ]
      },
      {
        nombre: "Valdez",
        parroquias: [
          { nombre: "Güiria" },
          { nombre: "Bideau" },
          { nombre: "Cristóbal Colón" },
          { nombre: "Punta de Piedras" }
        ]
      }
    ]
  },
  {
    nombre: "Táchira",
    municipios: [
      {
        nombre: "Andrés Bello",
        parroquias: [
          { nombre: "Cordero" }
        ]
      },
      {
        nombre: "Antonio Rómulo Costa",
        parroquias: [
          { nombre: "Las Hernández" }
        ]
      },
      {
        nombre: "Ayacucho",
        parroquias: [
          { nombre: "Ayacucho" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "Palmarito" }
        ]
      },
      {
        nombre: "Cárdenas",
        parroquias: [
          { nombre: "Táriba" }
        ]
      },
      {
        nombre: "Córdoba",
        parroquias: [
          { nombre: "San Rafael del Piñal" }
        ]
      },
      {
        nombre: "Fernández Feo",
        parroquias: [
          { nombre: "Alberto Adriani" }
        ]
      },
      {
        nombre: "Francisco de Miranda",
        parroquias: [
          { nombre: "San José de Orope" }
        ]
      },
      {
        nombre: "García de Hevia",
        parroquias: [
          { nombre: "La Fría" }
        ]
      },
      {
        nombre: "Guásimos",
        parroquias: [
          { nombre: "Independencia" }
        ]
      },
      {
        nombre: "Independencia",
        parroquias: [
          { nombre: "Capacho Nuevo" }
        ]
      },
      {
        nombre: "Jáuregui",
        parroquias: [
          { nombre: "Emilio Constantino Guerrero" }
        ]
      },
      {
        nombre: "José María Vargas",
        parroquias: [
          { nombre: "El Cobre" }
        ]
      },
      {
        nombre: "Junín",
        parroquias: [
          { nombre: "Bramón" }
        ]
      },
      {
        nombre: "Libertad",
        parroquias: [
          { nombre: "Capacho Viejo" }
        ]
      },
      {
        nombre: "Libertador",
        parroquias: [
          { nombre: "Abejales" }
        ]
      },
      {
        nombre: "Lobatera",
        parroquias: [
          { nombre: "Arapuey" }
        ]
      },
      {
        nombre: "Michelena",
        parroquias: [
          { nombre: "Michelena" }
        ]
      },
      {
        nombre: "Panamericano",
        parroquias: [
          { nombre: "La Palmita" }
        ]
      },
      {
        nombre: "Pedro María Ureña",
        parroquias: [
          { nombre: "Nueva Arcadia" }
        ]
      },
      {
        nombre: "Rafael Urdaneta",
        parroquias: [
          { nombre: "Delicias" }
        ]
      },
      {
        nombre: "Samuel Darío Maldonado",
        parroquias: [
          { nombre: "Boconó" }
        ]
      },
      {
        nombre: "San Cristóbal",
        parroquias: [
          { nombre: "San Cristóbal" }
        ]
      },
      {
        nombre: "San Judas Tadeo",
        parroquias: [
          { nombre: "San Judas Tadeo" }
        ]
      },
      {
        nombre: "Seboruco",
        parroquias: [
          { nombre: "San Simón" }
        ]
      },
      {
        nombre: "Simón Rodríguez",
        parroquias: [
          { nombre: "San Isidro" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Eleazar López Contreras" }
        ]
      },
      {
        nombre: "Torbes",
        parroquias: [
          { nombre: "San Josécito" }
        ]
      },
      {
        nombre: "Uribante",
        parroquias: [
          { nombre: "Pregonero" },
          { nombre: "La Blanca" }
        ]
      }
    ]
  },
  {
    nombre: "Trujillo",
    municipios: [
      {
        nombre: "Andrés Bello",
        parroquias: [
          { nombre: "Arístides Calvani" }
        ]
      },
      {
        nombre: "Boconó",
        parroquias: [
          { nombre: "Boconó" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "San Miguel" }
        ]
      },
      {
        nombre: "Candelaria",
        parroquias: [
          { nombre: "El Progreso" }
        ]
      },
      {
        nombre: "Carache",
        parroquias: [
          { nombre: "Carache" }
        ]
      },
      {
        nombre: "Escuque",
        parroquias: [
          { nombre: "Escuque" }
        ]
      },
      {
        nombre: "La Ceiba",
        parroquias: [
          { nombre: "La Ceiba" }
        ]
      },
      {
        nombre: "Miranda",
        parroquias: [
          { nombre: "El Paraíso" }
        ]
      },
      {
        nombre: "Monte Carmelo",
        parroquias: [
          { nombre: "Buenos Aires" }
        ]
      },
      {
        nombre: "Motatán",
        parroquias: [
          { nombre: "Motatán" }
        ]
      },
      {
        nombre: "Pampán",
        parroquias: [
          { nombre: "Pampán" }
        ]
      },
      {
        nombre: "Pampanito",
        parroquias: [
          { nombre: "Pampanito" }
        ]
      },
      {
        nombre: "Rafael Rangel",
        parroquias: [
          { nombre: "Betijoque" }
        ]
      },
      {
        nombre: "San Rafael de Carvajal",
        parroquias: [
          { nombre: "San Rafael de Carvajal" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Sabana de Mendoza" }
        ]
      },
      {
        nombre: "Trujillo",
        parroquias: [
          { nombre: "Trujillo" }
        ]
      },
      {
        nombre: "Urdaneta",
        parroquias: [
          { nombre: "La Beatriz" }
        ]
      },
      {
        nombre: "Valera",
        parroquias: [
          { nombre: "Valera" }
        ]
      },
      {
        nombre: "Vargas",
        parroquias: [
          { nombre: "La Puerta" }
        ]
      }
    ]
  },
  {
    nombre: "Yaracuy",
    municipios: [
      {
        nombre: "San Felipe",
        parroquias: [
          { nombre: "San Felipe" },
          { nombre: "Albarico" },
          { nombre: "San Javier" }
        ]
      },
      {
        nombre: "Manuel Monge",
        parroquias: [
          { nombre: "Yumare" }
        ]
      },
      {
        nombre: "Bruzual",
        parroquias: [
          { nombre: "Chivacoa" },
          { nombre: "Campo Elías" }
        ]
      },
      {
        nombre: "Urachiche",
        parroquias: [
          { nombre: "Urachiche" }
        ]
      },
      {
        nombre: "José Antonio Páez",
        parroquias: [
          { nombre: "José Antonio Páez" }
        ]
      },
      {
        nombre: "La Trinidad",
        parroquias: [
          { nombre: "La Trinidad" }
        ]
      },
      {
        nombre: "Independencia",
        parroquias: [
          { nombre: "Independencia" }
        ]
      },
      {
        nombre: "Arístides Bastidas",
        parroquias: [
          { nombre: "Arístides Bastidas" }
        ]
      },
      {
        nombre: "Peña",
        parroquias: [
          { nombre: "Peña" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Sucre" }
        ]
      },
      {
        nombre: "Nirgua",
        parroquias: [
          { nombre: "Nirgua" },
          { nombre: "Salom" },
          { nombre: "Temerla" }
        ]
      },
      {
        nombre: "Bolívar",
        parroquias: [
          { nombre: "Bolívar" }
        ]
      },
      {
        nombre: "Cocorote",
        parroquias: [
          { nombre: "Cocorote" }
        ]
      },
      {
        nombre: "Veroes",
        parroquias: [
          { nombre: "Farriar" },
          { nombre: "El Guayabo" },
          { nombre: "General Leoncio Martinez" }
        ]
      }
    ]
  },
  {
    nombre: "Zulia",
    municipios: [
      {
        nombre: "Almirante Padilla",
        parroquias: [
          { nombre: "El Toro" },
          { nombre: "San José" },
          { nombre: "San Timoteo" },
          { nombre: "Santa Bárbara" }
        ]
      },
      {
        nombre: "Baralt",
        parroquias: [
          { nombre: "San Carlos" },
          { nombre: "Augusto Mijares" },
          { nombre: "Concepción" },
          { nombre: "Marcelino Briceño" }
        ]
      },
      {
        nombre: "Cabimas",
        parroquias: [
          { nombre: "Ambrosio" },
          { nombre: "Carmen Herrera" },
          { nombre: "Germán Ríos Linares" },
          { nombre: "Jorge Hernández" },
          { nombre: "La Rosa" },
          { nombre: "Los Taques" },
          { nombre: "Punta Gorda" },
          { nombre: "Rómulo Betancourt" },
          { nombre: "San Benito" },
          { nombre: "Arístides Calvani" }
        ]
      },
      {
        nombre: "Catatumbo",
        parroquias: [
          { nombre: "Encontrados" },
          { nombre: "Urribarrí" }
        ]
      },
      {
        nombre: "Colón",
        parroquias: [
          { nombre: "San Rafael del Moján" },
          { nombre: "José Ramón Yépez" },
          { nombre: "Hernán Cortés" },
          { nombre: "Manuel Manrique" },
          { nombre: "Mariano Parra León" },
          { nombre: "Rómulo Gallegos" }
        ]
      },
      {
        nombre: "Francisco Javier Pulgar",
        parroquias: [
          { nombre: "Elías Sánchez Rubio" },
          { nombre: "Guillermo Hernández Bustamante" },
          { nombre: "La Concepción" },
          { nombre: "San José" }
        ]
      },
      {
        nombre: "Guajira",
        parroquias: [
          { nombre: "Alta Guajira" },
          { nombre: "Elías Sánchez Rubio" },
          { nombre: "Guajira" },
          { nombre: "José María Semprún" },
          { nombre: "Sinamaica" }
        ]
      },
      {
        nombre: "Lagunillas",
        parroquias: [
          { nombre: "General Urdaneta" },
          { nombre: "Libertad" },
          { nombre: "Marcelino Briceño" },
          { nombre: "Pueblo Nuevo" },
          { nombre: "Manuel Guanipa Matos" }
        ]
      },
      {
        nombre: "Mara",
        parroquias: [
          { nombre: "Altagracia" },
          { nombre: "Farías" },
          { nombre: "San Antonio" },
          { nombre: "San José" },
          { nombre: "San Rafael" },
          { nombre: "Santa Rita" }
        ]
      },
      {
        nombre: "Maracaibo",
        parroquias: [
          { nombre: "Antonio Borjas Romero" },
          { nombre: "Bolívar" },
          { nombre: "Cacique Mara" },
          { nombre: "Caracciolo Parra Pérez" },
          { nombre: "Cecilio Acosta" },
          { nombre: "Cristo de Aranza" },
          { nombre: "Coquivacoa" },
          { nombre: "Chiquinquirá" },
          { nombre: "Francisco Eugenio Bustamante" },
          { nombre: "Idelfonso Vásquez" },
          { nombre: "Juana de Ávila" },
          { nombre: "Luis Hurtado Higuera" },
          { nombre: "Manuel Dagnino" },
          { nombre: "Olegario Villalobos" },
          { nombre: "Raúl Leoni" },
          { nombre: "San Isidro" },
          { nombre: "Santa Lucía" },
          { nombre: "Venancio Pulgar" },
          { nombre: "Simón Bolívar" }
        ]
      },
      {
        nombre: "Miranda",
        parroquias: [
          { nombre: "Los Puertos de Altagracia" },
          { nombre: "Ana María Campos" },
          { nombre: "San José" },
          { nombre: "San Timoteo" }
        ]
      },
      {
        nombre: "Rosario de Perijá",
        parroquias: [
          { nombre: "El Bajo" },
          { nombre: "El Carmelo" },
          { nombre: "Donaldo García" },
          { nombre: "Manuel Manrique" },
          { nombre: "Rómulo Betancourt" }
        ]
      },
      {
        nombre: "San Francisco",
        parroquias: [
          { nombre: "El Bajo" },
          { nombre: "Francisco Ochoa" },
          { nombre: "José Domingo Rus" },
          { nombre: "Los Cortijos" },
          { nombre: "Mariano Parra León" },
          { nombre: "San Francisco" },
          { nombre: "San Isidro" }
        ]
      },
      {
        nombre: "Santa Rita",
        parroquias: [
          { nombre: "El Mene" },
          { nombre: "José Cenobio Urribarrí" },
          { nombre: "Pedro Lucas Urribarrí" },
          { nombre: "Santa Rita" }
        ]
      },
      {
        nombre: "Simón Bolívar",
        parroquias: [
          { nombre: "Manuel Manrique" },
          { nombre: "Rafael María Baralt" },
          { nombre: "Rafael Urdaneta" },
          { nombre: "San Rafael" }
        ]
      },
      {
        nombre: "Sucre",
        parroquias: [
          { nombre: "Bobures" },
          { nombre: "El Batey" },
          { nombre: "El Carmelo" },
          { nombre: "Monseñor Arturo Celestino Álvarez" },
          { nombre: "Rómulo Gallegos" }
        ]
      },
      {
        nombre: "Valmore Rodríguez",
        parroquias: [
          { nombre: "Bachaquero" },
          { nombre: "Concepción" },
          { nombre: "El Venado" },
          { nombre: "Libertad" },
          { nombre: "San José" }
        ]
      }
    ]
  }
];

module.exports = function () {
    var data = {
        alimentos: [
            {
                id: "AL001",
                nameAlimento: "Manzana",
                kcal: 83,
            },
            {
                id: "AL002",
                nameAlimento: "Huevo",
                kcal: 79,
            },
            {
                id: "AL003",
                nameAlimento: "Pollo",
                kcal: 120,
            },
            {
                id: "AL004",
                nameAlimento: "Arroz",
                kcal: 228,
            },
            {
                id: "AL005",
                nameAlimento: "Pera",
                kcal: 57,
            },
            {
                id: "AL006",
                nameAlimento: "Carne",
                kcal: 250,
            },
            {
                id: "AL007",
                nameAlimento: "Pescado",
                kcal: 90,
            },
            {
                id: "AL008",
                nameAlimento: "Leche",
                kcal: 100,
            }
        ],
        usuarios: [
            {
                idUsuario: 1,
                nameUsuario: "Damian Robinson",
                emailUsuario: "damianrobinson@gmail.com",
                pesoUsuario: 80,
                estaturaUsuario: 170
            },
            {
                idUsuario: 2,
                nameUsuario: "Dorian Velasquez",
                emailUsuario: "dorianvelasquez@hotmail.com",
                pesoUsuario: 68,
                estaturaUsuario: 180
            },
            {
                idUsuario: 3,
                nameUsuario: "Kristen Yang",
                emailUsuario: "kristenyang@outlook.com",
                pesoUsuario: 65,
                estaturaUsuario: 179
            },
            {
                idUsuario: 4,
                nameUsuario: "Troy Waters",
                emailUsuario: "troywaters4062@gmail.com",
                pesoUsuario: 69,
                estaturaUsuario: 180
            },
            {
                idUsuario: 5,
                nameUsuario: "Hilda Nicholson",
                emailUsuario: "hildanicholson@hotmail.com",
                pesoUsuario: 77,
                estaturaUsuario: 169
            },
            {
                idUsuario: 6,
                nameUsuario: "Kamal Sears",
                emailUsuario: "kamalsears6807@outlook.com",
                pesoUsuario: 67,
                estaturaUsuario: 174
            },
            {
                idUsuario: 7,
                nameUsuario: "Stuart Riley",
                emailUsuario: "stuartriley@hotmail.com",
                pesoUsuario: 82,
                estaturaUsuario: 174
            },
            {
                idUsuario: 8,
                nameUsuario: "Orli Parsons",
                emailUsuario: "orliparsons@gmail.com",
                pesoUsuario: 81,
                estaturaUsuario: 181
            },
            {
                idUsuario: 9,
                nameUsuario: "Indira Michael",
                emailUsuario: "indiramichael@outlook.com",
                pesoUsuario: 70,
                estaturaUsuario: 175
            },
            {
                idUsuario: 10,
                nameUsuario: "Holmes Haynes",
                emailUsuario: "holmeshaynes9833@gmail.com",
                pesoUsuario: 82,
                estaturaUsuario: 184
            },
            {
                idUsuario: 11,
                nameUsuario: "Otto Fleming",
                emailUsuario: "ottofleming@gmail.com",
                pesoUsuario: 70,
                estaturaUsuario: 178
            },
            {
                idUsuario: 12,
                nameUsuario: "Nolan Farrell",
                emailUsuario: "nolanfarrell@outlook.com",
                pesoUsuario: 78,
                estaturaUsuario: 177
            },
            {
                idUsuario: 13,
                nameUsuario: "Lamar Shaffer",
                emailUsuario: "lamarshaffer@gmail.com",
                pesoUsuario: 78,
                estaturaUsuario: 172
            },
            {
                idUsuario: 14,
                nameUsuario: "Charlotte Rosales",
                emailUsuario: "charlotterosales@hotmail.com",
                pesoUsuario: 73,
                estaturaUsuario: 172
            },
            {
                idUsuario: 15,
                nameUsuario: "Veda Woodard",
                emailUsuario: "vedawoodard@gmail.com",
                pesoUsuario: 66,
                estaturaUsuario: 184
            },
            {
                idUsuario: 16,
                nameUsuario: "Evan Marsh",
                emailUsuario: "evanmarsh5450@hotmail.com",
                pesoUsuario: 65,
                estaturaUsuario: 185
            },
            {
                idUsuario: 17,
                nameUsuario: "Scott Griffith",
                emailUsuario: "scottgriffith@hotmail.com",
                pesoUsuario: 83,
                estaturaUsuario: 173
            },
            {
                idUsuario: 18,
                nameUsuario: "Summer Harrington",
                emailUsuario: "summerharrington4601@hotmail.com",
                pesoUsuario: 74,
                estaturaUsuario: 162
            },
            {
                idUsuario: 19,
                nameUsuario: "Hu Rhodes",
                emailUsuario: "hurhodes4227@outlook.com",
                pesoUsuario: 79,
                estaturaUsuario: 185
            },
            {
                idUsuario: 20,
                nameUsuario: "Leah Britt",
                emailUsuario: "leahbritt@outlook.com",
                pesoUsuario: 80,
                estaturaUsuario: 164
            }
        ],
        preguntas: [
            {
                id: 1,
                titulo: "¿Puedo optar por no ingresar mis datos de peso y altura?",
                rpta: "No, debido a que es de vital importancia que podamos mostrarte tu progreso, y así seguir ofreciendote rutinas, notificaciones y recetes personalizadas. Por todo esto, el ingreso de datos de peso y altura es totalmente obligatorio al momento de registrarte con nosotros."
            },
            {
                id: 2,
                titulo: "¿Puedo configurar mi perfil para mostrar solo alguno de mis datos personales?",
                rpta: "¡Por supuesto!, siempre priorizamos tu privacidad y para esto te brindamos la opcion de mantener ocultos algunos de tus datos, ya sea un amigo o no, si no lo permites no podrá ver tu información. Dicho de paso, el único dato que se mostrará siempre, sin cambio por privacidad, será el de tu nombre."
            },
            {
                id: 3,
                titulo: "¿Puedo publicar mi progreso en mis redes sociales?",
                rpta: "¡Sí!, gracias a la opcion de compartir podrás publicar mediante una imagen tu progreso, esto es posible en redes sociales como: WhatsApp, Instagram y Facebook, entre otros. Aplicamos politicas de privacidad en caso restrinjas el uso de tus datos para la información que se mostrará en la imagen de tu progreso."
            },
            {
                id: 4,
                titulo: "¿Debo añadir una tarjeta como medio de pago obligatorio?",
                rpta: "¡Exactamente!, debido a la virtualización de nuestros servicios, realizaremos todo proceso de pago por medio del registro de una tarjeta. Esto, en caso requieras solicitar alguno de nuestros planes, si no, puedes seguirs usando nuestros servicios... ¡gratuitamente!"
            }
        ],
        planes: [
            {
                idPlan: 1,
                namePlan: "Plan nutricional",
                detallesPlan: "Consulta con nutricionista y recomendaciones de comida",
                tiempoPlan: "1 mes",
                precioPlan: 19.90
            },
            {
                idPlan: 2,
                namePlan: "Plan nutricional",
                detallesPlan: "Consulta con nutricionista y recomendaciones de comida",
                tiempoPlan: "3 mes",
                precioPlan: 49.90
            },
            {
                idPlan: 3,
                namePlan: "Plan rutinal",
                detallesPlan: "Consulta con entrenador y creación de rutinas con objetivos",
                tiempoPlan: "3 mes",
                precioPlan: 54.90
            },
            {
                idPlan: 4,
                namePlan: "Plan R&N",
                detallesPlan: "privilegios del plan nutricional y plan de rutinas",
                tiempoPlan: "3 mes",
                precioPlan: 94.90
            }
        ],
        recetas: [
            {
                idReceta: 1,
                tituloReceta: "Receta de pie de manzana en bajo azucar",
                descripReceta: "Lis ingredientes de la receta son..."
            },
            {
            idReceta: 2,
            tituloReceta: "Pimientos rellenos de quinoa",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
            idReceta: 3,
            tituloReceta: "Salmón a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
            idReceta: 4,
            tituloReceta: "Pollo a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
            idReceta: 5,
            tituloReceta: "Gambones a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
            idReceta: 6,
            tituloReceta: "Ternera a la plancha con ensalada",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
            idReceta: 7,
            tituloReceta: "Tortilla francesa",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
            idReceta: 8,
            tituloReceta: "Huevos a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            }
        ],
        ejercicios: [
            {
                idEjercicio: 1,
                tituloEjercicio: "Salto de tijera",
                descripEjercicio: "Comienza con los pies juntos y los brazos a los lados..."
            },
            {
                idEjercicio: 2,
                tituloEjercicio: "Curl con mancuernas",
                descripEjercicio: "Comienza con los brazos estirados..."
            },
            {
                idEjercicio: 3,
                tituloEjercicio: "Abdominal bicicleta",
                descripEjercicio: "Comienza echado en el piso..."
            },
            {
                idEjercicio: 4,
                tituloEjercicio: "Abdominal en V",
                descripEjercicio: "Comienza echado en el piso..."
            },
            {
                idEjercicio: 5,
                tituloEjercicio: "Sentadillas",
                descripEjercicio: "Comienza con las piernas..."
            },
            {
                idEjercicio: 6,
                tituloEjercicio: "Peso muerto",
                descripEjercicio: "Comienza con la posicion..."
            },
            {
                idEjercicio: 7,
                tituloEjercicio: "Sentadilla bulgara",
                descripEjercicio: "Comienza con las piernas separadas..."
            },
            {
                idEjercicio: 8,
                tituloEjercicio: "Press de banca",
                descripEjercicio: "Comienza agarrando al barra con los brazos hacia arriba ..."
            },
            {
                idEjercicio: 9,
                tituloEjercicio: "Remo",
                descripEjercicio: "Comienza con los brazos al frente..."
            },
            {
                idEjercicio: 10,
                tituloEjercicio: "Elevaciones laterales",
                descripEjercicio: "Comienza con los brazos hacia arriba..."
            }

        ],
        registroalimenticio: [
            {
                usuario:{
                    idUsuario: 1,
                },
                alimento:{
                    idAlimento: "AL001",
                }
            },
            {
                usuario:{
                    idUsuario: 1,
                },
                alimento:{
                    idAlimento: "AL003",
                }
            },
            {
                usuario:{
                    idUsuario: 3,
                },
                alimento:{
                    idAlimento: "AL001",
                }
            },
            {
                usuario:{
                    idUsuario: 2,
                },
                alimento:{
                    idAlimento: "AL002",
                }
            },
            {
                usuario:{
                    idUsuario: 2,
                },
                alimento:{
                    idAlimento: "AL003",
                }
            },
            {
                usuario:{
                    idUsuario: 3,
                },
                alimento:{
                    idAlimento: "AL004",
                }
            },
            {
                usuario:{
                    idUsuario: 1,
                },
                alimento:{
                    idAlimento: "AL005",
                }
            },
            {
                usuario:{
                    idUsuario: 3,
                },
                alimento:{
                    idAlimento: "AL004",
                }
            },
            {
                usuario:{
                    idUsuario: 2,
                },
                alimento:{
                    idAlimento: "AL003",
                }
            },
            {
                usuario:{
                    idUsuario: 1,
                },
                alimento:{
                    idAlimento: "AL004",
                }
            }
        ],
        bancos: [
            {
                id: 1,
                nombreBanco: "BCP"
            },
            {
                id: 2,
                nombreBanco: "BBVA"
              },
              {
                id: 3,
                nombreBanco: "INTERBANK"
              },
              {
                id: 4,
                nombreBanco: "SCOTIABANK"
              },
              {
                id: 5,
                nombreBanco: "PICHINCHA"
              },
              {
                id: 6,
                nombreBanco: "MIBANCO"
              },
              {
                id: 7,
                nombreBanco: "RIPLEY"
              },
              {
                id: 8,
                nombreBanco: "FALABELLA"
              }
        ],
        citas: [
            {
                id: 1,
                usuario: {
                    idUsuario: 1
                },
                fecha: "13/09/2022",
                hora: "15:00 pm"
            },
            {
                id: 2,
                usuario: {
                    idUsuario: 2
                },
                fecha: "13/09/2022",
                hora: "16:00 pm"
            },
            {
                id: 3,
                usuario: {
                    idUsuario: 1
                },
                fecha: "12/06/2022",
                hora: "10:00 pm"
            },
            {
                id: 4,
                usuario: {
                    idUsuario: 2
                },
                fecha: "07/05/2022",
                hora: "14:00 pm"
            },
            {
                id: 5,
                usuario: {
                    idUsuario: 1
                },
                fecha: "10/10/2022",
                hora: "13:00 pm"
            },
            {
                id: 6,
                usuario: {
                    idUsuario: 2
                },
                fecha: "03/05/2022",
                hora: "12:00 pm"
            },
            {
                id: 7,
                usuario: {
                    idUsuario: 1
                },
                fecha: "14/10/2021",
                hora: "11:00 am"
            },
            {
                id: 8,
                usuario: {
                    idUsuario: 2
                },
                fecha: "10/10/2022",
                hora: "09:00 am"
            }
        ],
        suscripcion: [
            {
                id: 1,
                usuario: 1,
                fecha: "13/09/2022",
                idtarjeta: 1,
            },
            {
                id: 2,
                usuario: 2,
                fecha: "11/03/2021",
                idtarjeta: 2,
            },
            {
                id: 3,
                usuario: 3,
                fecha: "19/12/2021",
                idtarjeta: 3,
            },
            {
                id: 4,
                usuario: 4,
                fecha: "18/03/2022",
                idtarjeta:4,
            },
            {
                id: 5,
                usuario: 5,
                fecha: "12/10/2021",
                idtarjeta: 5,
            },
            {
                id: 6,
                usuario: 6,
                fecha: "30/10/2021",
                idtarjeta: 6,
            },
            {
                id: 7,
                usuario: 7,
                fecha: "30/12/2021",
                idtarjeta: 7,
            },
            {
                id: 8,
                usuario: 8,
                fecha: "18/10/2021",
                idtarjeta: 8,
            },
            {
                id: 9,
                usuario: 9,
                fecha: "15/09/2021",
                idtarjeta: 9,
            },
            {
                id: 10,
                usuario: 10,
                fecha: "11/07/2021",
                idtarjeta: 10,
            },
            {
                id: 11,
                usuario: 11,
                fecha: "23/04/2022",
                idtarjeta: 11,
            },
            {
                id: 12,
                usuario: 12,
                fecha: "31/09/2022",
                idtarjeta: 12,
            },
        ],
        tipousuario:[
            {
                id: 1,
                nombreTipo:"Alumno"
            },
            {
                id: 2,
                nombreTipo:"Entrenador"
            },
            {
                id: 3,
                nombreTipo:"Nutriologo"
            }
        ]

    }
    return data
}
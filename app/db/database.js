import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.suis');

/**
 * ! create tables
 */
// ? create table ficha
const setupDatabaseAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS covid ( id INTEGER PRIMARY KEY AUTOINCREMENT,  userId INTEGER,  statusSend text, nroFicha text, fechaElaboracion text, estSalud text, ninioCdulado text, nroHijo text,  nacionalidad text,  tipoDocumento text,  cedula text, pasaporte text,  primerNombre text,  segundoNombre text,  primerApellido text,  segundoApellido text,  sexo text,  fechaNacimiento text,  edad text,  estado text,  municipio text,  parroquia text,  zonaIndustrial text,  avenidaCalle text,  casaEdificio text,  pisoPlanta text,  tlf text,  tlfHabitacion text,  ocupacion text,  nacionalidadRepresentante text,  cedulaRepresentante text,  nombreRepresentante text,  estadoLugarAtencion text,  municipioLugarAtencion text,  parroquiaLugarAtencion text,  medico text,  sintomatico text,  fechaSintoma text,  poblacionRiesgo text,  nroSemanasGestacion text,  nroGesta text,  nroPartos text,  nroAbortos text,  nroCesareas text,  culminacionEmbarazo text,  procedimiento text,  isComplicacion text,  complicacion text,  nacimiento text,  edadGesta text,  sexoRecienNacido text,  peso text,  talla text,  isComplicacionRecienNacido text,  complicacionRecienNacido text,  relacionPcr text,  resultado text,  tipoExamen text, resultadoT text,  fechaTomaMuestra text,  codigoBarra text,  observaciones text, ultimaEscala text, nroVuelo text,idAerolinea text, idPaisProcedencia text, fechaArribo text,  idAeropuerto text,  viaIngreso text )'
            )
        },
            (t, error) => { console.warn("db error creating covid table"), console.error(error); reject(t) },
            (_, success) => { resolve(success); }
        )
    })
}
// ? create table user
const setupDatabaseUserAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT,  idsuis INTEGER UNIQUE, username text, password text, id_estados text null, has_permission text)'
            )
        },
            (_, error) => { console.warn("db error creating user tables"); console.warn(error); reject(error) },
            (_, success) => {
                console.log('tabla de usuarios creada');
            }
        )
    })
}
// ? create table user permission
const setupDatabaseUserPermissionAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS user_permission ( id INTEGER PRIMARY KEY AUTOINCREMENT,  id_user INTEGER, permission text NULL)'
            )
        },
            (_, error) => { console.warn("db error creating user_permission tables"); console.warn(error); reject(error) },
            (_, success) => { console.log('tabla de user_permission creada') }
        )
    })
}
// ? create table user roles
const setupDatabaseUserRolesAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS user_roles ( id INTEGER PRIMARY KEY AUTOINCREMENT,  id_user INTEGER, roles text NULL)'
            )
        },
            (_, error) => { console.warn("db error creating user_roles tables"); console.warn(error); reject(error) },
            (_, success) => { console.log('tabla de user_roles creada') }
        )
    })
}
/**
 * ! get values
 */

/**
 * 
 * ? get data ficha
 */
const getFicha = (setDataFunc, userId) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'select * from covid where userId = ?',
                [userId],
                (_, { rows: { _array } }) => {
                    setDataFunc(_array)
                }
            );
        },
        (t, error) => { console.log('erro en obtener la ficha') },
        (_t, _success) => { console.info("data de la ficha cargada") }
    );
}
/**
 * 
 * ? get data ficha with status processing
 */
const getFichaBySync = (setDataFunc, userId, setTotalRowsFunc) => {
    
    db.transaction(
        tx => {
            tx.executeSql(
                'select * from covid where statusSend = "processing" AND userId = ?',
                [userId],
                (_, { rows: { _array } }) => {
                    setDataFunc(_array);
                    setTotalRowsFunc(_array.length);
                    if (_array.length <= 0) {
                        alert('No hay datos para sincronizar')
                    }
                }
            );
        },
        (t, error) => { console.log('erro en obtener la ficha'); console.error(error, t) },
        (_t, _success) => {console.info("data de la ficha cargada para sincronizar") }
    );
}
const updateFicha = (statusSend, id) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'update covid set statusSend= ? WHERE id =?',
                [statusSend,id],
                (_, { rows: { _array } }) => {
                    
                }
            );
        },
        (t, error) => { console.log('erro en actualizar la ficha'); console.warn(error) },
        (_t, _success) => { console.info(200) }
    );
}
const updateFichaAll = () => {
    db.transaction(
        tx => {
            tx.executeSql(
                'update covid set tlf="04241433496"',
                (_, { rows: { _array } }) => {
                    
                }
            );
        },
        (t, error) => { console.log('erro en actualizar la ficha'); console.warn(error) },
        (_t, _success) => { console.info(2098980) }
    );
}
/**
 * 
 * @param {*} usuario 
 * @param {*} clave 
 * @param {*} setDataUser 
 * 
 * ? get user data 
 */
const getUser = (usuario, clave, setDataUser) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'select idsuis, password, username, id_estados, has_permission from users where username=? AND password=?',
                [usuario, clave],
                (_, { rows: { _array } }) => {
                    if (_array.length > 0) {
                        setDataUser(_array[0]);
                    } else {
                        setDataUser({});
                    }
                }
            );
        },
        (t, error) => {
            console.warn(t);
            setupDatabaseUserAsync()
        },
        (_t, _success) => { console.info(200) }
    );
}
// ? data permission
const getUserPermission = (usuario, setDataUserPermision,) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'select permission from user_permission where id_user=?',
                [usuario],
                (_, { rows: { _array } }) => {
                    if (_array.length > 0) {
                        setDataUserPermision(_array);
                    } else {
                        setDataUserPermision({});
                    }
                }
            );
        },
        (t, error) => {
            console.warn('error:', t);
        },
        (_t, _success) => { console.info(200) }
    );
}
// ? get data roles
const getUserRoles = (usuario, setDataUserRoles) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'select roles from user_roles where id_user=?',
                [usuario],
                (_, { rows: { _array } }) => {
                    if (_array.length > 0) {
                        setDataUserRoles(_array);
                    } else {
                        setDataUserRoles({});
                    }
                }
            );
        },
        (t, error) => {
            console.warn('error:', t);
        },
        (_t, _success) => { console.info(200) }
    );
}
/**
 * ! inserts by table
 */
// ? insert ficha covid
const insertFicha = (dataSendArr, nextStep, funcSetAvtive) => {
    db.transaction(tx => {
        tx.executeSql('insert into covid ( userId, statusSend, nroFicha, fechaElaboracion, estSalud, ninioCdulado, nroHijo, nacionalidad, tipoDocumento, cedula, pasaporte, primerNombre, segundoNombre, primerApellido, segundoApellido, sexo, fechaNacimiento, edad, estado, municipio, parroquia, zonaIndustrial, avenidaCalle, casaEdificio, pisoPlanta, tlf, tlfHabitacion, ocupacion, nacionalidadRepresentante, cedulaRepresentante, nombreRepresentante, estadoLugarAtencion, municipioLugarAtencion, parroquiaLugarAtencion, medico, sintomatico, fechaSintoma, poblacionRiesgo, nroSemanasGestacion, nroGesta, nroPartos, nroAbortos, nroCesareas, culminacionEmbarazo, procedimiento, isComplicacion, complicacion, nacimiento, edadGesta, sexoRecienNacido, peso, talla, isComplicacionRecienNacido, complicacionRecienNacido, relacionPcr, resultado, tipoExamen, resultadoT, fechaTomaMuestra, codigoBarra, observaciones, ultimaEscala, nroVuelo,idAerolinea, idPaisProcedencia, fechaArribo,  idAeropuerto,  viaIngreso ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', dataSendArr);
    },
        (t, error) => { console.log("Error al insertar la ficha--"); console.error(error); alert(error + '\n' + t ) },
        (t, success) => { nextStep(), funcSetAvtive(false) }
    )
}
//TODO verificar porque o como insertar el array
// ? insert by user
const insertUser = (idSuis, username, pass, setDataUser, id_estados, has_permission) => {
    db.transaction(tx => {
        tx.executeSql('insert into users (idsuis, username, password, id_estados, has_permission) values (?,?,?,?,?)', [idSuis, username, pass, id_estados, has_permission])
    },
        (t, error) => { console.log("db error insertUser " + t); console.log(error); },
        (t, success) => {
            getUser(username, pass, setDataUser);
        })
}
/**
 * 
 * @param {*} idUser 
 * @param {*} permission 
 * ? insertamos los permisos para el usuario
 */
const insertUserPermission = (idUser, permission, setDataPermission) => {
    db.transaction(tx => {
        tx.executeSql('insert into user_permission (id_user,permission) values (?,?)', [idUser, permission])
    },
        (t, error) => { console.info("error al insertar permisos"); },
        (t, success) => {
            getUserPermission(idUser, setDataPermission)
        })
}

/**
 * 
 * @param {*} idUser 
 * @param {*} role 
 * ? insertamos los roles para el usuario
 */
const insertUserRoles = (idUser, roles, setDataRoles) => {
    db.transaction(tx => {
        tx.executeSql('insert into user_roles (id_user,roles) values (?,?)', [idUser, roles])
    },
        (t, error) => { console.log("db error insertUser "); },
        (t, success) => {
            getUserRoles(idUser, setDataRoles)
        })
}

/**
 * ! drops by tables 
 */
// ? drop by table covid
const dropDatabaseTablesAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'drop table covid',
                [],
                (_, result) => { console.log(200) },
                (_, error) => {
                    console.log("error dropping users table"); reject(error)
                }
            )
        })
    })
}
// ? drop by table user_permission
const dropDatabaseUserPermissionAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'drop table user_permission',
                [],
                (_, result) => { console.log(200) },
                (_, error) => {
                    console.log("error dropping users table"); reject(error)
                }
            )
        })
    })
}
// ? drop by table user_roles
const dropDatabaseUserRolesAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'drop table user_roles',
                [],
                (_, result) => { console.log(200) },
                (_, error) => {
                    console.log("error dropping users table"); reject(error)
                }
            )
        })
    })
}
// ? drop by table user
const dropDatabaseTablesUserAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'drop table users',
                [],
                (_, result) => { console.log(200) },
                (_, error) => {
                    console.log("error dropping users table"); reject(error)
                }
            )
        })
    })
}

export const database = {
    setupDatabaseAsync,
    getFicha,
    insertFicha,
    dropDatabaseTablesAsync,
    setupDatabaseUserAsync,
    getUser,
    insertUser,
    dropDatabaseTablesUserAsync,
    setupDatabaseUserPermissionAsync,
    setupDatabaseUserRolesAsync,
    dropDatabaseUserPermissionAsync,
    dropDatabaseUserRolesAsync,
    insertUserPermission,
    insertUserRoles,
    getUserPermission,
    getUserRoles,
    getFichaBySync,
    updateFicha,
    updateFichaAll
}

function newFunction() {
    console.log('tabla de covid creada');
}

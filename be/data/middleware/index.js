const db = require("../../server/dbConfig")

function getAll(){
    return db("people as p").select("p.id", "p.name", "p.goesBy","p.age", "p.state", "p.chosen")
}

function getByName(name){
    return db("people as p").where("goesBy", "=", name)
}

module.exports = {getAll,getByName}
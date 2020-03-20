const db = require("../data/db.config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find(){
return db("recipes")
}

function findById(id){
    return db("recipes")
    .where({ id })
    .first()
}

function add(recipes){
   return db("recipes")
    .insert(recipes, "id")
    .then(ids => ({id: ids[0] }))
}
function update(id, changes){
   return db("recipes")
    .where({ id })
    .update(changes, "*")
}

function remove(id){
   return db("recipes")
    .where({ id })
    .del()
}
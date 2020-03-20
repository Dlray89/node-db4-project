const knex = require("knex")

const dbConfig = require("../knexfile")

const dbENV = process.env.DB_ENV || "development"

module.exports = knex(dbConfig[dbENV])
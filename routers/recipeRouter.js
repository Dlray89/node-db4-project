const express = require("express")

const router = express.Router()

const recipe = require("./recipes.model")

router.get("/", (req,res) => {
    recipe
    .find()
    .then(recipe => {
        res.status(200).json(recipe)
    }).catch(error => {
        res.status(500).json({errorMessage: `${error} cannot find what you're looking for`})
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params
    recipe
    .findById(id)
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not find your recipes`})
    })
})

router.post("/", (req,res) => {
    const newRecipe = req.body;
    recipe
    .add(newRecipe)
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not post new recipes`})
    })
    
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const changes = req.body
    recipe
    .update(id, changes)
    .then(changes => {
        res.status(200).json(changes)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not update your chnages`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
    recipe
    .remove(id)
    .then(deleterecipes => {
        res.status(200).json(deleterecipes)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not delete recipe`})
    })
})


module.exports = router
/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // remove field
  collection.fields.removeById("date4098262849")

  // remove field
  collection.fields.removeById("date2202122199")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date4098262849",
    "max": "",
    "min": "",
    "name": "date_de_representation2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2202122199",
    "max": "",
    "min": "",
    "name": "date_de_representation3",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})

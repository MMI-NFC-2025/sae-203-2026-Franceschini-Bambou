/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "geoPoint2287119580",
    "name": "loc",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "geoPoint"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // remove field
  collection.fields.removeById("geoPoint2287119580")

  // remove field
  collection.fields.removeById("text1843675174")

  return app.save(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2639814658",
    "max": "",
    "min": "",
    "name": "date_de_representation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2639814658",
    "max": "",
    "min": "",
    "name": "date_de_representation1",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})

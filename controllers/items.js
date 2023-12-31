const { v4: uuidv4 } = require("uuid");

let items = require("../items");

const getItems = (req, reply) => {
  reply.send(items);
};

function getItem(req, reply) {
  const { id } = req.params;
  const item = items.find((item) => item.id == id);
  reply.send(item);
}

const addItem = (req, reply) => {
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };

  items = [...items, item];

  reply.code(201).send(item);
};

function deleteItem(req, reply) {
  const { id } = req.params;
  items = items.filter((item) => item.id !== id);
  reply.send({ message: "item " + id + " is deleted" });
}

function updateItem(req, reply) {
  const { id } = req.params;

  const { name } = req.body;
  const newItem = {
    id,
    name,
  };

  items = items.map((item) => (item.id == id ? newItem : item));
  reply.send(newItem);
}

module.exports = { getItem, getItems, addItem, deleteItem, updateItem };

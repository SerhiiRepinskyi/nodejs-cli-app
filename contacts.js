const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// Повертає масив контактів.
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
async function getContactById(contactId) {
  const allContacts = await listContacts();
  const result = allContacts.find((item) => item.id === contactId);
  return result || null;
}

// Повертає об'єкт доданого контакту.
async function addContact(data) {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
}

// Повертає об'єкт оновленого контакту.
async function updateContactById(contactId, data) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id: contactId, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[index];
}

// Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
async function removeContact(contactId) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return result;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
};

import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

// Повертає масив контактів.
export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
export const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const result = allContacts.find((item) => item.id === contactId);
  return result || null;
};

// Повертає об'єкт доданого контакту.
export const addContact = async (data) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
};

// Повертає об'єкт оновленого контакту. Повертає null, якщо контакт з таким id не знайдений.
export const updateContactById = async (contactId, data) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id: contactId, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[index];
};

// Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
export const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return result;
};

export default {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
};

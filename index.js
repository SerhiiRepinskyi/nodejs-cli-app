import { Command } from "commander";
import {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case "update":
      const updateContact = await updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);

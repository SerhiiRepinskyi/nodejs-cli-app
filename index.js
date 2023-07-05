const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} = require("./contacts.js");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await getContactById(id);
      return console.table(contactById);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.table(newContact);

    case "update":
      const updateContact = await updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.table(updateContact);

    case "remove":
      const removeContactById = await removeContact(id);
      return console.table(removeContactById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// invokeAction({
//   action: "add",
//   name: "Serhii Repinskyi",
//   email: "repinskyisv@gmail.com",
//   phone: "(097) 500-1111",
// });

// invokeAction({
//   action: "update",
//   id: "5eM7eMJpUciBNBeZm0BSs",
//   name: "Serhii Repinskyi",
//   email: "repinskyisv@gmail.com",
//   phone: "(097) 777-7777",
// });

// invokeAction({ action: "remove", id: "5eM7eMJpUciBNBeZm0BSs" });

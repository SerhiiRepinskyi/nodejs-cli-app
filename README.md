# nodejs-cli-app

Скріншоти виконання команд:

Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
<br>
https://monosnap.com/file/sWebLJxZnAjA3aTB87jz8K1mE6yyIe

Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
<br>
https://monosnap.com/file/1SrINDXACm4UlpqU2Qm9JGCwrhTFti

Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
<br>
https://monosnap.com/file/fPINOn1qL6BPaGBSXA3TciSWNSLQzr

Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
<br>
https://monosnap.com/file/iKg40Pu4BtxlVBxLdcUwxY5pqfd2kV

Редагуємо (оновлюємо) контакт та виводимо в консоль об'єкт редагованого контакту або null, якщо контакту з таким id не існує.
node index.js --action="update" --id AeHIrLTr6JkxGE6SN-0Rw --name Mango --email mango@gmail.com --phone 777-777-777
<br>
https://monosnap.com/file/S2KNcQ52AQt1FtFhUTIdu9Y1E0hfvf

import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log("PUT to the database");

    // Create a connection to the database database and version we want to use.
    const jateDb = await openDB("jate", 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction("jate", "readwrite");

    // Open up the desired object store.
    const store = tx.objectStore("jate");

    // Use the .put() method on the store and pass in the new content.
    const request = store.put({ content });

    // Get confirmation of the request.
    const result = await request;
    console.log("🚀 - Data saved to the IndexedDB:", result);
  } catch (e) {
    console.error(e);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log("GET from the database");

    // Create a connection to the database database and version we want to use.
    const jateDb = await openDB("jate", 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction("jate", "readonly");

    // Open up the desired object store.
    const store = tx.objectStore("jate");

    // Use the .getAll() method to get all data in the database.
    const result = await store.getAll();

    console.log("🚀 - Data retrieved from IndexedDB:", result);
    return result;
  } catch (e) {
    console.error(e);
  }
};
initdb();

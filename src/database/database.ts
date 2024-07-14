const mongoose = require('mongoose');

const dbConnect = (): Promise<any> => {
  const DB_URI = process.env.BD_URI;

  return new Promise<boolean>((resolve, reject) => {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("Successfully connected to the database");
      resolve(true);
    }).catch((err: Error) => {
      console.log('Could not connect to the database. Exiting now...', err.message);
      process.exit(1);
    });
  })

}

export = dbConnect;
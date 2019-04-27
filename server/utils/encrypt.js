const bcrypt = require('bcryptjs')

const encrypt = {
  genSalt: (key) => new Promise((resolve, reject) => bcrypt.genSalt(key, (err, salt) => {
    if (err)
      reject(err);
    resolve(salt);
  })),

  genHash: (pass, salt) => new Promise((resolve, reject) => bcrypt.hash(pass, salt, (err, hash) => {
    if (err)
      reject(err);
    resolve(hash);
  }))
}

module.exports = encrypt
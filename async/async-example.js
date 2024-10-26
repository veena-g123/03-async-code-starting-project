import jwt from 'jsonwebtoken';

export function generateToken(userEmail, doneFn) {
  try{
    jwt.sign({ email: userEmail }, 'secret123', doneFn);
return 2;
  } catch(err){
    console.log(err)
  }
}

export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, 'secret123', (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));

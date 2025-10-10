

getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => getInVoice(orders[0]))
  .then((invoice) => console.log(invoice)
//   .catch((err) => console.log(err)));

.catch(err =>  {name : err.name}, {message : err.message},{stack : err.stack}))


// 🔹 Why .then() Chaining?

// Har .then() ek task ka result next .then() me pass karta hai.

// Example:

// getUser() → user.id

// getOrders(user.id) → orders array

// getInvoice(orders[0]) → invoice

getInVoice(orderId)
        .then(invoice => {
            invoice.date = new Date();
            return invoice ;
        })
        .then(finalVoice => console.log(finalVoice))
        

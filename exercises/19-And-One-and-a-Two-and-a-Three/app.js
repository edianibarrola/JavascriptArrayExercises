var contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
var key;
for(key in contact){
    // Code goes here
    console.log(key + " : " + contact[key]);
}


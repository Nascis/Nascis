// create admin
if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
        profile: {
            name: 'Quentin Perchais'
        },
        username: "essen",
        email: "perchais.quentin@gmail.com",
        password: "151190",
    });
};

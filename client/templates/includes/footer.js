Template.footer.helpers({
    users : function(){
        return Meteor.users.find().fetch();
    }
});

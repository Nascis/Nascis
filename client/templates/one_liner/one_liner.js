Template.oneLiner.helpers({
    line : function(){
        var list = Lines.find().fetch();
        var rand = Math.floor(Math.random() * (list.length));
        return list[rand];
    }
});

Template.oneLiner.onRendered(function() {
    linkify($("#one-liner div a"));
});

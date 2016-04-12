Lines = new orion.collection('Line', {
    singularName: 'Line',
    pluralName: 'Lines',
    link: {
        title: 'Lines'
    },
    tabular: {
        columns: [
            {
                data: "gauche",
                title: "Gauche"
            },
            {
                data: "droite",
                title: "Droite"
            },
        ]
    }
});

Lines.attachSchema(new SimpleSchema({
    gauche: {
        type: String,
    },
    droite: {
        type: String,
    },
}));

orion.dictionary.addDefinition('name', 'site', {
    type: String,
    label: 'Name',
    defaultValue: 'brand'
});
orion.dictionary.addDefinition('catchphrase', 'site', {
    type: String,
    label: 'Catchphrase',
    defaultValue: 'brand occupation'
});

orion.dictionary.addDefinition('logo', 'site',
  orion.attribute('image', {
      label: 'Site Logo',
      optional: true
  })
);

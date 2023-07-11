const algoliasearch = require('algoliasearch');
const objects = require('./sample.json');

// Please replace the placeholder text below
const client = algoliasearch('YourAppID', 'YourApiKey');

const index = client.initIndex('your_index_name');

index.saveObjects(objects).catch(err => {
  console.log(err);
});

const book= {
  title : 'abcd',
  author : 'efgh',
  publisher : {
      name: 'Penguin'
  }
};

const {name: publisherName='self-published'} = book.publisher.name;

console.log(publisherName);

const item = ['coffee', '2', '3', '4'];
const [itemName, , mediumPrice] = item;

console.log(`A ${itemName} costs ${mediumPrice}`);



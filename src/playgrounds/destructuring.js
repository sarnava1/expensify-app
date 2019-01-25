const book= {
  title : 'abcd',
  author : 'efgh',
  publisher : {
      name: 'Penguin'
  }
};

const {name: publisherName='self-published'} = book.publisher;

console.log(publisherName);
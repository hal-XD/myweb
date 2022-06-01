let testdata = [
    {
        name:"mike",
        number:100,
        amount:"1000",
        due:"1/1/2001",
    },
    {
        name:"mmike",
        number:1001,
        amount:"1000",
        due:"1/1/2001",
    },
    {
        name:"Alex",
        number:101,
        amount:"1001",
        due:"1/2/2002",
    }
]

export function testData() {
    return testdata;
}

export function getData(num) {
    return testdata.find(
        (d) => d.number === num
    );
}

export function deleteInvoice(number) {
  return testdata.filter(
    (invoice) => invoice.number !== number
  );
}
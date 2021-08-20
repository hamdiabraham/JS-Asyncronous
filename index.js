function jajanBoba(uangJajan) {
  const listBoba = [
    ["Xing Fu Tang", 38000],
    ["OneZo", 53500],
    ["KOI The", 36000],
    ["Chatime", 25000],
    ["Kokumi", 42000],
    ["Bubble Station Milk", 13000],
  ];

  console.log(`David mulai jajan dengan uang jajan ${uangJajan} rupiah`);
  for (let i = 0; i < listBoba.length; i++) {
    setTimeout(() => {
      if (uangJajan > listBoba[i][1]) {
        console.log(
          `Dengan uang ${uangJajan}, cukup untuk beli ${listBoba[i][0]}.`
        );
        uangJajan -= listBoba[i][1];
      } else {
        console.log(`Dengan uang Rp${uangJajan}, tidak cukup untuk beli ${listBoba[i][0]}`);
        sisaUang = uangJajan;
      }
    }, 1500)
  }
  return uangJajan;
}

jajanBoba(100000);
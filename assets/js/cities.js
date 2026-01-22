/*
Şehir Verilerini DOM ile Listeleme (mini pratik)
    cities.js dosyasında dizi içinde bulunan objeleri html de sırayla yazdıralım.
    Üst maddeye ek olarak :  Yemekleri ile ünlü olan şehirleri ayrı listeleyelim.
    Üst maddeye ek olarak :  Tarihi yerler ile ünlü olan şehirleri ayrı listeleyelim.
    Üst maddeye ek olarak :  Plaka numarası tek ve çift olan şehirleri ayrı listeleyelim.
    Css 'i hayal gücünüze bırakıyorum. Vakti kalanların biraz şekillendirmesi güzel olacaktır.
*/

let cities = [
  {
    city: "Adana",
    famousFor: "Kebap",
    type: "food",
    plateNumber: "01"
  },
  {

    city: "Ankara",
    famousFor: "Simidi",
    type: "food",
    plateNumber: "06"
  },
  {
    city: "İstanbul",
    famousFor: "Boğaz",
    type: "place",
    plateNumber: "34"
  },
  {
    city: "İzmir",
    famousFor: "Boyoz",
    type: "food",
    plateNumber: "35"
  },
  {
    city: "Bursa",
    famousFor: "İskender Kebabı",
    type: "food",
    plateNumber: "16"
  },
  {
    city: "Antalya",
    famousFor: "Düden Şelalesi",
    type: "place",
    plateNumber: "07"
  },
  {
    city: "Gaziantep",
    famousFor: "Baklava",
    type: "food",
    plateNumber: "27"
  },
  {
    city: "Konya",
    famousFor: "Etli Ekmek",
    type: "food",
    plateNumber: "42"
  },
  {
    city: "Trabzon",
    famousFor: "Hamsi",
    type: "food",
    plateNumber: "61"
  },
  {
    city: "Kayseri",
    famousFor: "Mantı",
    type: "food",
    plateNumber: "38"
  },
  {
    city: "Eskişehir",
    famousFor: "Lületaşı",
    type: "place",
    plateNumber: "26"
  },
  {
    city: "Rize",
    famousFor: "Çay",
    type: "food",
    plateNumber: "53"
  },
  {
    city: "Erzurum",
    famousFor: "Cağ Kebabı",
    type: "food",
    plateNumber: "25"
  },
  {
    city: "Diyarbakır",
    famousFor: "Karpuz",
    type: "place",
    plateNumber: "21"
  },
  {
    city: "Mardin",
    famousFor: "Taş Evler",
    type: "place",
    plateNumber: "47"
  },
  {
    city: "Van",
    famousFor: "Van Kedisi",
    type: "place",
    plateNumber: "65"
  },
  {
    city: "Sivas",
    famousFor: "Kangal Köpeği",
    type: "place",
    plateNumber: "58"
  },
  {
    city: "Şanlıurfa",
    famousFor: "Balıklıgöl",
    type: "place",
    plateNumber: "63"
  },
  {
    city: "Mersin",
    famousFor: "Tantuni",
    type: "food",
    plateNumber: "33"
  },
  {
    city: "Muğla",
    famousFor: "Turistik Yerleri",
    type: "place",
    plateNumber: "48"
  },
  {
    city: "Çanakkale",
    famousFor: "Tarihi Gelibolu Yarımadası",
    type: "place",
    plateNumber: "17"
  },
  {
    city: "Hatay",
    famousFor: "Antakya Mozaikleri",
    type: "place",
    plateNumber: "31"
  },
  {
    city: "İzmir",
    famousFor: "Efes Antik Kenti",
    type: "place",
    plateNumber: "35"
  },
  {
    city: "Nevşehir",
    famousFor: "Kapadokya",
    type: "place",
    plateNumber: "50"
  },
  {
    city: "Aydın",
    famousFor: "Milet Antik Kenti",
    type: "place",
    plateNumber: "09"
  }
];

/* Array Icindeki Tum Sehirler Icin
  Sehir Adi
  Ne Ile Unlu Oldugu
  Plaka Kodu Bilgilerini Yazdiriyoruz */
for (const city of cities) {
  citiesListFamousForPlateNumber.innerHTML += `
    <tr>
      <td>${city.city}</td>
      <td>${city.famousFor}</td>
      <td>${city.plateNumber}</td>
    </tr>`

  /* Array Icindeki Tum Sehirler Icinde
    Yemekleri Ile Unlu Olan
    Sehirleri Yazdiriyoruz */
  if (city.type === "food") {
    citiesFamousForTheirFood.innerHTML += `
    <tr>
      <td>${city.city}</td>
      <td>${city.famousFor}</td>
    </tr>`
  }

  /* Array Icindeki Tum Sehirler Icinde
    Tarihi Yerleri Ile Unlu Olan
    Sehirleri Yazdiriyoruz */
  if (city.type === "place") {
    citiesFamousForTheirHistoricPlaces.innerHTML += `
    <tr>
      <td>${city.city}</td>
      <td>${city.famousFor}</td>
    </tr>`
  }

  /* Array Icindeki Tum Sehirler Icinde
    Plaka Kodu Tek Sayi Olan
    Sehirleri Yazdiriyoruz */
  if (city.plateNumber % 2 === 1) {
    citiesWithOddNumberedLicensePlates.innerHTML += `<li>${city.city} - ${city.plateNumber}</li>`
  } else {
    citiesWithEvenNumberedLicensePlates.innerHTML += `<li>${city.city} - ${city.plateNumber}</li>`
  }
}



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {

  public search =  new BehaviorSubject<string>("");

  constructor() { }

  // dessertdetail
 
  dessertDetails = [
    {
      category:"Chocolate, Ice Cream",
      id:1,
      img:"../../../assets/gallery/ft15.png",
      name:"Vegan Chocolate Popsicles",
      keywords: "makananan manis, dessert beku ",
      describe: "Vegan chocolate popsicles adalah es loli vegan yang di buat menggunakan bahan-bahan dasar dari tanaman yang sehat. Es loli ini sangat cocok untuk seorang vegetarian dan seseorang yang sedang diet. Es loli vegan di buat tanpa menggunakan gula, selain itu es loli vegan di buat menggunakan susu almond yang kaya akan manfaatnya seperti menyehatkan jantung, membantu menurunkan berat badan, memperkuat tulang dan mengurangi resiko diabetes.",
      ingredients: "200 ml santan kental,100 ml susu almond, 1 sdt vanili bubuk – bisa diganti dengan 1/2 sdt vanilla extract, 6 sdm sirup maple, 1 sdm mentega almond, 2 sdm minyak kelapa, 200 gr coklat hitam.", 
      instructions: "Pertama lelehkan minyak kelapa dengan lembut dalam panci. Kemudian tambahkan mentega almond, sirup maple, bubuk vanila, susu almond, dan krim kelapa, aduk rata dengan api sedang. Lalu siapkan 6 cetakan es loli dan isi adonan. Biarkan dingin. kemudian bekukan di malam hari. Setelah itu lelehkan cokelat dengan menempatkannya dalam mangkuk atau cangkir dan biarkan selama beberapa menit dalam bak air panas. Lalu ambil es loli satu per satu dan tutupi dengan cokelat. Letakkan di atas kertas roti agar mengeras. Setelah itu tuang sisa cokelat ke dalam piping bag dengan ujung kecil atau dalam kantong plastik dan potong ujungnya yang kecil. Kemudian tutupi pops penutup cokelat dengan lebih banyak garis cokelat. Biarkan mengeras dan nikmati segera atau bekukan sampai disajikan.",
      tag: "@therawberry",
      date: "Rabu, 6 Juli 2022"
    },
    {
      category:"Chocolate, Cake",
      id:2,
      img:"../../../assets/gallery/ft14.jpeg",
      name:"Molten Chocolate Lave Cakes",
      describe:"Kue coklat cair adalah sebuah hidangan penutup populer yang memadukan unsur-unsur kue coklat. Namanya berasal dari pusat coklat cair dari hidangan penutup tersebut, dan juga dikenal sebagai coklat moelleux, kue lava coklat, atau singkatnya kue lava. Kue cokelat ini memiliki rasa manis dengan tekstur lembut. Ciri khas utama kue ini akan mengeluarkan cokelat leleh ketika dipotong.",
      keywords: "Coklat leleh, makanan manis",
      ingredients: "3 telur, ½  cup Gula (ditambah ekstra untuk ramekin), 75 g Dark Chocolate 80% atau lebih adalah yang terbaik, 6 sendok makan Mentega (ditambah ekstra untuk ramekin), 1 sendok makan Bubuk Kakao, ½  cup Tepung Serbaguna.",
      instructions: "Panaskan oven hingga 450 derajat. Lalu mentega dan tepung ringan empat ramekin 6 ons. Tiriskan tepung berlebih. Letakkan ramekin di atas loyang. Kemudian dalam ketel ganda, di atas air mendidih, lelehkan mentega dengan cokelat. lalu dalam mangkuk sedang, kocok telur bersama kuning telur, gula dan garam dengan kecepatan tinggi hingga mengental dan pucat. Kocok cokelat hingga rata. Srtelah itu  cepat lipat ke dalam campuran telur bersama dengan tepung. Kemudian sendokkan adonan ke dalam ramekin yang sudah disiapkan dan panggang selama 12 menit, atau sampai sisi kue keras tetapi bagian tengahnya lunak. Biarkan kue dingin dalam ramekin selama 1 menit, lalu tutupi masing-masing kue dengan piring pencuci mulut terbalik. Balikkan masing-masing dengan hati-hati, diamkan selama 10 detik lalu buka cetakan. Sajikan segera.",
      tag : "@bonni_bakery",
      date: "Rabu, 6 Juli 2022"
    },
    {
      category:"Pastry",
      id: 3,
      img:"../../../assets/gallery/ft4.jpeg",
      name:"Macaroon",
      keywords:"Pastry, Biskuit",
      describe:"Macaron adalah biskuit yang dibuat dengan putih telur, tepung gula, gula rafinasi, tepung almon, dan pewarna makanan. Macaron adalah biskuit berbentuk bulat kecil, aneka warna, renyah di luar, namun bagian tengahnya terdapat krim lembut yang lumer di mulut. Hal ini membuat banyak orang makin tergiur untuk menikmatinya.",
      ingredients: "250 gram tepung almon, 300 gula halus, 5 buah putih telur, 200 gram gula kastor, Pasta pewarna makanan sesuai selera, Butter cream instan secukupnya untuk bahan isian.",
      instructions: "Pertama campurkan tepung almond dan gula halus dalam wadah. Kemudian ayak adonan tepung agar lebih halus. Sisihkan. Setelah itu kocok putih telur dan gula kastor dalam wadah lain menggunakan mixer sampai adonan mengembang kental berjejak. Lalu tambahkan adonan tepung yang sudah diayak tadi dan aduk menggunakan spatula sampai tercampur rata. Kemudian bagi adonan menjadi beberapa bagian dalam wadah berbeda sesuai dengan selera warna yang akan dibuat. Beri warna tiap adonan macaroon dan aduk adonan sampai warna merata. Lalu masukan adonan dalam plastik segitiga dan semprotkan adonan di atas loyang yang sudah dialasi kertas roti. Goyangkan cetakan agar gelembung-gelembung udara keluar dan tusuk gelembung dengan tusuk gigi. Kemudian diamkan adonan selama 30-60 menit sampai permukaan macaroon kering. Setelah permukaan kering, baru panggang adonan dengan suhu 140 derajat selama 15 menit sampai matang. Setelah matang, diamkan di dalam oven selama 3 menit lalu keluarkan dan dinginkan. Kemudian ambil satu macaroon dan isi macaroon menggunakan butter cream secukupnya lalu tumpuk lagi atasnya dengan macaroon lain dengan warna yang sama. Macaroon siap disajikan untuk cemilan.",
      tag:"resepedia.id",
      date: "Kamis, 7 Juli 2022"
    },
    {
      category:"Cake, Pastry",
      id: 4,
      img:"../../../assets/gallery/ft2.png",
      name:"Blackberry Lavender Chocolate Cupcakes",
      keywords:"Patry, Cupcakes, Blackberry, Coklat",
      describe: "Blackberry Lavender Chocolate Cupcakes adalah cupcakes yang memiliki rasa bunga dan buah yang manis dari lavender dan blackberry bersatu. Rasa cokelat dari cupcakes berpadu indah dengan frosting blackberry lavender, yang sangat manis, buah, dan tentu saja bunga yang lembut.",
      ingredients: "2 cangkir (300g) Tepung Serbaguna, 1 sdt Baking Soda, 1 sdt Baking Powder, 1/2 sdt Garam, 2 telur, 2 cangkir Gula, 1 cangkir krim asam, 1/2 cangkir Minyak Sayur, 2 sdt Vanila, 3/4, cangkir Bubuk Kakao Olahan Belanda (bisa juga kakao biasa), 3/4 cangkir Kopi Panas yang Baru Diseduh, Lavender Blackberry Buttercream, 7 cangkir Confectioners Gula, diayak, 1/4 cangkir Lavender Kuliner, 2 cangkir Mentega Unsalted, pada suhu kamar, 3/4 cangkir Blackberry Jam, Sejumput garam.",
      instructions: "Pertama buat chocolate cupcakes , panaskan oven hingga 350 ° F. Siapkan 2 loyang cupcake (24 total cupcakes) dengan alas cupcake. Dalam mangkuk besar, tambahkan tepung, soda kue, baking powder, dan garam. Kocok bersama untuk menggabungkan. Menyisihkan. Kemudian dalam mangkuk besar lainnya, tambahkan telur, gula, krim asam, minyak sayur, dan vanila. Kocok bersama sampai halus dan tercampur rata, lalu dalam mangkuk kecil atau gelas ukur 2 cangkir, tambahkan kopi panas dan bubuk kakao. Aduk hingga tercampur rata dan halus. Diamkan selama 2 menit, lalu tambahkan campuran kakao ke dalam mangkuk pencampur dengan bahan basah (telur, krim asam, dll), lalu aduk hingga rata. Kemudian tambahkan bahan basah ke dalam mangkuk dengan bahan kering, dan aduk hingga rata. Tuang adonan kue ke dalam loyang cupcake yang sudah disiapkan, isi 2/3 penuh, dan panggang selama 20 menit atau sampai tusuk gigi yang dimasukkan keluar bersih. Biarkan hingga benar-benar dingin sebelum dibekukan. Kedua buat blackberry butter cream, tambahkan 2 cangkir gula pasir dan lavender ke dalam food processor. Proses sampai tidak ada potongan besar lavender yang terlihat – sekitar 3-4 menit. Dengan menggunakan saringan mesh halus, saring gula lavender untuk menghilangkan sisa potongan besar lavender dan buang. Sisihkan gulanya. Kemudian tambahkan mentega ke mixer berdiri yang dilengkapi dengan alat pengocok. Kocok dengan kecepatan tinggi hingga mentega bervolume dua kali lipat, dan terlihat ringan dan mengembang. Lalu putar mixer berdiri ke rendah dan perlahan tambahkan gula confectioners lavender dan 5 cangkir gula confectioners lainnya. Kocok sampai benar-benar menyatu, lalu tambahkan selai blackberry dan garam. Kocok hingga tercampur rata dan menyatu sempurna. Pipa ke cupcakes didinginkan.",
      tag:"bsweetdessertboutique.com",
      date: "Kamis, 7 Juli 2022"
    },
    {
      category:"Chocolate, Cake",
      id: 5,
      img:"../../../assets/gallery/ft13.png",
      name:"Grain-Free Chocolate Rasberrys Cake",
      keywords:"Makanan manis, kue, coklat, Rasberry",
      describe:"Grain-free chocolate rasberrys cake adalah Kue Raspberry Cokelat tanpa biji-bijian , kue juga ini bebas gluten dan biji-bijian, bebas susu, dan bebas gula rafinasi.  Kue ini kaya dan sangat cokelat. Ini juga super lembut dan tidak kenyal seperti kue bebas biji lainnya. Bagian terbaik? Ini cukup sederhana dan cepat untuk dibuat.",
      ingredients: "¾ cangkir Tepung Almond,  1½ sendok teh Baking Powder, ½ sendok teh Garam, ⅔ cangkir Bubuk Kakao Mentah atau Bubuk Kakao, ½ cangkir Gula Kelapa Sawit, ½ cangkir saus apel (tanpa pemanis), 1 sendok teh Vanila, 4 Telur besar, ½ cangkir Minyak Kelapa (lelehkan), ½ cangkir sirup maple, 1¼ cangkir Dark Chocolate, cincang (saya suka 60% cacao chips), ½ cangkir Santan Kelapa Penuh Lemak (kalengan), dibagi, 1 sendok makan Minyak Kelapa, 1½ - 2 cangkir Raspberry Segar.",
      instructions: "Pertama panaskan oven hingga 350 derajat. Lapisi kue bundar 8 (dalam 3 inci) dengan kertas roti setelah diolesi dan ditaburi tepung.Lalu tempatkan tepung almond, bubuk kakao, baking powder, garam, dan gula kelapa dalam mangkuk besar. Campur dalam saus apel, vanili, telur, minyak kelapa, dan sirup maple sampai bentuk adonan halus. Kemudian tuang adonan ke dalam loyang yang sudah disiapkan dan masukkan ke dalam oven yang sudah dipanaskan sebelumnya. Lalu panggang selama 30-35 menit, atau sampai kue keras dan mengembang di bagian tengah dan tester keluar bersih. Biarkan kue benar-benar dingin di dalam panci. Saat kue sudah dingin, jalankan pisau di sekitar sisi kue dan balikkan ke piring. Kupas kertas perkamen di bagian bawah, letakkan dengan sisi kanan di atas piring saji. Lalu oleskan ganache cokelat secara merata di atas kue dan beri raspberry di atasnya. Taburi dengan gula bubuk dan gerimis dengan cokelat leleh, jika diinginkan. Setelah itu buat toping gahache, Pertama tempatkan cokelat, cangkir santan, dan minyak kelapa dalam panci. Aduk dengan api sedang hingga cokelat mulai meleleh. Angkat dari api dan lanjutkan mengocok sampai cokelat benar-benar meleleh. Sendokkan campuran cokelat ke dalam mangkuk. Kemudian tambahkan sisa santan ke dalam mangkuk dan aduk sampai terbentuk ganache yang halus. Biarkan ganache duduk sampai mengeras dengan konsistensi yang dapat dioleskan. Lalu gunakan ganache untuk olesan di atas kue yang sudah didinginkan.",
      tag:"thekitchenmccabe.com",
      date: "Kamis, 7 Juli 2022"
    },
    {
      category: "Pancakes",
      id: 6,
      img:"../../../assets/gallery/ft3.jpeg",
      name:"Blueberry Pancakes with spelt flour",
      keywords:"Pancake",
      describe:"Pancake Blueberry Fluffy dan vegan dengan tepung yang dieja. ini sangat enak dan anak-anak juga menyukainya. Pancake blueberry yang lembut dan lembab. Selain itu pancake blueberry ini cepat dibuat.",
      ingredients: "40 gr tepung terigu, 1 sdt baking powder, 1 sdm soda kue, 1 sdm cuka, 1 sdt kayu manis bubuk, 150 ml Susu Kedelai atau susu oat, 150 g yogurt Yunani polos atau yogurt kedelai, 30 ml sirup maple atau sirup agave, 1 sdm minyak kelapa cair, 125 g blueberry segar atau beku.",
      instructions: "Pertama dalam mangkuk besar, campur tepung, baking powder, garam, dan kayu manis bersama-sama hingga tercampur. Menyisihkan.Lalu dalam mangkuk lain, kocok yogurt, susu, dan sirup maple hingga tercampur. Kocok dalam minyak. Campurkan soda kue dengan cuka. Kemudian tuang bahan basah ke dalam bahan kering dan aduk perlahan untuk menggabungkan bahan. Adonannya kental. Setelah adonan kental perlahan, lipat blueberry, terutama jika Anda menggunakan blueberry beku. Kemudian panaskan wajan di atas api sedang. Lalu tuang sekitar 1-2 sdm adonan ke wajan. Masak sampai tepinya terlihat kering dan gelembung mulai terbentuk di sisinya, sekitar 1 menit. Balik dan masak di sisi lain sampai matang. Sajikan pancake segera dengan topping pilihan.",
      tag:"klaraslife.com",
      date: "Kamis, 7 Juli 2022"
    } 
    // {
    //   id: 8,
    //   img:"../../../assets/gallery/ft17.jpeg",
    //   name:"Vegan crêpes filled with chocolate cream ",
    //   keywords:"Snack, Breakfast",
    //   ingredients: "",
    //   instructions: "",
    //   tag:"biancazapatka.com",
    //   date: "Friday, 1 july 2022"
    // },
    // {
    //   id: 9,
    //   img:"../../../assets/gallery/ft18.png",
    //   name:"Chocolate Raspberry Cake",
    //   keywords:"Chocolate, cake",
    //   ingredients: "",
    //   instructions: "",
    //   tag:"biancazapatka.com",
    //   date: "Friday, 1 july 2022"
    // },
    // {
    //   id: 10,
    //   img:"../../../assets/gallery/ft19.png",
    //   name:"Cherry Pie",
    //   keywords:"Pie",
    //   ingredients: "",
    //   instructions: "",
    //   tag:"virginiasar.blogspot.com",
    //   date: "Friday, 1 july 2022"
    // }
  ]
}

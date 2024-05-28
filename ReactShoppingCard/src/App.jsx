import {useState} from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';


const App = () => {
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for (let i = 1; i <= 8; i++) {
    let obj = { id: i, txt: "Add to Cart" };
    btnText.push(obj);
  }

  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1943f625834d45bcbcd671de3eeb7c2c_9366/Copa_Pure_II_Elite_Firm_Ground_Boots_Burgundy_IE7486_HM1.jpg",
      productName: "COPA PURE II ELITE,ADIDAS",
      starRating: 4,
      mrp: 159.38,
      offer: 20,
      btnTxt: btnText[0].txt,
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/57779a68c971429caf6e8321c999ddb5_9366/copa-pure-ii-club-flexible-ground-boots.jpg",
      productName: "ADIDAS COPA PURE II CLUB",
      starRating: 2,
      mrp: 70.62,
      offer: 25,
      btnTxt: btnText[1].txt,
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/af9273bcd4b34ccc9c505d185afaf1e3_9366/copa-pure-ii.1-firm-ground-boots.jpg",
      productName: "ADIDAS COPA PURE II.1 FIRM GROUND BOOTS",
      starRating: 4,
      mrp: 184.75,
      offer: 10,
      btnTxt: btnText[2].txt,
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a33ca38cdfa7485e8940dc3fd9ee0848_9366/Copa_Pure_II.4_Flexible_Ground_Boots_Blue_IE4907_22_model.jpg",
      productName: "ADIDAS COPA PURE II.4 FLEXIBLE GROUND BOOTS",
      starRating: 2,
      mrp: 105.25,
      offer: 25,
      btnTxt: btnText[3].txt,
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ac1b58045b764a599d97fbc51034124c_9366/X_Crazyfast.4_Flexible_Ground_Boots_Black_GY7433_22_model.jpg",
      productName: "ADIDAS X CRAZYFAST.4 FLEXIBLE GROUND BOOTS",
      starRating: 4,
      mrp: 250.12,
      offer: 15,
      btnTxt: btnText[4].txt,
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/58ca80a6eaa94969ba20177f07f3680b_9366/Predator_Elite_Firm_Ground_Football_Boots_White_IE1803_22_model.jpg",
      productName: "ADIDAS PREDATOR ELITE FIRM GROUND FOOTBALL BOOTS",
      starRating: 5,
      mrp: 389.25,
      offer: 17,
      btnTxt: btnText[5].txt,
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/9832b4547f6c4d26b38ff5e8a62c6172_9366/x-crazyfast-elite-ll-fg.jpg",
      productName: "ADIDAS X CRAZYFAST ELITE LL FG",
      starRating: 5,
      mrp: 352.55,
      offer: 27,
      btnTxt: btnText[6].txt,
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/39d5aad564aa4442a908142042b4b5da_9366/x-crazyfast-messi-elite-firm-ground-boots.jpg",
      productName: "ADIDAS X CRAZYFAST MESSI ELITE FIRM GROUND BOOTS",
      starRating: 3,
      mrp: 60.71,
      offer: 10,
      btnTxt: btnText[7].txt,
    },
  ];

  let press = (product) => {
    let foundButton = btnText.find((ele) => product.id === ele.id);
    // console.log(btnElement);

    if (foundButton.txt === "Add to Cart") {
      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    } else if (foundButton.txt === "Remove from Cart") {
      setCartData(cartData.filter((ele) => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
  };
  return (
    <div>
      <Navbar navDetails={cartData} />
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardDetails.map((card, index) => {
              return <Card key={index++} props={card} press={press} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  View,
  ActivityIndicator,
  Text,
  TouchableHighlight,
  Modal,
  Alert
} from "react-native";

const DATA = [
  {
    totalHits: 500,
    hits: [
      {
        largeImageURL:
          "https://pixabay.com/get/57e7d44b4856a814f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1040,
        imageWidth: 5760,
        id: 1718244,
        user_id: 3194556,
        views: 354458,
        comments: 115,
        pageURL:
          "https://pixabay.com/photos/engagement-couple-romance-bike-1718244/",
        imageHeight: 3840,
        webformatURL:
          "https://pixabay.com/get/57e7d44b4856a814f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "engagement, couple, romance",
        downloads: 127084,
        user: "3194556",
        favorites: 1036,
        imageSize: 4669768,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/10/06/05/19/engagement-1718244_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e3d4404956af14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 396,
        imageWidth: 3840,
        id: 1313343,
        user_id: 2240009,
        views: 119700,
        comments: 40,
        pageURL:
          "https://pixabay.com/photos/bmw-vehicle-ride-bike-journey-1313343/",
        imageHeight: 2160,
        webformatURL:
          "https://pixabay.com/get/57e3d4404956af14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "bmw, vehicle, ride",
        downloads: 57287,
        user: "Monoar",
        favorites: 426,
        imageSize: 2161055,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/03/18/05-51-03-682_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e9d5474251b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 334,
        imageWidth: 2160,
        id: 190483,
        user_id: 55851,
        views: 90730,
        comments: 38,
        pageURL:
          "https://pixabay.com/photos/bike-bicycle-two-wheel-old-bike-190483/",
        imageHeight: 1440,
        webformatURL:
          "https://pixabay.com/get/57e9d5474251b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "bike, bicycle, two",
        downloads: 20612,
        user: "danfador",
        favorites: 364,
        imageSize: 2093738,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/5fe5d540484fad0bffd8992cc42c32791237dcf85254764e732672d29249_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 457,
        imageWidth: 3888,
        id: 95032,
        user_id: 12019,
        views: 162313,
        comments: 60,
        pageURL:
          "https://pixabay.com/photos/utah-mountain-biking-bike-biking-95032/",
        imageHeight: 2592,
        webformatURL:
          "https://pixabay.com/get/5fe5d540484fad0bffd8992cc42c32791237dcf85254764e732672d29249_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "utah, mountain biking, bike",
        downloads: 67159,
        user: "12019",
        favorites: 489,
        imageSize: 2324051,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/03/19/18/23/utah-95032_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/50e8d6444f53b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 343,
        imageWidth: 2126,
        id: 683751,
        user_id: 869884,
        views: 99237,
        comments: 40,
        pageURL:
          "https://pixabay.com/photos/silhouette-bike-fitness-woman-683751/",
        imageHeight: 1196,
        webformatURL:
          "https://pixabay.com/get/50e8d6444f53b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "silhouette, bike, fitness",
        downloads: 40552,
        user: "renategranade0",
        favorites: 359,
        imageSize: 140956,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/03/21/14/34/silhouette-683751_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d1464f5aac14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 456,
        webformatWidth: 640,
        likes: 409,
        imageWidth: 6997,
        id: 3045580,
        user_id: 3656355,
        views: 90655,
        comments: 45,
        pageURL:
          "https://pixabay.com/photos/bicycle-children-graffiti-art-3045580/",
        imageHeight: 4987,
        webformatURL:
          "https://pixabay.com/get/55e0d1464f5aac14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 106,
        tags: "bicycle, children, graffiti",
        downloads: 33099,
        user: "Engin_Akyurt",
        favorites: 394,
        imageSize: 14375889,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2018/09/20/08-02-23-312_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e2dc424353aa14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 260,
        imageWidth: 6000,
        id: 2291916,
        user_id: 661512,
        views: 98588,
        comments: 17,
        pageURL:
          "https://pixabay.com/photos/gear-bicycle-chain-transmission-2291916/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/54e2dc424353aa14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "gear, bicycle, chain",
        downloads: 72506,
        user: "JarkkoManty",
        favorites: 258,
        imageSize: 8386419,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/08/01/20-23-01-127_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/05/07/09/03/gear-2291916_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e5d5464a51a514f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 479,
        webformatWidth: 640,
        likes: 247,
        imageWidth: 4000,
        id: 1505039,
        user_id: 2849478,
        views: 50708,
        comments: 18,
        pageURL:
          "https://pixabay.com/photos/bike-wall-phu-xuyen-hanoi-vietnam-1505039/",
        imageHeight: 2996,
        webformatURL:
          "https://pixabay.com/get/57e5d5464a51a514f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 112,
        tags: "bike, wall, phu xuyen",
        downloads: 23814,
        user: "nguyenhuynhmai",
        favorites: 253,
        imageSize: 5013108,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/07/01/14-17-57-875_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/07/08/18/32/bike-1505039_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/51e4d44b4b51b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 244,
        imageWidth: 1940,
        id: 741813,
        user_id: 824135,
        views: 55012,
        comments: 30,
        pageURL:
          "https://pixabay.com/photos/sign-bicycle-decoration-bike-741813/",
        imageHeight: 1293,
        webformatURL:
          "https://pixabay.com/get/51e4d44b4b51b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "sign, bicycle, decoration",
        downloads: 24290,
        user: "BriF",
        favorites: 268,
        imageSize: 422018,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/03/10/13-40-13-674_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/04/27/11/48/sign-741813_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e8d1424d5ab108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 167,
        webformatWidth: 640,
        likes: 232,
        imageWidth: 4272,
        id: 384178,
        user_id: 322038,
        views: 64589,
        comments: 47,
        pageURL:
          "https://pixabay.com/photos/biker-motorcycle-dirt-extreme-bike-384178/",
        imageHeight: 1120,
        webformatURL:
          "https://pixabay.com/get/55e8d1424d5ab108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 39,
        tags: "biker, motorcycle, dirt",
        downloads: 32147,
        user: "WebDonut",
        favorites: 275,
        imageSize: 702799,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/09/25/17-21-20-903_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/07/04/19/15/biker-384178_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e7d4424855a514f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 374,
        webformatWidth: 640,
        likes: 448,
        imageWidth: 3318,
        id: 2711279,
        user_id: 127419,
        views: 175999,
        comments: 83,
        pageURL:
          "https://pixabay.com/photos/woman-girl-bike-sunset-walk-2711279/",
        imageHeight: 1943,
        webformatURL:
          "https://pixabay.com/get/54e7d4424855a514f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 87,
        tags: "woman, girl, bike",
        downloads: 122529,
        user: "cocoparisienne",
        favorites: 410,
        imageSize: 780460,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/11/18/14-25-26-732_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/09/03/17/26/woman-2711279_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e9d5454e52a914f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 451,
        webformatWidth: 640,
        likes: 177,
        imageWidth: 5984,
        id: 1906405,
        user_id: 3946012,
        views: 89982,
        comments: 10,
        pageURL:
          "https://pixabay.com/photos/girl-bicycle-bike-cycling-sunset-1906405/",
        imageHeight: 4224,
        webformatURL:
          "https://pixabay.com/get/57e9d5454e52a914f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 105,
        tags: "girl, bicycle, bike",
        downloads: 61271,
        user: "zhivko",
        favorites: 233,
        imageSize: 2969341,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/12/07/09-20-37-961_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/12/14/13/33/girl-1906405_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e0dd414a57ab14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 146,
        imageWidth: 1800,
        id: 1082057,
        user_id: 242387,
        views: 25084,
        comments: 2,
        pageURL:
          "https://pixabay.com/photos/vintage-bike-flowers-bicycle-retro-1082057/",
        imageHeight: 1200,
        webformatURL:
          "https://pixabay.com/get/57e0dd414a57ab14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "vintage, bike, flowers",
        downloads: 7824,
        user: "Free-Photos",
        favorites: 220,
        imageSize: 605710,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/12/08/00/48/vintage-1082057_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d3454b54ab14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 359,
        webformatWidth: 640,
        likes: 145,
        imageWidth: 5684,
        id: 3066167,
        user_id: 165106,
        views: 37944,
        comments: 49,
        pageURL:
          "https://pixabay.com/photos/snow-fatbikes-mountain-bikes-mtb-3066167/",
        imageHeight: 3194,
        webformatURL:
          "https://pixabay.com/get/55e0d3454b54ab14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "snow, fatbikes, mountain bikes",
        downloads: 20952,
        user: "suju",
        favorites: 126,
        imageSize: 5200534,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/09/21/15-48-10-210_250x250.jpeg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e8d3444a56aa14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 156,
        imageWidth: 5315,
        id: 1867046,
        user_id: 2286921,
        views: 27893,
        comments: 11,
        pageURL:
          "https://pixabay.com/photos/bicycle-bike-cyclist-dawn-dusk-1867046/",
        imageHeight: 3543,
        webformatURL:
          "https://pixabay.com/get/57e8d3444a56aa14f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "bicycle, bike, cyclist",
        downloads: 13562,
        user: "Pexels",
        favorites: 205,
        imageSize: 2162993,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/11/29/03/25/bicycle-1867046_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/52e0d2424254b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 221,
        imageWidth: 5616,
        id: 407186,
        user_id: 364019,
        views: 83268,
        comments: 25,
        pageURL:
          "https://pixabay.com/photos/motorbike-garage-repairs-hobby-407186/",
        imageHeight: 3744,
        webformatURL:
          "https://pixabay.com/get/52e0d2424254b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "motorbike, garage, repairs",
        downloads: 28904,
        user: "SplitShire",
        favorites: 202,
        imageSize: 7362369,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2014/08/01/01-11-54-28_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/5ee6d241485bb108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 480,
        webformatWidth: 640,
        likes: 108,
        imageWidth: 2560,
        id: 867229,
        user_id: 242387,
        views: 31531,
        comments: 19,
        pageURL:
          "https://pixabay.com/photos/bike-cycle-bicycle-sport-cycling-867229/",
        imageHeight: 1920,
        webformatURL:
          "https://pixabay.com/get/5ee6d241485bb108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 112,
        tags: "bike, cycle, bicycle",
        downloads: 15887,
        user: "Free-Photos",
        favorites: 252,
        imageSize: 841744,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/07/30/11/04/bike-867229_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e3d3464a57b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 425,
        webformatWidth: 640,
        likes: 137,
        imageWidth: 4912,
        id: 336505,
        user_id: 242387,
        views: 27745,
        comments: 16,
        pageURL:
          "https://pixabay.com/photos/shed-bicycle-bike-old-wooden-shack-336505/",
        imageHeight: 3264,
        webformatURL:
          "https://pixabay.com/get/55e3d3464a57b108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "shed, bicycle, bike",
        downloads: 11913,
        user: "Free-Photos",
        favorites: 206,
        imageSize: 5918588,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/05/02/23/53/shed-336505_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e8d64a4a52a914f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_1280.jpg",
        webformatHeight: 400,
        webformatWidth: 640,
        likes: 109,
        imageWidth: 1920,
        id: 1839005,
        user_id: 2286921,
        views: 30853,
        comments: 4,
        pageURL:
          "https://pixabay.com/photos/bicycle-bike-bokeh-lights-macro-1839005/",
        imageHeight: 1200,
        webformatURL:
          "https://pixabay.com/get/57e8d64a4a52a914f6da8c7dda79347a1038d9ed514c704c72287ddd9e4bc05c_640.jpg",
        type: "photo",
        previewHeight: 93,
        tags: "bicycle, bike, bokeh",
        downloads: 13523,
        user: "Pexels",
        favorites: 141,
        imageSize: 927893,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/11/19/12/24/bicycle-1839005_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/51e1d6454f5ab108f5d08460962b337b1238d6e74e50744e722972dd9148c1_1280.jpg",
        webformatHeight: 425,
        webformatWidth: 640,
        likes: 105,
        imageWidth: 4256,
        id: 713658,
        user_id: 272447,
        views: 40097,
        comments: 14,
        pageURL:
          "https://pixabay.com/photos/workout-racing-bike-bicycle-bike-713658/",
        imageHeight: 2832,
        webformatURL:
          "https://pixabay.com/get/51e1d6454f5ab108f5d08460962b337b1238d6e74e50744e722972dd9148c1_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "workout, racing bike, bicycle",
        downloads: 19528,
        user: "skeeze",
        favorites: 145,
        imageSize: 401267,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/02/10/03-58-30-79_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/04/08/23/53/workout-713658_150.jpg"
      }
    ],
    total: 4260
  }
];

let API_KEY = "3457782-221199214ff9e6601376d8cce";
let modaldata = [];

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modalVisible: false,
      hightResImgLoad: false
    };
    this.getphotos();
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setModalVisible(true);
          this.modaldata = item;
          console.log(this.modaldata);
        }}
        style={{
          flex: 1 / 2, //here you can use flex:1 also
          aspectRatio: 1,
          height: 300,
          padding: 4
        }}
      >
        <Image
          style={{ flex: 1, borderRadius: 4, backgroundColor: "lightgray" }}
          resizeMode="cover"
          source={{
            uri: item.webformatURL
          }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, padding: 20 }}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ padding: 4, flex: 1 }}
          data={DATA[0].hits}
          numColumns={2}
          renderItem={({ item }) => this.renderItem(item)}
        />

        {this.state.modalVisible && (
          <View style={styles.modal}>
            <Image
              style={styles.modalImage}
              resizeMode="contain"
              onLoadEnd={() => this.setState({ hightResImgLoad: true })}
              source={{
                uri: this.modaldata.largeImageURL
              }}
            />
            {!this.state.hightResImgLoad && (
              <ActivityIndicator style={styles.loader} />
            )}

            <TouchableHighlight
              style={styles.closeModal}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>X</Text>
            </TouchableHighlight>

            <View style={styles.btnWrapper}>
              <TouchableHighlight
                style={styles.childbtn}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Downlaod</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.childbtn}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Set Wallpaper</Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }

  getphotos() {
    // this.setState({
    //   isLoading: false
    //   // dataSource: responseJson.movies
    // });
    // fetch(
    //   "https://pixabay.com/api/?key=3457782-221199214ff9e6601376d8cce&q=yellow+flowers&image_type=photo"
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState(
    //       {
    //         isLoading: false
    //         // dataSource: responseJson.movies
    //       },
    //       function() {
    //         DATA = responseJson.hits;
    //       }
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  setModalVisible(visible) {
    console.log("state", this.state.modalVisible);
    this.setState({ modalVisible: visible, hightResImgLoad: false });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 1
  },
  title: {
    fontSize: 32
  },
  loader: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignmentItem: "center"
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    overflow: "hidden"
  },
  closeModal: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "white",
    padding: 12,
    fontWeight: "bold",
    zIndex: 1,
    borderRadius: 4,
    opacity: 0.8
  },
  modalImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    backgroundColor: "black"
  },
  btnWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    height: 56,
    display: "flex",
    flexDirection: "row"
  },
  childbtn: {
    flex: 1,
    backgroundColor: "white",
    fontWeight: "bold",
    opacity: 0.9,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignmentItem: "center",
    textAlign: "center",
    borderRadius: 4
  }
});

import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  View,
  ActivityIndicator
} from "react-native";

const DATA = [
  {
    totalHits: 500,
    hits: [
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1053,
        imageWidth: 6000,
        id: 3063284,
        user_id: 1564471,
        views: 682229,
        comments: 237,
        pageURL:
          "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "rose, flower, petal",
        downloads: 431054,
        user: "annca",
        favorites: 909,
        imageSize: 3574625,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e1d4404953a414f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 804,
        imageWidth: 2736,
        id: 3113318,
        user_id: 7410713,
        views: 445848,
        comments: 123,
        pageURL:
          "https://pixabay.com/photos/sunflower-nature-flora-flower-3113318/",
        imageHeight: 1824,
        webformatURL:
          "https://pixabay.com/get/55e1d4404953a414f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "sunflower, nature, flora",
        downloads: 324849,
        user: "bichnguyenvo",
        favorites: 543,
        imageSize: 1026006,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/12/16/10-28-39-199_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e2dc414351ae14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 400,
        webformatWidth: 640,
        likes: 792,
        imageWidth: 3200,
        id: 3292932,
        user_id: 2216431,
        views: 393004,
        comments: 72,
        pageURL:
          "https://pixabay.com/photos/sunflower-vase-vintage-retro-wall-3292932/",
        imageHeight: 2000,
        webformatURL:
          "https://pixabay.com/get/55e2dc414351ae14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 93,
        tags: "sunflower, vase, vintage",
        downloads: 295612,
        user: "Yuri_B",
        favorites: 995,
        imageSize: 2563708,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/12/17/10-34-13-667_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflower-3292932_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e2dc464e51a814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 853,
        imageWidth: 5363,
        id: 2295434,
        user_id: 334088,
        views: 148410,
        comments: 72,
        pageURL:
          "https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/",
        imageHeight: 3575,
        webformatURL:
          "https://pixabay.com/get/54e2dc464e51a814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "spring bird, bird, tit",
        downloads: 64891,
        user: "JillWellington",
        favorites: 944,
        imageSize: 2938651,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e1d1464f51a514f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 390,
        webformatWidth: 640,
        likes: 442,
        imageWidth: 4000,
        id: 2145539,
        user_id: 2364555,
        views: 58056,
        comments: 34,
        pageURL: "https://pixabay.com/photos/crocus-flower-wet-spring-2145539/",
        imageHeight: 2443,
        webformatURL:
          "https://pixabay.com/get/54e1d1464f51a514f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 91,
        tags: "crocus, flower, wet",
        downloads: 33339,
        user: "pixel2013",
        favorites: 402,
        imageSize: 823922,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/03/15/09/00/crocus-2145539_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/53e6d1424e4fad0bffd8992cc42c32791237dcf85254764e732773d1964c_1280.jpg",
        webformatHeight: 428,
        webformatWidth: 640,
        likes: 559,
        imageWidth: 3872,
        id: 56414,
        user_id: 9003,
        views: 83013,
        comments: 83,
        pageURL:
          "https://pixabay.com/photos/anemone-flower-blossom-bloom-blue-56414/",
        imageHeight: 2592,
        webformatURL:
          "https://pixabay.com/get/53e6d1424e4fad0bffd8992cc42c32791237dcf85254764e732773d1964c_640.jpg",
        type: "photo",
        previewHeight: 100,
        tags: "anemone, flower, blossom",
        downloads: 35661,
        user: "Albenheim",
        favorites: 477,
        imageSize: 770723,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2012/09/08/21-14-56-990_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2012/09/08/21/51/anemone-56414_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e5d4414253af14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 323,
        webformatWidth: 640,
        likes: 323,
        imageWidth: 3861,
        id: 1512813,
        user_id: 2364555,
        views: 89087,
        comments: 24,
        pageURL:
          "https://pixabay.com/photos/lily-flowers-early-flower-garden-1512813/",
        imageHeight: 1952,
        webformatURL:
          "https://pixabay.com/get/57e5d4414253af14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 75,
        tags: "lily, flowers, early",
        downloads: 43419,
        user: "pixel2013",
        favorites: 339,
        imageSize: 1037708,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/07/12/18/54/lily-1512813_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/51e1d0464e52b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 303,
        imageWidth: 3020,
        id: 715540,
        user_id: 916237,
        views: 100755,
        comments: 33,
        pageURL:
          "https://pixabay.com/photos/yellow-natural-flower-blossom-715540/",
        imageHeight: 1703,
        webformatURL:
          "https://pixabay.com/get/51e1d0464e52b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "yellow, natural, flower",
        downloads: 51088,
        user: "Wow_Pho",
        favorites: 318,
        imageSize: 974940,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/04/07/14-10-15-590_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e2d4464b5aa414f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 358,
        webformatWidth: 640,
        likes: 388,
        imageWidth: 2027,
        id: 3215188,
        user_id: 7097598,
        views: 155490,
        comments: 101,
        pageURL:
          "https://pixabay.com/photos/flowers-orange-orange-petals-3215188/",
        imageHeight: 1134,
        webformatURL:
          "https://pixabay.com/get/55e2d4464b5aa414f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 83,
        tags: "flowers, orange, orange petals",
        downloads: 105981,
        user: "Candiix",
        favorites: 328,
        imageSize: 399066,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/12/06/20-08-45-84_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/03/10/20/26/flowers-3215188_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/51e2dc464b57b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_1280.jpg",
        webformatHeight: 416,
        webformatWidth: 640,
        likes: 351,
        imageWidth: 1980,
        id: 729515,
        user_id: 909086,
        views: 52404,
        comments: 25,
        pageURL:
          "https://pixabay.com/photos/flower-beautiful-bloom-blooming-729515/",
        imageHeight: 1288,
        webformatURL:
          "https://pixabay.com/get/51e2dc464b57b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_640.jpg",
        type: "photo",
        previewHeight: 97,
        tags: "flower, beautiful, bloom",
        downloads: 33668,
        user: "Bessi",
        favorites: 448,
        imageSize: 370390,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729515_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d0434a55aa14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 332,
        imageWidth: 5472,
        id: 3050076,
        user_id: 6663646,
        views: 152329,
        comments: 32,
        pageURL:
          "https://pixabay.com/photos/portrait-girl-fog-flowers-beauty-3050076/",
        imageHeight: 3648,
        webformatURL:
          "https://pixabay.com/get/55e0d0434a55aa14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "portrait, girl, fog",
        downloads: 106067,
        user: "ThuyHaBich",
        favorites: 338,
        imageSize: 2914111,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/11/17/08-35-57-188_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/12/30/13/25/portrait-3050076_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e5d6454a5aa414f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 419,
        webformatWidth: 640,
        likes: 310,
        imageWidth: 4896,
        id: 1536088,
        user_id: 1195798,
        views: 296013,
        comments: 58,
        pageURL:
          "https://pixabay.com/photos/sunflower-flower-bloom-yellow-1536088/",
        imageHeight: 3208,
        webformatURL:
          "https://pixabay.com/get/57e5d6454a5aa414f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 98,
        tags: "sunflower, flower, bloom",
        downloads: 54561,
        user: "Couleur",
        favorites: 283,
        imageSize: 5103399,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/12/27/15-33-37-393_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/07/23/00/12/sun-flower-1536088_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e9d2414e53ad14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 372,
        webformatWidth: 640,
        likes: 293,
        imageWidth: 4288,
        id: 1972411,
        user_id: 1777190,
        views: 97012,
        comments: 35,
        pageURL:
          "https://pixabay.com/photos/drip-blossom-bloom-yellow-1972411/",
        imageHeight: 2499,
        webformatURL:
          "https://pixabay.com/get/57e9d2414e53ad14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 87,
        tags: "drip, blossom, bloom",
        downloads: 80946,
        user: "susannp4",
        favorites: 290,
        imageSize: 1510459,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/01/11/17/27/drip-1972411_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e1d6444957b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_1280.jpg",
        webformatHeight: 355,
        webformatWidth: 640,
        likes: 216,
        imageWidth: 2410,
        id: 113735,
        user_id: 817,
        views: 105911,
        comments: 31,
        pageURL:
          "https://pixabay.com/photos/rose-flower-yellow-yellow-rose-113735/",
        imageHeight: 1337,
        webformatURL:
          "https://pixabay.com/get/57e1d6444957b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_640.jpg",
        type: "photo",
        previewHeight: 83,
        tags: "rose, flower, yellow",
        downloads: 20594,
        user: "blizniak",
        favorites: 197,
        imageSize: 299425,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2013/06/28/17-07-05-714_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/05/26/12/14/rose-113735_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e5d1434854aa14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 437,
        webformatWidth: 640,
        likes: 260,
        imageWidth: 5500,
        id: 3540266,
        user_id: 2364555,
        views: 87375,
        comments: 37,
        pageURL:
          "https://pixabay.com/photos/sunflower-flower-blossom-bloom-3540266/",
        imageHeight: 3760,
        webformatURL:
          "https://pixabay.com/get/55e5d1434854aa14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 102,
        tags: "sunflower, flower, blossom",
        downloads: 76083,
        user: "pixel2013",
        favorites: 264,
        imageSize: 4179978,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/07/15/19/02/sun-flower-3540266_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e7d743495aaf14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 190,
        imageWidth: 6000,
        id: 3720383,
        user_id: 6246704,
        views: 61392,
        comments: 42,
        pageURL:
          "https://pixabay.com/photos/flower-g%C3%A9rbel-yellow-flower-flower-3720383/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e7d743495aaf14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "flower gérbel, yellow flower, flower",
        downloads: 49489,
        user: "fernandozhiminaicela",
        favorites: 163,
        imageSize: 2117262,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/02/27/14-16-13-192_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/10/03/03/42/flower-gerbel-3720383_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e6d7444b5baf14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 306,
        imageWidth: 6000,
        id: 1627193,
        user_id: 1834854,
        views: 121288,
        comments: 42,
        pageURL:
          "https://pixabay.com/photos/sunflower-sunflower-field-yellow-1627193/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/57e6d7444b5baf14f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "sunflower, sunflower field, yellow",
        downloads: 36549,
        user: "ulleo",
        favorites: 356,
        imageSize: 5414839,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/05/16/18-48-21-135_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e1d7444b55a814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 464,
        imageWidth: 4752,
        id: 1127174,
        user_id: 1445608,
        views: 142911,
        comments: 33,
        pageURL:
          "https://pixabay.com/photos/sunflower-summer-yellow-nature-1127174/",
        imageHeight: 3168,
        webformatURL:
          "https://pixabay.com/get/57e1d7444b55a814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "sunflower, summer, yellow",
        downloads: 83914,
        user: "mploscar",
        favorites: 497,
        imageSize: 3922163,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/01/05/14-08-20-943_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e3d44a4b53a814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 296,
        imageWidth: 4272,
        id: 1319114,
        user_id: 485024,
        views: 103091,
        comments: 25,
        pageURL:
          "https://pixabay.com/photos/girl-flowers-yellow-beauty-nature-1319114/",
        imageHeight: 2848,
        webformatURL:
          "https://pixabay.com/get/57e3d44a4b53a814f6da8c7dda79347a1038d9ed514c704c72287ddc9f48c459_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "girl, flowers, yellow",
        downloads: 49985,
        user: "AdinaVoicu",
        favorites: 299,
        imageSize: 3837334,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/11/08/12-57-56-969_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/04/09/23/10/girl-1319114_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/5ee8d2474e51b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_1280.jpg",
        webformatHeight: 497,
        webformatWidth: 640,
        likes: 477,
        imageWidth: 3867,
        id: 887443,
        user_id: 1298145,
        views: 94931,
        comments: 56,
        pageURL:
          "https://pixabay.com/photos/flower-life-crack-desert-drought-887443/",
        imageHeight: 3005,
        webformatURL:
          "https://pixabay.com/get/5ee8d2474e51b108f5d08460962b337b1238d6e74e50744e722973dc924cc4_640.jpg",
        type: "photo",
        previewHeight: 116,
        tags: "flower, life, crack",
        downloads: 47549,
        user: "klimkin",
        favorites: 387,
        imageSize: 2611531,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/07/18/13-46-18-393_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg"
      }
    ],
    total: 22288
  }
];

let API_KEY = "3457782-221199214ff9e6601376d8cce";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = { isLoading: true };
    this.getphotos();
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          alert("hey");
        }}
        style={{
          flex: 1 / 2, //here you can use flex:1 also
          aspectRatio: 1,
          height: 300,
          padding: 4
        }}
      >
        <Image
          style={{ flex: 1, borderRadius: 4 }}
          resizeMode="cover"
          source={{
            uri: item.previewURL
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
  }
});

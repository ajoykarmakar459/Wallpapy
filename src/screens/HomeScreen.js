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
          "https://pixabay.com/get/55e2d54b4c5ab108f5d08460962b337b1238d6e74e50744e722972dc934cc2_1280.jpg",
        webformatHeight: 495,
        webformatWidth: 640,
        likes: 822,
        imageWidth: 5168,
        id: 320868,
        user_id: 48777,
        views: 671399,
        comments: 97,
        pageURL:
          "https://pixabay.com/photos/red-rose-rose-rose-bloom-blossom-320868/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e2d54b4c5ab108f5d08460962b337b1238d6e74e50744e722972dc934cc2_640.jpg",
        type: "photo",
        previewHeight: 116,
        tags: "red rose, rose, rose bloom",
        downloads: 79439,
        user: "Josch13",
        favorites: 751,
        imageSize: 1677648,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/04/10/11/24/red-rose-320868_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e0d5414c51b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_1280.jpg",
        webformatHeight: 398,
        webformatWidth: 640,
        likes: 971,
        imageWidth: 3774,
        id: 100263,
        user_id: 23566,
        views: 208402,
        comments: 100,
        pageURL: "https://pixabay.com/photos/cereals-field-ripe-poppy-100263/",
        imageHeight: 2350,
        webformatURL:
          "https://pixabay.com/get/57e0d5414c51b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_640.jpg",
        type: "photo",
        previewHeight: 93,
        tags: "cereals, field, ripe",
        downloads: 70998,
        user: "realworkhard",
        favorites: 812,
        imageSize: 1175477,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2013/10/03/21-10-36-920_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/04/03/21/25/cereals-100263_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e7d1404b5ab108f5d08460962b337b1238d6e74e50744e722972dc934cc2_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 737,
        imageWidth: 3072,
        id: 374318,
        user_id: 266366,
        views: 380104,
        comments: 123,
        pageURL:
          "https://pixabay.com/photos/rose-roses-flowers-red-valentine-374318/",
        imageHeight: 2048,
        webformatURL:
          "https://pixabay.com/get/55e7d1404b5ab108f5d08460962b337b1238d6e74e50744e722972dc934cc2_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "rose, roses, flowers",
        downloads: 106652,
        user: "DrCarl",
        favorites: 630,
        imageSize: 1926650,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2014/05/24/04-48-46-179_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/06/22/05/49/rose-374318_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e1d74b4c5aaf14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 588,
        imageWidth: 2000,
        id: 1128683,
        user_id: 1827243,
        views: 147086,
        comments: 85,
        pageURL:
          "https://pixabay.com/photos/poppy-gypsophila-elegans-red-color-1128683/",
        imageHeight: 1333,
        webformatURL:
          "https://pixabay.com/get/57e1d74b4c5aaf14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "poppy, gypsophila elegans, red color",
        downloads: 79321,
        user: "Lee_seonghak",
        favorites: 619,
        imageSize: 729608,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/12/30/05-37-23-830_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/01/08/17/06/poppy-1128683_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e4d1414e5bab14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 415,
        webformatWidth: 640,
        likes: 542,
        imageWidth: 4850,
        id: 1442497,
        user_id: 1195798,
        views: 161043,
        comments: 98,
        pageURL:
          "https://pixabay.com/photos/water-lily-flower-blossom-bloom-1442497/",
        imageHeight: 3145,
        webformatURL:
          "https://pixabay.com/get/57e4d1414e5bab14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 97,
        tags: "water lily, flower, blossom",
        downloads: 60984,
        user: "Couleur",
        favorites: 467,
        imageSize: 3013358,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/12/27/15-33-37-393_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/06/07/20/20/water-lily-1442497_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e6d1414355ac14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 439,
        webformatWidth: 640,
        likes: 642,
        imageWidth: 4554,
        id: 1642970,
        user_id: 1614541,
        views: 322428,
        comments: 59,
        pageURL:
          "https://pixabay.com/photos/rose-red-flower-nature-garden-1642970/",
        imageHeight: 3129,
        webformatURL:
          "https://pixabay.com/get/57e6d1414355ac14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 102,
        tags: "rose, red, flower",
        downloads: 115495,
        user: "AliceKeyStudio",
        favorites: 654,
        imageSize: 3140990,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/12/01/20-09-23-86_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/09/03/23/18/rose-1642970_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e2d54b4353b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 478,
        imageWidth: 6000,
        id: 320891,
        user_id: 48777,
        views: 227014,
        comments: 46,
        pageURL:
          "https://pixabay.com/photos/red-rose-rose-rose-bloom-blossom-320891/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e2d54b4353b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "red rose, rose, rose bloom",
        downloads: 35805,
        user: "Josch13",
        favorites: 389,
        imageSize: 1664735,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/04/10/11/35/red-rose-320891_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e4d24b4350a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 465,
        imageWidth: 5000,
        id: 3478924,
        user_id: 2364555,
        views: 230472,
        comments: 63,
        pageURL:
          "https://pixabay.com/photos/water-lily-red-pond-flower-bloom-3478924/",
        imageHeight: 3335,
        webformatURL:
          "https://pixabay.com/get/55e4d24b4350a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "water lily, red, pond",
        downloads: 203240,
        user: "pixel2013",
        favorites: 456,
        imageSize: 2960440,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/06/16/15/36/water-lily-3478924_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e4dc464d50ae14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 464,
        imageWidth: 6000,
        id: 3495722,
        user_id: 1834854,
        views: 271031,
        comments: 128,
        pageURL:
          "https://pixabay.com/photos/lily-red-blossom-bloom-daylily-3495722/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e4dc464d50ae14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "lily, red, blossom",
        downloads: 223974,
        user: "ulleo",
        favorites: 404,
        imageSize: 4728425,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/05/16/18-48-21-135_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/06/24/23/21/lily-3495722_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e4d5444851a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 356,
        imageWidth: 4620,
        id: 3407234,
        user_id: 17511,
        views: 106860,
        comments: 25,
        pageURL:
          "https://pixabay.com/photos/rose-red-drops-rain-macro-nature-3407234/",
        imageHeight: 2599,
        webformatURL:
          "https://pixabay.com/get/55e4d5444851a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "rose, red, drops",
        downloads: 63659,
        user: "melkhagelslag",
        favorites: 423,
        imageSize: 1412970,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/03/05/17-08-40-993_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/05/16/22/27/rose-3407234_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e7d4474252ab14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 400,
        webformatWidth: 640,
        likes: 646,
        imageWidth: 1920,
        id: 1714807,
        user_id: 272447,
        views: 197589,
        comments: 84,
        pageURL:
          "https://pixabay.com/photos/heart-shape-tree-red-outdoors-1714807/",
        imageHeight: 1200,
        webformatURL:
          "https://pixabay.com/get/57e7d4474252ab14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 93,
        tags: "heart-shape, tree, red",
        downloads: 76653,
        user: "skeeze",
        favorites: 616,
        imageSize: 1061199,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/02/10/03-58-30-79_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/10/04/16/33/heart-shape-1714807_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/51e6d646424fad0bffd8992cc42c32791237dcf85254764e732673d0964a_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 320,
        imageWidth: 5315,
        id: 76358,
        user_id: 19282,
        views: 79106,
        comments: 38,
        pageURL:
          "https://pixabay.com/photos/meadow-poppy-poppies-bloom-red-76358/",
        imageHeight: 3543,
        webformatURL:
          "https://pixabay.com/get/51e6d646424fad0bffd8992cc42c32791237dcf85254764e732673d0964a_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "meadow, poppy, poppies",
        downloads: 25145,
        user: "Fotomanie",
        favorites: 332,
        imageSize: 2511002,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2013/01/27/12-04-08-887_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/01/27/18/41/meadow-76358_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/50e6d0414d4fad0bffd8992cc42c32791237dcf85254764e732673d0964a_1280.jpg",
        webformatHeight: 640,
        webformatWidth: 640,
        likes: 527,
        imageWidth: 3660,
        id: 66527,
        user_id: 13838,
        views: 125652,
        comments: 69,
        pageURL: "https://pixabay.com/photos/roses-flowers-red-plant-66527/",
        imageHeight: 3660,
        webformatURL:
          "https://pixabay.com/get/50e6d0414d4fad0bffd8992cc42c32791237dcf85254764e732673d0964a_640.jpg",
        type: "photo",
        previewHeight: 150,
        tags: "roses, flowers, red",
        downloads: 49148,
        user: "LoboStudioHamburg",
        favorites: 445,
        imageSize: 5935387,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2012/11/18/16-48-54-297_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2012/11/19/02/10/roses-66527_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e8d5414e50a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 425,
        webformatWidth: 640,
        likes: 482,
        imageWidth: 6016,
        id: 3802424,
        user_id: 1130890,
        views: 223862,
        comments: 124,
        pageURL:
          "https://pixabay.com/photos/rose-blossom-bloom-plant-flower-3802424/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e8d5414e50a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "rose, blossom, bloom",
        downloads: 166525,
        user: "Peggychoucair",
        favorites: 375,
        imageSize: 4020477,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2018/12/28/22-17-08-435_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/11/08/12/02/rose-3802424_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/5ee2d4444a57b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_1280.jpg",
        webformatHeight: 423,
        webformatWidth: 640,
        likes: 466,
        imageWidth: 4928,
        id: 821705,
        user_id: 509903,
        views: 203934,
        comments: 40,
        pageURL:
          "https://pixabay.com/photos/roses-red-roses-bouquet-of-roses-821705/",
        imageHeight: 3264,
        webformatURL:
          "https://pixabay.com/get/5ee2d4444a57b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "roses, red roses, bouquet of roses",
        downloads: 44703,
        user: "congerdesign",
        favorites: 423,
        imageSize: 3087555,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/04/26/13-54-08-507_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/06/25/19/08/roses-821705_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e4d4444951a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 480,
        webformatWidth: 640,
        likes: 521,
        imageWidth: 3826,
        id: 2417334,
        user_id: 165106,
        views: 240569,
        comments: 73,
        pageURL:
          "https://pixabay.com/photos/rose-blossom-bloom-flower-nature-2417334/",
        imageHeight: 2874,
        webformatURL:
          "https://pixabay.com/get/54e4d4444951a814f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 112,
        tags: "rose, blossom, bloom",
        downloads: 80614,
        user: "suju",
        favorites: 548,
        imageSize: 1692505,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/09/21/15-48-10-210_250x250.jpeg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e3d0464e55af14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 425,
        webformatWidth: 640,
        likes: 499,
        imageWidth: 4288,
        id: 1355473,
        user_id: 2312503,
        views: 92245,
        comments: 57,
        pageURL:
          "https://pixabay.com/photos/bride-marry-wedding-red-hair-1355473/",
        imageHeight: 2848,
        webformatURL:
          "https://pixabay.com/get/57e3d0464e55af14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "bride, marry, wedding",
        downloads: 39435,
        user: "melancholiaphotography",
        favorites: 501,
        imageSize: 2782579,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/04/14/23-29-05-812_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/04/26/22/31/bride-1355473_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/52e6d64a4856ad14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 95,
        imageWidth: 6124,
        id: 4639241,
        user_id: 14172449,
        views: 35367,
        comments: 27,
        pageURL:
          "https://pixabay.com/photos/macro-flower-rose-throat-nice-4639241/",
        imageHeight: 4082,
        webformatURL:
          "https://pixabay.com/get/52e6d64a4856ad14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "macro, flower, rose",
        downloads: 23344,
        user: "vuxoan",
        favorites: 84,
        imageSize: 3411645,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/11/20/15-30-47-710_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2019/11/20/06/15/macro-4639241_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d3424e5aaa14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 243,
        imageWidth: 5056,
        id: 3061486,
        user_id: 2218222,
        views: 93293,
        comments: 10,
        pageURL:
          "https://pixabay.com/photos/roses-romantic-valentine-in-love-3061486/",
        imageHeight: 3366,
        webformatURL:
          "https://pixabay.com/get/55e0d3424e5aaa14f6da8c7dda79347a1038d9ed514c704c72287ddd9f49c45f_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "roses, romantic, valentine",
        downloads: 38557,
        user: "Nietjuh",
        favorites: 285,
        imageSize: 2805183,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/04/09/22-42-24-323_250x250.jpeg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/01/04/19/43/roses-3061486_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/5ee4d4454d54b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 226,
        imageWidth: 5184,
        id: 841676,
        user_id: 905824,
        views: 37956,
        comments: 24,
        pageURL:
          "https://pixabay.com/photos/protea-bloom-flower-color-red-841676/",
        imageHeight: 3456,
        webformatURL:
          "https://pixabay.com/get/5ee4d4454d54b108f5d08460962b337b1238d6e74e50744e722972dc934cc2_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "protea, bloom, flower",
        downloads: 20178,
        user: "corgaasbeek",
        favorites: 266,
        imageSize: 6865411,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/09/11/09-48-46-940_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/07/12/09/44/gerbera-daisy-841676_150.jpg"
      }
    ],
    total: 16529
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
              resizeMode="cover"
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
    backgroundColor: "lightgray"
  }
});

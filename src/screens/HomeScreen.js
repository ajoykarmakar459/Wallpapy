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
// import RNFetchBlob from "react-native-fetch-blob";

const DATA = [
  {
    totalHits: 500,
    hits: [
      {
        largeImageURL:
          "https://pixabay.com/get/57e7d342485bae14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 1270,
        imageWidth: 2201,
        id: 1761292,
        user_id: 12019,
        views: 376009,
        comments: 105,
        pageURL:
          "https://pixabay.com/photos/scotland-landscape-mountains-hills-1761292/",
        imageHeight: 1240,
        webformatURL:
          "https://pixabay.com/get/57e7d342485bae14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "scotland, landscape, mountains",
        downloads: 187340,
        user: "12019",
        favorites: 1203,
        imageSize: 1143790,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e0d1464357a814f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 425,
        webformatWidth: 640,
        likes: 1095,
        imageWidth: 4256,
        id: 1045954,
        user_id: 1651179,
        views: 261897,
        comments: 144,
        pageURL:
          "https://pixabay.com/photos/bird-wings-fluttering-nature-1045954/",
        imageHeight: 2832,
        webformatURL:
          "https://pixabay.com/get/57e0d1464357a814f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "bird, wings, fluttering",
        downloads: 107093,
        user: "homecare119",
        favorites: 1053,
        imageSize: 2352295,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e3d7464a5aac14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 292,
        webformatWidth: 640,
        likes: 1299,
        imageWidth: 7070,
        id: 3325080,
        user_id: 5357143,
        views: 575990,
        comments: 222,
        pageURL:
          "https://pixabay.com/photos/sunset-dawn-nature-mountains-3325080/",
        imageHeight: 3235,
        webformatURL:
          "https://pixabay.com/get/55e3d7464a5aac14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 68,
        tags: "sunset, dawn, nature",
        downloads: 455963,
        user: "kareni",
        favorites: 1082,
        imageSize: 4567944,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/05/13/17-56-05-987_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e2d5464c51ad14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1303,
        imageWidth: 5184,
        id: 1205631,
        user_id: 1785462,
        views: 392975,
        comments: 158,
        pageURL:
          "https://pixabay.com/photos/lotus-natural-water-meditation-zen-1205631/",
        imageHeight: 3456,
        webformatURL:
          "https://pixabay.com/get/57e2d5464c51ad14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "lotus, natural, water",
        downloads: 176806,
        user: "Devanath",
        favorites: 1221,
        imageSize: 4776299,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/09/02/10-09-22-263_250x250.png",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e6dc4b4a55af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 352,
        webformatWidth: 640,
        likes: 1398,
        imageWidth: 4000,
        id: 3698073,
        user_id: 1962238,
        views: 519102,
        comments: 224,
        pageURL:
          "https://pixabay.com/photos/drop-splash-drip-water-liquid-wet-3698073/",
        imageHeight: 2200,
        webformatURL:
          "https://pixabay.com/get/55e6dc4b4a55af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 82,
        tags: "drop, splash, drip",
        downloads: 369575,
        user: "qimono",
        favorites: 932,
        imageSize: 3513975,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/03/14/20-43-09-565_250x250.png",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e6d6464b5ab108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_1280.jpg",
        webformatHeight: 413,
        webformatWidth: 640,
        likes: 1411,
        imageWidth: 1920,
        id: 163518,
        user_id: 1107275,
        views: 388758,
        comments: 163,
        pageURL:
          "https://pixabay.com/photos/railroad-tracks-tracks-railway-163518/",
        imageHeight: 1241,
        webformatURL:
          "https://pixabay.com/get/57e6d6464b5ab108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_640.jpg",
        type: "photo",
        previewHeight: 96,
        tags: "railroad tracks, tracks, railway",
        downloads: 182629,
        user: "Larisa-K",
        favorites: 1310,
        imageSize: 638366,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/06/13/06-38-56-116_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-tracks-163518_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e9dc404c56a914f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 368,
        webformatWidth: 640,
        likes: 1113,
        imageWidth: 2200,
        id: 1993645,
        user_id: 12019,
        views: 334299,
        comments: 91,
        pageURL:
          "https://pixabay.com/photos/panorama-bled-island-slovenia-1993645/",
        imageHeight: 1268,
        webformatURL:
          "https://pixabay.com/get/57e9dc404c56a914f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 86,
        tags: "panorama, bled, island",
        downloads: 205024,
        user: "12019",
        favorites: 1241,
        imageSize: 323699,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/01/19/23/46/panorama-1993645_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e2dd474f53ae14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 400,
        webformatWidth: 640,
        likes: 1105,
        imageWidth: 3840,
        id: 1284512,
        user_id: 2286921,
        views: 330211,
        comments: 77,
        pageURL:
          "https://pixabay.com/photos/fox-sleeping-resting-relaxing-red-1284512/",
        imageHeight: 2400,
        webformatURL:
          "https://pixabay.com/get/57e2dd474f53ae14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 93,
        tags: "fox, sleeping, resting",
        downloads: 216513,
        user: "Pexels",
        favorites: 1130,
        imageSize: 1811710,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d4434256a414f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 457,
        webformatWidth: 640,
        likes: 1271,
        imageWidth: 2051,
        id: 3010848,
        user_id: 443272,
        views: 604114,
        comments: 159,
        pageURL:
          "https://pixabay.com/photos/feather-ease-slightly-blue-airy-3010848/",
        imageHeight: 1465,
        webformatURL:
          "https://pixabay.com/get/55e0d4434256a414f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 107,
        tags: "feather, ease, slightly",
        downloads: 465127,
        user: "Sponchia",
        favorites: 1339,
        imageSize: 601648,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2017/10/12/20-30-21-88_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e6d7434e56ac14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1159,
        imageWidth: 3000,
        id: 1620440,
        user_id: 3108740,
        views: 317161,
        comments: 114,
        pageURL:
          "https://pixabay.com/photos/mill-black-forest-bach-water-1620440/",
        imageHeight: 2000,
        webformatURL:
          "https://pixabay.com/get/57e6d7434e56ac14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "mill, black forest, bach",
        downloads: 176038,
        user: "hschmider",
        favorites: 1108,
        imageSize: 2889274,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/08/18/19-31-01-69_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/08/25/19/10/mill-1620440_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e4d1434e57ac14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 1213,
        imageWidth: 5456,
        id: 3440450,
        user_id: 7645255,
        views: 573243,
        comments: 146,
        pageURL:
          "https://pixabay.com/photos/thunderstorm-ocean-twilight-clouds-3440450/",
        imageHeight: 3069,
        webformatURL:
          "https://pixabay.com/get/55e4d1434e57ac14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "thunderstorm, ocean, twilight",
        downloads: 496016,
        user: "jplenio",
        favorites: 1081,
        imageSize: 2696246,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/09/21/19-16-31-938_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/52e0d2414f50b108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1144,
        imageWidth: 5184,
        id: 407252,
        user_id: 364019,
        views: 394902,
        comments: 124,
        pageURL:
          "https://pixabay.com/photos/pier-wooden-lake-ocean-sea-quiet-407252/",
        imageHeight: 3456,
        webformatURL:
          "https://pixabay.com/get/52e0d2414f50b108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "pier, wooden, lake",
        downloads: 222341,
        user: "SplitShire",
        favorites: 1337,
        imageSize: 5014567,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2014/08/01/01-11-54-28_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e5d6474e5aa814f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 170,
        webformatWidth: 640,
        likes: 1118,
        imageWidth: 6750,
        id: 2534484,
        user_id: 2707530,
        views: 360967,
        comments: 186,
        pageURL:
          "https://pixabay.com/photos/schrecksee-bergsee-allg%C3%A4u-2534484/",
        imageHeight: 1800,
        webformatURL:
          "https://pixabay.com/get/54e5d6474e5aa814f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 40,
        tags: "schrecksee, bergsee, allgäu",
        downloads: 237957,
        user: "PIRO4D",
        favorites: 1024,
        imageSize: 4122284,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/08/12/15-51-03-907_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e3d3424856ab14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 480,
        webformatWidth: 640,
        likes: 1005,
        imageWidth: 2000,
        id: 2361247,
        user_id: 12019,
        views: 374193,
        comments: 63,
        pageURL:
          "https://pixabay.com/photos/sea-turtle-diving-animal-ocean-2361247/",
        imageHeight: 1500,
        webformatURL:
          "https://pixabay.com/get/54e3d3424856ab14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 112,
        tags: "sea, turtle, diving",
        downloads: 272944,
        user: "12019",
        favorites: 1180,
        imageSize: 1157423,
        previewWidth: 150,
        userImageURL: "",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e1dc444d57af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1088,
        imageWidth: 5760,
        id: 1197753,
        user_id: 2019050,
        views: 325692,
        comments: 108,
        pageURL:
          "https://pixabay.com/photos/aurora-polar-lights-northen-lights-1197753/",
        imageHeight: 3840,
        webformatURL:
          "https://pixabay.com/get/57e1dc444d57af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "aurora, polar lights, northen lights",
        downloads: 202384,
        user: "Noel_Bauza",
        favorites: 1187,
        imageSize: 7403692,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/02/07/19-28-24-618_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/53e7d44a4e52b108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_1280.jpg",
        webformatHeight: 283,
        webformatWidth: 640,
        likes: 1561,
        imageWidth: 3531,
        id: 571940,
        user_id: 512893,
        views: 680101,
        comments: 292,
        pageURL:
          "https://pixabay.com/photos/wild-flowers-flowers-plant-macro-571940/",
        imageHeight: 1562,
        webformatURL:
          "https://pixabay.com/get/53e7d44a4e52b108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_640.jpg",
        type: "photo",
        previewHeight: 66,
        tags: "wild flowers, flowers, plant",
        downloads: 218539,
        user: "DreamyArt",
        favorites: 1419,
        imageSize: 1000313,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/10/17/19-39-45-771_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2014/12/17/21/30/wild-flowers-571940_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/54e1dc4a4d50b108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_1280.jpg",
        webformatHeight: 410,
        webformatWidth: 640,
        likes: 1219,
        imageWidth: 1920,
        id: 219972,
        user_id: 1107275,
        views: 310150,
        comments: 142,
        pageURL:
          "https://pixabay.com/photos/autumn-landscape-nature-golden-219972/",
        imageHeight: 1232,
        webformatURL:
          "https://pixabay.com/get/54e1dc4a4d50b108f5d08460962b337b1238d6e74e50744e72287bd4934dc4_640.jpg",
        type: "photo",
        previewHeight: 96,
        tags: "autumn, landscape, nature",
        downloads: 121451,
        user: "Larisa-K",
        favorites: 1060,
        imageSize: 518928,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2015/06/13/06-38-56-116_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2013/11/28/10/03/autumn-219972_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e9d647425bab14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 433,
        webformatWidth: 640,
        likes: 1073,
        imageWidth: 4769,
        id: 1934897,
        user_id: 4127310,
        views: 347200,
        comments: 109,
        pageURL:
          "https://pixabay.com/photos/lone-tree-tree-oak-clouds-1934897/",
        imageHeight: 3231,
        webformatURL:
          "https://pixabay.com/get/57e9d647425bab14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 101,
        tags: "lone tree, tree, oak",
        downloads: 173011,
        user: "mbll",
        favorites: 947,
        imageSize: 4158886,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/12/31/16-40-55-926_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/57e7d1434355af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 360,
        webformatWidth: 640,
        likes: 950,
        imageWidth: 3568,
        id: 1740973,
        user_id: 1006510,
        views: 221288,
        comments: 76,
        pageURL:
          "https://pixabay.com/photos/canyon-mountains-deep-gorge-rocks-1740973/",
        imageHeight: 2007,
        webformatURL:
          "https://pixabay.com/get/57e7d1434355af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 84,
        tags: "canyon, mountains, deep",
        downloads: 134200,
        user: "Andy_Bay",
        favorites: 937,
        imageSize: 1644141,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2016/06/04/18-07-59-806_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_150.jpg"
      },
      {
        largeImageURL:
          "https://pixabay.com/get/55e0d7474d55af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_1280.jpg",
        webformatHeight: 426,
        webformatWidth: 640,
        likes: 1022,
        imageWidth: 6000,
        id: 3024773,
        user_id: 1032521,
        views: 573541,
        comments: 94,
        pageURL:
          "https://pixabay.com/photos/away-bridge-wood-nature-railing-3024773/",
        imageHeight: 4000,
        webformatURL:
          "https://pixabay.com/get/55e0d7474d55af14f6da8c7dda79347a1038d9ed514c704c72287cd49749c559_640.jpg",
        type: "photo",
        previewHeight: 99,
        tags: "away, bridge, wood",
        downloads: 435051,
        user: "Tama66",
        favorites: 970,
        imageSize: 7983114,
        previewWidth: 150,
        userImageURL:
          "https://cdn.pixabay.com/user/2019/12/21/18-41-09-325_250x250.jpg",
        previewURL:
          "https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773_150.jpg"
      }
    ],
    total: 301338
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
        <View style={styles.imgdetails}>
          <Text style={styles.imgdetailsTxt}>Views: {item.views}</Text>
          <Text style={styles.imgdetailsTxt}>Downloads: {item.downloads}</Text>
        </View>
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
                  this.download();
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

  download() {
    // RNFetchBlob.config({
    //   addAndroidDownloads: {
    //     useDownloadManager: true, // <-- this is the only thing required
    //     // Optional, override notification setting (default to true)
    //     notification: true,
    //     // Optional, but recommended since android DownloadManager will fail when
    //     // the url does not contains a file extension, by default the mime type will be text/plain
    //     mime: "text/plain",
    //     description: "File downloaded by download manager."
    //   }
    // })
    //   .fetch("GET", "http://example.com/file/somefile")
    //   .then(resp => {
    //     // the path of downloaded file
    //     resp.path();
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
  },
  imgdetails: {
    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 4
  },
  imgdetailsTxt: {
    color: "white",
    marginBottom: 4,
    fontSize: 13
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

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";

export class HomeScreen extends Component {
  state = {
    data: [
      {
        total: 22299,
        total_pages: 22299,
        results: [
          {
            id: "zGzXsJUBQfs",
            created_at: "2019-05-27T14:30:15-04:00",
            updated_at: "2019-11-28T00:02:35-05:00",
            promoted_at: null,
            width: 3000,
            height: 2000,
            color: "#180906",
            description: null,
            alt_description: "man on black cruiser motorcycle in highway",
            urls: {
              raw:
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
              full:
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9",
              regular:
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
              small:
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
              thumb:
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            },
            links: {
              self: "https://api.unsplash.com/photos/zGzXsJUBQfs",
              html: "https://unsplash.com/photos/zGzXsJUBQfs",
              download: "https://unsplash.com/photos/zGzXsJUBQfs/download",
              download_location:
                "https://api.unsplash.com/photos/zGzXsJUBQfs/download"
            },
            categories: [],
            likes: 450,
            liked_by_user: false,
            current_user_collections: [],
            user: {
              id: "XnhDFu3Jr-A",
              updated_at: "2019-12-01T13:47:12-05:00",
              username: "harleydavidson",
              name: "Harley-Davidson",
              first_name: "Harley-Davidson",
              last_name: "",
              twitter_username: "harleydavidson",
              portfolio_url: "https://www.harley-davidson.com/",
              bio: "All for Freedom, Freedom for All. ",
              location: "Milwaukee, WI",
              links: {
                self: "https://api.unsplash.com/users/harleydavidson",
                html: "https://unsplash.com/@harleydavidson",
                photos: "https://api.unsplash.com/users/harleydavidson/photos",
                likes: "https://api.unsplash.com/users/harleydavidson/likes",
                portfolio:
                  "https://api.unsplash.com/users/harleydavidson/portfolio",
                following:
                  "https://api.unsplash.com/users/harleydavidson/following",
                followers:
                  "https://api.unsplash.com/users/harleydavidson/followers"
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                medium:
                  "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                large:
                  "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
              },
              instagram_username: "harleydavidson",
              total_collections: 2,
              total_likes: 46,
              total_photos: 53,
              accepted_tos: true
            },
            sponsorship: {
              impression_urls: [
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=4948126&rnd=unsplash&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
              ],
              impressions_id: "4948126",
              tagline: "Explore the world of H-D",
              sponsor: {
                id: "XnhDFu3Jr-A",
                updated_at: "2019-12-01T13:47:12-05:00",
                username: "harleydavidson",
                name: "Harley-Davidson",
                first_name: "Harley-Davidson",
                last_name: "",
                twitter_username: "harleydavidson",
                portfolio_url: "https://www.harley-davidson.com/",
                bio: "All for Freedom, Freedom for All. ",
                location: "Milwaukee, WI",
                links: {
                  self: "https://api.unsplash.com/users/harleydavidson",
                  html: "https://unsplash.com/@harleydavidson",
                  photos:
                    "https://api.unsplash.com/users/harleydavidson/photos",
                  likes: "https://api.unsplash.com/users/harleydavidson/likes",
                  portfolio:
                    "https://api.unsplash.com/users/harleydavidson/portfolio",
                  following:
                    "https://api.unsplash.com/users/harleydavidson/following",
                  followers:
                    "https://api.unsplash.com/users/harleydavidson/followers"
                },
                profile_image: {
                  small:
                    "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                  medium:
                    "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                  large:
                    "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "harleydavidson",
                total_collections: 2,
                total_likes: 46,
                total_photos: 53,
                accepted_tos: true
              }
            },
            tags: [
              {
                type: "landing_page",
                title: "motorcycle",
                source: {
                  ancestry: {
                    type: { slug: "images", pretty_slug: "Images" },
                    category: { slug: "things", pretty_slug: "Things" },
                    subcategory: {
                      slug: "motorcycle",
                      pretty_slug: "Motorcycle"
                    }
                  },
                  title: "Motorcycle Images",
                  subtitle: "Download free motorcycle images",
                  description:
                    "Choose from a curated selection of motorcycle photos. Always free on Unsplash.",
                  meta_title:
                    "900+ Motorcycle Images: Download HD Pictures & Photos on Unsplash",
                  meta_description:
                    "Choose from hundreds of free motorcycle photos. Download HD motorcycle pictures for free on Unsplash.",
                  cover_photo: {
                    id: "eeTJKC_wz34",
                    created_at: "2019-05-27T14:23:58-04:00",
                    updated_at: "2019-11-14T00:06:34-05:00",
                    promoted_at: null,
                    width: 5250,
                    height: 3502,
                    color: "#D9E2EA",
                    description: null,
                    alt_description: "black and orange motorcycle",
                    urls: {
                      raw:
                        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1",
                      full:
                        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                      regular:
                        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                      small:
                        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                      thumb:
                        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                    },
                    links: {
                      self: "https://api.unsplash.com/photos/eeTJKC_wz34",
                      html: "https://unsplash.com/photos/eeTJKC_wz34",
                      download:
                        "https://unsplash.com/photos/eeTJKC_wz34/download",
                      download_location:
                        "https://api.unsplash.com/photos/eeTJKC_wz34/download"
                    },
                    categories: [],
                    likes: 376,
                    liked_by_user: false,
                    current_user_collections: [],
                    user: {
                      id: "XnhDFu3Jr-A",
                      updated_at: "2019-11-18T08:45:34-05:00",
                      username: "harleydavidson",
                      name: "Harley-Davidson",
                      first_name: "Harley-Davidson",
                      last_name: "",
                      twitter_username: "harleydavidson",
                      portfolio_url: "https://www.harley-davidson.com/",
                      bio: "All for Freedom, Freedom for All. ",
                      location: "Milwaukee, WI",
                      links: {
                        self: "https://api.unsplash.com/users/harleydavidson",
                        html: "https://unsplash.com/@harleydavidson",
                        photos:
                          "https://api.unsplash.com/users/harleydavidson/photos",
                        likes:
                          "https://api.unsplash.com/users/harleydavidson/likes",
                        portfolio:
                          "https://api.unsplash.com/users/harleydavidson/portfolio",
                        following:
                          "https://api.unsplash.com/users/harleydavidson/following",
                        followers:
                          "https://api.unsplash.com/users/harleydavidson/followers"
                      },
                      profile_image: {
                        small:
                          "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                        medium:
                          "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                        large:
                          "https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                      },
                      instagram_username: "harleydavidson",
                      total_collections: 2,
                      total_likes: 46,
                      total_photos: 53,
                      accepted_tos: true
                    }
                  }
                }
              },
              { type: "search", title: "transportation" },
              { type: "search", title: "vehicle" }
            ]
          }
        ]
      }
    ]
  };

  renderItem(item) {
    return (
      <TouchableOpacity
        style={{
          flex: 1 / 3, //here you can use flex:1 also
          aspectRatio: 1
        }}
      >
        <Image
          style={{ flex: 1 }}
          resizeMode="cover"
          source={{
            uri:
              "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          style={{ flex: 1 }}
          numColumns={3}
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

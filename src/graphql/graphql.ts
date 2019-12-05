const { ApolloServer, gql } = require("apollo-server-koa");
export default gql`
  scalar Date

  type Query {
    hello: String
    test: String
    streamer(id: Int!): Streamer
    streamers(limit: Int, skip: Int): [Streamer]
    game(id: Int!): Game
    games(limit: Int, skip: Int): [Game]
    clip(id: String!): Clip
    clips(streamer: Int, limit: Int, skip: Int): [Clip]
  }

  type Streamer {
    id: Int!
    login: String
    display_name: String
    type: String
    broadcaster_type: String
    description: String
    profile_image_url: String
    offline_image_url: String
    date: String
    check_date: String
  }

  type Clip {
    id: String
    broadcaster_id: Int
    streamer_data: Streamer
    game_id: Int
    game_data: Game
    title: String
    thumbnail_url: String
    video_id: Int
    creator_id: Int
    created_at: Date
    view_count: Int
    date: Date
    check_date: Date
    is_delete: Boolean
  }

  type Game {
    id: Int!
    name: String
    kor_name: String
    clip_count: Int
    date: Date
    check_date: Date
  }
`;

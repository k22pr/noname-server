var { graphql, buildSchema } = require("graphql");

type user = {
  no: Number;
  id: Number;
  login: String;
  display_name: String;
  type: String;
  broadcaster_type: String;
  description: String;
  profile_image_url: String;
  offline_image_url: String;
  date: String;
  check_date: String;
};
const userSchema = buildSchema(`
type user {
    no: Int,
    id: Int,
    login: String,
    display_name: String,
    type: String,
    broadcaster_type: String,
    description: String,
    profile_image_url: String,
    offline_image_url: String,
    date: String,
    check_date: String,
}
`);

type clip = {
  no: Number;
  id: String;
  broadcaster_id: Number;
  game_id: Number;
  video_id: Number;
  title: String;
  creator_id: String;
  created_at: String;
  view_count: Number;
  thumbnail_url: String;
  date: String;
  check_date: String;
  delete_flag: Number;
};
const clipSchema = buildSchema(`
type clip {
    no: Int,
    id: String,
    broadcaster_id: Int,
    game_id: Int,
    video_id: Int,
    title: String,
    creator_id: String,
    created_at: String,
    view_count: Int,
    thumbnail_url: String,
    date: String,
    check_date: String,
    delete_flag: Int,
}
`);

type clip_tmp = {
  no: Number;
  id: String;
  date: String;
  check_date: String;
};
const clipTmpSchema = buildSchema(`
type clip_tmp {
    no: Int,
    id: String,
    date: String,
    check_date: String,
}
`);

type game = {
  no: Number;
  id: Number;
  name: String;
  kor_name: String;
  clip_count: Number;
  date: String;
  check_date: String;
};
const gameSchema = buildSchema(`
type game {
    no: Int,
    id: Int,
    name: String,
    kor_name: String,
    clip_count: Int,
    date: String,
    check_date: String,
}
`);

export { user, clip, clip_tmp, game, userSchema, clipSchema, clipTmpSchema, gameSchema };

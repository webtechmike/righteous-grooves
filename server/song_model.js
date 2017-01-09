var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
    label_name: String,
    album_ep_single_title: String,
    album_artist: String,
    upc: String,
    amazon_only_digital_upc: String,
    catalog_number: String,
    disc_number: String,
    track_name: String,
    track_number: String,
    track_artist: String,
    track_length: String,
    isrc: String,
    controlled_comp: String,
    registered: String,
    registration_number: String,
    writers_credits_track_credits_publisher_names: String,
    writers_splits_publisher_ownership_percentage: String,
    exclusive: String,
    term: String,
    notes_track_info: String,
    publisher_contact: String,
    territorial_restrictions: String,
    other_restrictions: String,
    release_date: String,
    copyright_line: String,
    p_line: String,
    original_release_date: String,
    explicit_lyrics: String,
    genres: [],
    cleared_for_sale: String,
    album_only: String,
    liner_notes: String,
    lyrics: String,
    tempo: String,
    mood: [],
    style: [],
    themes: [],
    other: [],
    features: [],
    riyl: String,
    production_notes: String,
    song_url: String
});

module.exports = mongoose.model('Song', songSchema);
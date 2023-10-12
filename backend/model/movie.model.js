const mongoose=require("mongoose");

const movieSchema=mongoose.Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        year: {type: Number, required: true},
        genre: {type: [String], required: true},
        rating: {type: Number, required: true}
    },
    {
      versionKey:false
    }
) 

const movieModel=mongoose.model("movie",movieSchema);

module.exports={movieModel}
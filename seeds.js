var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "name",
        image: "image.jpeg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in imperdiet erat. Vestibulum commodo tempor ex iaculis ultricies. Pellentesque tortor ante, ornare sit amet nisl et, malesuada aliquam urna. Duis sed porttitor eros. Sed in enim hendrerit, tempus neque eget, sodales nisl. Suspendisse cursus mi at elit vestibulum vulputate. Integer ultrices mi massa, ac luctus libero gravida vitae. Maecenas id neque quam.",
    },
];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function (err) {
        if (err) console.log(err);
        console.log("Removed campgrounds!");

        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) console.log(err);
                else {
                    console.log("Added a campground");
                    //Create a comment
                    Comment.create(
                        {
                            text: "Random comment",
                            author: "Various",
                        },
                        function (err, comment) {
                            if (err) console.log(err);
                            else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comments");
                            }
                        }
                    );
                }
            });
        });
    });

    //Add a few campgrounds
}

module.exports = seedDB;

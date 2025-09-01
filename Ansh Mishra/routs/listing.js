const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const  Listing  = require("../models/listing.js");
const multer = require("multer");
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage });
const {isLoggedIn , isOwner ,validateListing} = require("../middleware.js")

const listingController = require("../controllers/listing.js");



//Index Route
router.get("/",wrapAsync(listingController.index));

//New Route
router.get(
    "/new",
    isLoggedIn ,
    listingController.new
    );

//Create Route
router.post(
    "/",
    isLoggedIn,
    validateListing,
    upload.single('listing[image]'),  // Multer middleware first
    wrapAsync (listingController.create)
);

// Show Route
router.get(
    "/:id",
    wrapAsync(listingController.show)
);

//Edit Route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.edit)
);

//Update Route
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
    upload.single ('listing[image]') ,
    wrapAsync(listingController.update)
);

//Delete Route
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    wrapAsync (listingController.delete)
);

module.exports = router;

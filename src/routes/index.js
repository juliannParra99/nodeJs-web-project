//this folder will contain all my routes for a better organization

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {title: 'Website with node.js'});
}); //res.render for work with the index.ejs

router.get("/about", (req, res) => {
  res.render("about", { title: 'About me'});
});

router.get("/contact", (req, res) => {
  res.render("contact", {title: 'Contact page'});
});

export default router;

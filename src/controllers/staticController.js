module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "Live Like A. King"});
  }
}

// middleware/auth.js

export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "You need to log in to view this page");
  res.redirect("/users/login");
};

export function ensureAdmin(req, res, next) {
  console.log("User in ensureAdmin:", req.user); // Debug user object
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  }
  req.flash("error_msg", "Access denied. Admins only.");
  res.redirect("/");
}

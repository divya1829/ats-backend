module.exports = (req, res, next) => {
  // Simulating authenticated user
  req.user = {
    id: 1,
    role: "recruiter"   // change to "candidate" to test RBAC
  };
  next();
};

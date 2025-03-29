class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.role = "customer";
    (this.profileImage =
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg?semt=ais_hybrid"),
      (this.isBanned = false);
  }
}

export default User;

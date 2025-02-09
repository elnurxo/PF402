export default class User{
    constructor(fullName, username, email, password){
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.balance = 0;
        this.role = "client";
        this.profileImg = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541';
        this.favorites = [];
        this.bookings = [];
        this.createdAt = new Date();
        this.bio = '';
    }
}
class Audience {
    constructor(name, email, phone) {
        this.id = Audience.count++;
        this.email = email;
        this.name = name;
        this.phone = phone;
    }
    getDetails() {
        console.log(`name:${this.name}`);
        console.log(`email:${this.email}`);
        console.log(`phone:${this.phone}`);
    }
}
Audience.count = 1;
class Movie {
    constructor(title, genre, ticketPrice, isShowing) {
        this.id = Movie.count++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = false;
    }
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
Movie.count = 1;
class ActionMovie extends Movie {
    getSpecialOffers() {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo() {
        return `Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
}
class ComedyMovie extends Movie {
    getSpecialOffers() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return `Phim hài nhẹ nhàng, vui nhộn`;
    }
    calculateTicketCost(quantity) {
        let root_price = this.ticketPrice * quantity;
        return quantity > 4 ? root_price * 0.9 : root_price;
    }
}
class AnimationMovie extends Movie {
    getSpecialOffers() {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return `Phim hoạt hình với hình ảnh sống động`;
    }
    calculateTicketCost(quantity) {
        let count = +prompt("nhap so luong tre em");
        if (quantity >= count) {
            return this.ticketPrice * (quantity - count);
        }
        else {
            return 0;
        }
    }
}
class TicketBooking {
    constructor(audience, movie, quantity, totalPrice) {
        this.bookingId = TicketBooking.count++;
        this.audience = audience;
        this.movie = movie;
        this.totalPrice = totalPrice;
    }
    getDetails() {
        return `thong tin dat ve : khan gia :${this.audience.name},phim:${this.movie.title} `;
    }
}
TicketBooking.count = 1;
class Cinema {
    constructor(movie, audiences, bookings) {
        this.movies = this.movies;
        this.audiences = audiences;
        this.bookings = bookings;
    }
    addMovie(movie) {
        this.movies.push(movie);
    }
    addAudience(name, email, phone) {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
        return newAudience;
    }
    bookTickets(audienceId, movieId, quantity) {
        let findAudienceId = this.audiences.find(item => item.id === audience.id);
        let findMovieId = this.movies.find(item => item.id === movie.id);
        return;
    }
}

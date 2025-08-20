
class Audience {
    static count = 1;
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(name: string, email: string, phone: string) {
        this.id = Audience.count++;
        this.email = email;
        this.name = name;
        this.phone = phone;
    }

    getDetails(): void {
        console.log(`name:${this.name}`);
        console.log(`email:${this.email}`);
        console.log(`phone:${this.phone}`);
    }

}

abstract class Movie {
    static count = 1;
    id: number;
    title: string;
    genre: string;
    ticketPrice: number;
    isShowing: boolean;

    constructor(title: string, genre: string, ticketPrice: number, isShowing: boolean) {
        this.id = Movie.count++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = false;
    }

    startShow(): void {
        this.isShowing = true;
    }
    stopShow(): void {
        this.isShowing = false;
    }
    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;

}

class ActionMovie extends Movie {
    getSpecialOffers(): string[] {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo(): string {
        return `Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }

}

class ComedyMovie extends Movie {
    getSpecialOffers(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo(): string {
        return `Phim hài nhẹ nhàng, vui nhộn`;
    }
    calculateTicketCost(quantity: number): number {
        let root_price = this.ticketPrice * quantity;
        return quantity > 4 ? root_price * 0.9 : root_price;
    }
}

class AnimationMovie extends Movie {
    getSpecialOffers(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo(): string {
        return `Phim hoạt hình với hình ảnh sống động`;
    }
    calculateTicketCost(quantity: number): number {
        let count = +prompt("nhap so luong tre em");
        if (quantity >= count) {
            return this.ticketPrice * (quantity - count);
        } else {
            return 0;
        }
    }
}


class TicketBooking {
    static count = 1;
    bookingId: number;
    audience: Audience;
    movie: Movie
    quantity: number;
    totalPrice: number;
    constructor(audience: Audience, movie: Movie, quantity: number, totalPrice: number) {
        this.bookingId = TicketBooking.count++;
        this.audience = audience;
        this.movie = movie;
        this.totalPrice = totalPrice;
    }

    getDetails(): string {
        return `thong tin dat ve : khan gia :${this.audience.name},phim:${this.movie.title} `;

    }

}

class Cinema {
    movies: Movie[];
    audiences: Audience[];
    bookings: TicketBooking[];

    constructor(movie: Movie[], audiences: Audience[], bookings: TicketBooking[]) {
        this.movies = this.movies;
        this.audiences = audiences;
        this.bookings = bookings;
    }
    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }
    addAudience(name: string, email: string, phone: string): Audience {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
        return newAudience;
    }
    bookTickets(audienceId: number, movieId: number, quantity: number): TicketBooking | null {
        let findAudienceId = this.audiences.find(item => item.id === audience.id);
        let findMovieId = this.movies.find(item => item.id === movie.id);

        return
    }


}





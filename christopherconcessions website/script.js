function loadContent(page) {
    let content = '';

    switch (page) {
        case 'home':
            content = `
                <section class="hero">
                    <img src="images/MCFair.jpg" alt="MC Fair Image" class="hero-image">
                    <h1>Welcome to Christopher Concessions LLC</h1>
                    <p>Your go-to food truck for gyros, shish kebabs, and more! Serving up delicious meals for corporate events, festivals, and private parties.</p>
                    <button class="cta-button" onclick="loadContent('events')">Book Us Now</button>
                </section>`;
            break;
        case 'menu':
            content = `
                <section class="menu-section">
                    <h2>Our Menu</h2>
                    <img src="images/MENU.jpg" alt="Christopher Concessions Menu" class="menu-image">
                </section>`;
            break;
        case 'about':
            content = `
                <section class="about">
                    <h2>About Us</h2>
                    <img src="images/familyphoto.jpg" alt="Family Photo" class="family-photo">
                     <p>Hello! We are Joe and Kacy Christopher, the proud owners of Christopher Concessions LLC. A couple of years ago, we decided to dive into the food truck business, and when the opportunity arose, we purchased the <strong>Olympic Kitchen</strong> food truck from its retiring owner. We knew we had something special on our hands, as the truck’s beloved Greek recipes had earned a loyal following in Southeast Michigan.</p>
    
                    <p>Today, we proudly continue the tradition of serving the original, authentic Greek dishes that people love, from savory gyros to mouthwatering shish kebabs. Our food truck has become a true family-run business, with everyone pitching in to help bring these delicious flavors to events and festivals all around the area.</p>
    
                    <p>We’re open to catering a wide variety of events, from corporate gatherings to private parties. If you’d like to book us for your next event, feel free to email us for more information!</p>

                </section>`;
            break;
        case 'events':
            content = `
                <section class="events">
                    <img src="images/line.jpg" alt="Event Line Image" class="events-image">
                    <h2>Events & Bookings</h2>
                    <p>To schedule us for your next event/party feel free to email us at</p>
                    <p>ChristopherConcessions@gmail.com</p>
                    <p>Contact us today to book our food truck and enjoy the best food on wheels!</p>
                </section>`;
            break;
        case 'contact':
            content = `
                <section class="contact">
                    <h2>Contact Us</h2>
                    <p>If you have any inquiries or would like to book us for an event, please contact us:</p>
                    <p>Email: christopherconcessions@gmail.com</p>
                    <p>or add us on Facebook: <a href="https://www.facebook.com/profile.php?id=61558949327761" target="_blank" style="color: #fdd835; text-decoration: underline;">Christopher Concessions</a></p>

                </section>`;
            break;
    }

    document.getElementById('main-content').innerHTML = content;
}

// Automatically load the home page when the website first loads
window.onload = function() {
    loadContent('home');
};

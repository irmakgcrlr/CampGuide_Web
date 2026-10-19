[![HTML5](https://img.shields.io/badge/HTML5-Standard-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Standard-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![XAMPP](https://img.shields.io/badge/XAMPP-Local_Server-FB7A24?style=flat-square&logo=xampp&logoColor=white)](https://www.apachefriends.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



# CampGuide_Web
MyCampGuide is a full-stack web application that allows users to discover camping spots in Olympos and make database-backed online reservations.  It also features embedded instructional videos and general guides covering essential camping tips and techniques.


<div align="center">


**The Easiest Way to Meet Nature**

Campgrounds, guide videos, and essential camping tips in one place.

</div>

---

## **Features**

- **Campgrounds:** Browse Olympos campgrounds with prices and descriptions
- **Reservations:** Book a stay online, saved directly to the database
- **Membership:** Sign up and log in, with passwords hashed using bcrypt
- **Guide Videos:** Tent setup, camping essentials, and safe fire-making
- **Camping Tips:** Insects, wildlife, packing list, fire safety, and emergencies
- **About Olympos:** History of the ancient city and the camping region

---

## **Built With**

- **Front End:** HTML, CSS, JavaScript
- **Back End:** Node.js, Express
- **Database:** MySQL, Sequelize

---

## **Project Structure**

```
campprojeweb/
├── index.html              # Home page
├── campgrounds.html        # Campgrounds and reservations
├── olympos.html            # About Olympos
├── videos.html             # Informative videos
├── articles.html           # Camping tips
├── login.html              # Login page
├── register.html           # Registration page
├── style.css               # Shared stylesheet
├── server.js               # Authentication server (port 3000)
├── reservationServer.js    # Reservation server (port 3001)
└── package.json
```

---

## **Getting Started**

```bash
git clone https://github.com/your-username/campprojeweb.git
cd campprojeweb
npm install
node server.js
node reservationServer.js
```

Make sure a local MySQL server (e.g. XAMPP) is running, then open **http://localhost:3000**.

---

## **Note**

This is an educational project intended for local use. Review security settings before deploying publicly.

---



**Irmak Göçerler**

const express = require('express');
const morgan = require('morgan'); 
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
// Cấp quyền truy cập cho thư mục public
app.use(express.static('public'));
// Cấu hình Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views'); // Chỉ định thư mục chứa giao diện
app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.render('home');
});
// Route xử lý cho trang About
app.get('/about', (req, res) => {
  res.render('about');
});
// Route xử lý cho trang Liên hệ
app.get('/contact', (req, res) => {
  res.render('contact');
});
// Route hiển thị trang Tìm kiếm
app.get('/search', (req, res) => {
  res.render('search');
});
app.get('/search', (req, res) => {
  // req.query chứa toàn bộ các parameters trên URL
  console.log("Từ khóa tìm kiếm:", req.query.q);
  res.render('search');
});
app.get('/blogs/create', (req, res) => {
  res.render('create');
});
// Middleware xử lý dữ liệu từ form HTML thông thường submit lên
app.use(express.urlencoded({
  extended: true
}));
// Middleware xử lý dữ liệu gửi lên dưới dạng JSON (dùng cho API, fetch, axios sau này)
app.use(express.json());
// Route này dùng app.post thay vì app.get
app.post('/blogs/create', (req, res) => {
  // Toàn bộ dữ liệu ẩn nằm trong đối tượng req.body
  console.log("Dữ liệu nhận được từ Form:", req.body);
  // Tạm thời trả về data dưới dạng JSON lên màn hình trình duyệt
  res.json(req.body);
});
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});

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

app.get('/gioi-thieu', (req, res) => {
    res.send(`
      <h1>Thông tin cá nhân</h1>
      <p><strong>Họ tên:</strong> Nguyễn Công Anh</p>
      <p><strong>Mã sinh viên:</strong> 2606042012</p>
      <p><strong>Lớp:</strong> Đại Học CNKT (Tiền thân là sư phạm Kĩ Thuật) </p>
      <h1>Thông tin cá nhân</h1>
      <p><strong>Họ tên:</strong> Nguyễn Đức Bình</p>
      <p><strong>Mã sinh viên:</strong> 2606042016</p>
      <p><strong>Lớp:</strong> Đại Học CNKT (Tiền thân là sư phạm Kĩ Thuật) </p>
    `);
  });
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
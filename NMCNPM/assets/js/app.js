
const api = 'https://mymusicpupu.000webhostapp.com/server2/login.php'
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Ngăn chặn gửi form theo cách thông thường

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Gửi yêu cầu POST đến server sử dụng Fetch API
  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    // Kiểm tra trạng thái phản hồi
    if (response.ok) {
      // Xử lý phản hồi thành công
      window.location.href = './' // Chuyển đổi phản hồi thành JSON
    } else {
      // Xử lý phản hồi thất bại
      throw new Error('Đăng nhập thất bại');
    }
  })

  .catch(error => {
    // Xử lý lỗi khi gửi yêu cầu hoặc phản hồi thất bại
    console.error('Lỗi:', error);
    // Hiển thị thông báo lỗi cho người dùng
  });
});
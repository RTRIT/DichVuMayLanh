// fetch function with post,delete method will be here


// phương thức post một dữ liệu lên server thông qua api
async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
      throw error;
    }
  }


  // phương thức post dùng để đăng nhập
  async function login(username, password) {
    const apiUrl = '/api/login'; // Đường dẫn API đăng nhập trên server backend
  
    const requestData = {
      username: username,
      password: password
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // chuyển đổi dữ liệu thành json
      body: JSON.stringify(requestData)
    };
  
    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
  
      // ok là một phương thức của đối tượng response
      if (response.ok) {
        // Xử lý kết quả đăng nhập thành công
        // Ví dụ: lưu trữ token xác thực, chuyển hướng người dùng
        console.log('Đăng nhập thành công:', data);
      } else {
        // Xử lý lỗi đăng nhập
        console.error('Đăng nhập thất bại:', data.error);
      }
    } catch (error) {
      // Xử lý lỗi khi gửi yêu cầu
      console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
    }
}
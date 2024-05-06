function getServices() {
  try {
    const api = 'https://mymusicpupu.000webhostapp.com/server2/getListDV.php';
    const xhr = new XMLHttpRequest();

    // Mở kết nối với phương thức GET và đường dẫn API
    xhr.open('GET', api);

    // Đăng ký hàm xử lý sự kiện khi trạng thái thay đổi
    xhr.onreadystatechange = function() {
      // Kiểm tra nếu yêu cầu đã hoàn thành và mã trạng thái là thành công
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Xử lý phản hồi từ server
        const services = JSON.parse(xhr.responseText);

        const serviceList = document.getElementById('service-list');
        services.forEach(service => {
          const serviceCard = document.createElement('div');
          serviceCard.classList.add('service-card');
          const serviceImage = document.createElement('img');
          serviceImage.src = service.Hinhanh;
          serviceImage.alt = service.TenDV;
          const serviceInfo = document.createElement('div');
          serviceInfo.innerHTML = `
            <h3>${service.TenDV}</h3>
            <p>Mã dịch vụ: ${service.MaDV}</p>
            <p>Giá: ${service.Gia}</p>
            <p>${service.Mota}</p>
          `;
          serviceCard.appendChild(serviceImage);
          serviceCard.appendChild(serviceInfo);
          serviceList.appendChild(serviceCard);
        });
      }
    };

    // Gửi yêu cầu GET
    xhr.send();
  } catch (error) {
    console.error('Error:', error);
  }
}

getServices();
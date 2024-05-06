// fetch function with get,put,patch method will be here
// should use async/await instead of promise to get data

// example below

async function getData() {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      // Xử lý dữ liệu
      console.log(data);
    } catch (error) {
      // Xử lý lỗi
      console.error('Lỗi:', error);
    }
  }



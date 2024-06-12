const cookieParser = require('cookie-parser');

async function showdv(token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function editdv(token, Tendv, Giadv, Mota, products) {
    try {
        const apiUrl = 'https://mymusicpupu.000webhostapp.com/server2/DichVu/editDV.php';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ Tendv, Giadv, Mota, products })
        });

        if (!response.ok) {
            throw new Error('Failed to edit data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message || 'Failed to edit data');
    }
}

module.exports = { showdv, editdv };

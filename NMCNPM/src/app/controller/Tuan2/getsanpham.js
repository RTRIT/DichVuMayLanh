const cookieParser = require('cookie-parser'); // Import the path module, 

async function showListSP(token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/getListSP.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function postaodichvu({ Tendv, Giadv, Mota, products }, token) {
    try {
        const apiUrl = 'https://mymusicpupu.000webhostapp.com/server2/DichVu/CreatDichVu.php';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ Tendv, Giadv, Mota, products })
        });

        const responseText = await response.text();
        console.log('Server response text:', responseText);

        if (!response.ok) {
            console.error('Server error:', response.status, responseText);
            throw new Error('Failed to create service: ' + responseText);
        }

        return JSON.parse(responseText);
    } catch (error) {
        console.error('Client error:', error.message);
        throw new Error(error.message || 'Failed to create service');
    }
}

module.exports = {showListSP, postaodichvu}
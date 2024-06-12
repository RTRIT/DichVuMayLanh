const cookieParser = require('cookie-parser');



/*
 *@CLIENT_RIGHT_ACTIONS____________________________________________________________________________
*/

/*
@GET_METHODS__________________________ 
*/

async function getInvoiceList(url, token) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        throw new Error("Error at 'getInvoiceList': " + error.message || 'Failed to fetch data');
    }
}


async function getInvoiceDetail(MaHD, token) {
    try {
        // xài chung
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/HoaDon/chiTietHD.php?MaHD=${MaHD}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.log('*********error at php api*********');
        throw new Error("Error at 'getInvoiceDetail': " + error.message || 'Failed to fetch data');
    }
}


/*
 *@EMPLOYEE_RIGHT_ACTIONS____________________________________________________________________________
*/

/*
@GET_METHODS__________________________ 
*/

// async function getInvoiceList_Em(Manv, token) {
//     try {
//         const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/HoaDon/showListHDbyManv.php?Manv=${Manv}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         return await response.json();
//     } catch (error) {
//         throw new Error(error.message || 'Failed to fetch data');
//     }
// }

// xem chi tiết hóa đơn, đã có ở trên quyền client

/*
 *@MANAGER_RIGHT_ACTIONS____________________________________________________________________________
*/

/*
@GET_METHODS__________________________ 
*/

// async function getInvoiceList_Ma(token) {
//     try {
//         const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/HoaDon/showListHD.php`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         console
//         return await response.json();
//     } catch (error) {
//         throw new Error(error.message || 'Failed to fetch data');
//     }
// }


// xem chi tiết hóa đơn, đã có ở trên quyền client



module.exports = { getInvoiceList,  getInvoiceDetail };
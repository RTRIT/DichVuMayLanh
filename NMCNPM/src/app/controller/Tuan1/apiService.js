
const cookieParser = require('cookie-parser');

async function getUserInfo(Makh, token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/KhanhHang/getInfoKH.php?Makh=${Makh}`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function updateUserInfo({ Makh, Tenkh, Sodienthoai, Diachi, Ngaysinh, CMND }, token) {
    try {
        const apiUrl = 'https://mymusicpupu.000webhostapp.com/server2/KhanhHang/editInfoKH.php';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ Makh, Tenkh, Sodienthoai, Diachi, Ngaysinh, CMND })
        });

        if (!response.ok) {
            throw new Error('Failed to update data');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Failed to update data');
    }
}

async function getListUser(token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/KhanhHang/listKhachHang.php`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function getNhanVienInfo(Manv, token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/NhanVien/getInfoNV.php?Manv=${Manv}`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function getListNhanVien(token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/NhanVien/listNhanVien.php`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function updateNhanVienInfo({ Manv, Hoten, Sodienthoai, DiaChi, Ngaysinh, Luong }, token) {
    try {
        const apiUrl = 'https://mymusicpupu.000webhostapp.com/server2/NhanVien/editInfoNv.php';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ Manv, Hoten, Sodienthoai, DiaChi, Ngaysinh, Luong })
        });

        if (!response.ok) {
            throw new Error('Failed to update data');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Failed to update data');
    }


}
async function getListBHByManv(Manv, token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuBaoHanh/showListBHbyManv.php?Manv=${Manv}`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function getChiTietBaoHanh(MaBH, token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuBaoHanh/chiTietPBH.php?MaBH=${MaBH}`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}

async function getListBHByQL(token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuBaoHanh/showListPBH.php`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }

}async function chiTietBaoHanhKH(Makh, token) {
    try {
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuBaoHanh/showBHbyMakh.php?Makh=${Makh}`, {
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
        throw new Error(error.message || 'Failed to fetch data');
    }
}



module.exports = { getUserInfo, updateUserInfo, getListUser, getNhanVienInfo, getListNhanVien, updateNhanVienInfo, getListBHByManv, getChiTietBaoHanh, getListBHByQL,chiTietBaoHanhKH };

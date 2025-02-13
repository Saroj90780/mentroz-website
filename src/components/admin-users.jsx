import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function AdminUsers() {
    const [Userdatas, setUserdatas] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let navigate = useNavigate();

    // Pagination model
    const paginationModel = { page: 0, pageSize: 5 };

    useEffect(() => {
        axios.get('http://127.0.0.1:4001')
            .then((response) => {
                setUserdatas(response.data); // Set the data you get from the API into the state
                console.log("data....", response.data); // Log the data to check the structure
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Define columns for DataGrid based on the API response fields
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'category', headerName: 'Category', width: 200 },
        { field: 'product', headerName: 'Product', width: 200 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'quantity', headerName: 'Quantity', width: 150 },
    ];

    // Map the API response to the rows format expected by DataGrid
    const rows = Userdatas.map((item, index) => ({
         id: index, // MUI DataGrid requires an "id" field to uniquely identify each row
        _id: item._id,
        category: item.category,
        product: item.product,
        price: item.price,
        quantity: item.quantity
    }));

    return (
        <>
            <div className="d-flex header-part justify-content-between">
                <div className="header-title">Dashboard</div>
                <div className="row col-6">
                    <div className="search-bar col-6">
                        <input placeholder="search name" className="admin-search-bar" />
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary" onClick={() => navigate('/adduser')}>Status <span className="bi bi-chevron-down"></span></button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-secondary" onClick={() => navigate('/adduser')}><span className="bi bi-plus"></span>Add</button>
                    </div>
                </div>
            </div>

            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows} // Data for the rows
                    columns={columns} // Columns to display in the table
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]} // Pagination options
                    checkboxSelection // Enables row checkbox selection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}

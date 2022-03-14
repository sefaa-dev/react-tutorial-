import { Button,Table } from 'antd';
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';

function ProducttList() {
  
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Kategori Id',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },
        {
            title:'Delete',
            dataIndex:'id',
            key:'id',
            render: (id) => <Button danger onClick={() => deleteProduct(id)}>Delete</Button>
        }
    ];

    const deleteProduct = (id) => {

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch("https://northwind.vercel.app/api/products/" + id, requestOptions)
        .then(res => res.json())
        .then((data) => {
            getProducts();
        })

    }

    const [productList, setProductList] = useState([]);

    useEffect(() => {

        getProducts();

    }, []);

    const getProducts = () => {
        fetch("https://northwind.vercel.app/api/products")
        .then(res => res.json())
        .then((data) => {
            setProductList(data);
        })
    }

    return (
        <>
            <h1>Count : {productList.length}</h1>
            <h1>{productList.filter(q=>q.categoryId === 4).length}</h1>
            <Table dataSource={productList} columns={columns}></Table>
        </>
  )
}

export default ProducttList
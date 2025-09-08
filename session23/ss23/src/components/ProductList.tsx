import type { Product } from "./types";
import { Table, Tag, Button, Pagination } from "antd";
import { useState, type SetStateAction } from "react";

interface ProductListProps {
    products: Product[];
    onToggleInStock: (id: number) => void;
    onDelete: (id: number) => void;
}

const PAGE_SIZES = [3, 5, 10, 20];

export default function ProductList({
    products,
    onToggleInStock,
    onDelete,
}: ProductListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const startIndex = (currentPage - 1) * pageSize;
    const currentData = products.slice(startIndex, startIndex + pageSize);

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            render: (text: string, record: Product) =>
                record.inStock ? (
                    <span>{text}</span>
                ) : (
                    <del style={{ color: "#888" }}>{text}</del>
                ),
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            render: (price: number) =>
                <span style={{ color: "#00a854", fontWeight: "bold" }}>
                    {price.toLocaleString("vi-VN")} đ
                </span>,
        },
        {
            title: "Trạng thái",
            dataIndex: "inStock",
            key: "inStock",
            render: (inStock: boolean) =>
                inStock ? (
                    <Tag color="green">Còn hàng</Tag>
                ) : (
                    <Tag color="red">Hết hàng</Tag>
                ),
        },
        {
            title: "Hành động",
            key: "actions",
            render: (_: any, record: Product) => (
                <>
                    <Button
                        type="link"
                        onClick={() => onToggleInStock(record.id)}
                        style={{ marginRight: 8 }}
                    >
                        Đánh dấu
                    </Button>
                    <Button danger type="link" onClick={() => onDelete(record.id)}>
                        Xóa
                    </Button>
                </>
            ),
        },
    ];

    const total = products.length;

    return (
        <div style={{ background: "#fff", borderRadius: 8, padding: 24 }}>
            <div style={{ marginBottom: 12, fontWeight: "bold", fontSize: 16 , alignItems: "center", display: "flex" ,flexDirection: "row",justifyContent: "center" }}>
                <span style={{ marginRight: 8 }}>📋</span> Danh sách sản phẩm
            </div>
            <Table
                columns={columns}
                dataSource={currentData}
                pagination={false}
                rowKey="id"
                bordered={false}
            />
            <div
               style={{display: "flex", flexDirection: "column", gap: 12,justifyContent: "flex-end", alignItems: "flex-end", marginTop: '16px'}}
            >
                    <div style={{opacity: 0.5,
                    }}>
                        Tổng: {total} sản phẩm
                    </div>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={total}
                        showSizeChanger
                        onChange={(page: SetStateAction<number>, size: SetStateAction<number>) => {
                            setCurrentPage(page);
                            if (size) setPageSize(size);
                        }}
                        pageSizeOptions={PAGE_SIZES.map(String)}
                        showTotal={() => ""}
                    />
            </div>
        </div>
    );
}

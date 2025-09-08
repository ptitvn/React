import { useState } from "react";
import { Button, Checkbox, Input, InputNumber } from "antd";

interface AddProductProps {
    onAdd: (name: string, price: number, inStock: boolean) => void;
}

export default function AddProduct({ onAdd }: AddProductProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number | null>(null);
    const [inStock, setInStock] = useState(true);

    const handleAdd = () => {
        if (!name || price === null || price < 0) return;
        onAdd(name, price, inStock);
        setName("");
        setPrice(null);
        setInStock(true);
    };

    return (
        <div style={{ display: "flex", flexDirection: 'column', gap: 8, alignItems: "center", marginBottom: 16, background: "#fff", borderRadius: 8, padding: 16 }}>
            <p style={{ fontWeight: "bold" }}>
                <span style={{ fontSize: 16, marginRight: 6 }}>➕</span> Thêm sản phẩm mới
            </p>
            <div style={{ display: "flex", gap: 8 ,alignItems: "center"}}>
                  <Input
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: 250 }}
            />
                <InputNumber
                    placeholder="Giá (đ)"
                    value={price === null ? undefined : price}
                    onChange={(value: any) => setPrice(value ?? null)}
                    min={0}
                    formatter={(value: { toString: () => string; }) =>
                        value
                            ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                            : ""
                    }
                    parser={(value: string) => (value ? value.replace(/\./g, "") : "")}
                />
                <Checkbox checked={inStock} onChange={(e) => setInStock(e.target.checked)}>
                    Còn hàng
                </Checkbox>
                <Button type="primary" onClick={handleAdd}>
                    Thêm
                </Button></div>
        </div>
    );
}

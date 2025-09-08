import Card from "antd/es/card";

export default function Header() {
  return (
    <Card
      style={{
        backgroundColor: "#2e89ff",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        borderRadius: 6,
        marginBottom: 16,
      }}
      bordered={false}
    >
      <h3 style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
           <span>📦</span>
        Quản lý Sản phẩm</h3>
    </Card>
  );
}

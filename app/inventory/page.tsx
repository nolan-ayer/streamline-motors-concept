import Layout from "@/components/layout/Layout";
import InventoryList from "@/components/ui/Inventory/InventoryList";

export default function Inventory() {
  return (
    <Layout showHeader={true}>
      <InventoryList />
    </Layout>
  );
}

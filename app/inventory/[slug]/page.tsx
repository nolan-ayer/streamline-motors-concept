import Layout from "@/components/layout/Layout";
import InventoryExpanded from "@/components/ui/Inventory/InventoryExpanded/InventoryExpanded";

export default function Listing() {
  return (
    <Layout showHeader={false}>
      <InventoryExpanded />
    </Layout>
  );
}

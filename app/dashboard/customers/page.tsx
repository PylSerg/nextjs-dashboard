import { Metadata } from "next";
import { customers } from "@/app/lib/placeholder-data";
import Table from "@/app/ui/customers/table";

export const metadata: Metadata = {
	title: "Customers",
};

export default function Page() {
	return <Table customers={customers} />;
}

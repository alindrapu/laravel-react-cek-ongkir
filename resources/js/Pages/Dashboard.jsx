import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PricingCard from "@/Components/PricingCard";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    function toTitleCase(str) {
        return str
            .toLowerCase()
            .split(" ")
            .map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard Cek Ongkir
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-4">
                        <PricingCard
                            title="Free"
                            features={[toTitleCase("cek ongkir lebih mudah")]}
                            buttonText="Daftar Gratis"
                            showPrice={false}
                        />
                        <PricingCard
                            title="Pro"
                            features={[toTitleCase("lacak lokasi paket")]}
                            buttonText="Mulai"
                            showPrice={false}
                        />
                        <PricingCard
                            title="Enterprise"
                            features={[
                                toTitleCase(
                                    "cek ongkir pengiriman internasional"
                                ),
                            ]}
                            buttonText="Hubungi Kami"
                            showPrice={false}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

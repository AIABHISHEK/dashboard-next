// import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default async function Page() {
    // A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests.In the case of data fetching, each request can only begin once the previous request has returned data.
    // here we are follwing waterfall

    // fetchRevenue(), this is the request that is slowing down the whole page.Instead of blocking your page, you can use Suspense to stream only this component and immediately show the rest of the page's UI.
    // You can wrap your dynamic components in Suspense.Then, pass it a fallback component to show while the dynamic component loads.

    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    // const {
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    //     numberOfInvoices,
    //     numberOfCustomers
    // } = await fetchCardData();
    // Parallel data fetching https://nextjs.org/learn/dashboard-app/fetching-data#parallel-data-fetching
    // const data = await Promise.all([
    //     fetchRevenue(),
    //     fetchLatestInvoices(),
    //     fetchCardData(),
    // ]);
    // console.log(data);
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card
                    title="Collected"
                    value={totalPaidInvoices}
                    type="collected" />
                <Card
                    title="Pending"
                    value={totalPendingInvoices}
                    type="pending" />
                <Card
                    title="Total Invoices"
                    value={numberOfInvoices}
                    type="invoices" />
                <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
                /> */}
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                {/* update the <RevenueChart> component to fetch its own data and remove the prop passed to it: */}
                {/* <RevenueChart revenue={revenue} /> */}
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices/>
                        </Suspense>
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            </div>
        </main>
    );
}
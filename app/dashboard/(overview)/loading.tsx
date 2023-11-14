// export default function Loading() {
//     return (
//         <div className="flex h-full w-full items-center justify-center">
//             <div
//                 className="inline-flex h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
//                 role="status"
//             />
//         </div>
//     )
// }

import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
    return <DashboardSkeleton />;
}
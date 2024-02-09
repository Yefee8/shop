export default function DashboardCard({children}: any){
    return(
        <div className="py-5 px-4 gap-2 flex justify-between items-center max-w-[337px] w-full bg-card rounded-[5px]">
            {children}
        </div>
    )
}
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Icon } from "@radix-ui/react-select";


interface AnalyticsCardProps {
    title: string;
    value: number;
    variant: "up" | "down";
    increaseValue: number;
}

export const AnalyticsCard = ({
    title,
    value,
    variant,
    increaseValue,
}: AnalyticsCardProps) => {
    const iconColor = variant === "up" ? "text-emerald-500" : "text-red-500";
    const increaseValueColor = variant === "up" ? "text-emerald-500" : "text-red-500";

    return (
        <Card className="shadow-none border-none w-full">
            <CardHeader>
                <div className="flex items-center gap-x-2.5">
                    <CardDescription className="flex items-center gap-x-2 font-medium overflow-hidden">
                        <span className="truncate text-base">{title}</span>
                    </CardDescription>
                    <div className="flex items-center gap-x-1">
                        <Icon className={cn(iconColor, "size-4")} />
                        <span className={cn(increaseValueColor, "truncate text-base font-medium")}>
                            {increaseValue}
                        </span>
                    </div>
                </div>
                <CardTitle className="3xl font-semibold">{value}</CardTitle>
            </CardHeader>
        </Card>
    )
}
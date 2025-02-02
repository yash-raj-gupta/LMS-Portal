import { AlertTriangle, CheckCircleIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bannerVariants =cva(
    "border text-center p-4 text-sm flex items-center w-full",
    {
        variants: {
            variant: {
                warning: "text-primary bg-yellow-200/80 border-yellow-30",
                success: "bg-emerald-700 border-emerald-800 text-secondary"
            }
        },
        defaultVariants: {
            variant: "warning"
        }
    }
)

interface bannerProps extends VariantProps<typeof bannerVariants>{
    label: string
}

const iconMap ={
    warning: AlertTriangle,
    success: CheckCircleIcon
} 
const banner = ({
    label,
    variant
}: bannerProps) => {
   
    const Icon = iconMap[variant || "warning"]


  return (
    <div className={cn(bannerVariants({variant}))}>
        <Icon className="w-4 h-4 mr-2"/>
      {label}
    </div>
  )
}

export default banner
